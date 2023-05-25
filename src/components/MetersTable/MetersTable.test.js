import { render } from "@testing-library/react";

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            push: jest.fn(),
        };
    },
}));

import MetersTable from "./MetersTable";

const MOCK_METERS = [
    {
        id: '33333',
        display_name: 'Mocked display',
        api_name: 'MOCKED_API_NAME',
        active: true,
        used_for_billing: true,
        type: 'sum'
    },
    {
        id: '4444',
        display_name: 'Mocked display 2',
        api_name: 'MOCKED_API_NAME_2',
        active: true,
        used_for_billing: false,
        type: 'max'
    }
];

describe("MetersTable", () => {
  it("Renders MetersTable with data", () => {
    const { getByText, getAllByText } = render(
      <MetersTable meters={MOCK_METERS} />
    );

    expect(getByText("Mocked display")).toBeVisible();
    expect(getByText("Mocked display 2")).toBeVisible();
    expect(getAllByText("Active")).toHaveLength(3);
  });
});
