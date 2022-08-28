import styles from "../styles/rating.module.scss";
import classNames from "classnames";

const Rating = ({ rating = 0, withText = false }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={classNames(
            "fas fa-star",
            styles.rating__star,
            rating / 2 > index + 1
              ? styles.rating__color_active
              : styles.rating__color_inactive
          )}
        />
      ))}
      {withText && <span className={styles.rating__text}>{rating / 2}/5</span>}
    </div>
  );
};

export default Rating;
