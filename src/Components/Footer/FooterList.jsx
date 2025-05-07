import ButtonAndAnchor from "../CommonComponents/ButtonAndAnchor";
import HThree from "../CommonComponents/HThree";
import List from "../CommonComponents/List";

export default function FooterList({ name, list }) {
  return (
    <div>
      <HThree style="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {name}
      </HThree>
      <ul className="text-gray-500 dark:text-gray-400">
        {list.map((currentValue, index) => {
          return (
            <List style="mb-4" key={index}>
              <ButtonAndAnchor href="#" style=" hover:underline">
                {currentValue}
              </ButtonAndAnchor>
            </List>
          );
        })}
      </ul>
    </div>
  );
}
