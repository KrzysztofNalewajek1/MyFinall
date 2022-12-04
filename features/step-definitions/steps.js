const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://www.newegg.com/${page}`);
<<<<<<< HEAD
    
=======
   
>>>>>>> 3b7c13b632d7dd151cd2b48458fa6f7258eb7940
  });
  Given("Close the promobanner if it appears by refreshing page", async () => {
    await browser.refresh()
  });

<<<<<<< HEAD
// //Search bar
=======
//Search bar
>>>>>>> 3b7c13b632d7dd151cd2b48458fa6f7258eb7940
When ("I enter the word 'Windows' in the search bar", async () => {
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button').click();
 
    await $('.header2021-search-box [type=search]').setValue('Windows');
  
 });

When ("I click the search", async () => {
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button').click();
  });

Then("I Check that at least one item appears", async () => {
<<<<<<< HEAD
  await $('#item_cell_32-350-881_1_0 > div > a > img').isDisplayed();
  
=======
    await $('#item_cell_32-350-881_1_0 > div > a > img').isDisplayed();
>>>>>>> 3b7c13b632d7dd151cd2b48458fa6f7258eb7940
});

// //Internet shop logo button
When ("I open 'Today's Best Deals' tab", async () => {
<<<<<<< HEAD
  await $('#trendingBanner_720202').click()
});   

When ("I click on the Internet shop logo", async () => {
  await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a').click()
=======
    await $('#trendingBanner_720202').click()
});   

When ("I click on the Internet shop logo", async () => {
    const logoImage = await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a')
    await logoImage.click()
>>>>>>> 3b7c13b632d7dd151cd2b48458fa6f7258eb7940
}); 

Then("I expect that the main page opened", async () => {
    await expect(browser).toHaveUrl(`https://www.newegg.com/`)
});