import React from "react";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import Link from "next/link";

export default function Events() {
  const pastEventData = [
    {
      image:
        "https://res.cloudinary.com/dnqipwdsl/image/upload/v1677857844/Screenshot_132_gjtdim.png",
      title: "Cosmopolitian",
      description:
        "Cosmopolitian is one of the biggest ethno-cultural fests in Eastern India.",
        link: "https://www.multiethnicfest.com/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587407627257-27b7127c868c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
      title: "Vriddhi",
      description:
        "Vriddhi is East India's biggest sports festival.",
        link:'https://vriddhi2022.live/'
    },
  ];
  const upcomingEventData = [
    {
      image:
        "https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Nitrutsav",
      description:
        "Nitrutsav is East India's biggest cultural fest. ",
        link: "https://nitrutsav.live/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587407627257-27b7127c868c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
      title: "Innovision",
      description:
        "Innovision is one of the biggest technical fests in Eastern India.",
        link: "https://inno.nitrkl.in/",
    },
  ];

  return (
    <>
      <Head>
        <title>Societies, NIT Rourkela</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* *********** Meta SEO***********  */}
        <meta
          property="og:title"
          content="SAC NITR,Explore the plethora of thrilling events, exciting
              fests, diverse clubs and other activities in the
            beautiful campus of NIT Rourkela."
        />
        <meta
          name="keywords"
          content="sacnitr,sacnitrkl,sacnitrourkela, sac, club nitr, club, clubnitr, clubnitrkl, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,societies nitrkl,societiesnitrkl"
        />
        <meta
          name="description"
          content="Official Website of SAC NIT Rourkela"
        />
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sacnitr.com/" />
        <meta
          property="og:image"
          content="https://www.vriddhinitr.com/_next/static/media/logoBranding.00987fe3.png"
        />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" />{" "}
        <meta name="description" content="sac 2021" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        {/* Events Hero */}
        <div className="bg-[url('https://res.cloudinary.com/dkqxnquga/image/upload/v1678430362/image_767_hnhpi2.png')] bg-no-repeat w-full bg-cover bg-center h-full">
          <div className="  bg-gradient-to-b from-[#850101cc] to-[#8501011a] bg-no-repeat w-full bg-cover bg-center h-full">
            <div className="bg-[#00000073] bg-no-repeat w-full bg-cover bg-center h-full">
              <div className="flex justify-center items-center h-screen">
                <h1 className={" text-white font-bold text-5xl text-center"}>
                  EVENTS
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="background-image-event">
          <Fade direction="left" triggerOnce="true" delay="30">
            <div className="flex justify-center items-center text-3xl m-5 font-semibold">
              <h1>Upcoming Events</h1>
            </div>
            <div className="flex  items-center justify-center mb-4 rounded-[.3rem] ">
              <div className="grid-container ">
                {upcomingEventData.map((event, index) => (
                  <div
                    class="bg-white border border-gray-200 rounded-[.5rem] shadow dark:bg-gray-800 dark:border-gray-700 p-[.4rem]"
                    key={index}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  >
                    <a href="#">
                      <img
                        class="rounded-t-lg  "
                        style={{
                          aspectRatio: "3/2",
                          objectFit: "cover",
                          width: "100%",
                          margin: "auto",
                        }}
                        src={event.image}
                        alt=""
                      />
                    </a>
                    <div
                      class="bg-[#A4161A]"
                      style={{
                        borderRadius: "0 0 .5rem .5rem",
                      }}
                    >
                      <a href="#">
                        <h5 class="flex justify-center items-center text-xl pt-1 pb-1 font-semibold text-white">
                          {event.title}
                        </h5>
                      </a>
                      <p
                        class="pb-5 ml-2 mr-1 font-normal dark:text-gray-400 text-sm text-justify rounded-[.2rem] text-white pl-2 pr-3 "
                        style={{
                          textAlignLast: "center",
                        }}
                      >
                        {event.description}
                      </p>
                      <hr />
                      <div className="flex justify-between items-center ">
                        <div className="flex justify-center items-center text-white text-xs pt-2 pb-2 pl-2">
                          <MdOutlineWatchLater className="mr-1" /> March 21,
                          2023
                        </div>
                        <div>
                          <Link
                            href={event.link}
                            target="_blank"
                            className="text-white pr-[2vh] text-xs"
                            
                          >
                            Read More
                            <FaGreaterThan className="inline ml-1 " />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-0.5 bg-zinc-300 mt-10"></div>
          </Fade>

          <Fade direction="right" triggerOnce="true" delay="30">
            <div className="flex justify-center items-center text-3xl m-5 font-semibold">
              <h1>Past Events</h1>
            </div>
            <div className="flex  items-center justify-center mb-4 rounded-[.3rem] ">
              <div className="grid-container ">
                {pastEventData.map((event, index) => (
                  <div
                    class="bg-white border border-gray-200 rounded-[.5rem] shadow dark:bg-gray-800 dark:border-gray-700 p-[.4rem]"
                    key={index}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  >
                    <a href="#">
                      <img
                        class="rounded-t-lg  "
                        style={{
                          aspectRatio: "3/2",
                          objectFit: "cover",
                          width: "100%",
                          margin: "auto",
                        }}
                        src={event.image}
                        alt=""
                      />
                    </a>
                    <div
                      class="bg-[#A4161A]"
                      style={{
                        borderRadius: "0 0 .5rem .5rem",
                      }}
                    >
                      <a href="#">
                        <h5 class="flex justify-center items-center text-xl pt-1 pb-1 font-semibold text-white">
                          {event.title}
                        </h5>
                      </a>
                      <p
                        class="pb-5 ml-2 mr-1 font-normal dark:text-gray-400 text-sm text-justify rounded-[.2rem] text-white pl-2 pr-3 "
                        style={{
                          textAlignLast: "center",
                        }}
                      >
                        {event.description}
                      </p>
                      <hr />
                      <div className="flex justify-between items-center ">
                        <div className="flex justify-center items-center text-white text-xs pt-2 pb-2 pl-2">
                          <MdOutlineWatchLater className="mr-1" /> {event.date}
                        </div>
                        <div>
                          <Link
                            href={event.link}
                            target="_blank"
                            className="text-white pr-[2vh] text-xs"
                          >
                            Read More
                            <FaGreaterThan className="inline ml-1 " />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-0.5 bg-zinc-300 mt-10"></div>
          </Fade>
        </div>
      </div>
    </>
  );
}
