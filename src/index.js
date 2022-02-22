import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TextArea from './textArea.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
function FormData() {
  return (<TextArea />);
};

ReactDOM.render(<FormData />, document.getElementById('root'));


