import { configureStore } from '@reduxjs/toolkit'
import { constructionReducer } from "../planner/Canvas/Constructions/slice";
import { furnitureReducer } from "../planner/Canvas/Furniture/slice";
import { sharedReducer } from "../planner/Canvas/shared/sharedSlice";
import { initialState as constructionsInitialState } from "../planner/Canvas/Constructions/slice/initialState";
import { initialState as furnitureInitialState } from "../planner/Canvas/Furniture/slice/initialState";
import { initialState as sharedInitialState } from "../planner/Canvas/shared/sharedSlice/initialState";

const  preloaded= ()=>{
  try {
    let state
    // const item=localStorage.getItem('state')
    //
    // if (item) {
    //   console.log(JSON.parse(item));
    // }
    // else{
    state = {
      sharedReducer: sharedInitialState,
      constructionReducer: {
        ...constructionsInitialState,
      wallsIdList:['2'],
        walls:{
          ['2']:{
            id:'2',
            args:[5,1,1],
            rotation:[0,0,0],
            position:[0,0,1],
            isSelected:false
          }
        }
      } as typeof constructionsInitialState,
      furnitureReducer: {
        ...furnitureInitialState,
        // furnitureIdList:['1'],
        // furniture:{
        //   ['1']:{id:'1',rotation:[0,0,0],position:[10,10,1],isSelected:false}
        // }
      } as typeof furnitureInitialState
    }
  // }
  //   console.log(state);
    return state
  }catch (e) {
    console.log(e);
  }
}


export const store = configureStore({
  reducer: {
    constructionReducer,
    furnitureReducer,
    sharedReducer
  },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

