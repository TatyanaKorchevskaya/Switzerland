import * as styles from "./Radio.module.scss";
import { OptionType } from "./../../constants/acrticleVar";

import { Text } from "./../text/index";
import { useRef } from "react";

type OptionProps = {
  value: string;
  title: string;
  selected: boolean;
  option: OptionType;
  onChange?: Function;
};

export const Option = (props: OptionProps) => {
  const { value, title, selected, option, onChange } = props;
  const optionRef = useRef<HTMLDivElement>(null);
  const handleChange= () => {
    onChange(option)
  }
  return (
    <div className={styles.item} key={value} tabIndex={0} ref={optionRef}>
      <input
        className={styles.input}
        type="radio"
        value={value}
        tabIndex={-1}
      />
      <label className={styles.label}>
        <Text size={18} uppercase>
          {title}
        </Text>
      </label>
    </div>
  );
};
