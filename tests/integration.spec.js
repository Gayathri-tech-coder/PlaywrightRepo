const {test,expect} = require('@playwright/test')
test.only('Test-1', async({page})=>{
    await page.goto('https://en.wikipedia.org/wiki/Main_Page')
    await expect(page).toHaveTitle('Wikipedia, the free encyclopedia')
    await page.waitForTimeout(3000)
})