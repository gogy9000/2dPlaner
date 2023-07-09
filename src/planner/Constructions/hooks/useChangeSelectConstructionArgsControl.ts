import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectConstruction } from "../../../store/slices/construction/selectors";
import { useControls } from "leva";
import { useEffect } from "react";
import { constructionsActions } from "../../../store/slices/construction";

export const useChangeSelectConstructionArgsControl = () => {
  const dispatch = useAppDispatch();
  const selectedConstruction = useAppSelector(selectConstruction);
  const args = selectedConstruction?.args || [0, 0, 0];

  const [{ x, y, z }, set] = useControls("args", () => ({
    x: { value: 0, min: 0, max: 10, step: 0.01 },
    y: { value: 0, min: 0, max: 10, step: 0.01 },
    z: { value: 0, min: 0, max: 10, step: 0.01 },
  }),);

  useEffect(() => {
    set({ x: args[0], y: args[1], z: args[2] });
  }, [args]);

  useEffect(() => {
    dispatch(constructionsActions.setWallArgs({ args: [x, y, z] }));
  }, [x, y, z]);
};