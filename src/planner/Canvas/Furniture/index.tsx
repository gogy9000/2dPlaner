import React, { memo, useMemo,Suspense } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectFurnitureIdList } from "./slice/selectors";
import { TableAndChairs } from "../../../models/TableAndChairs";




export const Furniture : React.FC = memo(() => {
  const furnitureIdList=useAppSelector(selectFurnitureIdList)

  const mappedFurniture =
    useMemo(() => {
      return (
        furnitureIdList.map(
          (id) =>
            <Suspense fallback={null}>
              <TableAndChairs id={id}   key={id}/>
            </Suspense>

        )
      );
    }, [furnitureIdList]);


  return (
   <>{mappedFurniture}</>
  );
});