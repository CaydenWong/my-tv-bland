import React from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import Rating from "../../components/rating";
import sanitizeHtml from "sanitize-html";
import styles from "../../styles/page.module.scss";
import { Show, Cast } from "../../interfaces";

export async function getServerSideProps(context) {
  let data = { show: null, casts: [] };
  const { id } = context.query;
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const results = await Promise.all([
    fetch(`http://localhost:3000/api/show/${id}`),
    fetch(`http://localhost:3000/api/show/${id}/cast`),
  ]);

  if (results.every(({ ok }) => ok)) {
    data = {
      show: await results[0].json(),
      casts: await results[1].json(),
    };
  }
  return { props: { data } };
}

const ShowPage: React.FC = ({
  data,
}: {
  data: { show: Show; casts: Cast[] };
}) => {
  const { show, casts = [] } = data;
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
      loading={false}
      header={
        <>
          <div className={styles.show__header}>
            <div className={styles.show__header__image__outer__container}>
              <div className={styles.show__header__image__inner__container} />

              <div className={styles.show__header__image__container}>
                <Image
                  className={styles.show__header__image}
                  src={show?.image?.original ?? "/noImage.original.png"}
                  alt={`${show?.name} image`}
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.show__header__descriptions}>
              <Rating rating={show?.rating?.average} withText={true} />
              <div className={styles.show__header__title}>{show?.name}</div>
              <div
                className={styles.show__header__summary}
                dangerouslySetInnerHTML={
                  show?.summary && {
                    __html: `${sanitizeHtml(show.summary)}`,
                  }
                }
              />
            </div>
          </div>
          <div className={styles.show__header__overlay} />
        </>
      }
    >
      <div className={styles.show__main__container}>
        <div className={styles.show__content__container}>
          <div className={styles.show__content__heading}>Show Info</div>
          <div className={styles.show__content__container_info}>
            {showInfo.map(({ text, value }) => (
              <div key={text} className={styles.show__content__list__item_info}>
                <div className={styles.show__content__list__item}>
                  <div className={styles.show__content__details__container}>
                    <div className={styles.show__content__title}>{text}</div>
                    <div className={styles.show__content__value}>{value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {casts.length > 0 && (
          <div className={styles.show__content__container}>
            <div className={styles.show__content__heading}>Starring</div>
            {casts.map((cast) => (
              <div
                key={cast.person.id}
                className={styles.show__content__list__item}
              >
                <div className={styles.show__content__avatar__container}>
                  <Image
                    className={styles.show__content__avatar}
                    alt={`${cast.person?.name} img`}
                    src={cast?.person?.image?.medium ?? "/noImage.medium.png"}
                    width="25px"
                    height="25px"
                  />
                </div>
                <div className={styles.show__content__details__container}>
                  <div className={styles.show__content__title}>
                    {cast.person?.name}
                  </div>
                  <div className={styles.show__content__value}>
                    {cast.character?.name}
                  </div>
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
