import { footerDataOne } from "../../data/data";
import FooterList from "./FooterList";

export default function FooterOne() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
      {footerDataOne.map((currentValue, index) => {
        return (
          <FooterList
            name={currentValue.name}
            list={currentValue.list}
            key={index}
          />
        );
      })}
    </div>
  );
}
