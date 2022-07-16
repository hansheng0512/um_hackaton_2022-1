import "./App.css";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import ChatBot from 'react-simple-chatbot';


import homeupt from "./component/homeupt";
import About from "./component/About";
import ContactUs from "./component/Contact";
import comingsoon from "./component/comingsoon";
import login from "./component/login"
import KommunicateChat from "./component/chat";

import {MainLayout} from "./layout";
import {CandleStickChart} from "./component/charts/candleStick";
import {IndicatorPage} from "./pages/indicator";
import {Forecast90Page} from "./pages/dashboard";
import Dashboard from "./component/dashboard";
import {LoginPage} from "./pages/login/login";

const Dash = () => {
	return (
		<MainLayout>
			<CandleStickChart/>
		</MainLayout>
	)
}

const Tradingview = () => {
	return (
		<MainLayout>
			<Dashboard/>
		</MainLayout>
	)
}

const steps = [
	{
		id: '0',
		message: 'Hello how are you ?',
		end: true
	}
];

function chatbot() {
	return (
		<div className="App">
			<h1>Welcome to 5Jamz Chatbot</h1>
			<ChatBot steps={steps}/>
		</div>
	);
}

function lex() {
	return (
		<div>
			<KommunicateChat/>
		</div>
	);
}


function App() {
	return (
		<>

			<Router>
				<Switch>

					<Route exact path="/" component={homeupt}/>

					<Route exact path="/about" component={About}/>

					<Route exact path="/contactus" component={ContactUs}/>

					<Route exact path="/mainpage" component={Forecast90Page}/>

					<Route exact path="/indicator" component={IndicatorPage}/>

					<Route exact path="/trading" component={Tradingview}/>

					<Route exact path="/chatbot" component={lex}/>

					<Route exact path="/comingsoon" component={comingsoon}/>

					<Route exact path="/login" component={LoginPage}/>

					<Redirect to="/"/>

				</Switch>
			</Router>
		</>
	);
}

export default App;



