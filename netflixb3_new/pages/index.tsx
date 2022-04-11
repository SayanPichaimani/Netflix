import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/vercel.svg'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from '../lib/requests'


const Home: NextPage = () => {
  return (
    <div className='bg-black min-h-screen text-white'>
      <Head>
        <title>NetflixB3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />

    <Banner/>
    
    <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>

    <Row title="Tendances" fetchURL={requests.fetchTrending} />

    <Row title="Les plus gros succès" fetchURL={requests.fetchTopRated} />

    <Row title="Action" fetchURL={requests.fetchActionMovies} />

    <Row title="Comedie" fetchURL={requests.fetchComedyMovies} />

    <Row title="Horreur" fetchURL={requests.fetchHorrorMovies} />

    <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />

    <Row title="Documentaire" fetchURL={requests.fetchDocumentaries} />
      </div>
  )
}

export default Home
