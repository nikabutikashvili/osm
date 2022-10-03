import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="spinner">
      <Spin size="large" />
      <h2>Loading</h2>
    </div>
  );
};

export default Loader;
