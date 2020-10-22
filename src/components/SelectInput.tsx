import React from 'react'

type SelectOption = {
  value: string,
  label: string,
  disabled?: boolean
}

type SelectInputProps = {
  id: string,
  label: string,
  value: string,
  options: SelectOption[],
  onChange: (e: React.ChangeEvent) => any
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  value,
  options,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select className="form-control" id={id} value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput
