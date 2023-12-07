import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../store";

export const saveConfig=createAsyncThunk<void,void>
('SAVE_CONFIG',async (v,{getState})=>{
  const state=getState() as RootState
  localStorage.setItem('state',JSON.stringify(state))
})