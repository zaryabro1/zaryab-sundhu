import { tickerItems } from "../../data/site";

/**
 * The technology marquee under the hero.
 *
 * The list is rendered twice and the track slides exactly -50%, so the loop is
 * seamless. The duplicate is hidden from assistive tech; the animation itself
 * is stopped under reduced motion by `globals.css`, leaving a static row.
 */
export default function Ticker() {
  return (
    <div
      className="section-rule relative overflow-hidden py-4"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div className="animate-ticker flex w-max">
        {[false, true].map((isDuplicate) => (
          <ul
            key={String(isDuplicate)}
            aria-hidden={isDuplicate || undefined}
            className="type-ui m-0 flex list-none gap-[34px] whitespace-nowrap pr-[34px] uppercase tracking-[0.06em] text-t-45 3xl:gap-12 3xl:pr-12"
          >
            {tickerItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
