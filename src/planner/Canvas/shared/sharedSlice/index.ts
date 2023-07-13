import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { InitialStateType } from "./initialState/types";

const sharedSlice=createSlice({
  name:"SHARED_SLICE",
  initialState,
  reducers:{
    toggleMode:(state,action:PayloadAction<InitialStateType["mode"]>)=>{
      state.mode=action.payload
    }
  }
})
export const sharedActions=sharedSlice.actions
export const sharedReducer=sharedSlice.reducer