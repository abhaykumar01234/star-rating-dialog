import { Star, PartialStar } from "./Icons";
import s from "./Icons/icons.module.scss";

type FixedNum = 0 | 1 | 2 | 3 | 4;
type DecimalNum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// prettier-ignore
export type FullRatingType = `${FixedNum}.${DecimalNum}` 
  | `${FixedNum}` | "5" 
  | FixedNum | 5
  | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9
  | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 1.6 | 1.7 | 1.8 | 1.9
  | 2.1 | 2.2 | 2.3 | 2.4 | 2.5 | 2.6 | 2.7 | 2.8 | 2.9
  | 3.1 | 3.2 | 3.3 | 3.4 | 3.5 | 3.6 | 3.7 | 3.8 | 3.9
  | 4.1 | 4.2 | 4.3 | 4.4 | 4.5 | 4.6 | 4.7 | 4.8 | 4.9;

export type ShowRatingsProps = {
  rating: FullRatingType;
  label?: string;
};

export const ShowRatings = ({ rating, label, ...props }: ShowRatingsProps) => {
  const parsedRating = parseFloat(String(rating));
  const ratingNum = isNaN(parsedRating) ? 0 : parsedRating;
  const ratingPercent = Math.round((ratingNum % 1) * 10) * 10;

  if (isNaN(parsedRating))
    console.error(
      "Lib UI / ShowRatings: `rating` has to be a number between 0 and 5"
    );

  if (Math.sign(ratingNum) === -1)
    console.error("Lib UI / ShowRatings: `rating` value must be positive");

  if (ratingNum > 5)
    console.error(
      "Lib UI / ShowRatings: `rating` value must be equal or less than 5"
    );
  return (
    <div
      className={s.starBox}
      aria-label={label || `${rating} stars out of 5`}
      {...props}
    >
      {Array.from({ length: 5 }, (_, idx) => {
        const isPartialStar =
          ratingNum % 1 !== 0 && Math.ceil(ratingNum) === idx + 1;

        return (
          <label key={idx}>
            {isPartialStar ? (
              <PartialStar percentage={ratingPercent} />
            ) : (
              <Star active={ratingNum >= idx + 1} />
            )}
          </label>
        );
      })}
    </div>
  );
};

ShowRatings.Star = Star;
ShowRatings.PartialStar = PartialStar;
export { RatingDialog as StarRating } from "./RatingDialog";
export { RateMe } from "./RateMe";
export type { RateMeProps, RatingType, HalfRatingType } from "./RateMe";
