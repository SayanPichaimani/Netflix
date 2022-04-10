import { useEffect, useState } from 'react';

function Header() {
    const [show, handleShow] = useState(false);

    const transition = () =>{
        if (window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transition);
        return () => window.removeEventListener("scroll", transition);
    })

    return (
        <div className= 'fixed top-0 h-12 w-full items-center'>
            <div className='flex justify-between'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png?20190206123158' 
                alt=''
                className='fixed top-4 pl-5 w-20 object-contain'
                />

            </div>
        </div>
    );
}

export default Header;
