
interface ButtonProps {
    title:string;
    style:string;
    buttonType?:  'button'| 'submit';
    onClick?: ()=>void
}

export const Button = ({title,style,buttonType,onClick}:ButtonProps) => {
  return <button type={buttonType} className={style} onClick={onClick} >{title}</button>
   
}
