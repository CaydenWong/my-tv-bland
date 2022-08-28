import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Image from "next/image";
import Rating from "../../components/rating";
import styles from "../../styles/show.module.scss";

const ShowPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [show, setShow] = useState(null);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    if (!id) return;

    (async () => {
      const results = await Promise.all([
        fetch(`/api/show/${id}`),
        fetch(`/api/show/${id}/cast`),
      ]);

      if (results.every(({ ok }) => ok)) {
        setShow(await results[0].json());
        setCasts(await results[1].json());
      }
    })();
  }, [id]);

  const showInfo = [
    {
      text: "Streamed on",
      value: show?.network?.name || show?.webChannel?.name,
    },
    { text: "Schedule", value: show?.schedule?.days?.join(", ") },
    {
      text: "Status",
      value: show?.status,
    },
    {
      text: "Genres",
      value: show?.genres?.join(", ") || show?.type,
    },
  ];

  console.log(show, casts);

  return (
    <Layout
      metadata={{ title: "show name" }}
      header={
        <>
          <div className={styles.header__container}>
            {show?.image?.original && (
              <Image
                className={styles.header__image}
                src={show?.image?.original}
                alt={`${show?.name} image`}
                width="240px"
                height="320px"
              />
            )}
            <div>
              <Rating rating={show?.rating?.average} withText={true} />
              <h1>{show?.name}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${show?.summary}`,
                }}
              />
            </div>
          </div>
          <div className={styles.header__overlay} />
        </>
      }
    >
      <div className={styles.main__container}>
        <div className={styles.content__info_container}>
          <div className={styles.content__title}>Show Info</div>
          {showInfo.map(({ text, value }) => (
            <div key={text} className={styles.content__item}>
              <div className={styles.content__info_label}>{text}</div>
              <div className={styles.content__info_value}>{value}</div>
            </div>
          ))}
        </div>
        <div className={styles.content__starring_container}>
          <div className={styles.content__title}>Starring</div>
          {casts.map((cast) => (
            <div key={cast.person.id} className={styles.content__item}>
              {cast?.person?.image?.medium && (
                <Image
                  className={styles.content__starring_image}
                  src={cast?.person?.image?.medium}
                  width="20px"
                  height="20px"
                />
              )}
              <div className={styles.content__starring_person}>
                {cast.person?.name}
              </div>
              <div className={styles.content__starring_character}>
                {cast.character?.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShowPage;
