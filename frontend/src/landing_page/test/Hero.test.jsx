import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../home/Hero";


describe("Hero Component", () => {

  test("renders hero heading", () => {

    render(<Hero />);

    const heading = screen.getByText("Invest in Everything");

    expect(heading).toBeInTheDocument();

  });


  test("renders hero image", () => {

    render(<Hero />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();

  });


  test("renders signup button", () => {

    render(<Hero />);

    const button = screen.getByText("Signup");

    expect(button).toBeInTheDocument();

  });

});