import { useRecoilState } from "recoil"
import config from "../config"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadUI/ui/select"
import { languageAtom,Language } from "../store/editor"


const Languages = () => {

  const [language,setLanguage] = useRecoilState<Language>(languageAtom)

  const langaugeHandler = (languageId: number)=> {
    const selectedLanguage =   config.supportedLanguages.find(language => language.id === languageId)

    if(selectedLanguage) setLanguage(selectedLanguage)
  } 
 
  return (
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
  )
}

export default Languages