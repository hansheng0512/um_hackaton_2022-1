import {MainLayout} from "../../layout";
import {Button, Divider, Form, Input} from "antd";
import {useState} from "react";

export const IndicatorPage = () => {

	const [showResult, setShowResult] = useState(false);

	const [form] = Form.useForm();

	const onFinish = () => {

		let random_boolean_value = Math.random() < 0.5;

		if (random_boolean_value) {

			form.setFieldsValue({
				result: "UP",
			})
		} else {
			form.setFieldsValue({
				result: "DOWN",
			})
		}

		setShowResult(true);
	}

	return (
		<MainLayout>
			<Form
				form={form}
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 18 }}
				onFinish={onFinish}
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
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Predict
						</Button>
					</Form.Item>
				</div>

				<Divider />

				{
					showResult && (
						<>
							<Form.Item
								label="Result"
								name="result"
							>
								<Input disabled={true} />
							</Form.Item>
						</>
					)
				}
			</Form>
		</MainLayout>
	);
}
