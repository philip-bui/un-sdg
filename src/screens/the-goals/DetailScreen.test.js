import "react-native";
import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import DetailScreen from "./DetailScreen";

import Goal13 from "../../../assets/goal_13.png";

import { getV1TargetListForGoal } from "../../services/un-sdg-client";

jest.mock("../../services/un-sdg-client", () => ({
  getV1TargetListForGoal: jest.fn().mockReturnValue(
    Promise.resolve([
      {
        goal: "13",
        code: "13.1",
        title:
          "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
        description:
          "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
        uri: "/v1/sdg/Target/13.1",
        indicators: null,
      },
    ])
  ),
}));

describe("DetailScreen", () => {
  it("calls getV1TargetListForGoal", () => {
    render(<DetailScreen route={{ params: { image: Goal13 } }} />);

    expect(getV1TargetListForGoal).toHaveBeenCalledWith("13");
    expect(getV1TargetListForGoal).toHaveBeenCalledTimes(1);
  });

  it("renders target list", async () => {
    const { getByText } = render(
      <DetailScreen route={{ params: { image: Goal13 } }} />
    );

    await waitFor(() =>
      expect(
        getByText(
          "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries"
        )
      ).toBeTruthy()
    );
  });
});
