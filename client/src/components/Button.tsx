
interface ButtonProps {
    title:string
}

export const Button = ({title}:ButtonProps) => {
  return (
    <div>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center w-full">{title}</button>
    </div>
  )
}
