

export type InitialStateType={
  selectedConstructionId:string|null
  wallsIdList:string[]
  walls:Record<string, WallType>
}

export type WallType = {
  id: string
  isSelected:boolean
  position:[x:number,y:number,z:number],
  rotation:[x:number,y:number,z:number],
  args:[x:number,y:number,z:number]
}