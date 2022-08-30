import React from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import Rating from "../../components/rating";
import styles from "../../styles/page.module.scss";
import { Show, Cast } from "../../interfaces";

export async function getServerSideProps(context) {
  let data = { show: null, casts: [] };
  const { id } = context.query;
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=1, stale-while-revalidate=2"
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
            <span className={styles.show__image__container}>
              <Image
                className={styles.show__image}
                src={show?.image?.original ?? "/noImage.original.png"}
                alt={`${show?.name} image`}
                layout="fill"
                // width={240}
                // height={360}
              />
            </span>
            <div className={styles.show__descriptions}>
              <Rating rating={show?.rating?.average} withText={true} />
              <div className={styles.show__name}>{show?.name}</div>
              <div
                className={styles.show__summary}
                dangerouslySetInnerHTML={{
                  __html: `${show?.summary}`,
                }}
              />
            </div>
          </div>
          <div className={styles.show__header__overlay} />
        </>
      }
    >
      <div className={styles.show__main}>
        <div className={styles.show__info__container}>
          <div className={styles.show__heading}>Show Info</div>
          {showInfo.map(({ text, value }) => (
            <div key={text} className={styles.show__list__item}>
              <div className={styles.show__info__label}>{text}</div>
              <div className={styles.show__info__value}>{value}</div>
            </div>
          ))}
        </div>
        {casts.length > 0 && (
          <div className={styles.show__starring__container}>
            <div className={styles.show__heading}>Starring</div>
            {casts.map((cast) => (
              <div key={cast.person.id} className={styles.show__list__item}>
                <div className={styles.show__starring__image__container}>
                  <Image
                    className={styles.show__starring__image}
                    alt={`${cast.person?.name} img`}
                    src={cast?.person?.image?.medium ?? "/noImage.medium.png"}
                    width="20px"
                    height="20px"
                  />
                </div>
                <div className={styles.show__starring__person}>
                  {cast.person?.name}
                </div>
                <div className={styles.show__starring__character}>
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
