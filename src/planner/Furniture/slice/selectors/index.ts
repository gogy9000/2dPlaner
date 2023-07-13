import { RootState } from "../../../../store";

export const selectFurnitureIdList = (state: RootState) => state.furnitureReducer.furnitureIdList;
export const selectFurnitureById = (id: string) => (state: RootState) => state.furnitureReducer.furniture[id]||null;
export const selectSelectedFurniture = (state: RootState) => {
  const id = state.furnitureReducer.selectedFurnitureId;
  return id ? state.furnitureReducer.furniture[id] : null;
};