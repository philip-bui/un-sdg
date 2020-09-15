import Goal01 from "../../assets/goal_01.png";
import Goal02 from "../../assets/goal_02.png";
import Goal03 from "../../assets/goal_03.png";
import Goal04 from "../../assets/goal_04.png";
import Goal05 from "../../assets/goal_05.png";
import Goal06 from "../../assets/goal_06.png";
import Goal07 from "../../assets/goal_07.png";
import Goal08 from "../../assets/goal_08.png";
import Goal09 from "../../assets/goal_09.png";
import Goal10 from "../../assets/goal_10.png";
import Goal11 from "../../assets/goal_11.png";
import Goal12 from "../../assets/goal_12.png";
import Goal13 from "../../assets/goal_13.png";
import Goal14 from "../../assets/goal_14.png";
import Goal15 from "../../assets/goal_15.png";
import Goal16 from "../../assets/goal_16.png";
import Goal17 from "../../assets/goal_17.png";

export default class Goal {
  constructor({ id, title, image, backgroundColor }) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.backgroundColor = backgroundColor;
  }

  static values = [
    new Goal({ id: "1", image: Goal01 }),
    new Goal({ id: "2", image: Goal02 }),
    new Goal({ id: "3", image: Goal03 }),
    new Goal({ id: "4", image: Goal04 }),
    new Goal({ id: "5", image: Goal05 }),
    new Goal({ id: "6", image: Goal06 }),
    new Goal({ id: "7", image: Goal07 }),
    new Goal({ id: "8", image: Goal08 }),
    new Goal({ id: "9", image: Goal09 }),
    new Goal({ id: "10", image: Goal10 }),
    new Goal({ id: "11", image: Goal11 }),
    new Goal({ id: "12", image: Goal12 }),
    new Goal({
      id: "13",
      title: "Climate Action",
      image: Goal13,
      backgroundColor: "rgb(50, 109, 52)",
    }),
    new Goal({ id: "14", image: Goal14 }),
    new Goal({ id: "15", image: Goal15 }),
    new Goal({ id: "16", image: Goal16 }),
    new Goal({ id: "17", image: Goal17 }),
  ];
}
