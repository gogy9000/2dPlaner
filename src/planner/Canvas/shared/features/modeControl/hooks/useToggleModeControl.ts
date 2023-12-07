import { buttonGroup, useControls } from "leva";
import { selectMode } from "../../../sharedSlice/selectors";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import { toggleMode } from "../actions";

export const useToggleModeControl = () => {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  const [,set]=useControls(()=>({
    ["Режим"]:mode==="construction"?"Стены":"Мебель",
    " ":buttonGroup({
      ['Стены']: () => {
        set({ ["Режим"]:"Стены"});
        dispatch(toggleMode('construction'))
      },
      ['Мебель']: () => {
        set({ ["Режим"]: "Мебель" });
        dispatch(toggleMode('furniture'))
      },
    })

  }),[mode]);
};