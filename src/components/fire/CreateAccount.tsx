import {createUser} from './Fire'
import { SetStateAction, useState } from 'react'
import { Eye, EyeSlash } from 'react-bootstrap-icons'
const SignIn=()=>{
    const [show, setShow]=useState(false)
    const handleShowPassword=()=>{
        show?setShow(false):setShow(true)
    }
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState('')
    const handleCreateUser=()=>{

        createUser(email, password, (err: any)=>{
            console.log(err);
            
            setError(err)
        })
    }
    return (
        <div className='py-12 flex justify-center items-center h-[70vh]'>
            <div>
                <div>{error}</div>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="py-1 w-[300px] mb-1 px-2 text-slate-700 bg-slate-100" placeholder='your email' />
            <br />
            <div className='flex relative items-center '>
            <input value={password} onChange={e=>setPassword(e.target.value)} type={show?'text':'password'} className="py-1 w-[300px] mb-1 px-2 text-slate-700 bg-slate-100" placeholder='create password' />
            {
                !show?            <Eye onClick={handleShowPassword} className='absolute text-slate-400 right-[-2px] top-[-2px] bg-white p-2 ' size={35}/>
:             <EyeSlash onClick={handleShowPassword} className='absolute text-slate-400 right-[-2px] top-[-2px] bg-white p-2 ' size={35}/>


            }
            

            </div>
            <br />
<button className='shadow-lg py-1 px-2 text-xl w-[300px] ' onClick={handleCreateUser}>create</button>
            </div>
        </div>
    )
}

export default SignIn