import React from 'react'

type TextInputProps = {
  id: string,
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent) => any
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  value,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input className="form-control" type="text" id={id} value={value} onChange={onChange} />
    </div>
  )
}

export default TextInput
