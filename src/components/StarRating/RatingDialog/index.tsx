import { Modal } from "~/components/Modal";
import { RateFull } from "~/components/StarRating/RateFull";
import { RATING, WHAT_WAS_GOOD_LIST } from "../constants";
import { CheckItem } from "./CheckItem";
import cx from "classnames";
import s from "./rateDialog.module.scss";
import { useState, useId } from "react";

export const RatingDialog = ({ name }: { name: string }) => {
  const [rating, setRating] = useState<keyof typeof RATING>(1);
  const ratingId = useId();

  const handleChange = (rating: keyof typeof RATING) => setRating(rating);
  return (
    <Modal.Root>
      <Modal.Trigger>
        <RateFull
          name={name}
          value={rating}
          onChange={handleChange}
          className={s.pageRating}
        />
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
          <RateFull
            name={name + "modal"}
            value={rating}
            onChange={handleChange}
          />
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
