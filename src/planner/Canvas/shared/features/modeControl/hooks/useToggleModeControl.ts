import { button, buttonGroup, useControls } from "leva";
import { selectMode } from "../../../sharedSlice/selectors";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import { sharedActions } from "../../../sharedSlice";

export const useToggleModeControl = () => {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  const [,set]=useControls(()=>({
    ["Режим"]:mode==="construction"?"Возведение":"Расстановка",
    " ":buttonGroup({
      ['Возведение']: () => {
        set({ ["Режим"]:"Возведение"});
        dispatch(sharedActions.toggleMode("construction"))
      },
      ['Расстановка']: () => {
        set({ ["Режим"]: "Расстановка" });
        dispatch(sharedActions.toggleMode("furniture"))
      },
    })
  }),[mode]);
};