import React from 'react';

import _ from 'lodash';

const Another = () => {
  console.log(_.join(['Another', 'module', 'loaded!'], ' '));

  return <div>hello another y</div>;
};

export default Another;
