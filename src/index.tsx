import React from 'react';
import ReactDOM from 'react-dom';

import './hello.scss';
import Another from './another';

const MyApp = () => {
  return (
    <div>
      hello wosssrld2
      <Another />
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
