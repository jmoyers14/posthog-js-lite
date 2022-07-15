import {
  PostHogCore,
  PosthogCoreOptions,
  PostHogFetchOptions,
  PostHogFetchResponse,
  PostHogPersistedProperty,
} from 'posthog-core'
// import { version } from '../package.json'

// TODO: Get this from package.json
const version = '2.0.0-alpha'

export interface PostHogNodejsOptions extends PosthogCoreOptions {}

export class PostHogNodejs extends PostHogCore {
  _memoryStorage: { [key: string]: string | undefined } = {}

  constructor(apiKey: string, options: PostHogNodejsOptions) {
    super(apiKey, options)
  }

  getPersistedProperty(key: PostHogPersistedProperty): string | undefined {
    return this._memoryStorage[key]
  }
  setPersistedProperty(key: PostHogPersistedProperty, value: string): void {
    this._memoryStorage[key] = value
  }

  fetch(url: string, options: PostHogFetchOptions): Promise<PostHogFetchResponse> {
    throw Error('not implemented')
  }

  setImmediate(fn: () => void): void {
    return process.nextTick(fn)
  }

  getLibraryId(): string {
    return 'posthog-node'
  }
  getLibraryVersion(): string {
    return version
  }
  getCustomUserAgent(): string {
    return `posthog-node/${version}`
  }

  // Custom methods

  shutdown() {
    this.flush()
  }
}
