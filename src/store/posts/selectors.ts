import { RootState } from 'configs/store'

export const selectPosts = (state: RootState) => state.posts

export const selectPostsPendingStatus = (state: RootState) => state.posts.pendingStatus
