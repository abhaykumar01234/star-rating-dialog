import { Fragment, useId } from "react";
import type { ChangeEvent, HTMLProps } from "react";
import { ReactComponent as Star } from "./star.svg";
import cx from "classnames";
import s from "./rateMe.module.scss";

export type RatingType = 5 | 4 | 3 | 2 | 1 | 0;
export type HalfRatingType = RatingType | 4.5 | 3.5 | 2.5 | 1.5 | 0.5;

export type RateMeProps<T extends RatingType | HalfRatingType> = Omit<
  HTMLProps<HTMLInputElement>,
  "name" | "value" | "onChange"
> & {
  name: string;
  value: T;
  onChange: (rating: T) => void;
  allowHalf?: boolean;
};

export const RateMe = <T extends RatingType | HalfRatingType>({
  value,
  onChange,
  className,
  allowHalf = true,
  ...props
}: RateMeProps<T>) => {
  const ratingId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(parseFloat(e.target.value) as T);

  return (
    <fieldset className={cx(s.rating, { [s.partial]: allowHalf }, className)}>
      {[5, 4, 3, 2, 1].map((num) => (
        <Fragment key={`${ratingId}-${num}`}>
          <input
            type="radio"
            id={`${ratingId}-${num}`}
            value={num}
            checked={num === value}
            onChange={handleChange}
            {...props}
          />
          <label htmlFor={`${ratingId}-${num}`}>
            <Star className={s.star} />
          </label>
          {allowHalf ? (
            <>
              <input
                type="radio"
                id={`${ratingId}-${num - 0.5}`}
                value={num - 0.5}
                checked={num - 0.5 === value}
                onChange={handleChange}
                {...props}
              />
              <label htmlFor={`${ratingId}-${num - 0.5}`} className={s.half}>
                <Star className={s.star} />
              </label>
              {num > 1 ? <span>&nbsp;</span> : <></>}
            </>
          ) : (
            <></>
          )}
        </Fragment>
      ))}
    </fieldset>
  );
};
