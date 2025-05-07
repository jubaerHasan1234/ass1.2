import heroImg from "../../assets/hero.png";
import Content from "./Content";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <Content />
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
    </section>
  );
}
