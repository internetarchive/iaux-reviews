import { RecaptchaWidgetInterface } from '@internetarchive/recaptcha-manager';

/**
 * This encompasses a widget for a given site key.
 */
export class MockRecaptchaWidget implements RecaptchaWidgetInterface {
  private siteKey?: string;

  constructor(config: { siteKey?: string }) {
    if (config.siteKey) {
      this.siteKey = config.siteKey;
    }
  }

  /** @inheritdoc */
  async execute(): Promise<string> {
    return 'mock-token';
  }
}
