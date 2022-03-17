import React from 'react';
import ReactDOM from 'react-dom';

import './hello.scss';

const hello = () => import(/* webpackChunkName: hello */ './another');

const MyApp = () => {
  return (
    <div>
      hello wosssrld2
      {/*<Another />*/}
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
