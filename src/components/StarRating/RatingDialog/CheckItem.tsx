import { Fragment, useState } from "react";
import { WHAT_WAS_GOOD_LIST } from "../constants";
import s from "./rateDialog.module.scss";

export const CheckItem = ({
  id,
  name,
  img,
  selected_img,
}: (typeof WHAT_WAS_GOOD_LIST)[number] & { id: string }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((s) => !s);

  return (
    <Fragment>
      <input
        type="checkbox"
        id={`${id}-${name}`}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={`${id}-${name}`}>
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
