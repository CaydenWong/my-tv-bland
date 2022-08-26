import styles from "../styles/schedule.module.scss";
import Image from "next/image";
import Rating from "./rating";

const Schedule = ({ schedule }) => {
  return (
    <div className={styles.schedule_container}>
      <span className={styles.schedule_image}>
        <Image
          src={schedule?.show?.image?.medium}
          alt={`${schedule?.show?.name} image`}
          layout="responsive"
          width="120px"
          height="160px"
        />
      </span>
      <Rating rating={schedule?.show?.rating?.average ?? 0} />
      <div className={styles.schedule_font}>{schedule?.show?.name}</div>
    </div>
  );
};

export default Schedule;
