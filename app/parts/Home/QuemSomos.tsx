import Image from "next/image";
import ImgSobre from "@/public/img/img-sobre.png";

export default function QuemSomos() {
  return (
    <div className="bg-amber-500 py-10 2xl:py-[8rem] relative">
      <div className="container mx-auto px-4" id="quemsomos">
        <div className="grid grid-cols-1 sm:grid-cols-2  items-center ">
               
          <div className="flex  justify-center items-center ">
            <Image
              src={ImgSobre}
              alt="Imagem da clínica"
              className=" absolute w-[15rem] pt-[10rem] sm:pt-0 ml-0  lg:ml-4 xl:ml-0 md:w-[23rem] lg:w-[32rem] 2xl:w-[40rem] h-auto "
            />
          </div>
          <div className="pt-[15rem] md:pt-0 ">
            <div className="text-xs  lg:text-base xl:text-lg text-black flex flex-col space-y-4 md:pl-4  lg:pl-6">
            <div className="text-yellow-900  text-xl md:text-xl lg:text-3xl xl:text-4xl text-center lg:text-left">
              <p className="italic">Clínica Estética</p>
              <p className="text-white font-bold">GRIPP & BAAMONDE</p>
            </div>
              <p>
                A Clínica Gripp & Baamonde é referência em estética avançada e
                procedimentos cirúrgicos, unindo tecnologia de ponta, atendimento
                humanizado e resultados naturais.
              </p>
              <p>
                Com equipe formada por cirurgiões plásticos, médicos e especialistas
                experientes, oferecemos tratamentos personalizados, do primeiro
                atendimento ao pós-procedimento, sempre priorizando segurança,
                conforto e discrição.
              </p>
              <p>
                Acreditamos que estética é autoestima e bem-estar. Por isso,
                investimos constantemente em técnicas inovadoras para entregar
                resultados que superam expectativas. Seja para uma blefaroplastia
                ou outros cuidados estéticos, ajudamos você a alcançar sua melhor
                versão com confiança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
