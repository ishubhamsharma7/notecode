import { Button } from "./Button";
import { MdNoteAdd } from "react-icons/md";

const Home = () => {
  
  return (
    <section className="flex">
  <div className={`bg-[#363535] h-full w-48 duration-500 text-gray-100 px-1 flex flex-col justify-between`}>
    <div>
      <div className="pt-4 p-1 border-b-2 border-white flex justify-between rounded">
        Add Editor <div><MdNoteAdd size={22} className="mr-2" /></div>
      </div>

      <div className="p-2">
        
      </div>
    </div>

    <div className="mb-2 p-2"> {/* Add a margin-bottom if needed */}
      <Button title="Logout" buttonType="button" style="text-white bg-red-700 hover:bg-red-800 w-full font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " />
    </div>
  </div>
</section>

  );
};

export default Home;