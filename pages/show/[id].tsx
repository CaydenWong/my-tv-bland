import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Image from "next/image";
import Rating from "../../components/rating";
import styles from "../../styles/show.module.scss";
import { Show, Cast } from "../../interfaces";

const ShowPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState<Show | undefined>(undefined);
  const [casts, setCasts] = useState<Cast[]>([]);

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
        setLoading(false);
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

  return (
    <Layout
      metadata={{ title: show?.name }}
      loading={loading}
      header={
        <>
          <div className={styles.header__container}>
            <Image
              className={styles.header__image}
              src={show?.image?.original ?? "/noImage.original.png"}
              alt={`${show?.name} image`}
              // layout="responsive"
              width={240}
              height={360}
            />
            <div className={styles.header__descriptions}>
              <Rating rating={show?.rating?.average} withText={true} />
              <div className={styles.header__descriptions_title}>
                {show?.name}
              </div>
              <div
                className={styles.header__descriptions_subtitle}
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
        {casts.length > 0 && (
          <div className={styles.content__starring_container}>
            <div className={styles.content__title}>Starring</div>
            {casts.map((cast) => (
              <div key={cast.person.id} className={styles.content__item}>
                <div className={styles.content__starring_image_container}>
                  <Image
                    className={styles.content__starring_image}
                    alt={`${cast.person?.name} img`}
                    src={cast?.person?.image?.medium ?? "/noImage.medium.png"}
                    width="20px"
                    height="20px"
                  />
                </div>
                <div className={styles.content__starring_person}>
                  {cast.person?.name}
                </div>
                <div className={styles.content__starring_character}>
                  {cast.character?.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ShowPage;
