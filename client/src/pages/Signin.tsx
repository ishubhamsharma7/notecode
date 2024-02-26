
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import Header from '../components/Header'
import { Input } from '../shadUI/ui/input'
import { useForm, SubmitHandler } from "react-hook-form"
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuid } from "uuid";
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { userAtom } from '../store/user'
import { singleEditorAtom } from '../store/editor'
import {useCookies} from 'react-cookie'

const signinSchema = z.object({
  email: z.string().email({message:'Enter valid email'}),
  password: z.string().min(5,{message:"Password must have 5 chars"})
})

type UserInput = z.infer<typeof signinSchema>

const Signin = () => {
  const navigate = useNavigate();
  const setAllEditorsData = useSetRecoilState(singleEditorAtom)
  const setUserLoggedIn = useSetRecoilState(userAtom)

  const [cookie,setCookie] = useCookies(['token'])

  const { register, handleSubmit,formState: { errors,isSubmitting},setError} = useForm<UserInput>({resolver:zodResolver(signinSchema)})

  const onSubmit: SubmitHandler<UserInput> = async (data) => {
    try {
      
      const user = await axios.post('http://localhost:3000/api/v1/user/signin',{
        email:data.email,
        password:data.password     
      },{withCredentials:true})
      .then(getEditorDetailForUser)    
    } catch (error:any) {
      setError("root",{
        message:error.response.data.message
      })
    }

  }

  async function getEditorDetailForUser(userDetail:any){

    try {
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8);

      if(!userDetail.data.data.id){
          navigate(`/editor?id=${small_id}`)
      }else{
        const editor = await axios.get(`http://localhost:3000/api/v1/editor/editor-detail?userId=${userDetail.data.data.id}`,{withCredentials:true})
        setAllEditorsData(editor.data)
        const editorId = editor.data.editorId
        navigate(`/editor?id=${editorId}`)
      }
    } catch (error:any) {
      setError("root",{
        message:error.response.data.message
      })
    }
     
  }

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

                  {errors.root && 
                    <div className='text-red-400 text-sm text-center pt-1  px-2'> 
                      {errors.root.message}
                    </div>
                  }
                <div className='flex justify-center'>
                  <Button 
                    title='Signin'
                    buttonType='submit'
                    style="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center w-64 mt-4"
                    disabled = {isSubmitting}
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