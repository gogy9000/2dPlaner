import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { WallType } from "./initialState/type";
import { v4 } from "uuid";

export const addWall = createAsyncThunk("CONSTRUCTION_SLICE/START_BUILD", async ({ position }: Pick<WallType, "position">, { dispatch }) => {
  const id = v4();
  dispatch(constructionsActions.addWall({ position, id }));
  dispatch(constructionsActions.setSelectedConstructionsId(id));
});

const constructionSlice = createSlice({
  name: "CONSTRUCTION_SLICE",
  initialState,
  reducers: {
    toggleConstructionMode:(state, action: PayloadAction<boolean>)=>{
      state.constructionMode=action.payload
    },
    addWall: (state, action: PayloadAction<Pick<WallType, "position" | "id">>) => {
      const id = action.payload.id;
      state.wallsIdList.push(id);
      state.walls[id] = { isSelected: false, args: [1, 1, 1], rotation: [0, 0, 0], ...action.payload };
    },
    removeSelectedWall: (state) => {
      const selectedId = state.selectedConstructionId;
      if (!selectedId) return;
      state.selectedConstructionId=null
      state.wallsIdList=state.wallsIdList.filter((id) => id !== selectedId);
      delete state.walls[selectedId];
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
    setSelectedConstructionsId: (state, action: PayloadAction<string | null>) => {

      if (state.selectedConstructionId === action.payload) return;


      if (state.selectedConstructionId && !!action.payload) {
        state.walls[state.selectedConstructionId].isSelected = false;
        state.selectedConstructionId = action.payload;
        state.walls[action.payload].isSelected = true;
        return;
      }

      if (!!action.payload) {
        state.selectedConstructionId = action.payload;
        state.walls[action.payload].isSelected = true;
        return;
      }


      if (!action.payload && state.selectedConstructionId) {
        state.walls[state.selectedConstructionId].isSelected = false;
        state.selectedConstructionId = null;
        return;
      }


    },
    setWallArgs: (state, action: PayloadAction<Pick<WallType, "args">>) => {
      if (!state.selectedConstructionId) return;
      state.walls[state.selectedConstructionId].args = action.payload.args;
    }
  }
});
export const constructionsActions = constructionSlice.actions;
export const constructionReducer = constructionSlice.reducer;
