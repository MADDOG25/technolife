export default function Logo() {
  return (
    <div className="bg-blue py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-pink">
          Marcas con las que trabajamos
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-14 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <img
            alt="android logo"
            src="/src/assets/logos/android-logo-op.png"
            loading="lazy"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
          <img
            alt="iphone logo"
            src="/src/assets/logos/iphone-logo-op.png"
            loading="lazy"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
          <img
            alt="huawei logo"
            src="/src/assets/logos/huawei-logo-op.webp"
            loading="lazy"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
          <img
            alt="samsung"
            src="/src/assets/logos/samsung-logo-op.png"
            loading="lazy"
            width={158}
            height={48}
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}