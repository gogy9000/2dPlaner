import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { selectConstruction } from "../slice/selectors";
import { button, useControls } from "leva";
import { useEffect } from "react";
import { constructionsActions } from "../slice";

export const useConstructionControl = () => {
  const dispatch = useAppDispatch();
  const selectedConstruction = useAppSelector(selectConstruction);
  const args = selectedConstruction?.args || [0, 0, 0];

  const [{ x, y, z }, set] = useControls("Размеры", () => ({
    x: { value: 0, min: 1, max: 100, step: 1 },
    y: { value: 0, min: 1, max: 100, step: 1 },
    z: { value: 0, min: 1, max: 10, step: 1 },

  }));
  useControls("Действия", () => {
      return(
        {
          [selectedConstruction?"Удалить стену":'']: button(() => {
            dispatch(constructionsActions.removeSelectedWall());
          }),
        }
      );

  },[selectedConstruction] );

  useEffect(() => {
    if (!selectedConstruction) return;
    set({ x: args[0], y: args[1], z: args[2] });
  }, [selectedConstruction]);

  useEffect(() => {
    if (!selectedConstruction) return;
    dispatch(constructionsActions.setWallArgs({ args: [x, y, z] }));
  }, [x, y, z]);
};