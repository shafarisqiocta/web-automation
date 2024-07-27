const assert = require('assert')

//Menggunakan function
async function login(username,password){
    // buka browser dan url
    await browser.url('/')

    // input username (css locator)
    await $('#user-name').setValue(username)
    //input password (css locator)
    await $('#password').setValue(password)
    //klik button login
    await $('#login-button').click();
}

describe('Sauce Demo login test with function', () => {
    it('should login successfully with valid credential', async () => {
        //panggil fungsi login
        await login('standard_user','secret_sauce')
        //ke halaman homepage
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('should login failed with invalid password', async () => {
        //panggil fungsi login
        await login('standard_user','password')
        //assertion pesan error
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })
    it('should login failed with invalid username', async () => {
        //panggil fungsi login
        await login('standard_u_ser','secret_sauce')
        //assertion pesan error
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })
})