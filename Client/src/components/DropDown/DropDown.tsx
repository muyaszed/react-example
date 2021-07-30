import { Select } from 'antd';
import { FilterOption } from '../../App';
import { FilterKey } from '../../reducers/activitiesReducer';

export interface Props {
  onSelect: (e: FilterKey) => void;
  options: FilterOption[];
  className?: string;
}

function DropDown({
  onSelect,
  options,
  className,
}: Props) {
  const { Option } = Select;

  return (
    <Select className={className} defaultValue={options[0].value} onSelect={onSelect}>
      {
        options.map(option => (
          <Option key={option.value} value={option.value}>{option.title}</Option>
        ))
      }
    </Select>  
  );
}

export default DropDown;
