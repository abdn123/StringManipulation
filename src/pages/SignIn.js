import React from 'react'
import Navbar from '../components/Navbar'
function SignIn() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='signin template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
        <div className='40-w p-5 rounded'>
            <form>
                <div className='page-container'>
                    <div class="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700 dark:text-gray-200">Sign in to your account</h2>
                    </div>
                    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                         <div id="" class="bg-white shadow rounded-lg dark:bg-gray-800 dark:ring-1 dark:ring-white/10 dark:ring-inset "></div>
                    </div>
                </div>
        
                <div className='mb-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter your email' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter password' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <input type="checkbox" className='custom-control custom-checkbox' id = 'check'/>
                    <label htmlFor="check" className='custom-input-label'>
                        Remember me
                    </label>
                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary'></button>
                </div>
                <p className='text-right'>
                    Forgot <a href="">Password?</a><a href="">Sign up</a>
                </p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
