import ReactApexChart from 'react-apexcharts'
import moment from "moment";

export const CandleStickChart = ({ data }) => {
	return (
		<ReactApexChart
			options={{
				chart: {
					height: 350,
					type: 'candlestick',
				},
				title: {
					text: 'X-Axis = Days , Y-Axis = Price',
					align: 'left'
				},
				tooltip: {
					enabled: true,
				},
				xaxis: {
					tooltip: {
						enabled: true
					}
				},
				yaxis: {
					tooltip: {
						enabled: true
					}
				}

			}}
			series={
				[data]
			}
			type="candlestick"
			height={350}
		/>
	)
}
