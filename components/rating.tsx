import styles from "../styles/rating.module.scss";
import classNames from "classnames";

const Rating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={classNames(
            "fas fa-star",
            styles.rating,
            rating / 2 > index + 1
              ? styles.rating_color_active
              : styles.rating_color_inactive
          )}
        />
      ))}
    </div>
  );
};

export default Rating;
