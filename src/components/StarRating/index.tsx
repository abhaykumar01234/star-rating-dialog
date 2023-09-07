import { RatingDialog } from "./RatingDialog";

export const StarRating = ({ name }: { name: string }) => {
  return (
    <div>
      <h3>Let Us Know How We Are Doing</h3>
      <RatingDialog name={name} />
      {/* <p>Rating: {rating}</p> */}
    </div>
  );
};
