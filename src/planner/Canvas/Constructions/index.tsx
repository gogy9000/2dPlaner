import React, { memo, useMemo } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectWallsIdList } from "./slice/selectors";
import { Wall } from "./Wall";
import { useConstructionControl } from "./hooks/useConstructionControl";




export const Constructions: React.FC = memo(() => {
    const wallsIdList = useAppSelector(selectWallsIdList);
    useConstructionControl();

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