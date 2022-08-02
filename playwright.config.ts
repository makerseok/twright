import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
   
    {
      "Blackberry PlayBook": {
        "userAgent": "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/16.0 Safari/536.2+",
        "viewport": {
          "width": 600,
          "height": 1024
        },
        "deviceScaleFactor": 1,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Blackberry PlayBook landscape": {
        "userAgent": "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/16.0 Safari/536.2+",
        "viewport": {
          "width": 1024,
          "height": 600
        },
        "deviceScaleFactor": 1,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "BlackBerry Z30": {
        "userAgent": "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/16.0 Mobile Safari/537.10+",
        "viewport": {
          "width": 360,
          "height": 640
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "BlackBerry Z30 landscape": {
        "userAgent": "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/16.0 Mobile Safari/537.10+",
        "viewport": {
          "width": 640,
          "height": 360
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Galaxy Note 3": {
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/16.0 Mobile Safari/534.30",
        "viewport": {
          "width": 360,
          "height": 640
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Galaxy Note 3 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/16.0 Mobile Safari/534.30",
        "viewport": {
          "width": 640,
          "height": 360
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Galaxy Note II": {
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/16.0 Mobile Safari/534.30",
        "viewport": {
          "width": 360,
          "height": 640
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Galaxy Note II landscape": {
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/16.0 Mobile Safari/534.30",
        "viewport": {
          "width": 640,
          "height": 360
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Galaxy S III": {
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/16.0 Mobile Safari/534.30",
        "viewport": {
          "width": 360,
          "height": 640
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Galaxy S III landscape": {
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/16.0 Mobile Safari/534.30",
        "viewport": {
          "width": 640,
          "height": 360
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Galaxy S5": {
        "userAgent": "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 360,
          "height": 640
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Galaxy S5 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 640,
          "height": 360
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Galaxy S8": {
        "userAgent": "Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 360,
          "height": 740
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Galaxy S8 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 740,
          "height": 360
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Galaxy S9+": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 320,
          "height": 658
        },
        "deviceScaleFactor": 4.5,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Galaxy S9+ landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 658,
          "height": 320
        },
        "deviceScaleFactor": 4.5,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Galaxy Tab S4": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Safari/537.36",
        "viewport": {
          "width": 712,
          "height": 1138
        },
        "deviceScaleFactor": 2.25,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Galaxy Tab S4 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Safari/537.36",
        "viewport": {
          "width": 1138,
          "height": 712
        },
        "deviceScaleFactor": 2.25,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "iPad (gen 6)": {
        "userAgent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "viewport": {
          "width": 768,
          "height": 1024
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPad (gen 6) landscape": {
        "userAgent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "viewport": {
          "width": 1024,
          "height": 768
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPad (gen 7)": {
        "userAgent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "viewport": {
          "width": 810,
          "height": 1080
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPad (gen 7) landscape": {
        "userAgent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "viewport": {
          "width": 1080,
          "height": 810
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPad Mini": {
        "userAgent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "viewport": {
          "width": 768,
          "height": 1024
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPad Mini landscape": {
        "userAgent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "viewport": {
          "width": 1024,
          "height": 768
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPad Pro 11": {
        "userAgent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "viewport": {
          "width": 834,
          "height": 1194
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPad Pro 11 landscape": {
        "userAgent": "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "viewport": {
          "width": 1194,
          "height": 834
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 6": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 375,
          "height": 667
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 6 landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 667,
          "height": 375
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 6 Plus": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 414,
          "height": 736
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 6 Plus landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 736,
          "height": 414
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 7": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 375,
          "height": 667
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 7 landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 667,
          "height": 375
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 7 Plus": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 414,
          "height": 736
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 7 Plus landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 736,
          "height": 414
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 8": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 375,
          "height": 667
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 8 landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 667,
          "height": 375
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 8 Plus": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 414,
          "height": 736
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 8 Plus landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 736,
          "height": 414
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone SE": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/16.0 Mobile/14E304 Safari/602.1",
        "viewport": {
          "width": 320,
          "height": 568
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone SE landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/16.0 Mobile/14E304 Safari/602.1",
        "viewport": {
          "width": 568,
          "height": 320
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone X": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 375,
          "height": 812
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone X landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Mobile/15A372 Safari/604.1",
        "viewport": {
          "width": 812,
          "height": 375
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone XR": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "viewport": {
          "width": 414,
          "height": 896
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone XR landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "viewport": {
          "width": 896,
          "height": 414
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 11": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 414,
          "height": 896
        },
        "viewport": {
          "width": 414,
          "height": 715
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 11 landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 414,
          "height": 896
        },
        "viewport": {
          "width": 800,
          "height": 364
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 11 Pro": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 375,
          "height": 812
        },
        "viewport": {
          "width": 375,
          "height": 635
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 11 Pro landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 375,
          "height": 812
        },
        "viewport": {
          "width": 724,
          "height": 325
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 11 Pro Max": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 414,
          "height": 896
        },
        "viewport": {
          "width": 414,
          "height": 715
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 11 Pro Max landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 414,
          "height": 896
        },
        "viewport": {
          "width": 808,
          "height": 364
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 12": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 390,
          "height": 844
        },
        "viewport": {
          "width": 390,
          "height": 664
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 12 landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 390,
          "height": 844
        },
        "viewport": {
          "width": 750,
          "height": 340
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 12 Pro": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 390,
          "height": 844
        },
        "viewport": {
          "width": 390,
          "height": 664
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 12 Pro landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 390,
          "height": 844
        },
        "viewport": {
          "width": 750,
          "height": 340
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 12 Pro Max": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 428,
          "height": 926
        },
        "viewport": {
          "width": 428,
          "height": 746
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 12 Pro Max landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 428,
          "height": 926
        },
        "viewport": {
          "width": 832,
          "height": 378
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 12 Mini": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 375,
          "height": 812
        },
        "viewport": {
          "width": 375,
          "height": 629
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 12 Mini landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 375,
          "height": 812
        },
        "viewport": {
          "width": 712,
          "height": 325
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 13": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 390,
          "height": 844
        },
        "viewport": {
          "width": 390,
          "height": 664
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 13 landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 390,
          "height": 844
        },
        "viewport": {
          "width": 750,
          "height": 342
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 13 Pro": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 390,
          "height": 844
        },
        "viewport": {
          "width": 390,
          "height": 664
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 13 Pro landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 390,
          "height": 844
        },
        "viewport": {
          "width": 750,
          "height": 342
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 13 Pro Max": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 428,
          "height": 926
        },
        "viewport": {
          "width": 428,
          "height": 746
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 13 Pro Max landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 428,
          "height": 926
        },
        "viewport": {
          "width": 832,
          "height": 380
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 13 Mini": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 375,
          "height": 812
        },
        "viewport": {
          "width": 375,
          "height": 629
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "iPhone 13 Mini landscape": {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "screen": {
          "width": 375,
          "height": 812
        },
        "viewport": {
          "width": 712,
          "height": 327
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "JioPhone 2": {
        "userAgent": "Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:102.0) Gecko/48.0 Firefox/102.0 KAIOS/2.5",
        "viewport": {
          "width": 240,
          "height": 320
        },
        "deviceScaleFactor": 1,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "firefox"
      },
      "JioPhone 2 landscape": {
        "userAgent": "Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:102.0) Gecko/48.0 Firefox/102.0 KAIOS/2.5",
        "viewport": {
          "width": 320,
          "height": 240
        },
        "deviceScaleFactor": 1,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "firefox"
      },
      "Kindle Fire HDX": {
        "userAgent": "Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true",
        "viewport": {
          "width": 800,
          "height": 1280
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Kindle Fire HDX landscape": {
        "userAgent": "Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true",
        "viewport": {
          "width": 1280,
          "height": 800
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "LG Optimus L70": {
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 384,
          "height": 640
        },
        "deviceScaleFactor": 1.25,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "LG Optimus L70 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 640,
          "height": 384
        },
        "deviceScaleFactor": 1.25,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Microsoft Lumia 550": {
        "userAgent": "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36 Edge/14.14263",
        "viewport": {
          "width": 640,
          "height": 360
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Microsoft Lumia 550 landscape": {
        "userAgent": "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36 Edge/14.14263",
        "viewport": {
          "width": 360,
          "height": 640
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Microsoft Lumia 950": {
        "userAgent": "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36 Edge/14.14263",
        "viewport": {
          "width": 360,
          "height": 640
        },
        "deviceScaleFactor": 4,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Microsoft Lumia 950 landscape": {
        "userAgent": "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36 Edge/14.14263",
        "viewport": {
          "width": 640,
          "height": 360
        },
        "deviceScaleFactor": 4,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 10": {
        "userAgent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Safari/537.36",
        "viewport": {
          "width": 800,
          "height": 1280
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 10 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Safari/537.36",
        "viewport": {
          "width": 1280,
          "height": 800
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 4": {
        "userAgent": "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 384,
          "height": 640
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 4 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 640,
          "height": 384
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 5": {
        "userAgent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 360,
          "height": 640
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 5 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 640,
          "height": 360
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 5X": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 412,
          "height": 732
        },
        "deviceScaleFactor": 2.625,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 5X landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 732,
          "height": 412
        },
        "deviceScaleFactor": 2.625,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 6": {
        "userAgent": "Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 412,
          "height": 732
        },
        "deviceScaleFactor": 3.5,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 6 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 732,
          "height": 412
        },
        "deviceScaleFactor": 3.5,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 6P": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 412,
          "height": 732
        },
        "deviceScaleFactor": 3.5,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 6P landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 732,
          "height": 412
        },
        "deviceScaleFactor": 3.5,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 7": {
        "userAgent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Safari/537.36",
        "viewport": {
          "width": 600,
          "height": 960
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nexus 7 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Safari/537.36",
        "viewport": {
          "width": 960,
          "height": 600
        },
        "deviceScaleFactor": 2,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nokia Lumia 520": {
        "userAgent": "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)",
        "viewport": {
          "width": 320,
          "height": 533
        },
        "deviceScaleFactor": 1.5,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nokia Lumia 520 landscape": {
        "userAgent": "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)",
        "viewport": {
          "width": 533,
          "height": 320
        },
        "deviceScaleFactor": 1.5,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Nokia N9": {
        "userAgent": "Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13",
        "viewport": {
          "width": 480,
          "height": 854
        },
        "deviceScaleFactor": 1,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Nokia N9 landscape": {
        "userAgent": "Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13",
        "viewport": {
          "width": 854,
          "height": 480
        },
        "deviceScaleFactor": 1,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "webkit"
      },
      "Pixel 2": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 411,
          "height": 731
        },
        "deviceScaleFactor": 2.625,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 2 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 731,
          "height": 411
        },
        "deviceScaleFactor": 2.625,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 2 XL": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 411,
          "height": 823
        },
        "deviceScaleFactor": 3.5,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 2 XL landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 823,
          "height": 411
        },
        "deviceScaleFactor": 3.5,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 3": {
        "userAgent": "Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 393,
          "height": 786
        },
        "deviceScaleFactor": 2.75,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 3 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 786,
          "height": 393
        },
        "deviceScaleFactor": 2.75,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 4": {
        "userAgent": "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 353,
          "height": 745
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 4 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 745,
          "height": 353
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 4a (5G)": {
        "userAgent": "Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "screen": {
          "width": 412,
          "height": 892
        },
        "viewport": {
          "width": 412,
          "height": 765
        },
        "deviceScaleFactor": 2.63,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 4a (5G) landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "screen": {
          "height": 892,
          "width": 412
        },
        "viewport": {
          "width": 840,
          "height": 312
        },
        "deviceScaleFactor": 2.63,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 5": {
        "userAgent": "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "screen": {
          "width": 393,
          "height": 851
        },
        "viewport": {
          "width": 393,
          "height": 727
        },
        "deviceScaleFactor": 2.75,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Pixel 5 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "screen": {
          "width": 851,
          "height": 393
        },
        "viewport": {
          "width": 802,
          "height": 293
        },
        "deviceScaleFactor": 2.75,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Moto G4": {
        "userAgent": "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 360,
          "height": 640
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Moto G4 landscape": {
        "userAgent": "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Mobile Safari/537.36",
        "viewport": {
          "width": 640,
          "height": 360
        },
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "defaultBrowserType": "chromium"
      },
      "Desktop Chrome HiDPI": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Safari/537.36",
        "screen": {
          "width": 1792,
          "height": 1120
        },
        "viewport": {
          "width": 1280,
          "height": 720
        },
        "deviceScaleFactor": 2,
        "isMobile": false,
        "hasTouch": false,
        "defaultBrowserType": "chromium"
      },
      "Desktop Edge HiDPI": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Safari/537.36 Edg/104.0.5112.65",
        "screen": {
          "width": 1792,
          "height": 1120
        },
        "viewport": {
          "width": 1280,
          "height": 720
        },
        "deviceScaleFactor": 2,
        "isMobile": false,
        "hasTouch": false,
        "defaultBrowserType": "chromium"
      },
      "Desktop Firefox HiDPI": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0",
        "screen": {
          "width": 1792,
          "height": 1120
        },
        "viewport": {
          "width": 1280,
          "height": 720
        },
        "deviceScaleFactor": 2,
        "isMobile": false,
        "hasTouch": false,
        "defaultBrowserType": "firefox"
      },
      "Desktop Safari": {
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15",
        "screen": {
          "width": 1792,
          "height": 1120
        },
        "viewport": {
          "width": 1280,
          "height": 720
        },
        "deviceScaleFactor": 2,
        "isMobile": false,
        "hasTouch": false,
        "defaultBrowserType": "webkit"
      },
      "Desktop Chrome": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Safari/537.36",
        "screen": {
          "width": 1920,
          "height": 1080
        },
        "viewport": {
          "width": 1280,
          "height": 720
        },
        "deviceScaleFactor": 1,
        "isMobile": false,
        "hasTouch": false,
        "defaultBrowserType": "chromium"
      },
      "Desktop Edge": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.65 Safari/537.36 Edg/104.0.5112.65",
        "screen": {
          "width": 1920,
          "height": 1080
        },
        "viewport": {
          "width": 1280,
          "height": 720
        },
        "deviceScaleFactor": 1,
        "isMobile": false,
        "hasTouch": false,
        "defaultBrowserType": "chromium"
      },
      "Desktop Firefox": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0",
        "screen": {
          "width": 1920,
          "height": 1080
        },
        "viewport": {
          "width": 1280,
          "height": 720
        },
        "deviceScaleFactor": 1,
        "isMobile": false,
        "hasTouch": false,
        "defaultBrowserType": "firefox"
      }
    }
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
