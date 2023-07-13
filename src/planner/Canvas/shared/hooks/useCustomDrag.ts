import { useThree } from "@react-three/fiber";
import { FullGestureState, useDrag,DragConfig } from "@use-gesture/react";

type HandlerType= Omit<FullGestureState<"drag">, "event"> & {event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent}

type CallBackType= (args:HandlerType)=>void

export const useCustomDrag = (callBack:CallBackType,config?:DragConfig) => {

  const { size, viewport, camera } = useThree();
  const aspect = size.width / viewport.width;
  return  useDrag(
    ({xy:[x,y], ...rest}) => {

      const cameraPosition = Object.values(camera.position);
      const xPosition = ((x - size.width / 2) / aspect) + cameraPosition[0];
      const yPosition = (-(y - size.height / 2) / aspect) + cameraPosition[1];
      callBack({xy:[xPosition,yPosition],...rest})
    },{filterTaps:true,...config}
  );
};