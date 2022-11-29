const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://www.newegg.com/${page}`);
   
  });
  Given("Close the promobanner if it appears by refreshing page", async (page) => {
    await browser.reloadSession()
  });

//Search bar
When ("I enter the word 'Windows' in the search bar", async () => {
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button').click();

    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex.is-active > form > div > div.header2021-search-box.auto-flex > input[type=search]').setValue('Windows');
   });

When ("I click the search", async () => {
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button').click();
  });

Then("I Check that at least one item appears", async () => {
    await $('#item_cell_32-350-881_1_0 > div > a > img').isDisplayed();
});

//Internet shop logo button
When ("I open 'Today's Best Deals' tab", async () => {
    await $('#trendingBanner_720202').click()
});   

When ("I click on the Internet shop logo", async () => {
    const logoImage = await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a')
    await logoImage.click()
}); 

Then("I expect that the main page opened", async () => {
    await expect(browser).toHaveUrl(`https://www.newegg.com/`)
});