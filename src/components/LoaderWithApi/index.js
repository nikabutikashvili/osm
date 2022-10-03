import { Alert } from "antd";
import Loader from "../Loader";

const LoaderWithApi = ({ loading, render, error }) => {
  return loading ? (
    <Loader />
  ) : error ? (
    <Alert type="error" message={error} />
  ) : (
    render()
  );
};

export default LoaderWithApi;
