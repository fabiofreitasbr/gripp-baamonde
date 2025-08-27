import Image from "next/image";
import ImgSobre from "@/public/img/img-sobre.png";

export default function QuemSomos() {
  return (
    <div className="bg-amber-500   py-[12rem] relative ">
      <div className="container mx-auto px-4 " id="quemsomos">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-2 justify-center p-2 md:p-0 ">
          <div className="flex items-center xl:items-start justify-center h-full  ">
            <Image
              src={ImgSobre}
              alt=""
              className=" w-auto h-auto  absolute -mt-[15rem]  justify-center -ml-[2.5rem]"
            />
          </div>
          <div className="-mt-[3.4rem]">
            <div className="text-yellow-800 pb-6 lg:pb-8  xl:pb-10 text-md md:text-3xl lg:text-5xl  text-center lg:text-start ">
              <p className="italic">Clínica Estética</p>
              <p className="text-white">GRIPP & BAAMONDE</p>
            </div>
            <div className="text-base md:text-xl  lg:text-base  font-normal  text-black  flex flex-col space-y-4">
              <p>
                A Clínica Gripp & Baamonde é referência em estética avançada e procedimentos < br/> 
                cirúrgicos, unindo tecnologia de ponta,
                atendimento humanizado e resultados naturais.
              </p>
              <p>
                Com equipe formada por cirurgiões plásticos, médicos e
                especialistas experientes, oferecemos tratamentos
                personalizados, do primeiro atendimento ao pós-< br/> procedimento,
                sempre priorizando segurança, conforto e discrição.
              </p>
              <p>
                Acreditamos que estética é autoestima e bem-estar. Por isso,
                investimos < br/> constantemente em técnicas inovadoras para entregar
                resultados que superam < br/> expectativas. Seja para uma
                blefaroplastia ou outros cuidados estéticos, ajudamos você a < br/>
                alcançar sua melhor versão com confiança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
