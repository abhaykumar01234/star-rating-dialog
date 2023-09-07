import { StarRating } from "./components/StarRating";

export const App = () => {
  return (
    <div className="stack">
      <StarRating name="r1" />
      <br />
      <StarRating name="r2" />
    </div>
  );
};
