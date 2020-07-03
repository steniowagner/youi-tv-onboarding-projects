// pdp.page.js
// http://webdriver.io/guide/testrunner/pageobjects.html

import Page from './page';

// This class contains Page Object Locators and methods for the Screen.
// It inherits from Page.
class AppScreen extends Page {

  /**
  * define elements
  */
  
  // '$' is equivalent to 'browser.element'
  // http://webdriver.io/api/utility/$.html
  // http://webdriver.io/guide/usage/selectors.html
  // To search for name: $('name:mySelector') or $('~mySelector')
  // To search for class name: $('class name:mySelector')
  // To search for id: $('id:mySelector')

  get react_image_node()  { return $("~React:RCTImageView:3"); }

}

export default new AppScreen()
