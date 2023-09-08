import { type HTMLProps, useId, memo } from "react";
import cx from "classnames";
import s from "./icons.module.scss";

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 576 512",
};

const starPath =
  "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z";

export type StarProps = HTMLProps<SVGSVGElement> & {
  active?: boolean;
};

export const Star = memo(
  ({ active = false, className, ...props }: StarProps) => (
    <svg className={cx(s.star, className)} {...svgProps} {...props}>
      <linearGradient id="greyStar" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="144%" stopColor="#bfc3cf" />
        <stop offset="-76%" stopColor="#e5e6eb" />
      </linearGradient>
      <linearGradient id="blueStar" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="-50%" stopColor="#04acbb" />
        <stop offset="152%" stopColor="#264a9f" />
      </linearGradient>
      <path d={starPath} className={cx({ [s.active]: active })} />
    </svg>
  )
);

export type PartialStarProps = HTMLProps<SVGSVGElement> & {
  percentage?: number;
};

export const PartialStar = memo(
  ({ percentage = 0, className, ...props }: PartialStarProps) => {
    const ratingPercent = `${percentage}%`;
    const starId = useId();
    const gradientId = `${starId}-gradient`;

    return (
      <svg
        className={cx(s.star, s.partial, className)}
        {...svgProps}
        {...props}
      >
        <linearGradient id={gradientId} x1={0} x2="100%" y1={0} y2={0}>
          <stop offset="-50%" stopColor={"#04acbb"} />
          <stop offset={ratingPercent} stopColor={"#264a9f"} />
          <stop offset={ratingPercent} stopColor={"#e5e6eb"} />
          <stop offset={"132%"} stopColor={"#bfc3cf"} />
        </linearGradient>
        <path d={starPath} fill={`url(#${gradientId})`} />
      </svg>
    );
  }
);
