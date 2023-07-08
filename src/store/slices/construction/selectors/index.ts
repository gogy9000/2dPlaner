import { RootState } from "../../../index";

export const selectWallsIdList=(state:RootState)=>state.constructionReducer.wallsIdList
export const selectWall=(id:string)=>(state:RootState)=>state.constructionReducer.walls[id]