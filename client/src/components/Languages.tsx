import config from "../config"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadUI/ui/select"
import { Switch } from "../shadUI/ui/switch"
import { Label } from "../shadUI/ui/label"

interface LanguageProps {
  placeholder:string,
  langId?:number;
  onLanguageChange: (value:number)=>void,
  edit?: boolean;
  onChangeHandler:(value:any) => void
}

const Languages = ({placeholder,langId,onLanguageChange,edit,onChangeHandler}:LanguageProps) => {
 
  return (
    <div className="flex items-center">
      <div className=" font-medium font pr-2">
        {placeholder}:
      </div>  
      <div>
        <Select defaultValue={langId ? langId.toString() : "93" } onValueChange={(value)=>onLanguageChange(parseInt(value))}  >
          <SelectTrigger className="w-[200px] " >
            <SelectValue placeholder= "Select Language"/>
          </SelectTrigger>
          <SelectContent >
            { 
              config.supportedLanguages.map(lang=>(
                <SelectItem key={lang.id} 
                    value={lang.id.toString()}
                >
                      {lang.name[0].toUpperCase() + lang.name.slice(1)} 
                </SelectItem>
              )) 
            }
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-center items-center space-x-2 ml-2 bg-indigo-300 rounded shadow-xl h-9 w-auto p-1 pr-2">
        <Switch id="airplane-mode" checked={edit} onCheckedChange={(event) => onChangeHandler(event)}/>
        <Label htmlFor="airplane-mode">Allow Edit</Label>
    </div>
    </div>
  )
}

export default Languages