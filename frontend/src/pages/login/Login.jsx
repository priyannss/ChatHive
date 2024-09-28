import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(username, password);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <h1 className='text-3xl text-white font-sans fixed top-10 left-10 font-semibold'><span className='text-blue-600'>Chat</span>Hive</h1>
            <div className='w-full p-6 rounded-lg shadow-md bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <h1 className='text-2xl font-semibold text-center text-white'>Welcome back!</h1>
                <h2 className='text-center text-sm'>We are so excited to see you again!</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-sm label-text uppercase'>Username</span>
                        </label>
                        <input type="text" className='w-full input input-bordered h-10 outline-none'
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-sm label-text uppercase'>Password</span>
                        </label>
                        <input type="password" className='w-full input input-bordered h-10 outline-none'
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className='bg-indigo-600 w-full text-white rounded-md btn-sm mt-2 hover:bg-indigo-700'
                            disabled={loading}>
                            {loading? <span className='loading loading-spinner'></span> : "Log in"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;