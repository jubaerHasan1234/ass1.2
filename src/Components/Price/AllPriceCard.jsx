import { priceData } from "../../data/data";
import PriceCard from "./PriceCard";

export default function AllPriceCard() {
  return (
    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      {priceData.map((data, index) => {
        return (
          <PriceCard
            title={data.title}
            paragraph={data.paragrap}
            list={data.list}
            price={data.price}
            key={index}
          />
        );
      })}
    </div>
  );
}
