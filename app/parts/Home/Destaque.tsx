import Image from "next/image";
import { serviceList } from "@/app/parts/dados/contentDestaque";

export default function QuemSomos() {
  return (
    <div className="bg-gray-100 py-10 lg:py-16 lg:-mb-6 mb-0 xl:mb-0 2xl:py-[8rem]  ">
      <div className="container mx-auto px-4 " id="quemsomos">
        <div className="grid grid-col-1 gap-4 lg:gap-8 place-items-center w-full  ">
          <div className="w-full  grid grid-cols-2 md:grid-cols-4    ">
            {serviceList.map((serviceSingle) => (
              <div
                key={serviceSingle.slug}
                className=" h-full md:h-full  text-white break-words text-sm sm:text-xl md:text-2xl lg:text-4xl  rounded-xl  overflow-hidden "
              >
                <div className="flex flex-col justify-center items-center gap-6 ">
                  <Image
                    src={serviceSingle.img}
                    alt=""
                    className="w-[2rem] md:w-auto object-contain rounded-lg"
                  />
                  <div className="  text-black  flex flex-col text-center items-center gap-4 md:px-6 lg:px-8 xl:px-12 ">
                    <h4 className=" text-[0.5rem] md:text-[0.8rem] lg:text-sm xl:text-xl font-semibold leading-tight ">
                      {serviceSingle.title}
                    </h4>
                    <h1 className=" px-6 text-[0.5rem] md:text-[0.6rem] lg:text-sm  leading-tight font-light">
                      {serviceSingle.text}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
