import ClubName from "@/components/ClubName/ClubName";



import Society from "@/pages/societies"
import SocietyCom from "@/components/Societies/SocietyCom"



import Skew2 from "@/components/HomePage/Homepage";


import Head from "next/head";

import Announcement from "../components/Announcement/Announcement";
import SocietyRepresentative from "../components/SocietyRepresentative/SocietyRepresentative";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Aboutsac from "@/components/DeanSpeaks/DeanSpeaks";
import Deanspeaks from "@/components/DeanSpeaks/DeanSpeaks";
import SocietyGallery from "../components/SocietyGallery/SocietyGallery";
import ClubHero from "@/components/ClubHero/ClubHero";
import AboutPage from "../components/AboutPage/AboutPage";
import Gallery from "@/components/Gallery/Gallery";

import ContactPage from "@/components/ContactPage/ContactPage";





import HomePageMobile from "@/components/HomePageMobile";
import DeanSpeaks from "@/components/DeanSpeaks/DeanSpeaks";
import Carousel from '../components/FestCarousel/Carousel';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

         
         {/* <ContactPage/> */}
        {/* <p>SAC Website</p> */}
        {/* <ClubName />  */}

        {/* <Skew2 /> */}

        {/* <p>SAC Website</p> */}

        {/* <Carousel /> */}

        <Skew2 />
        {/* <HomePageMobile /> */}
        <Announcement />

         <Deanspeaks />
        <SocietyRepresentative />
        <FAQ />
       <Carousel/>
        {/* <AboutPage/> */}

       {/* <Gallery/> */}
        {/* <Footer />
       <SocietyGallery/> */}
{/* <ClubHero/> */}
        

        <Deanspeaks />
        {/* <SocietyRepresentative /> */}
        {/* <FAQ /> */}
        {/* <Carousel4 /> */}
        <AboutPage />
        {/* <ClubHero/> */}
        {/* <Gallery /> */}
        {/* <Footer /> */}
        {/* <SocietyGallery /> */}
        {/* <ClubHero /> */}

        {/* <DeanSpeaks/> */}

       {/* <DeanSpeaks/> */}


        {/* <ClubName /> */}

        {/* <p>SAC Website</p> */}
      </main>
    </>
  );
}
