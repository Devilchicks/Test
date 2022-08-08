import React, {useState,useEffect} from "react";
import axios from "axios";
import iconBIG from './asset/logo.png';
import ellipse2 from './asset/ellipse2.png';
import ellipse3 from './asset/ellipse3.png';
import icon from './asset/icon.png';
import line1 from './asset/line1.png';
import icon5 from './asset/icon5.png';
import icon7 from './asset/icon7.png';
import icon8 from './asset/icon8.png';

const Form4 = () => {
    const [users,setUsers] = useState([]);
    const [bisnis,setBisnis] = useState([]);
    const [akun,setAkun] = useState([]);
    

    useEffect(()=>{
        getUsers();
    },[]);

    useEffect(()=>{
        getBisnis();
    },[]);

    useEffect(()=>{
        getAkun();
    },[]);

    const getUsers = async() =>{
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    }

    const getBisnis = async() =>{
        const response = await axios.get("http://localhost:5000/bisnis");
        setBisnis(response.data);
    }

    const getAkun = async() =>{
        const response = await axios.get("http://localhost:5000/akun");
        setAkun(response.data);
    }

    return (

            <div className="flex">
                <div className="w-96  bg-blue-50 px-12 fixed h-full">
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
                        <img alt='icon8' className='relative h-14 w-14 ' src={icon8} />
                    <div className='text-sm ml-2'>
                        <h4 className='absolute'><b>Review</b></h4>
                        <p className='absolute mt-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eros erat mauris mi.</p>
                    </div>
                </div>

            </div>

                </div>

                <div className="p-24 flex-1 h-screen ml-96">
                {users.map((user)=>(
                    <div key={user.id}>
                        <label className='font-bold'>Owner Information</label>

                        <div className='flex flex-row mt-5'>
                            
                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label className='font-bold'>Owner Information</label>
                            </div>

                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label>{user.name}</label>
                            </div>
                            
                        </div>

                        <div className='flex flex-row'>
                            
                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label className='font-bold'>Owner email</label>
                            </div>

                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label>{user.email}</label>
                            </div>
                            
                        </div>

                        <div className='flex flex-row'>
                            
                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label className='font-bold'>Owner phone number</label>
                            </div>

                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label>{user.phone}</label>
                            </div>
                            
                        </div>

                        <div className='flex basis-full border border-gray-300 py-28 justify-center'>
                        <img alt='vector5' className='h-8' src={user.url} />
                        </div>

                    </div>
                    ))}

                    {bisnis.map((bisniss)=>(
                    <div className='mt-5'key={bisniss.id}>
                        <label className='font-bold'>Business information</label>

                        <div className='flex flex-row mt-5'>
                            
                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label className='font-bold'>Business name</label>
                            </div>

                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label>{bisniss.bisnis}</label>
                            </div>
                            
                        </div>

                        <div className='flex flex-row'>
                            
                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label className='font-bold'>Business phone number</label>
                            </div>

                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label>{bisniss.phonebisnis}</label>
                            </div>
                            
                        </div>

                        <div className='flex flex-row'>
                            
                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label className='font-bold'>Country, State, City</label>
                            </div>

                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label>{bisniss.country},{bisniss.province},{bisniss.city}</label>
                            </div>
                            
                        </div>

                        <div className='flex flex-row'>
                            
                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label className='font-bold'>Complete address</label>
                            </div>

                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label>{bisniss.address}</label>
                            </div>
                            
                        </div>

                        <div className='flex basis-full border border-gray-300 py-28 justify-center'>
                        <img alt='vector5' className='h-8' src={bisniss.url} />
                        </div>

                    </div>
                    ))}

                    {akun.map((akuns)=>(
                    <div className='mt-5' key={akuns.id}>

                        <label className='font-bold'>Account information</label>

                        <div className='flex flex-row mt-5'>
                            
                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label className='font-bold'>Email</label>
                            </div>

                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <p>{akuns.akun}</p>
                            </div>
                            
                        </div>

                        <div className='flex flex-row'>
                            
                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <label className='font-bold'>Phone number</label>
                            </div>

                            <div className='basis-1/2 border border-gray-300 p-3'>
                            <p>{akuns.phoneakun}</p>
                            </div>
                            
                        </div>

                    </div>
                    ))}
                    
                <div>
               <button onClick={() => {window.location.href="/Acc"}} className='font-semibold text-white bg-blue-800 py-3 w-full mb-6 mt-16 rounded hover:shadow-lg hover:bg-blue-600' >Next</button>
               </div>

                </div>
            </div>

        )
    }
    
    export default Form4;