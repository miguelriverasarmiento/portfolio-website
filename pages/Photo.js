import  React from 'react';
import Typewriter from 'typewriter-effect';
import Button from '../components/Button';

const Photo = () => {
    return (
        <div className="bg-[url('/img/develop.jpg')] h-screen bg-cover bg-center 
            bg-fixed flex items-center">
        
            <div className='container mx-auto px-4'>

                <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>

                    <div>
                        <h1 className='text-[23px]'>Soy Miguel Rivera</h1>
                        <h4 className='text-[18px] mt-3'>
                            <Typewriter
                                options={{
                                    strings: [
                                        'Desarrollador Frontend', 
                                        'Diseñador UI/UX'
                                    ],
                                    changeDelay: 3,
                                    changeDeleteSpeed: 2,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                    </div>
                    <div className='bg-sky-800 h-[2px] w-[40px]'></div>

                    <div>
                        <p>
                            Programo software frontend en un contexto profesional, freelance y autodidacta...
                        </p>
                        <Button link="/About" text="Leer mas" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo
