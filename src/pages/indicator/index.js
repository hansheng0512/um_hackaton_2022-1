import {MainLayout} from "../../layout";
import {Button, Form, Input} from "antd";
import {useState} from "react";

export const IndicatorPage = () => {

	const [showResult, setShowResult] = useState(false);

	return (
		<MainLayout>
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 18 }}
				onFinish={() => setShowResult(true)}
				autoComplete="off"
			>
				<Form.Item
					label="RSI"
					name="rsi"
					rules={[{ required: true, message: 'Please input your RSI!' }]}
				>
					<Input type={"number"} />
				</Form.Item>

				<Form.Item
					label="Stochastic Oscillator"
					name="stochastic_oscillator"
					rules={[{ required: true, message: 'Please input your Stochastic Oscillator!' }]}
				>
					<Input type={"number"} />
				</Form.Item>

				<Form.Item
					label="MACD"
					name="macd"
					rules={[{ required: true, message: 'Please input your MACD!' }]}
				>
					<Input type={"number"} />
				</Form.Item>

				<div style={{ textAlign: 'center' }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</div>

				{
					showResult && (
						<>
							<Form.Item
								label="Result"
								name="result"
							>
								<Input type={"number"} disabled={true} />
							</Form.Item>
						</>
					)
				}
			</Form>
		</MainLayout>
	);
}
