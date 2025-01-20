import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col itmes-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'>ChatApp</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base '>Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
          </div>
          <div> 
          <label className='label p-2'>
              <span className='text-base '>Username</span>
            </label>
            <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10' />
          </div>
          <div> 
          <label className='label p-2'>
              <span className='text-base '>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
          </div>
          <div> 
          <label className='label p-2'>
              <span className='text-base '>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' />
          </div>

          <GenderCheckbox></GenderCheckbox>

          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-blick'>Already have and account?</a>

          <div>
          <button className='btn btn-primary btn-block btn-sm mt-2 border-slate-700' >
              Sign Up
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Signup


//STARTER CODE FOR THE SUGNUP COMPONENT
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const Signup = () => {
//   return (
//     <div className='flex flex-col itmes-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Sign Up <span className='text-blue-500'>ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base '>Full Name</span>
//             </label>
//             <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
//           </div>
//           <div> 
//           <label className='label p-2'>
//               <span className='text-base '>Username</span>
//             </label>
//             <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10' />
//           </div>
//           <div> 
//           <label className='label p-2'>
//               <span className='text-base '>Password</span>
//             </label>
//             <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
//           </div>
//           <div> 
//           <label className='label p-2'>
//               <span className='text-base '>Confirm Password</span>
//             </label>
//             <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' />
//           </div>

//           <GenderCheckbox></GenderCheckbox>

//           <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-blick'>Already have and account?</a>

//           <div>
//           <button className='btn btn-primary btn-block btn-sm mt-2 border-slate-700' >
//               Sign Up
//             </button>
//           </div>
//         </form>

//       </div>
//     </div>
//   )
// }

// export default Signup