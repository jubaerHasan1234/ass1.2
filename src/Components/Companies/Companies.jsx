import { companiesData } from "../../data/data";
import ButtonAndAnchor from "../CommonComponents/ButtonAndAnchor";
ButtonAndAnchor;
export default function Companies() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {companiesData.map((Company, index) => {
            return (
              <ButtonAndAnchor
                href="#"
                style={"flex items-center lg:justify-center"}
                key={index}
              >
                <Company />
              </ButtonAndAnchor>
            );
          })}
        </div>
      </div>
    </section>
  );
}
