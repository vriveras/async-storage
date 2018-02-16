export interface Callback{ (err: ?Error, value: any): void; }

export interface TAsyncStorage {
  setItem: (key: string, value: string, cb?: Callback) => Promise<void>;
  getItem: (key: string, cb?: Callback) => Promise<?string>;
  getAllKeys: (cb?: Callback) => Promise<Array<string>>;
  removeItem: (key: string, cb?: Callback) => Promise<void>;

  clear: () => Promise<void>;
  multiGet: (keys: Array<string>) => Promise<Array<[string, ?string]>>;
  multiSet: (kvPairs: Array<[string, string]>) => Promise<void>;
  multiMerge: (kvPairs: Array<[string, string]>) => Promise<void>;
  multiRemove: (keys: Array<string>) => Promise<void>;
  mergeItem: (key: string, value: string) => Promise<void>;
  flushGetRequests: () => void;
};

declare let API: TAsyncStorage;
export default API;