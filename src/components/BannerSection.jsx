import React from 'react'

const BannerSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 sm:gap-8 gap-4 place-items-center">
        <div className="rounded-lg overflow-hidden">
          <img
            src="./images/banner__1.webp"
            alt="banner"
            className="hover:scale-105 transition-transform"
          />
        </div>

        <div className="rounded-lg">
          <img
            src="./images/banner__2.webp"
            alt="banner"
            className="hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerSection