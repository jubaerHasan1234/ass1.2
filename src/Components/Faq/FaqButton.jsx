import ButtonAndAnchor from "../CommonComponents/ButtonAndAnchor";
import HThree from "../CommonComponents/HThree";

export default function FaqButton({
  h3Id,
  buttonStyle,
  dat,
  ae,
  ac,
  hThreeTitle,
  descriptionId,
  descriptionStyle,
  al,
  Svg,
  description1,
  description2,
  description3,
  description4,
  children,
}) {
  return (
    <>
      <HThree id={h3Id}>
        <button
          type="button"
          className={buttonStyle}
          data-accordion-target={dat}
          aria-expanded={ae}
          aria-controls={ac}
        >
          <span>{hThreeTitle}</span>

          {Svg}
        </button>
      </HThree>

      <div id={descriptionId} className={descriptionStyle} aria-labelledby={al}>
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {description1}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {description2}
            <ButtonAndAnchor
              href="#"
              style={"text-purple-600 dark:text-purple-500 hover:underline"}
            >
              {description3}
            </ButtonAndAnchor>
            {description4}
          </p>
        </div>
        {children}
      </div>
    </>
  );
}
