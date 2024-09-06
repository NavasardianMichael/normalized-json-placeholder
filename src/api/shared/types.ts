type EndpointPaths = {
  payload?: unknown
  response: unknown
  processed: unknown
}

export type Endpoint<T extends EndpointPaths> = {
  payload: T['payload']
  response: T['response']
  processedResult: T['processed']
  api: (args?: T['payload']) => Promise<T['processed']>
  processor: (args: T['response']) => T['processed']
}
