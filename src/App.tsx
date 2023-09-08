import { useState } from "react";
import { StarRating, ShowRatings } from "./components/StarRating";
import type {
  HalfRatingType,
  RatingType,
  FullRatingType,
} from "./components/StarRating";

export const App = () => {
  const [rate1, setRate1] = useState<HalfRatingType>(0);
  const handleChange = (rating: HalfRatingType) => setRate1(rating);

  const [rate2, setRate2] = useState<RatingType>(0);
  const handleChange2 = (rating: RatingType) => setRate2(rating);

  return (
    <div className="stack">
      <div className="stack">
        <h3>Decimal Ratings</h3>
        <StarRating name="r1" value={rate1} onChange={handleChange} />
        {rate1 > 0 ? <p>You rated {rate1}</p> : <p>Please Rate</p>}
      </div>

      <br />

      <div className="stack">
        <h3>Numeric Ratings Only</h3>
        <StarRating
          name="r2"
          value={rate2}
          onChange={handleChange2}
          allowHalf={false}
        />
        {rate2 > 0 ? <p>You rated {rate2}</p> : <p>Please Rate</p>}
      </div>

      <br />

      <div className="stack">
        <h3>Your Average Ratings are :</h3>
        <ShowRatings
          rating={((rate1 + rate2) / 2).toFixed(1) as FullRatingType}
        />
        <p>Average ratings: {(rate1 + rate2) / 2}</p>
      </div>
    </div>
  );
};
