import { config } from 'dotenv';
import { devices } from '@playwright/test';

config({
  path: process.env.PLATFORM ? `.env.${process.env.PLATFORM}` : '.env',
});

class platforms {
  brand: string;
  platform: string;
  launchOptions: any;

  constructor() {
    this.brand = process.env.BRAND || 'dafabet';
    this.platform = process.env.PLATFORM || 'desktop';
    this.launchOptions = null;
  }

  setPlatform(platform: string) {
    this.platform = platform;
    if (platform === 'desktop') {
      this.launchOptions = {
        args: ['--start-maximized'],
      };
    } else if (platform === 'mobile') {
      this.launchOptions = {
        ...devices['Pixel 5'],
      };
    } else {
      // Handle unsupported platform
      throw new Error(`Unsupported platform: ${platform}`);
    }
  }

  async setViewport(page: any) {
    if (this.platform === 'desktop') {
      // Set desktop view with the specified size
      await page.setViewportSize({ width: 1920, height: 1080 });
    } else if (this.platform === 'mobile') {
      // Set mobile view with the specified size
      await page.setViewportSize({ width: 377, height: 850 });
    }
  }
}

const globals = new platforms();
export default globals;
