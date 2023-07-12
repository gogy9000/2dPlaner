import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectConstruction } from "../../../store/slices/construction/selectors";
import { button, useControls } from "leva";
import { useEffect } from "react";
import { constructionsActions, startBuild } from "../../../store/slices/construction";

export const useChangeSelectConstructionArgsControl = () => {
  const dispatch = useAppDispatch();
  const selectedConstruction = useAppSelector(selectConstruction);
  const args = selectedConstruction?.args || [0, 0, 0];

  const [{ x, y, z }, set] = useControls("Размеры", () => ({
    x: { value: 0, min: 1, max: 100, step: 1 },
    y: { value: 0, min: 1, max: 100, step: 1 },
    z: { value: 0, min: 1, max: 10, step: 1 },

  }));
  useControls('actions',()=>({
    // ["Режим возведения"]: button(() => {
    //   dispatch(constructionsActions.removeSelectedWall());
    // },{}),
    ["Создать стену"]:button(() => {
    dispatch(startBuild({position:[0,0,0]}));
  }),
    ["Удалить стену"]: button(() => {
      dispatch(constructionsActions.removeSelectedWall());
    }),
    ["Сохранить изменения"]: button(() => {

    }),
  }))



  useEffect(() => {
    if (!selectedConstruction)return
    set({ x: args[0], y: args[1], z: args[2] });
  }, [selectedConstruction]);

  useEffect(() => {
    dispatch(constructionsActions.setWallArgs({ args: [x, y, z] }));
  }, [x, y, z]);
};