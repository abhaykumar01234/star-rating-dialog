import { Modal } from "~/components/Modal";
import {
  RateMe,
  type RatingType,
  type HalfRatingType,
  type RateMeProps,
} from "~/components/StarRating/RateMe";
import { RATING, WHAT_WAS_GOOD_LIST } from "../constants";
import { CheckItem } from "./CheckItem";
import cx from "classnames";
import s from "./rateDialog.module.scss";
import { useId } from "react";

export const RatingDialog = <T extends RatingType | HalfRatingType>({
  name,
  ...props
}: RateMeProps<T>) => {
  const ratingId = useId();
  const rating = parseInt(
    `${props.value === 0 ? 1 : props.value + 0.5}`
  ) as keyof typeof RATING;

  return (
    <Modal.Root>
      <Modal.Trigger>
        <RateMe name={name} {...props} className={s.pageRating} />
      </Modal.Trigger>
      <Modal.Content className={s.modalContent}>
        <Modal.Header>&nbsp;</Modal.Header>
        <Modal.Body className={cx("stack", s.modalBody)}>
          <div>
            <img
              src={RATING[rating].img}
              alt={`${rating}Star`}
              style={{ minHeight: "110px" }}
            />
          </div>
          <h3>{RATING[rating].reaction.title}</h3>
          <RateMe name={`${name}-dialog`} {...props} />
          <p>You rated : {props.value} of 5 stars</p>
          <p>{RATING[rating].reaction.subtitle}</p>

          <div className={cx("inline", s.checkItemsBox)}>
            {WHAT_WAS_GOOD_LIST.map((item, idx) => (
              <CheckItem {...item} key={name + idx} id={ratingId} />
            ))}
          </div>
          <div>
            <textarea
              name="comment"
              cols={18}
              rows={3}
              placeholder="Would Like To Hear More From You.."
            ></textarea>
          </div>
          <Modal.Close className={s.btnSubmit}>Submit Feedback</Modal.Close>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
