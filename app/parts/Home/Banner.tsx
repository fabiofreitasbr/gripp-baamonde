"use client";
import Link from "next/link";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentLinks from "../dados/contentLinks";
import RedesSociais from "@/app/parts/Componentes/RedesSociais";


export default function Banner() {
    return (
        <div className="bg-slide1 bg-cover bg-bottom bg-no-repeat w-full h-auto xl:h-[80vh] ">
            <div className="container mx-auto px-4  ">
                <div className=" flex flex-cols-2 pt-[18rem]  ">
                    <RedesSociais
                        classColor="text-black"
                        classBgColor="bg-amber-500 rounded-full p-4 lg:w-5 lg:h-5 "
                        classHoverColor=""
                        className="absolute -ml-[4rem] mt-[3rem] flex flex-col gap-8  "
                    />
                    <div className="flex flex-col gap-6 pl-[5rem]">
                        <h2 className="text-amber-500 xl:text-3xl">
                            Clínica Estética - Gripp & Baamonde
                        </h2>
                        <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-bold !leading-snug">
                            A Maior Clínica de <br />
                            Estética da Região
                        </h2>
                        <h2 className="text-xl lg:text-xl  text-white font-light !leading-tight">
                            Com cobertura completa de estética e cirúrgia com total <br />
                            qualidade de atendimento e procedimentos certificados.
                        </h2>
                        <div className="flex gap-2 ">
                            <Link href={ContentLinks.whatsapp}>
                                <button className="flex flex-row gap-2  rounded-full  py-2 px-8 md:px-6 lg:py-2 xl:py-4 lg:px-12  bg-black text-white text-xs md:text-base lg:text-xl xl:text-2xl uppercase font-bold items-center">
                                    Saiba Mais
                                    <FontAwesomeIcon
                                        icon={faInfo}
                                        className="w-4 h-4  lg:w-6 lg:h-6 "
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
