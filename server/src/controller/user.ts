import { NextFunction, Request, Response } from "express";
import { signinSchema, signupSchema } from "../helper/zodHelper";
import prisma from "../helper/prismaClient";
import { comparePassword, createUserToken, userHashedPassword } from "../services/user";

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

    if(!isPasswordMatched) return res.status(403).json({messgae:"Enter correct password"})

    const token = await createUserToken(user)

    return res.cookie("token",token,{
        httpOnly:true
    }).status(200).json({message:"User logged in"})
    
}  
