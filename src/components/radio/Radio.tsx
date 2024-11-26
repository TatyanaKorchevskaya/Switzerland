import { OptionType } from "./../../constants/acrticleVar";

import { Text } from "./../text/index";
import { Option } from './Option';


import * as styles from "./Radio.module.scss";

type RadioProps = {
  title: string;
  options: OptionType[];
  onChange?: Function;
};

export const Radio = (props: RadioProps) => {
  const { title, options, onChange } = props;
  const handleChange = () => {};
  return (
    <div className={styles.container}>
      {title && (
        <>
          <Text size={12} weight={800} uppercase>
            {title}
          </Text>
        </>
      )}
      <div className={styles.options_class}>
        {options.map((option) => (
          <Option
            key={option.value}
            // groupName={name}
            value={option.value}
            title={option.title}
            selected={false}
            onChange={() => handleChange()}
            option={option}
          />
        ))}
      </div>
    </div>
  );
};
