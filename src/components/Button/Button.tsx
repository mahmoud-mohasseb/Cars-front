import React from 'react';
import Link from 'next/link';
interface IButtonProps {
  theme?: 'filled' | 'outlined';
  text: string;
  className?: string;
}
const Button = (props: IButtonProps) => {
  const { theme, text, className } = props;
  if (theme === 'filled')
    return (
      <button className='FilledButton'>
        <a className={props.className}>{props.text}</a>
      </button>
    );
  else
    return (
      <button className='OutlinedButton'>
        <a className={props.className}>{props.text}</a>
      </button>
    );
};

export default Button;
