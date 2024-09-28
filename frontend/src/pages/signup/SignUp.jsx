import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState(
        {
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: ""
        }
    );

    const {loading, signup} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <h1 className='text-3xl text-white font-sans fixed top-10 left-10 font-semibold'><span className='text-blue-600'>Chat</span>Hive</h1>
            <div className='w-full p-6 rounded-lg shadow-md bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <h1 className='text-2xl font-semibold text-center text-white mb-4'>Create an account</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-sm label-text uppercase'>Full Name</span>
                        </label>
                        <input type="text" className='w-full input input-bordered h-10' value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-sm label-text uppercase'>Username</span>
                        </label>
                        <input type="text" className='w-full input input-bordered h-10' value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-sm label-text uppercase'>Password</span>
                        </label>
                        <input type="password" className='w-full input input-bordered h-10' value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-sm label-text uppercase'>Confirm Password</span>
                        </label>
                        <input type="password" className='w-full input input-bordered h-10' value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-sm label-text uppercase'>Gender</span>
                        </label>
                        <select id="Gender" className='w-full input input-bordered h-10' value={inputs.gender}
                            onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}>
                            <option value="" disabled></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                    </div>

                    <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div>
                        <button className='bg-indigo-600 w-full text-white rounded-md btn-sm mt-2 hover:bg-indigo-700' 
                        disabled={loading} >
                            {loading? <span className='loading loading-spinner'></span> : "Sign up"}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignUp