import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import CV from './CV';
import Projects from './Projects';
import About from './About';

//creating the routes for the page that we are creating
export default () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/CV" exact component={CV}/>
			<Route path="/Projects" exact component={Projects}/>
			<Route path="/About" exact component={About}/>

		</Switch>

	</BrowserRouter>
)