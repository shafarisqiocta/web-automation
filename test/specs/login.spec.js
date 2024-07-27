const assert = require('assert')

describe('Sauce Demo login test', () => {
    it('should login successfully with valid credential', async () => {
        // buka browser dan url
        await browser.url('/')

        // input username (css locator)
        await $('#user-name').setValue('standard_user')
        //input password (css locator)
        await $('#password').setValue('secret_sauce')
        //klik button login
        await $('#login-button').click();
        //ke halaman homepage
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('should login failed with invalid password', async () => {
        // buka browser dan url
        await browser.url('/')

        // input username (css locator)
        await $('#user-name').setValue('standard_user')
        //input password (css locator)
        await $('#password').setValue('password')
        //klik button login
        await $('#login-button').click();
        //assertion pesan error
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })
    it('should login failed with invalid username', async () => {
        // buka browser dan url
        await browser.url('/')

        // input username (css locator)
        await $('#user-name').setValue('standard_u_ser')
        //input password (css locator)
        await $('#password').setValue('secret_sauce')
        //klik button login
        await $('#login-button').click();
        //assertion pesan error
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })
})