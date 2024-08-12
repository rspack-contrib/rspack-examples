import './index.css';
import { Editor } from './components/Editor';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>,
);
