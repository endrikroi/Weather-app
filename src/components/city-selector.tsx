import React, { FC } from "react";
import { Select, TopMarginedDiv } from "./styles";

const cities = ["Tirana", "Helsinki", "Rome", "Paris"];
const CitySelector: FC<{ city: string; onChange: (city: string) => void }> = ({
  city,
  onChange,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <Select value={city} onChange={handleChange}>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </Select>
      <TopMarginedDiv />
    </div>
  );
};

export default CitySelector;
