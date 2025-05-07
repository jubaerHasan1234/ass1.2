import ButtonAndAnchor from "../CommonComponents/ButtonAndAnchor";
import HThree from "../CommonComponents/HThree";
import List from "../CommonComponents/List";
import PTag from "../CommonComponents/PTag";
import GreenCheck from "../SvgComponents/GreenCheck";

export default function PriceCard({ list, paragraph, title, price }) {
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <HThree style={"mb-4 text-2xl font-semibold"}>{title}</HThree>
      <PTag style={"font-light text-gray-500 sm:text-lg dark:text-gray-400"}>
        {paragraph}
      </PTag>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        {list.map((list, index) => {
          return (
            <List style={"flex items-center space-x-3"} key={index}>
              <GreenCheck />
              <span>{list}</span>
            </List>
          );
        })}
      </ul>
      <ButtonAndAnchor
        href="#"
        style={
          "text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        }
      >
        Get started
      </ButtonAndAnchor>
    </div>
  );
}
