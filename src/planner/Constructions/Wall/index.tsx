import React, { memo } from "react";
import { Block, IBlockProps } from "../../meshes/Block";


type IWallProps = IBlockProps

export const Wall: React.FC<IWallProps> = memo(({geometryProps,materialProps}) => {

  return (
    <Block
      geometryProps={{
      args: [4,1, 4], position: [1, 0, 1.5], ...geometryProps
    }}
      materialProps={materialProps}
    />
  );
});