import * as styles from "./ArrowBtn.module.scss";

import { Button } from "../button";
import { Image } from "./../image/Image";

import arrowImg from "./../../img/arrow.svg";

export type ArrowButtonProps = {
  isActive: boolean;
  onClick: () => void;
};

export const ArrowBtn = (props: ArrowButtonProps) => {
  const { onClick, isActive } = props;
  return (
    <Button elementClasses={styles.btn} onClick={onClick}>
      <Image
        src={arrowImg}
        alt="иконка стрелочки"
        elementClasses={styles.img}
      />
    </Button>
  );
};
