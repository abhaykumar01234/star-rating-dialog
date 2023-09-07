import { Fragment, useId } from "react";
import type { ChangeEvent, HTMLProps } from "react";
// import { ReactComponent as Star } from "../Icons/star.svg";
import cx from "classnames";
import s from "./rateHalf.module.scss";

export type HalfRatingType = 5 | 4 | 3 | 2 | 1 | 4.5 | 3.5 | 2.5 | 1.5 | 0.5;

export type RateHalfProps = Omit<
  HTMLProps<HTMLInputElement>,
  "name" | "value" | "onChange"
> & {
  name: string;
  value: HalfRatingType;
  onChange: (rating: HalfRatingType) => void;
};

export const RateHalf = ({
  value,
  onChange,
  className,
  ...props
}: RateHalfProps) => {
  const ratingId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(parseFloat(e.target.value) as HalfRatingType);

  return (
    <fieldset className={cx(s.rating, className)}>
      {Array.from({ length: 5 }, (_, idx) => {
        const num = 5 - idx;
        return (
          <Fragment key={num}>
            <input
              type="radio"
              id={`${ratingId}-${num}`}
              value={num}
              onChange={handleChange}
              checked={num === value}
              {...props}
            />
            <label htmlFor={`${ratingId}-${num}`} />
            <input
              type="radio"
              id={`${ratingId}-${num - 0.5}`}
              value={num - 0.5}
              onChange={handleChange}
              checked={num - 0.5 === value}
              {...props}
            />
            <label htmlFor={`${ratingId}-${num - 0.5}`} className={s.half} />
            {num > 1 ? <span>&nbsp;</span> : <></>}
          </Fragment>
        );
      })}
    </fieldset>
  );
};
