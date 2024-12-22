import type { PokemonData } from "~/types/pokemon.types";
import type { Route } from "./+types/detail";
import axios from "axios";
import { endpoints } from "~/api/endpoints";
import NotFound from "~/components/NotFound";
import "./pokemon.css";

export async function loader({ params }: Route.LoaderArgs) {
    let response = null;
    try {
        const { data } = await axios.get(endpoints.pokemon + params.id);
        response = data as PokemonData;
    } catch (error) {
        response = null;
    }
    return { success: !!response, data: response };
}
const STAT_COLOR = {
    hp: "bg-lime-300",
    attack: "bg-red-400",
    defense: "bg-yellow-400",
    ["special-attack"]: "bg-indigo-500",
    ["special-defense"]: "bg-cyan-500",
    speed: "bg-blue-500",
};

const Page = ({ loaderData: { data } }: Route.ComponentProps) => {
    return (
        <section>
            {data ? (
                <div className='grid grid-cols-4'>
                    <div className='col-span-1'>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            {Object.values(data.sprites)
                                .filter((url) => !!url && typeof url === "string")
                                .map((url) => (
                                    <div
                                        key={url as unknown as string}
                                        className='p-4 border-indigo-200 border-[1px] cursor-pointer rounded-md'>
                                        <img src={url as unknown as string} alt='' />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div>
                            <p className='text-5xl capitalize'>{data.name}</p>
                        </div>
                        <div className='my-8 grid grid-cols-4 gap-2 w-full rounded-md p-4 bg-indigo-800/30'>
                            <div className='dataInfo-page'>
                                <p className='cardInfo-page'>{data.base_experience}</p>
                                <p className='cardInfo-name-page'>Exp</p>
                            </div>
                            <div className='dataInfo-page'>
                                <p className='cardInfo-page'>{data.moves.length}</p>
                                <p className='cardInfo-name-page'>Moves</p>
                            </div>
                            <div className='dataInfo-page'>
                                <p className='cardInfo-page'>{data.height}</p>
                                <p className='cardInfo-name-page'>Height</p>
                            </div>
                            <div className='dataInfo-page'>
                                <p className='cardInfo-page'>{data.weight}</p>
                                <p className='cardInfo-name-page'>Weight</p>
                            </div>
                        </div>
                        <div>
                            <p className='section-heading'>Abilities</p>
                            <ul className='pl-4'>
                                {data.abilities.map((item) => (
                                    <li>
                                        <p className='capitalize mb-1'>{item.ability.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='my-8'>
                            <p className='section-heading'>Stats</p>
                            <ul className='pl-4'>
                                {data.stats.map((item) => (
                                    <li key={item.stat.name} className='flex flex-col'>
                                        <p className='capitalize flex items-center gap-4 mb-4'>
                                            {item.stat.name}{" "}
                                            <span className='cardInfo-page'>{item.base_stat}</span>
                                        </p>
                                        <div className='w-full mb-4'>
                                            <div className='bg-stroke dark:bg-dark-3 relative h-1.5 w-full rounded-2xl'>
                                                <div
                                                    className={`${
                                                        STAT_COLOR[
                                                            item.stat
                                                                .name as keyof typeof STAT_COLOR
                                                        ] || "bg-blue-300"
                                                    } absolute top-0 left-0 h-full rounded-2xl`}
                                                    style={{
                                                        width: `${item.base_stat}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </section>
    );
};

export default Page;
