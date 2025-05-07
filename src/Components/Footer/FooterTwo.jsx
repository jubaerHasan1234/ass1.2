import logo from "../../assets/logo.svg";
import { footerDataTwo } from "../../data/data";
import ButtonAndAnchor from "../CommonComponents/ButtonAndAnchor";
import List from "../CommonComponents/List";

export default function FooterTwo() {
  return (
    <div className="text-center">
      <ButtonAndAnchor
        href="#"
        style="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          src={logo}
          className="h-6 mr-3 sm:h-9"
          alt="Learn with Sumit Logo"
        />
        Learn with Sumit{" "}
      </ButtonAndAnchor>
      <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
        © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
        <ButtonAndAnchor
          href="#"
          target="_blank"
          style="text-purple-600 hover:underline dark:text-purple-500"
        >
          Flowbite
        </ButtonAndAnchor>{" "}
        and{" "}
        <ButtonAndAnchor
          href="#"
          style="text-purple-600 hover:underline dark:text-purple-500"
        >
          Tailwind CSS
        </ButtonAndAnchor>
        .
      </span>
      <ul className="flex justify-center mt-5 space-x-5">
        {footerDataTwo.map((Svg, index) => {
          return (
            <List key={index}>
              <ButtonAndAnchor
                style={
                  "text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                }
                href="#"
              >
                <Svg />
              </ButtonAndAnchor>
            </List>
          );
        })}
      </ul>
    </div>
  );
}
