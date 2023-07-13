
export type InitialStateType={
  selectedFurnitureId:string|null
  furnitureIdList:string[]
  furniture:Record<string, FurnitureType>
}

export type FurnitureType = {
  id: string
  isSelected:boolean
  position:[x:number,y:number,z:number],
  rotation:[x:number,y:number,z:number],

}