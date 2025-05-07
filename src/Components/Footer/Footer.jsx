import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <FooterOne />

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <FooterTwo />
      </div>
    </footer>
  );
}
