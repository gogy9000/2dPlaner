import { createAsyncThunk } from "@reduxjs/toolkit";
import { sharedActions } from "../../../sharedSlice";
import { furnitureActions } from "../../../../Furniture/slice";
import { constructionsActions } from "../../../../Constructions/slice";

export const toggleMode = createAsyncThunk<void, "construction" | "furniture">
("toggleMode", async (payload, { dispatch }) => {
  dispatch(sharedActions.toggleMode(payload));
  // switch (payload) {
  //   case "construction":
  //     dispatch(furnitureActions.setSelectedFurnitureId(null));
  //     return;
  //   case "furniture":
  //     dispatch(constructionsActions.setSelectedConstructionsId(null));
  // }
});