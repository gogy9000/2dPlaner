

export type InitialStateType={
  wallsIdList:string[]
  walls:Record<string, WallType>
}

export type WallType={
  id:string
  position:[x:number,y:number,z:number],
  rotation:[x:number,y:number,z:number]
}