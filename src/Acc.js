import iconBIG from './asset/logo.png';
import acc from './asset/acc.png';


const Acc = () => {
    return(
        <div>
            <div className="flex flex-row items-center px-24 py-6">
                <img alt='Logo' src={iconBIG} className="w-9" />
            </div>

            <div className='flex flex-col mt-16'>

            <div className='flex justify-center'>
            <img alt='Thank You' width='550' src={acc} />
            </div>

            <div className='text-center text-5xl font-bold'>
            <h1>Your request has been submitted</h1>
            </div>

            <div className='text-center text-lg text-gray-500 mt-5'>
            <h5>We will notify you for further update max 2x24 👌</h5>
            </div>

            <div className='text-center'>
               <button onClick={() => {window.location.href="/"}} className='font-semibold text-white bg-blue-800 py-3 w-52 mb-6 mt-8 rounded hover:shadow-lg hover:bg-blue-600' >Back To Home</button>
            </div>

            </div>
        </div>
    )

}

export default Acc;