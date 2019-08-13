describe('Test IMDB Website', function() {
  browser.ignoreSynchronization = true;
  var search_result = element.all(by.css('.findSection:nth-child(3) .result_text'));
  it('IMDB Should Open', function() {
    browser.get('https://www.imdb.com/');
    expect(browser.getTitle()).toEqual('Ratings and Reviews for New Movies and TV Shows - IMDb');
  });
  it('Titanic Search Result Should Display 2 Movies', function() {
    var search_box = element(by.id('navbar-query'));
    var search_button = element(by.id('navbar-submit-button'));
    search_box.sendKeys('Titanic');
    search_button.click();
    expect(search_result.count()).toBe(2);
  });
  it('Titanic 1997 Movie Details Should Be Displayed When Selected', function() {
    search_result.filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text === 'Titanic (1997)';
      });
    }).first().element(by.linkText('Titanic')).click();
  expect(browser.getTitle()).toEqual('Titanic (1997) - IMDb');
  });
  it('Rating The Movie Should Redirect User To Sigin-in Pages', function() {
    var rating_button = element(by.css('.star-rating-text'));
    rating_button.click();
    browser.actions().mouseMove($('.star-rating-star')).perform();
    element(by.css('a[title="Click to rate: 1"]')).click();
    expect(browser.getTitle()).toEqual('Sign in with IMDb - IMDb');
  });
});
