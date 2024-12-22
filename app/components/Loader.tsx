import "./loader.css";

export default function Loader() {
    return (
        <div className='fixed top-0 left-0 w-[100vw] h-[100vh] z-[10000] grid place-content-center'>
            <div className='overlay absolute w-full h-full bg-zinc-900/70 z-[100]' />
            <div className='banter-loader z-[1000]'>
                <div className='banter-loader__box'></div>
                <div className='banter-loader__box'></div>
                <div className='banter-loader__box'></div>
                <div className='banter-loader__box'></div>
                <div className='banter-loader__box'></div>
                <div className='banter-loader__box'></div>
                <div className='banter-loader__box'></div>
                <div className='banter-loader__box'></div>
                <div className='banter-loader__box'></div>
            </div>
        </div>
    );
}
