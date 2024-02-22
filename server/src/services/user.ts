import {z} from 'zod'
import { User, signupSchema } from '../helper/zodHelper';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export async function userHashedPassword(userData:z.infer<typeof signupSchema>){

        let password = userData.password
        let userPassword:string
        
        userPassword =  await bcrypt.hash(password,process.env.BCRYPT_SALT||10)
        return {...userData,password:userPassword}

}

export async function  comparePassword(storedUserPassword:string,userEnteredPassword:string){
       return bcrypt.compare(userEnteredPassword,storedUserPassword)
}


export async function createUserToken(user:User){

        const userDetails = {
                id: user.id,
                email:user.email,
        }

        //@ts-ignore
        return jwt.sign(userDetails,process.env.JWT_SECRET)

}