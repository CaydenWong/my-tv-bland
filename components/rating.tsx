import React from "react";
import classNames from "classnames";
import styles from "../styles/component.module.scss";

interface RatingProps {
  rating: number;
  withText?: boolean;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  rating = 0,
  withText = false,
  className,
}) => {
  return (
    <div className={className}>
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
