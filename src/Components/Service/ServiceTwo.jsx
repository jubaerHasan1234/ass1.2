import feature from "../../assets/features/feature-2.png";
import { serviceTwoData } from "../../data/data";
import HTwo from "../CommonComponents/HTwo";
import List from "../CommonComponents/List";
import PTag from "../CommonComponents/PTag";
import CheckMark from "../SvgComponents/CheckMark";
export default function ServiceTwo() {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <img
        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
        src={feature}
        alt="feature image 2"
      />
      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
        <HTwo
          style={
            "mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          }
        >
          {`We invest in the world’s potential`}
        </HTwo>
        <PTag style={"mb-8 font-light lg:text-xl"}>
          {`Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.`}
        </PTag>

        <ul
          role="list"
          className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
        >
          {serviceTwoData.map((list, index) => {
            return (
              <List style={"flex space-x-3"} key={index}>
                <CheckMark />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  {list}
                </span>
              </List>
            );
          })}
        </ul>
        <PTag style={"font-light lg:text-xl"}>
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.
        </PTag>
      </div>
    </div>
  );
}
