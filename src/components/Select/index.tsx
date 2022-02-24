import  { forwardRef } from "react";
import { Select } from "../styled/select";


type DropdownProps = {
  id: string;
  initialValue?: string;
  data: { id: string | number; label: string; value: number | string }[];
};

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ id, initialValue, data, ...rest }: DropdownProps, ref) => {
    return (
      <Select
        {...rest}
        id={id}
        ref={ref}
        defaultValue={initialValue || data[0].value}
      >
        {data?.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    );
  }
);
