interface CompilerOutput{
  description: string,
  time: string,
  memory: number
}

const CompilerOutput = ({description,time,memory}:CompilerOutput) => {


  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
    <p className="text-sm">
      Status:{" "}
      <span className="font-semibold px-2 py-1 rounded-md bg-gray-100 text-emerald-600">
        {description}
      </span>
    </p>
    <p className="text-sm">
      Memory:{" "}
      <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
      {memory}
      
      </span>
    </p>
    <p className="text-sm">
      Time:{" "}
      <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
        {time}
        
      </span>
    </p>
  </div>
  )
}

export default CompilerOutput