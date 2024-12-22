import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { ROUTE_PATHS } from "./routePaths";

export default [
    layout("layouts/MainLayout.tsx", [
        index("routes/home.tsx"),
        route(ROUTE_PATHS.ABOUT, "routes/about.tsx"),
        route(ROUTE_PATHS.POKEMON, "routes/pokemon/index.tsx", [
            index("routes/pokemon/list.tsx"),
            route(":id", "routes/pokemon/detail.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
