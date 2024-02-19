
interface ButtonProps {
    title:string;
    style:string;
    buttonType?:  'button'| 'submit' 
}

export const Button = ({title,style,buttonType}:ButtonProps) => {
  return <button type={buttonType} className={style}  >{title}</button>
   
}
