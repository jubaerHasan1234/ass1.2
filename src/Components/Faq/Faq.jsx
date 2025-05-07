import ButtonAndAnchor from "../CommonComponents/ButtonAndAnchor";
import BottomMark from "../SvgComponents/BottomMark";
import TopMark from "../SvgComponents/TopMark";
import FaqButton from "./FaqButton";

export default function Faq() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <FaqButton
              buttonStyle={
                "flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              }
              h3Id={"accordion-flush-heading-1"}
              dat={"#accordion-flush-body-1"}
              ae={"true"}
              ac={"accordion-flush-body-1"}
              hThreeTitle={"Can I use Landwind in open-source projects?"}
              descriptionId={"accordion-flush-body-1"}
              descriptionStyle={""}
              Svg={<TopMark />}
              description1={`Landwind is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.`}
              description2={`Check out this guide to learn how to `}
              description3={`get started`}
              description4={`and start developing websites even faster with components on top of
            Tailwind CSS.`}
            />

            <FaqButton
              h3Id={"accordion-flush-heading-2"}
              buttonStyle={
                "flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              }
              dat={"#accordion-flush-body-2"}
              ae={"false"}
              ac={"accordion-flush-body-2"}
              hThreeTitle={`Is there a Figma file available?`}
              Svg={<BottomMark />}
              descriptionId={"accordion-flush-body-2"}
              al={"accordion-flush-heading-2"}
              descriptionStyle={"hidden"}
              description1={` Landwind is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.`}
              description2={`Check out the`}
              description3={`Figma design system`}
              description4={`based on the utility classes from Tailwind CSS and components
                  from Landwind.`}
            />
            <FaqButton
              h3Id={"accordion-flush-heading-3"}
              buttonStyle={
                "flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              }
              dat={"#accordion-flush-body-3"}
              ae={"false"}
              ac={"accordion-flush-body-3"}
              hThreeTitle={`What are the differences between Landwind and Tailwind UI?`}
              Svg={<BottomMark />}
              descriptionId={"accordion-flush-body-3"}
              al={"accordion-flush-heading-3"}
              descriptionStyle={"hidden"}
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Landwind
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Landwind relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Landwind, Landwind
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <ButtonAndAnchor
                      href="#"
                      style={
                        "text-purple-600 dark:text-purple-500 hover:underline"
                      }
                    >
                      Landwind Pro
                    </ButtonAndAnchor>
                  </li>
                  <li>
                    <ButtonAndAnchor
                      href="#"
                      style={
                        "text-purple-600 dark:text-purple-500 hover:underline"
                      }
                    >
                      Tailwind UI
                    </ButtonAndAnchor>
                  </li>
                </ul>
              </div>
            </FaqButton>

            <FaqButton
              h3Id={"accordion-flush-heading-4"}
              buttonStyle={
                "flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              }
              dat={"#accordion-flush-body-4"}
              ae={"false"}
              ac={"accordion-flush-body-4"}
              hThreeTitle={`What about browser support?`}
              Svg={<BottomMark />}
              descriptionId={"accordion-flush-body-4"}
              al={"accordion-flush-heading-4"}
              descriptionStyle={"hidden"}
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Landwind
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Landwind relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Landwind, Landwind
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="text-purple-600 dark:text-purple-500 hover:underline"
                    >
                      Landwind Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-purple-600 dark:text-purple-500 hover:underline"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </FaqButton>
          </div>
        </div>
      </div>
    </section>
  );
}
