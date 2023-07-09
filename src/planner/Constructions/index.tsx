import React, { memo, useMemo } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectWallsIdList } from "../../store/slices/construction/selectors";
import { Wall } from "./Wall";
import { useChangeSelectConstructionArgsControl } from "./hooks/useChangeSelectConstructionArgsControl";




export const Constructions: React.FC = memo(() => {
    const wallsIdList = useAppSelector(selectWallsIdList);
    useChangeSelectConstructionArgsControl();

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
      </>
    );
  })
;