import React, { FC } from 'react';

import _ from 'lodash';

type Props = {
  // heading: React.ElementType;
};

export const Another: FC<Props> = () => {
  console.log(_.join(['Another', 'module', 'loaded!'], ' '));

  return <div>hello another y</div>;
};

// 尝试一下 dynamic import 的方式来写这个
