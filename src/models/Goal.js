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
  constructor({ title, image, backgroundColor }) {
    this.title = title;
    this.image = image;
    this.backgroundColor = backgroundColor;
  }

  static values = [
    new Goal({ image: Goal01 }),
    new Goal({ image: Goal02 }),
    new Goal({ image: Goal03 }),
    new Goal({ image: Goal04 }),
    new Goal({ image: Goal05 }),
    new Goal({ image: Goal06 }),
    new Goal({ image: Goal07 }),
    new Goal({ image: Goal08 }),
    new Goal({ image: Goal09 }),
    new Goal({ image: Goal10 }),
    new Goal({ image: Goal11 }),
    new Goal({ image: Goal12 }),
    new Goal({
      title: "Climate Action",
      image: Goal13,
      backgroundColor: "rgb(50, 109, 52)",
    }),
    new Goal({ image: Goal14 }),
    new Goal({ image: Goal15 }),
    new Goal({ image: Goal16 }),
    new Goal({ image: Goal17 }),
  ];
}
