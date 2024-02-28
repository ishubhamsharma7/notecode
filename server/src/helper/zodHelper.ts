import {z} from 'zod'

export const signupSchema = z.object({
    email: z.string().email(),
    password :z.string().min(5,{message:"Password must have 5 characters"}),
    fullName: z.string().min(1,{message:"Name must have 1 character"})
})

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export interface User {
    id:number;
    fullName:string;
    email:string;
    password:string
}

export const resetPasswordSchema = z.object({
    email: z.string().email(),
    newPassword :z.string().min(5,{message:"Password must have 5 characters"}),
    confirmPassword: z.string()
})


export const editorSaveSchema = z.object({
    editorId: z.string(),
    editable: z.boolean(),
    codeData: z.string(),
    languageId: z.number()
})