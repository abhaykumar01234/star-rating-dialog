import { useState } from "react";
import { StarRating } from "./components/StarRating";
import {
  RateHalf,
  type HalfRatingType,
} from "./components/StarRating/RateHalf";

export const App = () => {
  const [rate1, setRate1] = useState<HalfRatingType>(3.5);

  const handleChange = (rating: HalfRatingType) => setRate1(rating);

  return (
    <div className="stack">
      <StarRating name="r1" />
      <br />
      <StarRating name="r2" />
      <br />

      <div>
        <h3>Let Us Know How We Are Doing</h3>
        <RateHalf name="r3" value={rate1} onChange={handleChange} />
        <p>You rated {rate1}</p>
      </div>
    </div>
  );
};
