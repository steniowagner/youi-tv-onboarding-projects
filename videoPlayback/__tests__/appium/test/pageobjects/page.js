// http://webdriver.io/guide/testrunner/pageobjects.html

export default class Page {

  // Save a screenshot to jestHelpers directory.
  saveScreenshot(dir, filename) {
    let fs = require('fs');
    // Create directory if it doesn't exist.
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {recursive: true});
    }
    browser.saveScreenshot(dir + filename);
  }
  
  yi_click(element) {
    browser.waitUntil(function () {
      return element.getAttribute('ishittable') === true
    }, 5000, 'expected element to be hittable after 5s');
    element.click();
  }

}
