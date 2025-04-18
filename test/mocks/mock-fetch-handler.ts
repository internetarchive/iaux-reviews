import type { FetchHandlerInterface } from '@internetarchive/fetch-handler-service/dist/src/fetch-handler-interface';

export class MockFetchHandler implements FetchHandlerInterface {
  async fetchApiResponse<T>(
    url: string,
    options?: {
      includeCredentials?: boolean;
      method?: string;
      body?: BodyInit;
      headers?: HeadersInit;
    },
  ): Promise<T> {
    return { response: 'mockresponse' } as T;
  }

  async fetchIAApiResponse<T>(
    path: string,
    options?: { includeCredentials?: boolean },
  ): Promise<T> {
    return {} as T;
  }

  async fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    return new Response();
  }
}
