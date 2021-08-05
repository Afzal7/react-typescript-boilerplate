import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import { Counter } from './components/counter/Counter';
import { Layout } from './components/shared/layout';
import './styles/App.scss';

function App(): React.ReactElement {
	return (
		<Layout>
			<Router>
				<Switch>
					<Route exact path='/'>
						<div className='App'>
							<div className='App-header'>
								<img src={logo} className='App-logo' alt='logo' />
								<Counter />
							</div>
						</div>
					</Route>
				</Switch>
			</Router>
		</Layout>
	);
}

export default App;
