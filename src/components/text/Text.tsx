import { clsx } from "clsx";
import { ReactNode } from "react";

import styles from "./index.module.css";

type TextProps = {
  /** Сам текст для вывода */
  children: string;

  /** Булевая пропса, должен ли текст меняться в зависимости от конфига */
  dynamic?: boolean;
  /** Размер шрифта */
  size?: 12 | 18 | 22 | 25 | 31 | 45;
  /** Вес шрифта */
  weight?: 400 | 800;
  /** Стиль шрифта */
  fontStyle?: "italic" | "normal";
  /** Булевая пропса, отвечающая должен ли текст быть в верхнем регистре */
  uppercase?: boolean;
  /** Выравнивание текста */
  align?: "center" | "left";

  /** Булевая пропса, делает динамическим только семью шрифтов и цвет */
  dynamicLite?: boolean;
};

export const Text = ({
  children,
  size = 18,
  dynamic = false,
  weight = 400,
  fontStyle = "normal",
  uppercase = false,
  align = "left",
  dynamicLite = false,
}: TextProps) => {
  const className = clsx(
    styles.text,
    styles[`size${size}`],
    { [styles.dynamic]: dynamic },
    styles[`weight${weight}`],
    styles[`${fontStyle}`],
    { [styles.uppercase]: uppercase },
    styles[`${align}`],
    { [styles.dynamicLite]: dynamicLite }
  );

  return <p className={className}>{children}</p>;
};
