import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
const HomeMarquee = () => {
    return (
        <div className='my-20'>
            <h1 className='max-w-[1800px] mx-auto px-4 mb-10 text-3xl '>Powering our community of entrepreneurs</h1>
            <Marquee pauseOnHover={true}>
                <div className='flex gap-12 mb-10'>
                    <div className='relative group overflow-hidden'>
                    <Image fill className='w-full h-[550px] border border-black rounded-xl' src='https://cdn.shopify.com/theme-store/hf5090g0xog2g0foifkpovpt398f.jpg'></Image>
                    <div className='absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center'>
                        <h3 className='text-2xl'>Parise</h3>
                        <p>$230 USD</p>
                        <button className='text-xl px-5 py-3 bg-black text-white rounded-full'>View theme</button>
                    </div>
                    </div>
                    <div className='relative group overflow-hidden'>
                    <Image fill className='w-full h-[550px] border border-black rounded-xl' src='https://cdn.shopify.com/theme-store/i4cw9c8tqpwjwrjv7rpixe5gnrc1.jpg'></Image>
                    <div className='absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center'>
                        <h3 className='text-2xl'>Parise</h3>
                        <p>$230 USD</p>
                        <button className='text-xl px-5 py-3 bg-black text-white rounded-full'>View theme</button>
                    </div>
                    </div>
                    <div className='relative group overflow-hidden'>
                    <Image fill className='w-full h-[550px] border border-black rounded-xl' src='https://cdn.shopify.com/theme-store/i4cw9c8tqpwjwrjv7rpixe5gnrc1.jpg'></Image>
                    <div className='absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center'>
                        <h3 className='text-2xl'>Parise</h3>
                        <p>$230 USD</p>
                        <button className='text-xl px-5 py-3 bg-black text-white rounded-full'>View theme</button>
                    </div>
                    </div>
                    <div className='relative group overflow-hidden'>
                    <Image fill className='w-full h-[550px] border border-black rounded-xl' src='https://cdn.shopify.com/theme-store/hf5090g0xog2g0foifkpovpt398f.jpg'></Image>
                    <div className='absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center'>
                        <h3 className='text-2xl'>Parise</h3>
                        <p>$230 USD</p>
                        <button className='text-xl px-5 py-3 bg-black text-white rounded-full'>View theme</button>
                    </div>
                    </div>
                    <div className='relative group overflow-hidden'>
                    <Image fill className='w-full h-[550px] border border-black rounded-xl' src='https://cdn.shopify.com/theme-store/i4cw9c8tqpwjwrjv7rpixe5gnrc1.jpg'></Image>
                    <div className='absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center '>
                        <h3 className='text-2xl'>Parise</h3>
                        <p>$230 USD</p>
                        <button className='text-xl px-5 py-3 bg-black text-white rounded-full'>View theme</button>
                    </div>
                    </div>
                </div>
            </Marquee>

            <Marquee pauseOnHover={true} direction={'right'}>
                <div className='flex gap-12 '>
                    <div className='relative group overflow-hidden'>
                    <Image fill className='w-full h-[550px] border border-black rounded-xl' src='https://cdn.shopify.com/theme-store/hf5090g0xog2g0foifkpovpt398f.jpg'></Image>
                    <div className='absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center'>
                        <h3 className='text-2xl'>Parise</h3>
                        <p>$230 USD</p>
                        <button className='text-xl px-5 py-3 bg-black text-white rounded-full'>View theme</button>
                    </div>
                    </div>
                    <div className='relative group overflow-hidden'>
                    <Image fill className='w-full h-[550px] border border-black rounded-xl' src='https://cdn.shopify.com/theme-store/i4cw9c8tqpwjwrjv7rpixe5gnrc1.jpg'></Image>
                    <div className='absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center'>
                        <h3 className='text-2xl'>Parise</h3>
                        <p>$230 USD</p>
                        <button className='text-xl px-5 py-3 bg-black text-white rounded-full'>View theme</button>
                    </div>
                    </div>
                    <div className='relative group overflow-hidden'>
                    <Image fill className='w-full h-[550px] border border-black rounded-xl' src='https://cdn.shopify.com/theme-store/i4cw9c8tqpwjwrjv7rpixe5gnrc1.jpg'></Image>
                    <div className='absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center'>
                        <h3 className='text-2xl'>Parise</h3>
                        <p>$230 USD</p>
                        <button className='text-xl px-5 py-3 bg-black text-white rounded-full'>View theme</button>
                    </div>
                    </div>
                    <div className='relative group overflow-hidden'>
                    <Image fill className='w-full h-[550px] border border-black rounded-xl' src='https://cdn.shopify.com/theme-store/hf5090g0xog2g0foifkpovpt398f.jpg'></Image>
                    <div className='absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center'>
                        <h3 className='text-2xl'>Parise</h3>
                        <p>$230 USD</p>
                        <button className='text-xl px-5 py-3 bg-black text-white rounded-full'>View theme</button>
                    </div>
                    </div>
                    <div className='relative group overflow-hidden'>
                    <Image fill className='w-full h-[550px] border border-black rounded-xl' src='https://cdn.shopify.com/theme-store/i4cw9c8tqpwjwrjv7rpixe5gnrc1.jpg'></Image>
                    <div className='absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center '>
                        <h3 className='text-2xl'>Parise</h3>
                        <p>$230 USD</p>
                        <button className='text-xl px-5 py-3 bg-black text-white rounded-full'>View theme</button>
                    </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default HomeMarquee;