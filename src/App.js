import "./App.css";
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route,Redirect,useHistory, useEffect} from "react-router-dom";

import homeupt from "./component/homeupt";
import About from "./component/About";
import ContactUs from "./component/Contact";
import Dashboard from "./component/dashboard";

import { MainLayout } from "./layout";
import { CandleStickChart } from "./component/charts/candleStick";

const Dash = () => {
  return (
    <MainLayout>
      <CandleStickChart/>
    </MainLayout>
  )
}

const Tradingview = () => {
	return (
		<div className="AppContainer">
        <Dashboard />
      </div>
	)
}



function App() {
return (
	<>

	<Router>
		<Switch>
		<Route exact path="/" component={homeupt} />
		
		<Route exact path="/about" component={About} />
			
		<Route exact path="/contactus" component={ContactUs} />

    	<Route exact path="/mainpage" component={Dash} />

		<Route exact path="/trading" component={Tradingview} />
			
		<Redirect to="/" />

		</Switch>
	</Router>
	</>
);
}

export default App;



