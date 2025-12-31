const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 뷰포트 크기 설정 (데스크톱)
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2 // 레티나 디스플레이 품질
  });

  console.log('Loading page...');
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle0',
    timeout: 60000
  });

  // 페이지가 완전히 로드될 때까지 대기
  await page.waitForTimeout(2000);

  console.log('Taking screenshot...');
  await page.screenshot({
    path: 'landing-page-full.png',
    fullPage: true
  });

  console.log('Screenshot saved as landing-page-full.png');

  await browser.close();
})();
