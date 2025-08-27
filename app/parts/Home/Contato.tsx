import ContatoFormHome2 from "@/app/parts/Componentes/ContatoFormHome2";
import ContentLinks from "@/app/parts/dados/contentLinks";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderTitle from "../estrutura/headerTitle";

export default function Contato() {
  return (
    <div className="bg-white relative">
      <HeaderTitle title="ENTRE EM CONTATO" text="text-black" />
      <section id="contato" className="pb-8 md:pb-16">
        <div className="container mx-auto px-4" id="contato">
          <div className="md:flex  gap-x-8 text-black">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8">
                <h3 className="text-black text-lg md:text-3xl xl:text-4xl font-medium pb-4">
                  {" "}
                  POSSUI ALGUMA DÚVIDA?{" "}
                </h3>
                <p className="text-base xl:text-xl text-black">
                  {" "}
                  Preencha nosso formulário ou entre em contato conosco <br />{" "}
                  para tirar dúvidas ou falar diretamente com nossa equipe!{" "}
                </p>
                <ContatoFormHome2 home />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-black rounded-xl">
              <div className="text-md md:text-lg p-8 ">
                <div className="text-base lg:text-lg xl:text-2xl pb-4">
                  <h3 className="xl:text-4xl font-bold uppercase pb-4 text-black">
                    {" "}
                    Será um prazer te atender!{" "}
                  </h3>
                  <p className="text-base xl:text-xl text-black">
                    {" "}
                    Envie uma mensagem em nosso WhatsApp, mande um e-mail <br />{" "}
                    ou faça-nos uma visita!{" "}
                  </p>
                </div>
                <a href={ContentLinks.whatsapp} target="_blank">
                  <div className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all text-black text-base md:text-lg xl:text-xl">
                    <div className="px-4 md:px-6">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-amber-500 h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12"
                      />
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase text-amber-500">
                        WHATSAPP:
                      </div>
                      <div>{ContentLinks.whatsappShow}</div>
                    </div>
                  </div>
                </a>
                <a href={ContentLinks.email} target="_blank">
                  <div className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all text-black text-base md:text-lg xl:text-xl">
                    <div className="px-4 md:px-6">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-amber-500 h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12"
                      />
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase text-amber-500">
                        E-MAIL:
                      </div>
                      <div>{ContentLinks.emailShow}</div>
                    </div>
                  </div>
                </a>
                <a href={ContentLinks.maps} target="_blank">
                  <div className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all text-black text-base md:text-lg xl:text-xl">
                    <div className="px-4 md:px-6">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-amber-500 h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12"
                      />
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase text-amber-500">
                        ENDEREÇO:
                      </div>
                      <div>{ContentLinks.address1}</div>
                      <div>{ContentLinks.address2}</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
