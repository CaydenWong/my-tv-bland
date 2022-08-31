import React from "react";
import Link from "next/link";
import Image from "next/image";
import Rating from "./rating";
import styles from "../styles/component.module.scss";
import { Schedule } from "../interfaces";

interface ScheduleCardProps {
  schedule: Schedule;
}

const ScheduleComponent: React.FC<ScheduleCardProps> = ({ schedule }) => {
  return (
    <Link href={`/show/${schedule?.show?.id}`}>
      <div className={styles.schedule__container}>
        <div className={styles.schedule__image__container}>
          <button className={styles.schedule__button}>
            <Image
              className={styles.schedule__image}
              src={schedule?.show?.image?.medium ?? "/noImage.medium.png"}
              alt={`${schedule?.show?.name} image`}
              width="120px"
              height="160px"
            />
          </button>
        </div>
        <Rating
          className={styles.schedule__rating}
          rating={schedule?.show?.rating?.average}
        />
        <div className={styles.schedule__font}>{schedule?.show?.name}</div>
      </div>
    </Link>
  );
};

export default ScheduleComponent;
