import type { FetchHandlerInterface } from '@internetarchive/fetch-handler-service/dist/src/fetch-handler-interface';

/** A fetch() call the service made */
export type RecordedFetch = {
  url: string;
  init?: RequestInit;
};

export class MockFetchHandler implements FetchHandlerInterface {
  /** Every fetch() the service made, in order */
  fetches: RecordedFetch[] = [];

  /** What fetch() should hand back. Defaults to a 200 carrying `{ success: true }`. */
  response: () => Response = () =>
    new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  async fetchApiResponse<T>(): Promise<T> {
    return { success: true } as T;
  }

  async fetchIAApiResponse<T>(): Promise<T> {
    return {} as T;
  }

  async fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    this.fetches.push({ url: input as string, init });
    return this.response();
  }

  /** The single fetch the service made */
  get lastFetch(): RecordedFetch {
    return this.fetches[this.fetches.length - 1];
  }

  /** Header value off the last fetch, whatever shape the headers were passed in */
  headerOnLastFetch(name: string): string | undefined {
    const headers = this.lastFetch?.init?.headers as
      | Record<string, string>
      | undefined;
    if (!headers) return undefined;
    return new Headers(headers).get(name) ?? undefined;
  }

  /** Body of the last fetch, decoded as url-encoded form params */
  bodyOnLastFetch(): URLSearchParams {
    return new URLSearchParams(String(this.lastFetch?.init?.body ?? ''));
  }
}
