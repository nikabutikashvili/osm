import { Button, Form, Input, Typography } from "antd";
const { Title } = Typography;

const SearchBox = ({ onSubmit }) => {
  const onFinish = (values) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ flex: "100px" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title level={1}>Please insert coordinates</Title>
      <Form.Item
        label="Min longitude"
        name="min_lon"
        rules={[
          () => ({
            required: true,
            message: "Please input minimum longitude!",
          }),
          {
            pattern: /^\d*\.?\d*$/,
            message: "Value must contain just number",
          },
        ]}
      >
        <Input name="min_lon" />
      </Form.Item>

      <Form.Item
        label="Min latitude"
        name="min_lat"
        rules={[
          { required: true, message: "Please input minimum latitude!" },
          {
            pattern: /^\d*\.?\d*$/,
            message: "Value must contain just number",
          },
        ]}
      >
        <Input name="min_lat" />
      </Form.Item>

      <Form.Item
        label="Max longitude"
        name="max_lon"
        rules={[
          { required: true, message: "Please input maximum longitude!" },
          {
            pattern: /^\d*\.?\d*$/,
            message: "Value must contain just number",
          },
        ]}
      >
        <Input name="max_lon" />
      </Form.Item>

      <Form.Item
        label="Max latitude"
        name="max_lat"
        rules={[
          { required: true, message: "Please input maximum latitude!" },
          {
            pattern: /^\d*\.?\d*$/,
            message: "Value must contain just number",
          },
        ]}
      >
        <Input name="max_lat" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchBox;
