import { button, useControls } from "leva";
import { useAppDispatch,  } from "../../../../../../store/hooks";
import { saveConfig } from "../actions";

export const useSaveControl = () => {

  const dispatch = useAppDispatch();

  useControls(()=>({
    ['Сохранить']:button(()=>{
      dispatch(saveConfig())
    })

  }),);
};