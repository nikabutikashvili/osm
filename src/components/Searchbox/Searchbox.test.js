import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchbox from "./index";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

test("render min lon input and check validation", async () => {
  render(<Searchbox />);
  const input = screen.getByLabelText(/min longitude/i);

  userEvent.clear(input);
  userEvent.type(input, "min");
  await waitFor(() => {
    const errorText = screen.getByText(/value must contain just number/i);
    expect(errorText).toBeInTheDocument();
  });

  userEvent.clear(input);
  userEvent.type(input, "min");
  userEvent.clear(input);
  await waitFor(() => {
    const errorText = screen.getByText(/please input minimum longitude!/i);
    expect(errorText).toBeInTheDocument();
  });
});

test("render min lat input and check validation", async () => {
  render(<Searchbox />);
  const input = screen.getByLabelText(/min latitude/i);

  userEvent.clear(input);
  userEvent.type(input, "min");
  await waitFor(() => {
    const errorText = screen.getByText(/value must contain just number/i);
    expect(errorText).toBeInTheDocument();
  });

  userEvent.clear(input);
  userEvent.type(input, "min");
  userEvent.clear(input);
  await waitFor(() => {
    const errorText = screen.getByText(/please input minimum latitude!/i);
    expect(errorText).toBeInTheDocument();
  });
});

test("render max lon input and check validation", async () => {
  render(<Searchbox />);
  const input = screen.getByLabelText(/max longitude/i);

  userEvent.clear(input);
  userEvent.type(input, "min");
  await waitFor(() => {
    const errorText = screen.getByText(/value must contain just number/i);
    expect(errorText).toBeInTheDocument();
  });

  userEvent.clear(input);
  userEvent.type(input, "min");
  userEvent.clear(input);
  await waitFor(() => {
    const errorText = screen.getByText(/please input maximum longitude!/i);
    expect(errorText).toBeInTheDocument();
  });
});

test("render max lat input and check validation", async () => {
  render(<Searchbox />);
  const input = screen.getByLabelText(/max latitude/i);

  userEvent.clear(input);
  userEvent.type(input, "min");
  await waitFor(() => {
    const errorText = screen.getByText(/value must contain just number/i);
    expect(errorText).toBeInTheDocument();
  });

  userEvent.clear(input);
  userEvent.type(input, "min");
  userEvent.clear(input);
  await waitFor(() => {
    const errorText = screen.getByText(/please input maximum latitude!/i);
    expect(errorText).toBeInTheDocument();
  });
});

test("check on submit call", async () => {
  const onSubmit = jest.fn();

  const obj = {
    max_lat: "41.2",
    max_lon: "23.1",
    min_lat: "41",
    min_lon: "23",
  };

  render(<Searchbox onSubmit={onSubmit} />);

  const minLon = screen.getByLabelText(/min longitude/i);
  const minLat = screen.getByLabelText(/min latitude/i);
  const maxLon = screen.getByLabelText(/max longitude/i);
  const maxLat = screen.getByLabelText(/max latitude/i);
  const submitButton = screen.getByRole("button", {
    name: /submit/i,
  });

  userEvent.type(minLon, obj.min_lon);
  userEvent.type(minLat, obj.min_lat);
  userEvent.type(maxLon, obj.max_lon);
  userEvent.type(maxLat, obj.max_lat);
  userEvent.click(submitButton);

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledWith(obj);
  });

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
