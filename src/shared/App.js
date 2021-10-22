import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import './App.css';
import Main from '../pages/Main';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Header from '../components/Header';
import Footer from '../components/footer';
function App() {
	return (
		<>
			<Header></Header>
			<ConnectedRouter history={history}>
				<Route path="/" exact component={Main} />
				<Route path="/cart" exact component={Cart} />
				<Route path="/login" exact component={Login} />
				<Route path="/signup" exact component={Signup} />
			</ConnectedRouter>
			<Footer />
		</>
	);
}

export default App;
