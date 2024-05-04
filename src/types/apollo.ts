export type QueryResult<T> = {
  loading: boolean;
  data: T | undefined;
  error: Error | undefined;
};

export type Variables = {
  [key: string]: any;
};

export type QueryHookOptions = {
  fetchPolicy?:
    | 'cache-first'
    | 'cache-and-network'
    | 'network-only'
    | 'cache-only';
  variables?: Variables;
};
