import * as styles from "./ArticleParamsForm.module.scss";
import { Text } from "./../text/Text";
import { Select } from "../select/Select";
import { ArticleStateType, OptionType, defaultArticleState, fontFamilyOptions } from "./../../constants/acrticleVar";
import { useState, FormEvent } from 'react';

export const ArticleParamsForm = () => {

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
      <aside>
        <form className={styles.form}>
          <Text as="h2"
          size={31}
          weight={800}
          >
          Задайте параметры
          </Text>
          <Select
						title='Шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleChange('fontFamilyOption')}
					/>
        </form>
      </aside>
    </>
  );
};
