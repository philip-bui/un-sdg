import {
  getV1TargetListForGoal,
  filterV1TargetListForGoal,
} from "./un-sdg-client";

describe("un-sdg-client", () => {
  it("getV1TargetListForGoal", async () => {
    const targetList = await getV1TargetListForGoal("13");
    expect(targetList.length).toBeGreaterThan(0);
  });

  it("filterV1TargetListForGoal", () => {
    const goal131 = {
      goal: "13",
      code: "13.1",
      title:
        "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
      description:
        "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
      uri: "/v1/sdg/Target/13.1",
      indicators: null,
    };
    const goal13b = {
      goal: "13",
      code: "13.b",
      title:
        "Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities",
      description:
        "Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities",
      uri: "/v1/sdg/Target/13.b",
      indicators: null,
    };
    const targetList = [
      {
        goal: "1",
        code: "1.3",
        title:
          "Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable",
        description:
          "Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable",
        uri: "/v1/sdg/Target/1.3",
        indicators: null,
      },
      goal131,
      {
        goal: "3",
        code: "3.1",
        title:
          "By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births",
        description:
          "By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births",
        uri: "/v1/sdg/Target/3.1",
        indicators: null,
      },
      goal13b,
    ];

    const filteredTargetList = filterV1TargetListForGoal(targetList, "13");
    expect(filteredTargetList).toHaveLength(2);
    expect(filteredTargetList).toContain(goal131);
    expect(filteredTargetList).toContain(goal13b);
  });
});
