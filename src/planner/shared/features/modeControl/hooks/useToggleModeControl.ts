import { button, useControls } from "leva";
import { selectMode } from "../../../sharedSlice/selectors";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { sharedActions } from "../../../sharedSlice";

export const useToggleModeControl = () => {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();
  useControls(() => ({
    [mode === "furniture" ? "Режим расстановки" : "Режим возведения"]: button(() => {
        if (mode === "construction") {
          dispatch(sharedActions.toggleMode("furniture"));
        } else {
          dispatch(sharedActions.toggleMode("construction"));
        }
      },
    ),
  }), [mode]);
};