import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { WallType } from "./initialState/type";
import { v4 } from "uuid";

const constructionSlice = createSlice({
  name: "CONSTRUCTION_SLICE",
  initialState,
  reducers: {
    addWall: (state, action: PayloadAction<Pick<WallType, "position">>) => {
      const id = v4();
      state.wallsIdList.push(id);
      state.walls[id] = { id, isSelected: false, args: [1, 1, 1], rotation: [0, 0, Math.PI / 2], ...action.payload };
    },
    rotateWall: (state, action: PayloadAction<Pick<WallType, "id" | "rotation">>) => {
      const foundId = state.wallsIdList.find((id) => id === action.payload.id);
      if (foundId) {
        state.walls[foundId].rotation[0] += action.payload.rotation[0];
        state.walls[foundId].rotation[1] += action.payload.rotation[1];
        state.walls[foundId].rotation[2] += action.payload.rotation[2];
      }
    },
    setWallPosition: (state, action: PayloadAction<Pick<WallType, "position" | "id">>) => {
      const foundId = state.wallsIdList.find((id) => id === action.payload.id);
      if (foundId) {
        state.walls[foundId].position = action.payload.position;
      }
    },
    setSelectedConstructionsId: (state, action: PayloadAction<string>) => {
      if (state.selectedConstructionId === action.payload) return;
      if (state.selectedConstructionId) {
        state.walls[state.selectedConstructionId].isSelected = false;
      }
      state.selectedConstructionId = action.payload;
      state.walls[action.payload].isSelected = true;

    },
    setWallArgs: (state, action: PayloadAction<Pick<WallType, "args">>) => {
      if (!state.selectedConstructionId) return;
      state.walls[state.selectedConstructionId].args = action.payload.args;
    }
  }
});
export const constructionsActions = constructionSlice.actions;
export const constructionReducer = constructionSlice.reducer;
