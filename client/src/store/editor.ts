import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

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



export const singleEditorAtom = atomFamily({
    key: "singleEditorAtom",
    default:selectorFamily({
        key:"singleEditorSelector",
        get : (id:string) => async ({get})=>{
            const editor = (await axios.get(`http://localhost:3000/api/v1/editor/editor-detail?userId=${id}`,{withCredentials:true})).data
            return editor as SingleEditor
        },
    })
})

// export const languageSelector = selector({
//     key:"languageSelector",
//     get : ({get})=>{
//         const editorValues = get(singleEditorAtom)

//     }
// })

// export const singleEditorAtom = atom<null | SingleEditor>({
//     key:"singleEditorAtom",
//     default:
// })


export const editAtom = atom({
    key:"editAtom",
    default:false
})