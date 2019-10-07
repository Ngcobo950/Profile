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
			<Route path="/cv" exact component={CV}/>
			<Route path="/projects" exact component={Projects}/>
			<Route path="/about" exact component={About}/>

		</Switch>

	</BrowserRouter>
	)