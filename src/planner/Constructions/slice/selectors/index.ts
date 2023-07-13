import { RootState } from "../../../../store";

export const selectConstructionMode = (state: RootState) => state.constructionReducer.constructionMode;
export const selectWallsIdList = (state: RootState) => state.constructionReducer.wallsIdList;
export const selectWall = (id: string) => (state: RootState) => state.constructionReducer.walls[id]||null;
export const selectConstruction = (state: RootState) => {
  const id = state.constructionReducer.selectedConstructionId;
  return id ? state.constructionReducer.walls[id] : null;
};