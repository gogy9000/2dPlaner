import React, { memo, useMemo } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectWallsIdList } from "./slice/selectors";
import { Wall } from "./Wall";
import { Controls } from "./Controls";
import { selectMode } from "../shared/sharedSlice/selectors";




export const Constructions: React.FC = memo(() => {
    const wallsIdList = useAppSelector(selectWallsIdList);
    const mode=useAppSelector(selectMode)

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
        {mappedWalls}
        {mode==='construction'?<Controls/>:null}
      </>
    );
  })
;