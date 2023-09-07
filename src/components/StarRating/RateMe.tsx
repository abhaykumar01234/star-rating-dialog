import { Fragment, HTMLProps, useId } from "react";
import cx from "classnames";
import s from "./rate.module.scss";

export type RatingType = 1 | 2 | 3 | 4 | 5;

export type RateMeProps = Omit<
  HTMLProps<HTMLInputElement>,
  "name" | "value" | "onChange"
> & {
  name: string;
  value: RatingType;
  onChange: (rating: RatingType) => void;
};

export const RateMe = ({
  value,
  onChange,
  className,
  ...props
}: RateMeProps) => {
  const ratingId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rating = parseInt(e.target.value) as RatingType;
    onChange(rating);
  };

  return (
    <fieldset className={cx(s.rating, className)}>
      {[5, 4, 3, 2, 1].map((num) => (
        <Fragment key={`${ratingId}-${num}`}>
          <input
            type="radio"
            id={`${ratingId}-${num}`}
            value={num}
            checked={value === num}
            onChange={handleChange}
            {...props}
          />
          <label htmlFor={`${ratingId}-${num}`} />
        </Fragment>
      ))}
    </fieldset>
  );
};
