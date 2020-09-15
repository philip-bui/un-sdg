import axios from "axios";

export const getV1TargetList = (includeChildren = false) =>
  axios.get(
    `https://unstats.un.org/SDGAPI/v1/sdg/Target/List?includechildren=${includeChildren}`
  );

export const filterV1TargetListForGoal = (targetList, goal) =>
  targetList.filter((target) => target.goal === goal);

export const getV1TargetListForGoal = async (goal) => {
  const response = await getV1TargetList();
  return filterV1TargetListForGoal(response.data, goal);
};
