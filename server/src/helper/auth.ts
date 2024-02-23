import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import prisma from './prismaClient';

// export interface UserRequest extends Request{
//     user?:{
//         id:number;
//         email:string
//     }
// }

export interface UserRequest {
    id:number;
    email:string
}

declare module 'express' {
    interface Request {
        user?: UserRequest
    }
}

export default async function auth(req:Request,res:Response,next:NextFunction){
    const userTokenCookie = req.cookies.token;
    
    if(!userTokenCookie) return res.status(403).json({message:"no token"});

    try {
        //@ts-ignore
        const decoded =  jwt.verify(userTokenCookie, process.env.JWT_SECRET);
    
        if(decoded.id){

            const user = await prisma.user.findFirst({
                where : {
                    id:decoded.id
                }
            })

            if(!user?.id) return res.status(409).json({messgae:"User does not exists"})
            
            req.user = {
                id: decoded.id,
                email: decoded.email
            }
            
            next()
        }else {
            return res.status(403).json({});
        }

    } catch (err) {
        return res.status(403).json({msg:"Invalid User"});
    }
}