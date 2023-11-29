import { useThree } from "@react-three/fiber";
import { FullGestureState, useDrag, DragConfig } from "@use-gesture/react";

type HandlerType =
  Omit<FullGestureState<"drag">, "event">
  & { event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent }

type CallBackType = (args: any) => void

export const useCustomDrag = (callBack: CallBackType, config?: DragConfig) => {

  const { size, viewport, camera } = useThree();
  const { width, height, factor } = viewport;
  return  useDrag(
    ({xy:[x,y],offset, ...rest}) => {

      const cameraPosition = Object.values(camera.position);
      const xPosition = ((x - size.width / 2) / factor) + cameraPosition[0];
      const yPosition = (-(y - size.height / 2) / factor) + cameraPosition[1];
      console.log(offset,[xPosition,yPosition]);
      callBack({xy:[xPosition,yPosition],...rest})
    },{filterTaps:true,
      // transform:([x, y]) => [x / factor, -y / factor],
      ...config}
  );
  // const cameraPosition = Object.values(camera.position);
  // return useDrag((props) => {
  //   const{offset:[x,y],xy,...rest}=props
  //
  //
  //   callBack({ xy:[x,y], ...rest });
  // }, {
  //   // bounds are expressed in canvas coordinates!
  //   bounds: { left: -width / 2, right: width / 2, top: -height / 2, bottom: height / 2 },
  //   rubberband: true,
  //   filterTaps: true,
  //   transform: ([x, y]) =>
  //     [
  //       x/factor,
  //       -y/factor
  //     ],
  //   ...config
  // });
};