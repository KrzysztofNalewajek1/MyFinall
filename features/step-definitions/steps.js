const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://www.newegg.com/${page}`);
    
  });
  Given("Close the promobanner if it appears by refreshing page", async () => {
    await browser.refresh()
  });

// //Search bar
When ("I enter the word 'Windows' in the search bar", async () => {
    await $('button[class="ico ico-search"]').click();
 
    await $('.header2021-search-box [type=search]').setValue('Windows');
  
 });

When ("I click the search", async () => {
    await $('button[class="ico ico-search"]').click();
  });

Then("I Check that at least one item appears", async () => {
  const elem = $('.item-img>img');
await expect(elem).toBeDisplayed();
  
});

// //Internet shop logo button
When ("I open 'Today's Best Deals' tab", async () => {
  await $('#trendingBanner_720202').click()
});   

When ("I click on the Internet shop logo", async () => {
  await $('.header2021-logo-img>img').click()
}); 

Then("I expect that the main page opened", async () => {
    await expect(browser).toHaveUrl(`https://www.newegg.com/`)
});