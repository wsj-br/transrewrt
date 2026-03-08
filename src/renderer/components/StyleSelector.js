import React from 'react';
import { makeStyles, tokens, Dropdown, Option } from '@fluentui/react-components';
import { Palette } from 'lucide-react';

const useStyles = makeStyles({
  styleSelector: {
    margin: `0 ${tokens.spacingHorizontalXS} ${tokens.spacingVerticalS} ${tokens.spacingHorizontalXS}`,
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    minWidth: "45px",
  },
  selectContainer: {
    flex: 1,
    position: "relative",
  },
  select: {
    width: "100%",
    "& .fui-Dropdown__trigger": {
      borderRadius: "0 !important",
      border: "none !important",
      borderBottom: `2px solid ${tokens.colorNeutralStroke1} !important`,
      backgroundColor: "transparent !important",
      paddingLeft: "0 !important",
      paddingRight: "0 !important",
    },
    "& .fui-Dropdown__trigger:hover": {
      borderBottom: `2px solid ${tokens.colorNeutralForeground1} !important`,
    },
    "& .fui-Dropdown__trigger:focus-visible": {
      borderBottom: `2px solid ${tokens.colorBrandBackground} !important`,
    },
  },
});

const StyleSelector = ({
  label,
  value,
  onChange,
  options = [],
  iconColor,
}) => {
  const styleStyles = useStyles();

  return (
    <div className={styleStyles.styleSelector}>
      <label className={styleStyles.label}>
        <Palette size={20} color={iconColor} />
        {label}
      </label>
      <div className={styleStyles.selectContainer}>
        <Dropdown
          appearance="underline"
          value={options.find((o) => o.value === value)?.label ?? value ?? ""}
          selectedOptions={value ? [value] : []}
          onOptionSelect={(e, data) => onChange(data.optionValue)}
          className={styleStyles.select}
          aria-label={label}
        >
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value} text={opt.label}>
              {opt.label}
            </Option>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default StyleSelector;