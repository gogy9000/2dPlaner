import React, { memo, useMemo } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectWalls } from "../../store/slices/construction/selectors";
import { Wall } from "./Wall";


interface ConstructionsProps {

}

export const Constructions: React.FC<ConstructionsProps> = memo(({}) => {
    const walls = useAppSelector(selectWalls);

    const mappedWalls = useMemo(() => {
      return (
        walls.map(
          ({ rotation, position, id }) =>
            <Wall key={id} geometryProps={{ position, rotation }}/>
        )
      );
    }, [walls]);

    return (
      <>
        {mappedWalls}
      </>
    );
  })
;