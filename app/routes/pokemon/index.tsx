import { Outlet } from "react-router";

const Page = () => {
    return (
        <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
            <Outlet />
        </div>
    );
};

export default Page;
