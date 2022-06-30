import {MainLayout} from "../../layout";
import {CandleStickChart} from "../../components/charts/candleStick";

export const Dashboard = () => {
	return (
		<MainLayout>
			<CandleStickChart />
		</MainLayout>
	)
}
