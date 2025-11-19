import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login Component (Jasmine + Karma)", () => {
  it("renders all input fields and login button", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // getByPlaceholderText will throw if not found which causes the test to fail
    expect(screen.getByPlaceholderText(/Name/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/Email/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/Password/i)).toBeDefined();
    expect(screen.getByRole("button", { name: /Login/i })).toBeDefined();
  });

  it("shows validation errors on empty submit", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    expect(screen.getByText("Name is required")).toBeDefined();
    expect(screen.getByText("Enter a valid email")).toBeDefined();
    expect(screen.getByText("Password must be at least 6 characters")).toBeDefined();
  });

  it("submits form with valid inputs (no validation errors)", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // After a successful submit the validation messages should not be present
    expect(screen.queryByText("Name is required")).toBeNull();
    expect(screen.queryByText("Enter a valid email")).toBeNull();
    expect(screen.queryByText("Password must be at least 6 characters")).toBeNull();
  });
});
