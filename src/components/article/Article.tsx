import * as styles from "./Article.module.scss";

import plane from "./../../img/plane.png"

import { Text } from "./../text/Text";
import { Image } from "./../image/Image";

export const Article = () => {
  return (
    <article className={styles.article}>
      <Text as="h1" elementClasses={styles.title} size={45} weight={800} uppercase align="center">
        Портрет западной Швейцарии
      </Text>
      <Text as="p" elementClasses={styles.subtitle} size={22} weight={800} uppercase align="center">
      Примитивист Фиштр расписывает новый бюджетный авиалайнер
      </Text>
      <Image src={plane} elementClasses={styles.image} alt="Самолет в небе"/>
      <div className={styles.container}>
gfhkgkgkgkgk
      </div>
    </article>
  );
};
