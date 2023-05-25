import { render } from "@testing-library/react";

import Navbar from "./Navbar";

describe("Navbar", () => {
  it("Renders all the nav anchors", () => {
    const { getByRole } = render(<Navbar />);

    expect(getByRole("link", { name: "Create a new meter"})).toBeVisible();
    expect(getByRole("link", { name: "Home"})).toBeVisible();
  });
});
