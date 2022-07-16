import {MainLayout} from "../../layout";
import {Select, Space} from "antd";
import {CandleStickChart} from "../../component/charts/candleStick";
import {useState} from "react";

export const Forecast90Page = () => {

	const [showChart, setShowChart] = useState(false);

	return (
		<MainLayout>

			<Space style={{ width: '100%' }} direction={"vertical"}>
				<Select defaultValue="OCNCASH" style={{ width: 120 }} onChange={(value) => setShowChart(true)}>
					<Select.Option value="OCNCASH">OCNCASH</Select.Option>
					<Select.Option value="KGB">KGB</Select.Option>
					<Select.Option value="SALUTE">SALUTE</Select.Option>
					<Select.Option value="PARKSON">PARKSON</Select.Option>
					<Select.Option value="UTDPLT">UTDPLT</Select.Option>
					<Select.Option value="KRONO">KRONO</Select.Option>
					<Select.Option value="SAM">SAM</Select.Option>
					<Select.Option value="CAPITALA">CAPITALA</Select.Option>
					<Select.Option value="HPMT">HPMT</Select.Option>
					<Select.Option value="BSTEAD">BSTEAD</Select.Option>
					<Select.Option value="PADINI">PADINI</Select.Option>
					<Select.Option value="EUPE">EUPE</Select.Option>
					<Select.Option value="APM">APM</Select.Option>
					<Select.Option value="AHEALTH">AHEALTH</Select.Option>
					<Select.Option value="WELLCAL">WELLCAL</Select.Option>
					<Select.Option value="OCK">OCK</Select.Option>
					<Select.Option value="TONGHER">TONGHER</Select.Option>
					<Select.Option value="ICAP">ICAP</Select.Option>
					<Select.Option value="SURIA">SURIA</Select.Option>
					<Select.Option value="BIOHLDG">BIOHLDG</Select.Option>
					<Select.Option value="LUXCHEM">LUXCHEM</Select.Option>
					<Select.Option value="MKH">MKH</Select.Option>
				</Select>

				{
					showChart && (
						<CandleStickChart />
					)
				}
			</Space>

		</MainLayout>
	)
}
