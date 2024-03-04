import axios from "axios";
import { atom, atomFamily, selectorFamily } from "recoil";

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
    userId: number,
}

export const languageAtom = atom<Language>({
    key: "languageAtom",
    default: {id:8,name:'html',compile:false}
})

export const singleEditorAtom = atomFamily<null | SingleEditor, string>({
    key: "singleEditorAtom",
    default:selectorFamily({
        key:"singleEditorSelector",
        get : (id:string) => async ({})=>{
            try {
                const editor = (await axios.get(`https://notecode.onrender.com/api/v1/editor/editor-detail?id=${id}`,{withCredentials:true})).data
                return editor
            } catch (error) {
                return null
                console.log("===>",error)
            }
            
        }
    })
})

export const editAtom = atom({
    key:"editAtom",
    default:false
})