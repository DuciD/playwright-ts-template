import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import * as messages  from '@cucumber/messages';
import { BrowserContext, Locator, Page } from '@playwright/test';

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export interface ICustomWorld extends World {
  debug: boolean;
  feature?: messages.Pickle; // Use messages.Pickle instead of messages.IPickle
  context?: BrowserContext;
  page?: Page;
  locator?:Locator;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
  debug = false;
}

setWorldConstructor(CustomWorld);