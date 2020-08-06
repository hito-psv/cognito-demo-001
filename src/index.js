import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
      identityPoolId: 'ap-northeast-1:86cb43d0-b395-423d-872b-ee4c1ae80c76',
      region: 'ap-northeast-1',
      userPoolId: 'ap-northeast-1_pTBR7ClMx',
      userPoolWebClientId: '1nmiq1alt70evn035kbbab3thu'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
