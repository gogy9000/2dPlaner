import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { WallType } from "./initialState/type";
import { v4 } from "uuid";

const constructionSlice = createSlice({
  name: "CONSTRUCTION_SLICE",
  initialState,
  reducers: {
    addWall: (state, action: PayloadAction<Omit<WallType, "id" | "rotation">>) => {
      const id = v4();
      state.wallsIdList.push(id);
      state.walls[id] = { id, rotation: [0, 0, Math.PI / 2], ...action.payload };
    },

    rotateWall: (state, action: PayloadAction<Omit<WallType, "position">>) => {

      const foundId = state.wallsIdList.find((id) => id === action.payload.id);
      if (foundId) {
        state.walls[foundId].rotation[0] += action.payload.rotation[0];
        state.walls[foundId].rotation[1] += action.payload.rotation[1];
        state.walls[foundId].rotation[2] += action.payload.rotation[2];
      }
    },
    setWallPosition: (state, action: PayloadAction<Omit<WallType, "rotation">>) => {
      const foundId = state.wallsIdList.find((id) => id === action.payload.id);
      if (foundId) {
        state.walls[foundId].position = action.payload.position;
      }
    }
  }
});
export const { addWall, rotateWall, setWallPosition } = constructionSlice.actions;
export const constructionReducer = constructionSlice.reducer;
