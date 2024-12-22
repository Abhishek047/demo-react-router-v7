import { Suspense } from "react";
import { Outlet } from "react-router";

const Page = () => {
    return (
        <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
            <Suspense fallback={"Loading..."}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default Page;
