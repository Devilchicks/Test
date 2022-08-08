import React,{useState} from 'react';
import axios from 'axios';
import iconBIG from './asset/logo.png';
import ellipse2 from './asset/ellipse2.png';
import ellipse3 from './asset/ellipse3.png';
import icon from './asset/icon.png';
import line1 from './asset/line1.png';
import icon5 from './asset/icon5.png';
import icon7 from './asset/icon7.png';
import icon4 from './asset/icon4.png';

const Form3 = () => {
    const[akun,setAkun] = useState("");
    const[phoneakun,setPhoneakun] = useState("");

    const saveProduct = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("akun", akun);
        formData.append("phoneakun", phoneakun);
        try {
            await axios.post("http://localhost:5000/akun", formData, {
                headers:{
                    "Content-type":"multipart/form-data"
                }
            });
        } catch (error) {
            console.log(error);
            
        }
    };

    return (

            <div className="flex">
                <div className="w-96  bg-blue-50 px-12 relative">
                <img alt='Logo' src={ellipse2} className="absolute left-0" />
                <img alt='Logo' src={ellipse3} className="absolute right-0 bottom-0" />
                <img alt='Logo' src={iconBIG} className="w-9 py-6" />
                <div className='flex flex-col w-9 py-9'>
                <div className='flex flex-row w-96'>
                    <div>
                        <img alt='icon1' className='h-14 w-14' src={icon} />
                    </div>
                    <div className='text-sm ml-2'>
                        <h4 className='absolute'><b>Owner Information</b></h4>
                        <p className='absolute mt-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eros erat mauris mi.</p>
                    </div>
                </div>

                <div>
                    <img alt='Line' className='h-18 ml-7' src={line1} />
                </div>

                <div className='flex flex-row w-96'>
                        <img alt='icon5' className='relative h-14 w-14 ' src={icon5} />
                    <div className='text-sm ml-2'>
                        <h4 className='absolute'><b>Business Information</b></h4>
                        <p className='absolute mt-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eros erat mauris mi.</p>
                    </div>
                </div>

                <div>
                    <img alt='Line' className='h-18 ml-7' src={line1} />
                </div>

                <div className='flex flex-row w-96'>
                        <img alt='icon7' className='relative h-14 w-14 ' src={icon7} />
                    <div className='text-sm ml-2'>
                        <h4 className='absolute'><b>Account Information</b></h4>
                        <p className='absolute mt-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eros erat mauris mi.</p>
                    </div>
                </div>

                <div>
                    <img alt='Line' className='h-18 ml-7' src={line1} />
                </div>

                <div className='flex flex-row w-96'>
                        <img alt='icon4' className='relative h-14 w-14 ' src={icon4} />
                    <div className='text-sm ml-2'>
                        <h4 className='absolute'><b>Review</b></h4>
                        <p className='absolute mt-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eros erat mauris mi.</p>
                    </div>
                </div>

            </div>

                </div>

                <div className="p-24 flex-1 h-screen">
                <form onSubmit={saveProduct}>
                <div>
                    <label className='font-bold '>Email</label>
                    <input placeholder='Email' type='email' className='border border-gray-300 py-4 px-2 mt-4 w-full rounded-md focus:outline-none' value={akun} onChange={(e)=>setAkun(e.target.value)}/>
               </div>

               <div className='mt-5'>
                    <label className='font-bold '>Phone Number</label>
                    <div className='flex flex-row'>
                        <div className='basis-24'>
                            <select className='border border-gray-300 py-4 mt-4 w-full rounded-md focus:outline-none text-center'>
                                <option>+62</option>
                                <option>+1</option>
                                <option>+88</option>
                            </select>
                        </div>
                        <div className='basis-full ml-3'>
                            <input placeholder='Phone Number' type='number' className='border border-gray-300 py-4 px-2 mt-4 w-full rounded-md focus:outline-none' value={phoneakun} onChange={(e)=>setPhoneakun(e.target.value)}/>
                        </div>
                    </div>
               </div>

               <div>
               <button type='Submit' onClick={() => {window.location.href="/Form4"}} className='font-semibold text-white bg-blue-800 py-3 w-full mb-3 mt-96 rounded hover:shadow-lg hover:bg-blue-600' >Next</button>
               </div>
               </form>
                </div>
            </div>

        )
    }
    
    export default Form3;