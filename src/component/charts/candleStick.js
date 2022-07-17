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
					text: 'CandleStick Chart - Category X-axis',
					align: 'left'
				},
				tooltip: {
					enabled: true,
				},
				xaxis: {
					type: 'category',
					labels: {
						formatter: function (val) {
							return moment(val).format('MMM DD HH:mm')
						}
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
