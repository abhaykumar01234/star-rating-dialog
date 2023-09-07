import { useState, Fragment } from "react";
import { Modal } from "../Modal";
import { RateMe } from "./RateMe";
import { RATING, WHAT_WAS_GOOD_LIST } from "./constants";
import cx from "classnames";
import s from "./ratemodal.module.scss";

export const StarRating = ({ name }: { name: string }) => {
  const [rating, setRating] = useState<keyof typeof RATING>(1);

  const handleChange = (rating: keyof typeof RATING) => setRating(rating);

  return (
    <div>
      <h3>Let Us Know How We Are Doing</h3>
      <Modal.Root>
        <Modal.Trigger>
          <RateMe name={name} value={rating} onChange={handleChange} />
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
            <RateMe
              name={name + "modal"}
              value={rating}
              onChange={handleChange}
            />
            <p>{RATING[rating].reaction.subtitle}</p>

            <div className={cx("inline", s.checkItemsBox)}>
              {WHAT_WAS_GOOD_LIST.map((item, idx) => (
                <CheckItem {...item} key={name + idx} />
              ))}
            </div>
            <textarea
              name="comment"
              cols={18}
              rows={4}
              placeholder="Would Like To Hear More From You.."
            ></textarea>
            <Modal.Close className={s.btnSubmit}>Submit Feedback</Modal.Close>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <p>Rating: {rating}</p>
    </div>
  );
};

const CheckItem = ({
  name,
  img,
  selected_img,
}: (typeof WHAT_WAS_GOOD_LIST)[number]) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((s) => !s);

  return (
    <Fragment>
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={name}>
        <figure className="stack">
          <div className={s.img}>
            <img src={checked ? selected_img : img} alt={name} />
          </div>
          <figcaption>{name}</figcaption>
        </figure>
      </label>
    </Fragment>
  );
};
