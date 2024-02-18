
interface ButtonProps {
    title:string;
    style:string
}

export const Button = ({title,style}:ButtonProps) => {
  return (
    <div>
        <button type="button" className={style} >{title}</button>
    </div>
  )
}
