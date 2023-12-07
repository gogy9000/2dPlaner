import React, { memo, useMemo,Suspense } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectConstruction, selectWallsIdList } from "./slice/selectors";
import { Wall } from "./Wall";
import { Controls } from "./Controls";
import { selectMode } from "../shared/sharedSlice/selectors";




export const Constructions: React.FC = memo(() => {
    const wallsIdList = useAppSelector(selectWallsIdList);
    const mode=useAppSelector(selectMode)
  const selectedConstruction = useAppSelector(selectConstruction);

    const mappedWalls =
      useMemo(() => {
        return (
          wallsIdList.map(
            (id) =>
              <Wall id={id} key={id}/>
          )
        );
      }, [wallsIdList]);

    return (
      <>
        <Suspense fallback={null}>
        {mappedWalls}
        </Suspense>
        {mode==='construction'&&selectedConstruction?<Controls/>:null}
      </>
    );
  })
;