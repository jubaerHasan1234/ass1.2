import AllPriceCard from "./AllPriceCard";
import Description from "./Description";

export default function Price() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <Description />
        <AllPriceCard />
      </div>
    </section>
  );
}
