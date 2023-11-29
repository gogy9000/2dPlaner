import { createAsyncThunk } from "@reduxjs/toolkit";
import { sharedActions } from "../../../sharedSlice";
import { furnitureActions } from "../../../../Furniture/slice";
import { constructionsActions } from "../../../../Constructions/slice";

export const toggleMode=createAsyncThunk<void,"construction" | "furniture">
('toggleMode',async (payload,{dispatch})=>{
  dispatch(furnitureActions.setSelectedFurnitureId(null))
  dispatch(constructionsActions.setSelectedConstructionsId(null))
  dispatch(sharedActions.toggleMode(payload))
})