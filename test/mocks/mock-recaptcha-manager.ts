import {
  RecaptchaManagerInterface,
  RecaptchaWidgetInterface,
} from '@internetarchive/recaptcha-manager';
import { MockRecaptchaWidget } from './mock-recaptcha-widget';

export class MockRecaptchaManager implements RecaptchaManagerInterface {
  private defaultSiteKey?: string;

  constructor(options?: { defaultSiteKey?: string }) {
    this.defaultSiteKey = options?.defaultSiteKey;
  }

  async getRecaptchaWidget(options?: {
    siteKey?: string;
    recaptchaParams?: ReCaptchaV2.Parameters;
  }): Promise<RecaptchaWidgetInterface> {
    const key = options?.siteKey ?? this.defaultSiteKey;

    return new MockRecaptchaWidget({ siteKey: key });
  }
}
