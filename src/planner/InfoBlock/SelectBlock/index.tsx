import React, { memo } from "react";
import styles from './select.module.css'
import { Card } from "./Card";
import tableAndChairs from './image/tableAndChairs.png'
import wall from './image/wall.png'
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectMode } from "../../Canvas/shared/sharedSlice/selectors";
import { sharedActions } from "../../Canvas/shared/sharedSlice";

export const SelectBlock: React.FC = memo(() => {
  const mode=useAppSelector(selectMode)
  const dispatch=useAppDispatch()

  const onClick =(mode:"furniture"|"construction")=>()=>{
    dispatch(sharedActions.toggleMode(mode))
  };

  return (
    <div className={styles.container}>
      <Card onClick={onClick("furniture")} isActive={mode==="furniture"} title={"Стол"} image={tableAndChairs}/>
      <Card onClick={onClick("construction")} isActive={mode==="construction"} title={"Стена"} image={wall}/>

    </div>
  );
});