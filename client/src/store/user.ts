import axios from "axios";
import { atom, selector } from "recoil";


export interface User {
   id:number
   email: string;
   name: string;
 }

const userSelector = selector({
  key: 'userSelector',
  get: async () => {
    const response = await axios.get('https://notecode.onrender.com/api/v1/user/me',{withCredentials:true});
    return response.data.user as User;
  },
});

export const userAtom = atom<null | User>({
   key: "userAtom",
   default: userSelector,
 });