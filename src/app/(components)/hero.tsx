import {WhatsappLogo} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import dogImg from "/public/hero-dog.webp";


export function Hero() {
  return (
    <section className="bg-[#A6D0E4] text-white relative overflow-hidden">

      <div>
        <Image 
        src={dogImg}
        alt="foto do cachorro"
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-60 lg:hidden"/>
        <div className="absolute inset-0 bg-black opacity-50 md:hidden"></div>
      </div>
      
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className=" text-slate-50 text-3xl md:text-4xl lg:text-5xl font-bold leading-10 ">
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="text-slate-50  lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem- <br>
              </br>estar e a felicidade do seu amigo de quatro patas.
            </p>
      
              <a href="#"
              className="bg-[#76B98C] px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2"
              >
                <WhatsappLogo className="w-5 h-5" />
                Contato via WhatsApp
              </a>
            

            <div className="mt-8">
              <p className="text-slate-50 text-sm mb-4">
                <b className="bg-[#6CA9D7] text-white px-2 py-1 rounded-md"> 5%</b> de desconto na primeira compra.
              </p>
            </div>

          </div>

          <div className="hidden md:block h-full relative">
            <Image 
            src={dogImg}
            alt="foto do cachorro"
            className="object-contain"
            fill
            sizes="(max-width: 768px) 0vw,50vw"
            quality={100}
            priority
            />
          </div>

        </article>
      </div>

    </section>
  );
}