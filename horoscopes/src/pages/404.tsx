import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
      <div className='text-center font-raleway'>
          <p className='font-bold text-[120px]'>404</p>
          <h1 className='text-4xl'>Page not found</h1>
          <div className="flex justify-center">
            <Link to={'/'} className='bg-blue font-bold text-white px-4 py-1 rounded-lg mt-[30px] block max-w-[200px]'>RETURN TO HOME</Link>
          </div>
    </div>
  )
}

export default ErrorPage;
