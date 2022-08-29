import React from "react";
import Link from "next/link";
import Image from "next/image";
import Rating from "./rating";
import styles from "../styles/schedule.module.scss";
import { Schedule } from "../interfaces";

interface ScheduleCardProps {
  schedule: Schedule;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ schedule }) => {
  return (
    <Link href={`/show/${schedule?.show?.id}`}>
      <div className={styles.schedule_container}>
        <span className={styles.schedule_image}>
          <Image
            src={schedule?.show?.image?.medium ?? "/noImage.medium.png"}
            alt={`${schedule?.show?.name} image`}
            layout="responsive"
            width="120px"
            height="160px"
          />
        </span>
        <Rating rating={schedule?.show?.rating?.average} />
        <div className={styles.schedule_font}>{schedule?.show?.name}</div>
      </div>
    </Link>
  );
};

export default ScheduleCard;
