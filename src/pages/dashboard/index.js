import {MainLayout} from "../../layout";
import {Select, Space, Input, Button, Form} from "antd";
import {CandleStickChart} from "../../component/charts/candleStick";
import {useState} from "react";

export const Forecast90Page = () => {

	const [form] = Form.useForm()

	const [showChart, setShowChart] = useState(false);

	const onFinish = (values) => {
		console.log(values)
	}

	return (
		<MainLayout>
			<Space style={{ width: '100%' }} direction={"vertical"}>

				<Form form={form} onFinish={onFinish}>
					<Space style={{ width: '100%' }} direction={"horizontal"}>
						<Form.Item name={"stockType"}>
							<Select defaultValue="OCNCASH" style={{ width: 120 }} onChange={(value) => {}}>
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
						</Form.Item>

						<Form.Item name={"predictDay"}>
							<Input type={"number"} placeholder={"Days want to forecast"} />
						</Form.Item>

						<Button onClick={() => setShowChart(true)}>Predict</Button>

					</Space>
				</Form>

				{
					showChart && (
						<CandleStickChart />
					)
				}
			</Space>
		</MainLayout>
	)
}
