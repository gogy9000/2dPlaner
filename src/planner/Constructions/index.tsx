import React, { memo, useMemo } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectWallsIdList } from "../../store/slices/construction/selectors";
import { Wall } from "./Wall";


interface ConstructionsProps {

}

export const Constructions: React.FC<ConstructionsProps> = memo(({}) => {
    const wallsIdList = useAppSelector(selectWallsIdList);

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