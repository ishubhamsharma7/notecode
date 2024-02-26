
interface ButtonProps {
    title:string;
    style:string;
    buttonType?:  'button'| 'submit';
    onClick?: ()=>void;
    disabled?: boolean
}

export const Button = ({title,style,buttonType,onClick,disabled}:ButtonProps) => {
  return <button type={buttonType} className={style} onClick={onClick} disabled={disabled}>{title}</button>
   
}
