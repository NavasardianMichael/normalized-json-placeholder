export const STATE_SLICE_NAMES = {
  app: 'app',
  users: 'users',
  posts: 'posts',
  comments: 'comments',
  todos: 'todos',
  albums: 'albums',
  photos: 'photos',
} as const

export const PENDING_STATUSES = {
  idle: 'idle',
  loading: 'loading',
  succeeded: 'succeeded',
  failed: 'failed',
} as const
