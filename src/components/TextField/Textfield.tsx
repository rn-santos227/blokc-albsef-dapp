import { ChangeEvent } from 'react'
import React from 'react';
import './Textfield.css';

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void,
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({value, onChange, placeholder}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }
  return (
    <div>
      <input className='textfield' type='text' value={value} onChange={handleChange} placeholder={placeholder} />
    </div>
  )
}

export default TextField