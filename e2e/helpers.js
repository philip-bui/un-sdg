export const navigateToTheGoalsTab = async () => {
  const theGoalsTab = await element(by.id("the-goals-tab"));
  await theGoalsTab.tap();
};

export const navigateToUNSDG13 = async () => {
  await waitFor(element(by.id("the-goals-target-13")))
    .toBeVisible()
    .whileElement(by.id("the-goals-scrollview"))
    .scroll(150, "down");
  const theGoalsTarget13 = await element(by.id("the-goals-target-13"));
  await theGoalsTarget13.tap();
};
