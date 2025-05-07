import { reactionData } from "../../data/data";
import HThree from "../CommonComponents/HThree";
import PTag from "../CommonComponents/PTag";

export default function ReactionCard() {
  return (
    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
      {reactionData.map((reaction, index) => {
        return (
          <div key={index}>
            <reaction.svg />
            <HThree style={"mb-2 text-2xl font-bold dark:text-white"}>
              {reaction.title}
            </HThree>
            <PTag style={"font-light text-gray-500 dark:text-gray-400"}>
              {reaction.paragrap}
            </PTag>
          </div>
        );
      })}
    </div>
  );
}
