

const Compiler = ({output}:any) => {
  return (
    <div>
      (
        <pre className=" pl-5 px-2 py-1 font-bold text-md text-green-500">
          {output !== null
            ? output
            : null}
        </pre>
      );
    </div>
  )
}

export default Compiler