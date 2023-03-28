import 'modern-normalize/modern-normalize.css';
import ReactDOM from 'react-dom';
import { FocusRoot } from '@please/lrud';
import './index.css';
import App from './app';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDOM.render(
  <FocusRoot>
    <App />
  </FocusRoot>,
  document.getElementById('root')
);
