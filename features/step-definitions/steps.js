const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://www.newegg.com/${page}`);
    //browser.reloadSession()
  
});


//const promobanner = $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > div > a > img');

//Given(/^I am on the (\w+) page$/, async (homepage) => {
  //  await browser.url(`https://www.newegg.com/${homepage}`);
//And 
    //await expect(await promobanner).waitForDisplayed()({ timeout: 10000 });
    //await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > button').click()
        //await promobanner.waitForDisplayed()({ timeout: 10000 })
//});

//Search bar
When ("I enter the word 'Windows' in the search bar", async () => {
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button').click();

    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex.is-active > form > div > div.header2021-search-box.auto-flex > input[type=search]').setValue('Windows');
   });

When ("I click the search", async () => {
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button').click();
  });

Then("I Check that at least one item appears", async () => {
    await expect($('#item_cell_32-350-881_1_0')).toBeExisting();
});

//Internet shop logo button
When ("I open 'Today's Best Deals' tab", async () => {
    const BestDeal = await $('#trendingBanner_720202')
    await BestDeal.click()
});   

When ("I click on the Internet shop logo", async () => {
    const logoImage = await $('/html/body/div[13]/header/div[1]/div[1]/div[1]/div[2]/a')
    await logoImage.click()
}); 

Then("I expect that the main page opened", async () => {
    await expect(browser).toHaveUrl(`https://www.newegg.com/`)
});