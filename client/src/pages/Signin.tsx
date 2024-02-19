
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import Header from '../components/Header'
import { Input } from '../shadUI/ui/input'
import { useForm, SubmitHandler } from "react-hook-form"
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const signinSchema = z.object({
  email: z.string().email({message:'Enter valid email'}),
  password: z.string().min(5,{message:"Password must have 5 chars"})
})
type UserInput = z.infer<typeof signinSchema>

const Signin = () => {
  const { register, handleSubmit,formState: { errors,isSubmitting}} = useForm<UserInput>({resolver:zodResolver(signinSchema)})

  const onSubmit: SubmitHandler<UserInput> = (data) => console.log(data)

  return (
    <div className='min-h-screen flex flex-col'>
        <div>
            <Header/>
        </div>
        <div className='flex justify-center items-center flex-1 bg-black h-full'>
          <div className='flex flex-col w-92 bg-white px-12 pb-10 rounded-lg h-auto'>
              <div className='flex justify-center my-5 font-bold text-3xl'>
                  Sign In    
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className='flex items-center ml-auto mb-2' >
                    <Input type='email' 
                      placeholder='Email' 
                      className='ml-1 w-64 '  
                      {...register("email")} 
                    />
                </div>
                {
                  errors.email && 
                    <div className='text-red-400 text-sm text-center pb-2 px-2'> 
                      {errors.email.message}
                    </div>
                }

                <div className='flex items-center ml-auto'>
                  <Input type='password' 
                      placeholder='Password' 
                      className='ml-1 w-64'
                      {...register("password")}
                  />
                </div>
                {
                  errors.password && 
                  <div className='text-red-400 text-sm text-center pt-1  px-2'> 
                    {errors.password.message}
                  </div>
                }

                <div className='flex justify-center'>
                  <Button 
                    title='Signin'
                    buttonType='submit'
                    style="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center w-64 mt-4"
                  />
                </div>
              </form>
              <div className='flex justify-center mt-4'>
                Need to have an account? <span className='underline pl-1 '><Link to='/signup'> Click here</Link> </span>
              </div>
          </div>
        </div> 
    </div>
  )
}

export default Signin