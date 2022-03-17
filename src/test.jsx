import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';

import './hello.scss';

// import _ from 'lodash';

// const Anotherj = () => import(/* webpackChunkName: "anotherj" */ './anotherj');
//
// const App = () => {
//   console.log('来了吗？');
//   return (
//     <div>
//       hello wosssrld2
//       <Anotherj />
//     </div>
//   );
// };
//
// ReactDOM.render(<App />, document.getElementById('root'));

// const Demo = async () => {
//   const Hello = await Anotherj();
//   return () => {
//     console.log('来了吗？');
//     return (
//       <div>
//         hello wosssrld2
//         <Hello />
//       </div>
//     );
//   };
// };
//
// Demo().then((Value) => {
//   console.log('value: ', Value);
//   ReactDOM.render(<Value />, document.getElementById('root'));
// });

// import _ from 'lodash';

const OtherComponent = React.lazy(() => import(/* webpackChunkName: "dashuaibi" */ './anotherj'));
// const { default: _ } = React.lazy(async () => await import('lodash'));
// async function getComponent() {
//   const element = document.createElement('div');
//
//   // const hello = await import('./anotherj');
//
//   element.innerHTML = _.join(['Hello', 'we222bpackssssss'], ' ');
//
//   return (
//     <div>
//       hello wosssrld2
//       {/*<Hello />*/}
//     </div>
//   );
// }
//
// getComponent().then((Comp) => {
//   ReactDOM.render(<Comp />, document.getElementById('root'));
// });

const App = () => {
  const [display, setDisplay] = useState(false);
  // console.log('来了吗？', b);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        hello worldliness2
        <button onClick={() => setDisplay(!display)}>hahah</button>
        {display && <OtherComponent />}
      </div>
    </Suspense>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
