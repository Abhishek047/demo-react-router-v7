import axios from "axios";
import type { Route } from "./+types/list";
import { endpoints } from "~/api/endpoints";
import type { PokemonData } from "~/types/pokemon.types";

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
            {data ? (
                <>asdasd</>
            ) : (
                <div>
                    <h6 className='text-xl lg:text-3xl text-center mb-[1em]'>Oops no data found</h6>
                </div>
            )}
        </div>
    );
};

export default Page;
