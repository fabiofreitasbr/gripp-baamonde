"use client";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentLinks from "../dados/contentLinks";
import RedesSociais from "@/app/parts/Componentes/RedesSociais";


export default function Banner() {
  return (
    <div className="bg-slide1 bg-cover  bg-no-repeat w-full h-[28rem] md:h-[30rem] lg:h-[40rem] xl:h-[50rem] ">
      <div className="container mx-auto px-4  ">
        <div className=" flex flex-cols-2  pt-[6rem] md:pt-[9rem] lg:pt-[13rem] xl:pt-[16rem]  ">
          <RedesSociais
            classColor="text-black"
            classBgColor="bg-amber-500 rounded-full p-4 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 "
            classHoverColor=""
            className="absolute hidden md:flex  flex-col gap-2 md:gap-2 md:ml-[2rem] lg:ml-[3.5rem] xl:ml-0  md:mt-[2rem] lg:mt-[1.5rem] xl:mt-[2rem] "
          />
          <div className="flex flex-col text-center md:text-start gap-6 md:pl-[8rem] lg:pl-[11rem] xl:pl-[9rem] ">
            <h2 className="text-amber-500 xl:text-3xl">
              Clínica Estética - Gripp & Baamonde
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-bold !leading-snug">
              A Maior Clínica de <br />
              Estética da Região
            </h2>
            <h2 className="text-base lg:text-xl  text-white font-medium !leading-tight pb-4">
              Com cobertura completa de estética e cirúrgia com total <br />
              qualidade de atendimento e procedimentos certificados.
            </h2>
            <div className="flex justify-center md:justify-start gap-2 ">
              <Link href={ContentLinks.whatsapp}>
                <button className="flex flex-row gap-2  rounded-full  py-2  px-8   bg-black text-white text-xs md:text-base lg:text-base xl:text-xl   font-medium items-center">
                  Saiba Mais
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 "
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
