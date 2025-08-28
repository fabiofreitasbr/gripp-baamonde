"use client";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "@splidejs/react-splide/css";
import React from "react";
import { serviceList } from "@/app/parts/dados/contentServicos";
import Image from "next/image";

export default function Servicos_() {
    return (
        <div className="bg-white py-10 relative" id="servicos">
            <div className=" flex items-center justify-center p-4 md:p-8 lg:p-10 container mx-auto px-4 text-center">
                <h2 className=" text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase font-bold">
                    <span className="text-amber-500">OS</span> MELHORES E MAIS AVANÇADOS
                    <span className="text-amber-500">
                        <br /> TRATAMENTOS EM UM CENTRO COMPLETO.
                    </span>
                    <div className="flex justify-center items-center">
                        <hr className="  w-[18rem] border-t-2 mt-4 border-trueGray-200" />
                    </div>
                </h2>
            </div>
            <div className="container mx-auto  relative pb-8 lg:pb-16 " id="servicos">
                <div className="grid grid-col-1 gap-4 lg:gap-8 place-items-center w-full  ">
                    <div className="w-full grid grid-cols-2 md:grid-cols-4  gap-y-2 sm:gap-y-0 gap-2 md:gap-4 px-4 ">
                        {serviceList.map((serviceSingle) => (
                            <div
                                key={serviceSingle.slug}
                                className=" h-full md:h-full  text-white break-words text-sm sm:text-xl md:text-2xl lg:text-4xl  rounded-xl  overflow-hidden "
                            >
                                <div className="flex justify-center items-center">
                                    <Image
                                        src={serviceSingle.img}
                                        alt=""
                                        className="w-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
