import { useRecoilState, useSetRecoilState } from "recoil"
import config from "../config"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadUI/ui/select"
import { languageAtom,Language, editAtom } from "../store/editor"
import { Switch } from "../shadUI/ui/switch"
import { Label } from "../shadUI/ui/label"

interface LanguageProps {
  placeholder:string,
  editEnabled:boolean
}

const Languages = ({placeholder,editEnabled}:LanguageProps) => {

  const [language,setLanguage] = useRecoilState<Language>(languageAtom)
  const setIsEditEnabled = useSetRecoilState(editAtom)

  const langaugeHandler = (languageId: number)=> {
    const selectedLanguage =   config.supportedLanguages.find(language => language.id === languageId)

    if(selectedLanguage) setLanguage(selectedLanguage)
  } 
 
  return (
    <div className="flex items-center">
      <div className=" font-medium font pr-2">
        {placeholder}:
      </div>  
      <div>
        <Select defaultValue={language.id.toString()} onValueChange={(value)=>langaugeHandler(parseInt(value))}  >
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
        <Switch id="airplane-mode" checked={editEnabled} onCheckedChange={()=>setIsEditEnabled(prev => !prev)}/>
        <Label htmlFor="airplane-mode">Allow Edit</Label>
    </div>
    </div>
  )
}

export default Languages