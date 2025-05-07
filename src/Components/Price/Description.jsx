import HTwo from "../CommonComponents/HTwo";
import PTag from "../CommonComponents/PTag";

export default function Description() {
  return (
    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
      <HTwo
        style={
          "mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        }
      >
        Designed for business teams like yours
      </HTwo>
      <PTag
        style={"mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"}
      >
        Here at Landwind we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </PTag>
    </div>
  );
}
