import RedesSociais from "@/app/parts/Componentes/RedesSociais";
import Image from "next/image";
import logoImg from "@/public/img/logo.png";
import Gradiente from "./gradiente";
import Link from "next/link";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContentLinks from "../dados/contentLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

{
  /*import Menu from "@/app/parts/estrutura/menu"
   */
}
export default function Rodape() {
  return (
    <>
      <footer className="bg-trueGray-800 py-10 relative h-auto ">
        <div className="container mx-auto px-4  text-white ">
          <div className="grid grid-cols-4  lg:gap-y-4  ">
            <div className="flex flex-col md:col-span-1  gap-y-6 md:gap-y-10  lg:justify-start lg:items-start">
              <Image src={logoImg} alt="" className="" />
            </div>
            <div>
              <h3 className="font-bold mb-4 text-xl lg:text-2xl ">Menu</h3>
              <ul className="flex flex-col text-base font-medium 2xl:text-lg">
                <li className="py-2">
                  <Link href="/" className="text-orange-200 hover:text-white">
                    Início
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="#quemsomos"
                    className="text-orange-200 hover:text-white"
                  >
                    Quem Sou Eu
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="#servicos"
                    className="text-orange-200 hover:text-white"
                  >
                    Serviços
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="#contato"
                    className="text-orange-200 hover:text-white"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" col-span-1">
              <div>
                <h3 className="font-bold mb-4 text-xl lg:text-2xl ">
                  Redes Sociais
                </h3>
                <RedesSociais
                  classColor="text-orange-200 "
                  classBgColor=""
                  classHoverColor="hover:text-white"
                  className="flex md:flex-row-2 space-x-6 justify-center items-center lg:justify-start"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-xl lg:text-2xl ">Contato</h3>
              <ul className="text-orange-200 flex flex-col items-start ">
                <li className="text-base py-2">
                  <Link
                    href={ContentLinks.email}
                    target="_blank"
                    className=" hover:text-white flex gap-x-3 items-start"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-xl text-orange-200"
                    />
                    <div className="break-all">{ContentLinks.emailShow}</div>
                  </Link>
                </li>
                <li className="text-base py-2">
                  <Link
                    href={ContentLinks.whatsapp}
                    target="_blank"
                    className="text-orange-200 hover:text-white transition-all flex gap-x-3 items-start"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-xl text-orange-200"
                    />
                    <div className="break-all">{ContentLinks.whatsappShow}</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-4">
            <p className=" text-center text-xs font-semibold ">
              Copyright © 2025 - Gripp & Baamonde{" "}
              <span className="text-orange-200">
                Todos os direitos reservados.
              </span>
            </p>
          </div>
        </div>
      </footer>
      <Gradiente />
    </>
  );
}
