import './global.css';
import * as classes from './style.module.scss';
import legacyClasses from './legacy/index.css';

function render() {
  document.getElementById('root').innerHTML = `
	<div class=${classes['container-main']}>container main</div>
	<div class=${legacyClasses.legacyMain}>legacy main</div>
`;
}

render();
