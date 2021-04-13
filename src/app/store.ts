import { configureStore } from "@reduxjs/toolkit";
// ...

const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    // messages: messagesReducer,
    // reports: reportsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
