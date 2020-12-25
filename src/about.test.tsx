import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import About from "src/pages/about";

// Mock for window
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

it("renders without crashing", () => {
  render(<About />);
  expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
});

it("should have the correct title", async () => {
  render(<About />);

  expect(screen.getByText("Technologies")).toBeTruthy();
});

it("should have a nav link", async () => {
  render(<About />);

  expect(screen.getByText("Archive").getAttribute("href")).toBe("/archive");
});

it("shouldn't render mobile nav", async () => {
  render(<About />);

  expect(screen.queryByLabelText("mobile-nav")).toBeNull();
});

it("should render the desktop viewport navigation", async () => {
  render(<About />);

  expect(screen.queryByLabelText("desktop-nav")).toBeTruthy();
});

afterEach(cleanup);
