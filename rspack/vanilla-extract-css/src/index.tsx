import { createRoot } from 'react-dom/client';
import './global.css';
import { App } from './App';

const root = document.createElement('div');
document.body.appendChild(root);

createRoot(root).render(<App />);
