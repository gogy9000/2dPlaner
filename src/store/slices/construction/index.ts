import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { WallType } from "./initialState/type";
import { v4 } from "uuid";

const constructionSlice = createSlice({
  name: "CONSTRUCTION_SLICE",
  initialState,
  reducers: {
    addWall: (state, action: PayloadAction<Omit<WallType, "id">>) => {
      const id = v4();
      state.walls.push({ id,  ...action.payload, });
    }
  }
});
export const { addWall } = constructionSlice.actions;
export const constructionReducer = constructionSlice.reducer;
