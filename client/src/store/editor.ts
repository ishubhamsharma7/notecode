import { atom } from "recoil";

export interface Language {
    id:number;
    name:string
}

export const languageAtom = atom<Language>({
    key: "languageAtom",
    default: {id:19,name:'javascript'}
})
