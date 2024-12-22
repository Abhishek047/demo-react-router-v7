import { Outlet, useLocation } from "react-router";
import { Navbar } from "~/components/Navbar";
import type { Route } from "../+types/root";
import { ROUTE_PATHS } from "~/routePaths";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Pokemon API" },
        { name: "Pokemon landing page", content: "Pokemon landing page for API!" },
    ];
}

export default function MainLayout() {
    const { pathname } = useLocation();
    const paddingTop = pathname === ROUTE_PATHS.HOME ? "pt-40 lg:pt-44" : "pt-20 lg:pt-20";

    return (
        <div>
            <Navbar />;
            <main>
                <div className='bg-white dark:bg-gray-900'>
                    <div
                        className={`bg-white relative ${paddingTop} min-h-[100vh] pb-20 dark:bg-gray-900`}>
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}
