import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from './components/Users'

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Users />
					</Route>
					<Route path="/api/users?page=:index">
						<Users />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
