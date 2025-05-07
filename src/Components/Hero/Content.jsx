import ButtonAndAnchor from "../CommonComponents/ButtonAndAnchor";
import PTag from "../CommonComponents/PTag";
import Figma from "../SvgComponents/Figma";
import GitHub from "../SvgComponents/GitHub";
export default function Content() {
  return (
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
        Building digital <br />
        products &amp; brands.
      </h1>
      <PTag
        style={
          "max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        }
      >
        This free and open-source landing page template was built using the
        utility classes from{" "}
        <ButtonAndAnchor href="#" style={"hover:underline"}>
          Tailwind CSS
        </ButtonAndAnchor>{" "}
        and based on the components from the Flowbite Library and the Blocks
        System.
      </PTag>

      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <ButtonAndAnchor
          style={
            "inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          }
          href="#"
        >
          <GitHub />
          View on GitHub
        </ButtonAndAnchor>
        <ButtonAndAnchor
          style={
            "inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          }
        >
          <Figma />
          Get Figma file
        </ButtonAndAnchor>
      </div>
    </div>
  );
}
