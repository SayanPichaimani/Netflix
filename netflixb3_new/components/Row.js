import { useEffect, useState } from 'react';
import axios from '../lib/axios';

function Row ({title, fetchURL, isLargeRow = false}){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchURL]);

    return (
        <div className='p-5'>
            <h2 className='text-2xl md:text-4xl font-medium md:mb-5'>
                {title}
            </h2>
            <div className="flex space-x-5 py-5 overflow-y-hidden overflow-x-scroll pl-5">
                {movies?.map((movie) => (
                    <div className={`${isLargeRow ? 'flex-none h-auto py-6' : 'flex-none group w-80 h-48 hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20'}`}>
                        <img 
                        src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt="" 
                        className={`${isLargeRow ? 'h-48 md:w-48 md:h-72 object-contain cursor-pointer hover:scale-110 transition transform duration-150 ease-out rounded-lg' : 'absolute w-full h-full object-cover rounded-md hover:brightness-50 z-0'}`}
                        />
                        <h2 className={`${isLargeRow ? 'hidden' : 'z-50 absolute bottom-5 text-center w-full text-white text-lg font-medium hidden group-hover:block cursor-pointer px-3'}`}>
                            {movie?.title || movie.name || movie.original_name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Row;
