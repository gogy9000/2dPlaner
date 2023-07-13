import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WallType } from "../../Constructions/slice/initialState/type";
import { initialState } from "./initialState";
import { FurnitureType } from "./initialState/types";
import { v4 } from "uuid";

export const addFurniture=createAsyncThunk("FURNITURE_SLICE/ADD_FURNITURE",({position}:Pick<FurnitureType, "position">,{dispatch})=>{
  const id=v4()
  dispatch(furnitureActions.addFurniture({position,id}))
  dispatch(furnitureActions.setSelectedFurnitureId(id))
})

export const furnitureSlice=createSlice({
  name:'FURNITURE_SLICE',
  initialState,
  reducers: {
    addFurniture: (state, action: PayloadAction<Pick<WallType, "position" | "id">>) => {
      const id = action.payload.id;
      state.furnitureIdList.push(id);
      state.furniture[id] = { isSelected: false, rotation: [Math.PI / 2, 0, 0], ...action.payload };
    },
    removeSelectedFurniture: (state) => {
      const selectedId = state.selectedFurnitureId;
      if (!selectedId) return;
      state.selectedFurnitureId=null
      state.furnitureIdList=state.furnitureIdList.filter((id) => id !== selectedId);
      delete state.furniture[selectedId];
    },
    rotateFurniture: (state, action: PayloadAction<Pick<WallType, "id" | "rotation">>) => {
      const foundId = state.furnitureIdList.find((id) => id === action.payload.id);
      if (foundId) {
        state.furniture[foundId].rotation[0] += action.payload.rotation[0];
        state.furniture[foundId].rotation[1] += action.payload.rotation[1];
        state.furniture[foundId].rotation[2] += action.payload.rotation[2];
      }
    },
    setFurniturePosition: (state, action: PayloadAction<Pick<WallType, "position" | "id">>) => {
      const foundId = state.furnitureIdList.find((id) => id === action.payload.id);
      if (foundId) {
        state.furniture[foundId].position = action.payload.position;
      }
    },
    setSelectedFurnitureId: (state, action: PayloadAction<string | null>) => {

      if (state.selectedFurnitureId === action.payload) return;
      if (state.selectedFurnitureId && !!action.payload) {
        state.furniture[state.selectedFurnitureId].isSelected = false;
        state.selectedFurnitureId = action.payload;
        state.furniture[action.payload].isSelected = true;
        return;
      }
      if (!!action.payload) {
        state.selectedFurnitureId = action.payload;
        state.furniture[action.payload].isSelected = true;
        return;
      }
      if (!action.payload && state.selectedFurnitureId) {
        state.furniture[state.selectedFurnitureId].isSelected = false;
        state.selectedFurnitureId = null;
        return;
      }
    },
  }
})

export const furnitureActions=furnitureSlice.actions
export const furnitureReducer=furnitureSlice.reducer