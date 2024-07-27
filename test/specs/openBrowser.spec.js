const assert = require('assert')

describe('Open Sauce Demo', () => {
    it('should open browser and redirect to saucedemo.com', async () => {
        // buka browser dan url
        await browser.url('/')

        //melakukan assert pada url
        const currentURL = await browser.getUrl();
        const expectedURL = 'https://www.saucedemo.com/';

        await assert.strictEqual(currentURL,expectedURL, `URL tidak sesuai. Actual : ${currentURL}, Expected: ${expectedURL}`);


    })
})