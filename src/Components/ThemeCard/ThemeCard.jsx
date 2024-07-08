import Link from "next/link";
import React from "react";

const ThemeCard = ({ data }) => {
  console.log(data);
  return (
    <div className="rounded-md shadow-md shadow-slate-200">
      {/* Image */}
      <Link href={`/themes/${1}`}>
        <div
          className="relative h-80 bg-cover bg-top bg-no-repeat w-full rounded-t-md"
          style={{
            backgroundImage: `url('https://cdn.shopify.com/theme-store/uzytj99sjpifjw3cn06grbxh6eri.jpg')`,
          }}
        >
          <div
            className="h-56 w-36 bg-cover bg-top bg-no-repeat rounded-t-md absolute bottom-0 right-3 border-2 border-slate-900"
            style={{
              backgroundImage: `url('https://cdn.shopify.com/theme-store/weswp5j2hvc63m5i3u1b066ejf66.jpg')`,
            }}
          ></div>
        </div>
      </Link>

      <div className="p-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Retro</h1>
          <h1 className="text-xl font-semibold">
            $300 <span className="text-base">USD</span>
          </h1>
        </div>

        {/* Color Change */}
        <div className="flex items-center gap-4 my-2">
          <div className="size-6 bg-red-600 rounded-full"></div>
          <div className="size-6 bg-green-600 rounded-full"></div>
          <div className="size-6 bg-yellow-400 rounded-full border-2 border-slate-900"></div>
        </div>
        {/*  */}
        <div className="flex flex-wrap gap-3 my-5">
          <button className="px-2 py-1 text-sm bg-slate-100 rounded-md">
            Quic View
          </button>
          <button className="px-2 py-1 text-sm bg-slate-100 rounded-md">
            Quic View Loredolor.
          </button>
          <button className="px-2 py-1 text-sm bg-slate-100 rounded-md">
            Quic dolor.
          </button>
          <button className="px-2 py-1 text-sm bg-slate-100 rounded-md">
            Quic{" "}
          </button>
          <button className="px-2 py-1 text-sm bg-slate-100 rounded-md">
            Quic Loresum dolor.
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
