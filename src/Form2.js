import React,{useState} from 'react';
import axios from 'axios';
import iconBIG from './asset/logo.png';
import ellipse2 from './asset/ellipse2.png';
import ellipse3 from './asset/ellipse3.png';
import icon from './asset/icon.png';
import line1 from './asset/line1.png';
import icon5 from './asset/icon5.png';
import icon3 from './asset/icon3.png';
import icon4 from './asset/icon4.png';
import vector5 from './asset/Vector5.png';

const Form2 = () => {

    const[bisnis,setBisnis] = useState("");
    const[phonebisnis,setPhonebisnis] = useState("");
    const[country,setCountry] = useState("");
    const[province,setProvince] = useState("");
    const[city,setCity] = useState("");
    const[address,setAddress] = useState("");
    const[pin,setPin] = useState("");
    const[file,setFile] = useState("");
    const[preview,setPreview] = useState("");

    const loadImage = (e)=>{
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveProduct = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("bisnis", bisnis);
        formData.append("phonebisnis", phonebisnis);
        formData.append("country", country);
        formData.append("province", province);
        formData.append("city", city);
        formData.append("address", address);
        formData.append("pin", pin);
        try {
            await axios.post("http://localhost:5000/bisnis", formData, {
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
                <div className="w-96  bg-blue-50 px-12 fixed h-full ">
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
                        <img alt='icon3' className='relative h-14 w-14 ' src={icon3} />
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

                <div className="p-24 flex-1 h-screen ml-96">
                <form onSubmit={saveProduct}>
                <div>
                    <label className='font-bold '>Business name</label>
                    <input placeholder='Business name' type='text' className='border border-gray-300 py-4 px-2 mt-4 w-full rounded-md focus:outline-none' value={bisnis} onChange={(e)=>setBisnis(e.target.value)} />
               </div>

               <div className='mt-5'>
                    <label className='font-bold '>Business phone number</label>
                    <div className='flex flex-row'>
                        <div className='basis-24'>
                            <select className='border border-gray-300 py-4 mt-4 w-full rounded-md focus:outline-none text-center'>
                                <option>+62</option>
                                <option>+1</option>
                                <option>+88</option>
                            </select>
                        </div>
                        <div className='basis-full ml-3'>
                            <input placeholder='Business Number' type='number' className='border border-gray-300 py-4 px-2 mt-4 w-full rounded-md focus:outline-none' value={phonebisnis} onChange={(e)=>setPhonebisnis(e.target.value)} />
                        </div>
                    </div>
               </div>

               <div className='mt-5'>

                    <div className='flex flex-row'>
                    <div className='basis-1/3'><label className='font-bold '>Country</label></div>
                    <div className='basis-1/3 ml-3'><label className='font-bold '>Province / State</label></div>
                    <div className='basis-1/3 ml-3'><label className='font-bold '>City</label></div>
                    </div>

                    <div className='flex flex-row'>
                        <div className='basis-1/3'>
                            <select className='border border-gray-300 py-4 mt-4 w-full rounded-md focus:outline-none text-center' value={country} onChange={(e)=>setCountry(e.target.value)}>
                                <option>Indonesia</option>
                                <option>America</option>
                                <option>India</option>
                                <option>China</option>
                            </select>
                        </div>

                        <div className='basis-1/3 ml-3'>
                            <select className='border border-gray-300 py-4 mt-4 w-full rounded-md focus:outline-none text-center' value={province} onChange={(e)=>setProvince(e.target.value)} >
                                <option>Jakarta</option>
                                <option>Riau</option>
                                <option>Sumatra Utara</option>
                                <option>Jambi</option>
                            </select>
                        </div>

                        <div className='basis-1/3 ml-3'>
                            <select className='border border-gray-300 py-4 mt-4 w-full rounded-md focus:outline-none text-center' value={city} onChange={(e)=>setCity(e.target.value)}>
                                <option>Jakarta Barat</option>
                                <option>Jambi</option>
                                <option>Medan</option>
                                <option>Bogor</option>
                            </select>
                        </div>

                    </div>
               </div>

                <div className='text-gray-500 mt-2'>
                    <p>If your location is not available, it means we haven't reached that area yet</p>
                </div>

               <div className='mt-5'>
                    <label className='font-bold '>Complete Address</label>
                    <input placeholder='Type complete address' type='text' className='border border-gray-300 py-4 px-2 mt-4 w-full rounded-md focus:outline-none' value={address} onChange={(e)=>setAddress(e.target.value)}/>
               </div>

               <div className='mt-5'>
                    <label className='font-bold '>PIN Location</label>
                    <input placeholder='Type complete address' type='text' className='border border-gray-300 py-4 px-2 mt-4 w-full rounded-md focus:outline-none' value={pin} onChange={(e)=>setPin(e.target.value)}/>
               </div>

               <div className='mt-5 items-center justify-center'>
                    <label className='font-bold '>Business profile picture</label>
                    <div className=' flex border border-gray-300  mt-4 w-full rounded-md focus:outline-none justify-center items-center'>
                    <img alt='vector5' className='h-8 absolute' src={vector5} />
                    <input type='file' accept='image/*' className='relative px-2 py-2 file:hidden text-transparent w-full h-40' onChange={loadImage}/>

                    {preview ? (
                    <figure className='relative justify-center'>
                        <img src={preview} alt="Preview"/>
                    </figure>
               ):(
                    ""
               )}
                    </div>
               </div>

               <div>
               <button type='Submit' onClick={() => {window.location.href="/Form3"}} className='font-semibold text-white bg-blue-800 py-3 w-full mb-6 mt-6 rounded hover:shadow-lg hover:bg-blue-600' >Next</button>
               </div>
               </form>
                </div>
            </div>

        )
    }
    
    export default Form2;