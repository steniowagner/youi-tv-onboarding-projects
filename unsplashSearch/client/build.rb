#!/usr/bin/env ruby
# © You i Labs Inc. 2000-2020. All rights reserved.

require 'fileutils'
require 'optparse'
require 'ostruct'
require 'json'

def find_engine_dir_in_list(dirs)
    if dirs == nil || dirs.length == 0
        puts "ERROR: A non-empty list of directories must be passed to 'find_engine_dir_in_list'."
        abort
    end

    dirs.each { |d|
        config_filepath = File.absolute_path(File.join(d, "YouiEngineConfig.cmake"))
        if File.exist?(config_filepath)
            return d
        end

        # When in the engine repository, the YouiEngineConfig.cmake file doesn't exist at the root folder.
        # It's necessary to check for an alternative file.
        if File.exist?(File.absolute_path(File.join(d, "core", "CMakeLists.txt")))
            return d
        end
    }

    return nil
end

def sort_versions(vers)
    versions = []
    vers.each { |v|
        begin
            t = Gem::Version::new(v)
            versions.push(v)
        rescue
            # skip
        end
    }
    versions = versions.sort_by { |v| Gem::Version.new(v) }.reverse
end

def get_engine_dir(options)
    install_dir = File.join(ENV['HOME'], "youiengine")

    engine_dir = ""
    engine_dir = find_engine_dir_in_list([
        File.expand_path(__dir__),
        File.join(__dir__, ".."),
        File.join(__dir__, "..", ".."),
        File.join(__dir__, "..", "..", ".."),
        File.join(__dir__, "..", "..", "..", ".."),
        File.join(__dir__, "..", "..", "..", "..", "..")
    ])
    if engine_dir != nil
        puts "WARNING: Found in engine directory #{engine_dir}.\nWill use this SDK, but please do out of SDK build!"
        return File.absolute_path(engine_dir)
    end

    if options.engine_hint != nil
        engine_dir = find_engine_dir_in_list([File.join(install_dir, options.engine_hint), options.engine_hint])
        if engine_dir != nil
            puts "Found engine directory #{engine_dir}"
            return File.absolute_path(engine_dir)
        else
            puts "ERROR: Passed youi_version variable #{options.engine_hint}, but could not find valid You.i Engine install"
            puts "Ensure that you have that version installed in $HOME/youiengine/, or the provided path is correct."
            abort
        end
    end

    # For react projects, check for package.json one directory down to read engine version
    packageJson = File.expand_path(File.join(__dir__, "..", "package.json"))
    if File.exist?(File.absolute_path(packageJson))
        file = File.read(packageJson)
        pkgHash = JSON.parse(file)

        if pkgHash['dependencies'].key?('@youi/react-native-youi')
            depVersion = pkgHash['dependencies']['@youi/react-native-youi']

            engine_dir = find_engine_dir_in_list([File.join(install_dir, depVersion)])
            if engine_dir != nil
                puts "Found engine directory #{engine_dir} based on version from package.json"
                return File.absolute_path(engine_dir)
            else
                puts "ERROR: Parsed @youi/react-native-youi version #{depVersion}, but could not find valid You.i Engine install"
                puts "Ensure that you have that version installed in $HOME/youiengine/, or the provided path is correct. If you"
                puts "know what you are doing you can force a different engine version by passing the --youi_version argument."
                puts "\nInstall the required version with \n\tyoui-tv install #{depVersion}\n"
                abort
            end
        else
            puts "ERROR: Found package.json, but could not find @youi/react-native-youi dependency."
            puts "Ensure that you have upgraded your current application to the latest You.i Engine version. If you"
            puts "know what you are doing you can force a different engine version by passing the --youi_version argument."
            puts "\nInstall the latest version with \n\tyoui-tv install\n"
            abort
        end
    end

    versions = Dir.entries(install_dir)
    versions = sort_versions(versions).map! {|v| File.join(install_dir, v)}
    engine_dir = find_engine_dir_in_list(versions)

    unless engine_dir != nil
        puts "ERROR: Could not locate an installation of You.i Engine. Please install via youi-tv"
        puts "command line app, and try again, or pass the path to the installed SDK with the"
        puts "generate.rb option --youi_version=[arg]"
        abort
    end
    puts "Found engine directory #{engine_dir}"
    return File.absolute_path(engine_dir)
end

# executes the build script within the sdk
def executeBuild(youiEnginePath, args)
    buildScriptPath = File.join(youiEnginePath, "cloud", "client", "build.rb")

    if !File.exist?(buildScriptPath)
        buildScriptPath = File.join(youiEnginePath, "src", "cloud", "build.rb")
        if !File.exist?(buildScriptPath)
            puts "Unable to locate build.rb script in YouiEngine sdk #{buildScriptPath}"
        end
    end
    command = buildScriptPath << " " << args
    system(command)
end

youiEnginePath = ""

# Check for sdk path in options (-e) and store in config if supplied
options = OpenStruct.new
options.engine_hint = nil
begin
    options_parser = OptionParser.new do |opts|
        opts.on("-e", "--youi_version ENGINE_HINT", String,
            "Can be set to a path (/path/to/5.0.0) or semantic version (5.0.0), and this project will generate against that version") do |engine_hint|
            options.engine_hint = engine_hint
        end
        opts.on_tail("-h", "--help", "Show usage and options list") do
            #ignore this option here. It will be handled by real build.rb in SDK
        end
    end
    options_parser.parse(ARGV)
rescue OptionParser::InvalidOption
    #ignore other options that will be processed by cloud client build within sdk
end

youiEnginePath = get_engine_dir(options)
if youiEnginePath == "" || !File.exist?(youiEnginePath)
    puts "Path to YouiEngine not found - supply correct path with -e <YouiEnginePath> or --youi_version ENGINE_HINT"
    exit 1
end

args = ""
ARGV.each do | arg | args << " " << arg end
executeBuild(youiEnginePath, args)
