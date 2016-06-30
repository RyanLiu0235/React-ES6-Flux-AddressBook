import React from 'react';
import { render } from 'react-dom';
import App from './src/components/App';
import './public/less/style';

render(
	<App />,
	document.getElementById('addressBook')
	)