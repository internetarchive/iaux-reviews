import type { FetchHandlerInterface } from '@internetarchive/fetch-handler';

export class MockFetchHandler implements FetchHandlerInterface {
  fetchApiPathResponse<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }

  async fetchApiResponse<T>(): Promise<T> {
    return { success: true } as T;
  }

  async fetchIAApiResponse<T>(): Promise<T> {
    return {} as T;
  }

  async fetch(): Promise<Response> {
    return new Response();
  }
}
