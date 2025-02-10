import Image from "next/image";
import imageAbout from '/public/aboutImageDog.webp'
import imageAboutCat from '/public/aboutImageCat.png'
import { Check,MapPin } from "lucide-react";
import {WhatsappLogo} from "@phosphor-icons/react/dist/ssr";


export default function About() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image 
              className="object-cover hover:scale-110 duration-300"
              src={imageAbout}
              alt="foto do cachorro"
              fill
              quality={100}
              priority/>
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              <Image 
              src={imageAboutCat}
              alt="foto do gato"
              fill
              quality={100}
              priority/>
            </div>

          </div>

          <div className="space-y-6 mt-10">
            <h2 className=" text-[#4A5E77] text-5xl md:text-4xl lg:text-5xl font-extrabold leading-10">Sobre nós</h2>
            
            <p>
            No Mundo pet, acreditamos que os pets são parte da família e merecem todo o carinho, cuidado e atenção. Nosso compromisso é oferecer serviços e produtos de alta qualidade para garantir o bem-estar, a saúde e a felicidade do seu melhor amigo.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
              <Check  className="text-[#2D3E50]"/>
              Aberto desde 2005</li>
              <li className="flex items-center gap-2">
              <Check  className="text-[#2D3E50]"/>
              Equipe com mais de 15 veterinários</li>
              <li className="flex items-center gap-2">
              <Check  className="text-[#2D3E50]"/>
              Atendimento 24 horas para emergências</li>
            </ul>

          <div className="flex gap-2">
          <a href="#"
          className="bg-[#76B98C] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md font-semibold" data-aos = "fade-right" data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <WhatsappLogo className="w-5 h-5 text-white"/>
          Contato via WhatsApp
          </a>

          <a href="#"
          className=" text-[#4A5E77] flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md font-semibold" data-aos = "fade-right" data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <MapPin className="w-5 h-5 text-[#4A5E77]"/>
          Endereço
          </a>
          </div>

          </div>

        </div>
      </div>  
    </section>
  );
}