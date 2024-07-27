const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')
const inventoryPage = require('../../pages/inventory.page')

describe('Sauce Demo login test with Page Object Model', () => {
    beforeEach(async () =>{
        //open browser
        Page.open('/')

    })

    it('should login successfully with valid credential', async () => {
        //panggil fungsi login
        await LoginPage.login('standard_user','secret_sauce');
        //ke halaman homepage
        await inventoryPage.assertInventoryUrl();
    })
    it('should login failed with invalid password', async () => {
        //panggil fungsi login
        await LoginPage.login('standard_user','password');
        //assertion pesan error
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
        
    })
    it('should login failed with invalid username', async () => {
        //panggil fungsi login
        await LoginPage.login('standard_u_ser','secret_sauce');
        //assertion pesan error
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })
})