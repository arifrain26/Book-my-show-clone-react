import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return <>
    <div className="container mx-auto px-4 my-10">
      <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
        <div className="lg:w-3/4 p-4 bg-white rounded">
          <h2 className="font-bold text-2xl mb-4">Play in ncr delhi</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 items-center flex">
              <Poster isPlay={true} 
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of me"
                subtitle="Comedy Shows | Hindi, English | 16years + | 1 hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 items-center flex">
              <Poster isPlay={true} 
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daddy-kool-by-atul-khatri-0-2022-8-16-t-10-37-17.jpg"
                title="So Rude of me"
                subtitle="Comedy Shows | Hindi, English | 16years + | 1 hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 items-center flex">
              <Poster isPlay={true} 
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                title="So Rude of me"
                subtitle="Comedy Shows | Hindi, English | 16years + | 1 hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 items-center flex">
              <Poster isPlay={true} 
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of me"
                subtitle="Comedy Shows | Hindi, English | 16years + | 1 hr 30 mins"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded" >
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters title="Date" tags={["Today", "Tommorrow", "This Weekend"]} />
            <PlayFilters title="Language" tags={["English", "Hindi", "Tamil"]} />
          </div>
        </div>
      </div>
    </div>
  </>
};

export default DefaultLayoutHoc(PlayPage);
