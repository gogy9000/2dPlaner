
import { PublicApi } from "@react-three/cannon";
import { useCustomDrag } from "./useCustomDrag";
import { DragConfig } from "@use-gesture/react";


export type onFinishDragArgsType = {
  id: string, position: [x: number, y: number, z: number]
}

export type UseDragPhysicsObjectPropsType = {
  api: PublicApi
  z: number,
  onFinishDrag?: (args: onFinishDragArgsType) => void;
  config?:DragConfig
}

export const useDragPhysicsObject = ({ api, z, onFinishDrag,config }: UseDragPhysicsObjectPropsType) => {

  return  useCustomDrag(({ xy, down, event }) => {
    const x=xy[0]
    const y=xy[1]
    const xRoundedPosition = Math.round(x);
    const yRoundedPosition = Math.round(y);
    if (down) {

     //  const [xP,yP,]=construction?.position||[0,0,0]
     //  const [Ax,Ay,Az]=construction?.args||[0,0,0]
     //  const deltaX=xP-x||0.00001
     //  const deltaY=yP-y||0.00001
     //  api.rotation.set(0,0,Math.atan(-deltaY/-deltaX))
     //
     // const argX= Math.sqrt(
     //    (Math.pow(-deltaY,2)+Math.pow(-deltaX,2))
     //    )
     //  ;
     //  console.log(argX);
     //  dispatch(constructionsActions.setWallArgs({args:[argX,Ay,Az]}))
     //  console.log(x, y, z);
      api.position.set(
        x, y, z
      );
      return;
    }
    api.position.set(
      xRoundedPosition,
      yRoundedPosition,
      z
    );
    const e = event as any;
    onFinishDrag && onFinishDrag({
      id: e.eventObject.name,
      position: [
        xRoundedPosition,
        yRoundedPosition,
        z
      ]
    });
  }, config );


};