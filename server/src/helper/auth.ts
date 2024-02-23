import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

// export interface UserRequest extends Request{
//     user?:{
//         id:number;
//         email:string
//     }
// }

export interface UserRequest {
        user?:{
            id:number;
            email:string
        }
    }

declare module 'express-serve-static-core' {
    interface Request {
        user?: Record<string,UserRequest>
    }
}

export default async function auth(req:Request,res:Response,next:NextFunction){
    const userTokenCookie = req.cookies.token;
    if(!userTokenCookie) return res.status(403).json({message:"no token"});

    try {
        //@ts-ignore
        const decoded =  jwt.verify(userTokenCookie, process.env.JWT_SECRET);
    
        if(decoded.id){
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