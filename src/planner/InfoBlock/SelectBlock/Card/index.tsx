import React, { memo } from "react";
import styles from './card.module.css'
type ICardProps =  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>& {
  image:string
  title:string
  isActive:boolean
}

export const Card: React.FC<ICardProps> = memo(({image,title,isActive,...rest}) => {
  const className= `${styles.container} ${isActive?styles.isActive:''}`
  return (
    <div className={className} {...rest}>
      <div className={styles.title}>{title}</div>
      <img src={image}/>
    </div>
  );
});