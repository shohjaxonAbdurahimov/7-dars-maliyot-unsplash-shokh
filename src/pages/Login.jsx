import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { userSetting } from '../redux/likeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { singUpWithGoogleAccount, signOutFromAccount } from '../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.like)
    const loginSignUp = () => {
        singUpWithGoogleAccount()
            .then((result) => {
                dispatch(userSetting(result))
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="flex justify-center items-center flex-col">

            {!user && <h1 className='text-4xl my-10'>Login / SingnUp With Google</h1>}
            {user && (
                <div className="flex gap-10 flex-col justify-center items-center ">
                    <h1 className='text-3xl my-10'>{user.displayName}</h1>
                    <div className="avatar">
                        <div className="w-24 mb-5 mt-5 rounded-full">
                            <img src={user.photoURL}  />

                        </div>

                    </div>

                </div>
            )}
            <div className='flex gap-5'>
                <button onClick={loginSignUp} className='btn btn-neutral'><span><FcGoogle /></span> <span>signUp</span></button>
                <button onClick={signOutFromAccount} className='btn btn-neutral'><span><FcGoogle /></span> <span>Logout</span></button>


            </div>

        </div>
    )
}

export default Login