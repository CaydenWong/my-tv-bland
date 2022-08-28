import styles from "../styles/schedule.module.scss";
import Image from "next/image";
import Rating from "./rating";
import Link from "next/link";

const Schedule = ({ schedule }) => {
  return (
    <Link href={`/show/${schedule?.show?.id}`}>
      <div className={styles.schedule_container}>
        <span className={styles.schedule_image}>
          {schedule?.show?.image?.medium && (
            <Image
              src={schedule?.show?.image?.medium}
              alt={`${schedule?.show?.name} image`}
              layout="responsive"
              width="120px"
              height="160px"
            />
          )}
        </span>
        <Rating rating={schedule?.show?.rating?.average} />
        <div className={styles.schedule_font}>{schedule?.show?.name}</div>
      </div>
    </Link>
  );
};

export default Schedule;
