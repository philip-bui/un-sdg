import { navigateToTheGoalsTab, navigateToUNSDG13 } from "../../helpers";

describe("Detail Screen", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await navigateToTheGoalsTab();
    await navigateToUNSDG13();
  });

  it("should show UN SDG 13 Features", async () => {
    await expect(element(by.text("13.1"))).toBeVisible();
  });
});
