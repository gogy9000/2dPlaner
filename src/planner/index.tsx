import React, { memo } from "react";
import styles from './planner.module.css'
import { CanvasBlock } from "./Canvas";
import { InfoBlock } from "./InfoBlock";

export const Planner: React.FC= memo(() => {

  return (
    <div className={styles.container}>
      <InfoBlock/>
      <CanvasBlock/>
    </div>
  );
});

