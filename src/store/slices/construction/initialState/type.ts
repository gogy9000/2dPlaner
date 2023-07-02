

export type InitialStateType={
  walls:WallType[]
}

export type WallType={
  id:string
  position:[x:number,y:number,z:number],
  rotation:[x:number,y:number,z:number]
}