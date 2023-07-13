import { configureStore } from '@reduxjs/toolkit'
import { constructionReducer } from "../planner/Canvas/Constructions/slice";
import { furnitureReducer } from "../planner/Canvas/Furniture/slice";
import { sharedReducer } from "../planner/Canvas/shared/sharedSlice";


export const store = configureStore({
  reducer: {
    constructionReducer,
    furnitureReducer,
    sharedReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch