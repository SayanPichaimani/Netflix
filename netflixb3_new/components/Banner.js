import { useEffect, useState } from 'react';
import {BsFillPlayFill, BsInfoCircle} from 'react-icons/bs';
import requests  from '../lib/requests';
import axios from '../lib/axios';

function Banner() {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending)
            setmovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length - 1)
                ]
            )
            return request;
        } 
        fetchData()
    }, []);

    return (
        <header
        className="h-[470px] relative z-0 object-contain text-white"
        style={{
            backgroundSize : "cover",
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center"
        }}>
            <div className='ml-8 pt-36 h-48 '>
                <h1 className='text-5xl font-bold pb-5'> {movie?.title || movie?.name || movie?.original_name}</h1>
                <div>
                    <button className='btn'><BsFillPlayFill/> </button>
                    <button className='btn'><BsInfoCircle/></button>
                </div>
                <h1 className='font-semibold text-sm pt-4 max-h-[360px] h-10'>{movie?.overview}</h1>
            </div>
            <div className='bg-gradient-to-b from-transparent to-black h-72'/>
        </header>
    );
}

export default Banner;
