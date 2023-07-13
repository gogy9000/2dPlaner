import React, { memo } from "react";
import styles from './InfoBlock.module.css'
import { SelectBlock } from "./SelectBlock";

interface IInfoBlockProps {

}

export const InfoBlock: React.FC<IInfoBlockProps> = memo(({}) => {

  return (
    <div className={styles.container}>
      <div className={styles.title}>Title</div>
      <SelectBlock/>
    </div>

  );
});