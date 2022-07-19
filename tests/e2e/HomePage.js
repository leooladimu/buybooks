describe("Homepage End-to-end Test", function() {
    it("tests if homepage is loaded", function(browser) {
      browser
        .navigateTo("http://localhost:8080")
        .assert.visible("#app h1")
        .expect.elements("#app [data-book-id]")
        .count.toEqual(1);
    });
  
    it("tests if anonymous user cannot add book to a cart", function(browser) {
        browser.assert.not.elementPresent('[data-book-id] button');
    });
  
    after(browser => browser.end());
  });
  