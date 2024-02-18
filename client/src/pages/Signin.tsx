
import { Button } from '../components/Button'
import Header from '../components/Header'
import { Input } from '../shadUI/ui/input'
import { Label } from '../shadUI/ui/label'

const Signin = () => {
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
              <div className='flex items-center ml-auto mb-4' >
                  <Label className=' font-semibold'>Email : </Label>
                  <Input type='email' placeholder='email@example.com' className='ml-3 w-64 ' />
              </div>
              <div className='flex items-center ml-auto'>
                <Label className=' font-semibold'>Password : </Label>
                <Input type='password' placeholder='*******' className='ml-3 w-64'/>
              </div>
              <div className='flex justify-center'>
                <Button 
                  title='Signin'
                  style="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center w-52 mt-8"
                />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Signin