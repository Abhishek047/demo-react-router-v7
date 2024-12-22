import "app/welcome/page.css";
import BG_PNG from "app/assests/png-bg.png";
import { NavLink } from "react-router";
import { ROUTE_PATHS } from "~/routePaths";

export function Welcome() {
    return (
        <div className='relative xl:container m-auto px-6 md:px-12 lg:px-6'>
            <h1 className='sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white'>
                React router dom v7 <br className='lg:block hidden' />{" "}
                <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'>
                    Pokemon API
                </span>
                .
            </h1>
            <div className='lg:flex'>
                <div className='relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12'>
                    <p className='sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12'>
                        Learn routing by fetching and displaying Pokémon data seamlessly. Experience
                        dynamic navigation using the Pokémon API!
                    </p>
                    <span className='block font-semibold text-gray-500 dark:text-gray-400'>
                        Chat GPT came with this description {":("}{" "}
                    </span>
                    <div className='grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start'>
                        <a
                            aria-label='add to slack'
                            href='#'
                            className='p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30'>
                            <div className='flex justify-center space-x-4'>
                                <img
                                    className='w-6 h-6'
                                    src='https://www.vectorlogo.zone/logos/slack/slack-icon.svg'
                                    alt='slack logo'
                                    loading='lazy'
                                    width='128'
                                    height='128'
                                />
                                <span className='hidden font-medium md:block dark:text-white'>
                                    Slack
                                </span>
                            </div>
                        </a>
                        <a
                            aria-label='add to chat'
                            href='#'
                            className='p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30'>
                            <div className='flex justify-center space-x-4'>
                                <img
                                    className='w-6 h-6'
                                    src={
                                        "https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg"
                                    }
                                    alt='chat logo'
                                    loading='lazy'
                                    width='128'
                                    height='128'
                                />
                                <span className='hidden font-medium md:block dark:text-white'>
                                    WhatsApp
                                </span>
                            </div>
                        </a>
                        <a
                            aria-label='add to zoom'
                            href='#'
                            className='p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30'>
                            <div className='flex justify-center space-x-4'>
                                <img
                                    className='w-6 h-6'
                                    src='https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg'
                                    alt='chat logo'
                                    loading='lazy'
                                    width='128'
                                    height='128'
                                />
                                <span className='hidden font-medium md:block dark:text-white'>
                                    Zoom
                                </span>
                            </div>
                        </a>
                    </div>

                    <div className='dark:text-gray-300'>
                        🔥🌟
                        <span>Other integrations :</span>
                        <a href='#' className='font-semibold text-gray-700 dark:text-gray-200'>
                            Discord,
                        </a>
                        <a href='#' className='font-semibold text-gray-700 dark:text-gray-200'>
                            Telegram
                        </a>
                    </div>
                    <div>
                        <div className='max-w-md mt-3 sm:flex md:mt-6'>
                            <NavLink to={ROUTE_PATHS.HOME} className='rounded-full shadow'>
                                <button
                                    type='button'
                                    className='flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-cyan-400 border border-transparent rounded-full text-md hover:bg-cyan-300 md:py-4 md:text-2xl md:px-10'>
                                    Let's start
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-0 lg:absolute right-0 lg:w-7/12'>
                    <div className='relative h-full'>
                        <div
                            aria-hidden='true'
                            className='absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl'></div>
                        <img
                            src={BG_PNG}
                            className='relative w-auto h-[400px] m-auto'
                            alt='wath illustration'
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
