import puppeteer, { Browser } from 'puppeteer'

(async() => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://yep.com/');
    await page.waitForSelector('input[placeholder="Start searching"]')
    await page.type('input[placeholder="Start searching"]', 'Elon Musk')
    await page.keyboard.press('Enter')
    await page.waitForSelector('.css-5d9cfi-title')

    const result = await page.$$eval('.css-5d9cfi-title', el => el.map(res => res.textContent));

    console.log(result)

    await browser.close()
})()