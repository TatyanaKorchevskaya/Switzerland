import * as styles from "./ArticleParamsForm.module.scss";
import { Text } from "./../text/Text";
import { Select } from "../select/Select";
import {
  ArticleStateType,
  OptionType,
  backgroundColors,
  contentWidthArr,
  defaultArticleState,
  fontColors,
  fontFamilyOptions,
  fontSizeOptions,
} from "./../../constants/acrticleVar";
import { useState, FormEvent } from "react";
import { Radio } from "../radio/Radio";
import { Splitter } from "../splitter/Splitter";
import { Button } from "../button/Button";
import { IAllOptions } from "../../App";
import clsx from "clsx";
import { ArrowBtn } from "../arrow-btn/ArrowBtn";

interface PropsArticleParamsForm {
  toggleOpenFn: () => void;
  openState: boolean;
  setPageState: React.Dispatch<React.SetStateAction<IAllOptions>>;
}

export const ArticleParamsForm = ({
  toggleOpenFn,
  openState,
  setPageState,
}: PropsArticleParamsForm) => {
  const [formState, setFormState] =
    useState<ArticleStateType>(defaultArticleState);

  const handleChange = (fieldName: string) => {
    return (value: OptionType) => {
      setFormState((currentFormState) => ({
        ...currentFormState,
        [fieldName]: value,
      }));
    };
  };
  return (
    <>
    <ArrowBtn isActive={openState} onClick={toggleOpenFn}/>
      <aside
        className={clsx({
          [styles.container]: true,
          [styles.container_open]: openState,
        })}
      >
        <form className={styles.form}>
          <Text as="h2" size={31} weight={800}>
            Задайте параметры
          </Text>
          <div className={styles.fields}>
            <Select
              title="Шрифт"
              selected={formState.fontFamilyOption}
              options={fontFamilyOptions}
              onChange={handleChange("fontFamilyOption")}
            />
            <Radio title="Размер шрифта" options={fontSizeOptions} />
            <Select
              title="Цвет шрифта"
              selected={formState.fontColor}
              options={fontColors}
              onChange={handleChange("fontColor")}
            />
            <Splitter />
            <Select
              title="Цвет фона"
              selected={formState.backgroundColor}
              options={backgroundColors}
              onChange={handleChange("backgroundColor")}
            />
            <Select
              title="Ширина контента"
              selected={formState.contentWidth}
              options={contentWidthArr}
              onChange={handleChange("contentWidth")}
            />
          </div>

          <div>
            <Button type="reset">Сбросить</Button>
            <Button type="submit" >Применить</Button>
          </div>
        </form>
      </aside>
    </>
  );
};
