import ButtonAndAnchor from "../CommonComponents/ButtonAndAnchor";
import HTwo from "../CommonComponents/HTwo";
import PTag from "../CommonComponents/PTag";

export default function Trial() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <HTwo style="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Start your free trial today
          </HTwo>
          <PTag style="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Try Landwind Platform for 30 days. No credit card required.
          </PTag>
          <ButtonAndAnchor
            href="#"
            style="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            Free trial for 30 days
          </ButtonAndAnchor>
        </div>
      </div>
    </section>
  );
}
