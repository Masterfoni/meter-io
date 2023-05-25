import { render } from "@testing-library/react";

import Chip from "./Chip";

describe("Chip", () => {
  it("Renders Chip correctly", () => {
    const { getByText } = render(<Chip variant="positive">Impositive</Chip>);

    const chipComponent = getByText("Impositive");

    expect(chipComponent).toBeVisible();
  });
});
