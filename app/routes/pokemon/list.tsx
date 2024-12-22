import axios from "axios";
import type { Route } from "./+types/list";
import { endpoints } from "~/api/endpoints";
import type { PokemonData } from "~/types/pokemon.types";
import "app/routes/pokemon/pokemon.css";
import { NavLink } from "react-router";
import { ROUTE_PATHS } from "~/routePaths";

export type PokemonListResponse = {
    count: number;
    next: string;
    previous: null;
    results: Result[];
};

export type Result = {
    name: string;
    url: string;
};

export async function loader({ request }: Route.LoaderArgs) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    let response = null;
    let details: (PokemonData | null)[] = [];
    try {
        const { data } = await axios.get(endpoints.pokemon + "?limit=10");
        response = data as PokemonListResponse;
        const detailsRequest = await Promise.allSettled(
            response.results.map((item) => axios.get(item.url))
        );
        details = detailsRequest.map((item) =>
            item.status === "fulfilled" ? (item.value.data as PokemonData) : null
        );
    } catch (error) {
        response = null;
    }
    return { success: !!response, data: response, search: q, details };
}

const Page = ({ loaderData: { data, search, details } }: Route.ComponentProps) => {
    return (
        <div>
            <h6 className='text-2xl lg:text-4xl mb-[1em]'>
                {search ? `Searched: ${search}` : "Pokemon List"}
            </h6>
            <>
                <input
                    type='text'
                    placeholder='Search pokemon'
                    className='w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
                />
            </>
            {data && details.length > 0 ? (
                <div className='grid my-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {details.map((pokemonData, index) => (
                        <div
                            key={data.results?.[index].name || index}
                            className='p-4 min-h-[230px] w-full mx-auto rounded-md shadow-sm shadow-indigo-300'>
                            {pokemonData ? (
                                <div className='flex flex-col h-full gap-4 justify-center items-center'>
                                    <img
                                        alt={pokemonData.name}
                                        src={pokemonData.sprites.front_default}
                                    />
                                    <p className=' text-lg mb-[0.5em] capitalize'>
                                        {pokemonData.name}
                                    </p>
                                    <div className='grid grid-cols-4 gap-2 w-full'>
                                        <div className='dataInfo'>
                                            <p className='cardInfo'>
                                                {pokemonData.base_experience}
                                            </p>
                                            <p className='cardInfo-name'>Exp</p>
                                        </div>
                                        <div className='dataInfo'>
                                            <p className='cardInfo'>{pokemonData.moves.length}</p>
                                            <p className='cardInfo-name'>Moves</p>
                                        </div>
                                        <div className='dataInfo'>
                                            <p className='cardInfo'>{pokemonData.height}</p>
                                            <p className='cardInfo-name'>Height</p>
                                        </div>
                                        <div className='dataInfo'>
                                            <p className='cardInfo'>{pokemonData.weight}</p>
                                            <p className='cardInfo-name'>Weight</p>
                                        </div>
                                    </div>
                                    <NavLink
                                        className='w-full'
                                        to={ROUTE_PATHS.POKEMON + `/${pokemonData.name}`}>
                                        <button className='w-full mt-4 rounded-md p-2 text-sm bg-indigo-400'>
                                            See more
                                        </button>
                                    </NavLink>
                                </div>
                            ) : (
                                <p className='text-xl lg:text-3xl text-center mb-[1em]'>
                                    Oops no data found for: {data.results?.[index].name}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <p className='text-xl lg:text-3xl text-center mb-[1em]'>Oops no data found</p>
                </div>
            )}
        </div>
    );
};

export default Page;
