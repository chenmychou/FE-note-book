const puppeteer = require('puppeteer');
(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = "https://www.qq.com/"
  await page.goto(url);
 try {
  await page.screenshot({path: 'baidu1.jpg'})
 } catch (error) {
     console.log(error)
 }

  await page.close()
  await browser.close()
})();