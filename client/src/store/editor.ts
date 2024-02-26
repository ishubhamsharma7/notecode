import { atom } from "recoil";

export interface Language {
    id:number;
    name:string
    compile?:boolean
}

export interface SingleEditor {
    id: number,
    editorId: string,
    editable: boolean,
    codeData: string,
    languageId: number,
    userId?: number,
}

export const languageAtom = atom<Language>({
    key: "languageAtom",
    default: {id:8,name:'html'}
})


export const editorPageAtom = atom({
    key: "editorPageAtom",
    default:{

    }
})

export const singleEditorAtom = atom<SingleEditor>({
    key:"singleEditorAtom",
    default:{
        id: 1,
        editorId: "22ed02d",
        editable: false,
        codeData: "const a=10",
        languageId: 93,
    }
})

export const editAtom = atom({
    key:"editAtom",
    default:false
})