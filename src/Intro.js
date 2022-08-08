import iconBIG from './asset/logo.png';
import iconHP from './asset/hp1.png';
import iconHP2 from './asset/hp2.png';
import elips from './asset/ellipse.png';
import vector from './asset/Vector.png';
import vector2 from './asset/Vector2.png';
import vector3 from './asset/Vector3.png';
import vector4 from './asset/Vector4.png';
import person from './asset/person.png';

const Intro = () => {
    return (
        <div className='container mx-auto'>
            <header className="flex flex-row items-center justify-between px-24 py-6">
                <div>
                    <img alt='Logo' src={iconBIG} className="w-9" />
                </div>

                <div>
                    <button className='font-bold'>Back To Main Page</button>
                </div>
            </header>
            <div>
                <div className='font-bold text-5xl text-center'>
                    <h1>Tired of the old way of <br/>selling online?</h1>
                </div>
                <div className='text-center'>
                <p className='py-3 text-gray-500'>Try BIG Tenant, feel the new experience of online selling in virtual <br/>world. Register, earn money, and let’s get rich! </p>
                <button onClick={() => {window.location.href="/Form"}} className='font-semibold text-white bg-blue-800 py-3 px-6 rounded hover:shadow-lg hover:bg-blue-600' >Register now</button>
                </div>
                <div className='flex flex-row-reverse justify-center py-7'>
                    <img alt='Asset4' className="absolute h-48 mx-64 top-2/3" src={vector}/>
                    <img alt='Asset3' width="600" className="absolute bottom-0 object-center" src={elips}/>
                    <img alt='Asset5' className="absolute h-20 bottom-0 -mx-80" src={vector2}/>
                    <img alt='Asset2' className="relative right-16 w-50 h-80 object-center" src={iconHP2}/>
                    <img alt='Asset1' width="290" className="relative left-5 object-center" src={iconHP}/>
                    <img alt='Asset6' className="absolute h-16 object-center bg-gray-200 py-4 px-4 rounded left-1/4 shadow-2xl" src={vector3}/>
                    <img alt='Asset7' className="absolute bottom-24 right-1/4 h-16 object-center bg-gray-200 py-4 px-4 rounded shadow-2xl" src={vector4}/>
                    <p  className="absolute bg-gray-200 rounded-xl left-1/4 bottom-28 shadow-2xl py-3 px-5">Total income<br/><b>Rp.3.500.000,-</b></p>
                    
                    <div className="flex flex-row absolute h-20 right-96 bg-gray-200 py-4 px-4 rounded-xl">
                        <img alt='Asset8' src={person}/>
                        <p className='px-3'>New order <br/><b>Jaydon Curtis</b></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Intro;