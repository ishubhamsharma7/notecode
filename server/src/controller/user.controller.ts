import { NextFunction, Request, Response } from "express";
import { signinSchema, signupSchema, resetPasswordSchema } from "../helper/zodHelper";
import prisma from "../helper/prismaClient";
import bcrypt from 'bcrypt'
import { comparePassword, createUserToken, userHashedPassword } from "../services/user.service";

export async function signupUser(req:Request,res:Response,next:NextFunction){
    const userDetails = req.body
    const parsedSignupUser = signupSchema.safeParse(userDetails)

    if(!parsedSignupUser.success) return res.status(411).json({message:"Invalid user data"})

    const userExists = await prisma.user.findUnique({
        where:{
            email: parsedSignupUser.data.email
        }
    })

    if(userExists) return res.status(409).json({messgae:"Same email already exists"})

    const userDataWithHashPassword = await userHashedPassword(parsedSignupUser.data)
    

    await prisma.user.create({ data:userDataWithHashPassword })

    return res.status(201).json({
        message: "Account created"
    })
}  


export async function signinUser (req:Request,res:Response,next:NextFunction){
    const userLoginDetails = req.body
    const parsedSigninUser = signinSchema.safeParse(userLoginDetails)

    if(!parsedSigninUser.success) return res.status(411).json({message:"Invalid user data"})

    const user = await prisma.user.findUnique({
        where:{
            email: parsedSigninUser.data.email
        }
    })

    if(!user) return res.status(409).json({messgae:"User does not exists"})
    
    const isPasswordMatched = await comparePassword(user.password,parsedSigninUser.data.password)

    if(!isPasswordMatched) return res.status(403).json({message:"Enter correct password"})

    const token = await createUserToken(user)

    return res.cookie("token",token,{
        httpOnly:true,
        sameSite:'lax',
        secure:true,
    }).json({message:"User logged in",data:{id:user.id,email:user.email}})
    
}  

export async function resetPassword(req:Request,res:Response,next:NextFunction){

    const userUpdatedPassword  = req.body

    
    const user = await prisma.user.findUnique({
        where:{
            email:userUpdatedPassword.email
        }
    })
    
    if(!user) return res.status(409).json({messgae:"User does not exists"})
    
    const parsedResetPassword = resetPasswordSchema.safeParse(userUpdatedPassword)
    
    if(!parsedResetPassword.success) return res.status(411).json({message:"Invalid user data"})
    
    if(userUpdatedPassword.confirmPassword !== userUpdatedPassword.newPassword) return res.status(409).json({message:"Password does not match"})
     
    const userDataWithHashPassword = await bcrypt.hash(parsedResetPassword.data.newPassword,process.env.BCRYPT_SALT||10)

    await prisma.user.update({
        where:{
            email: parsedResetPassword.data.email
        },
        data:{
            password: userDataWithHashPassword
        }
    })

    return res.status(200).json({message:"Password is updated. Please re-login"})

}


export async function getUserProfile(req:Request,res:Response,next:NextFunction){

   return res.json({user:req.user})
}