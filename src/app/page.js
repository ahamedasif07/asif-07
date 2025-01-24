/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import asifImage from "../../public/assets/asif13_image-.png";

const Hero = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="relative hero">
        {/* Bubbles Component */}

        {/* Hero Content */}
        <section className="py-8 content overflow-hidden">
          <div className="">
            <div className="md:flex justify-between items-center">
              {/* Left Section: Text */}
              <div className="md:w-1/2 mx-auto px-4 md:px-0  md:mt-[120px] md:ml-[78px] lg:pl-[160px] text-center lg:text-left md:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1A4576]">
                  Hi, I'm Asif Hosen
                </h1>
                <h1 className="text-4xl pt-4  mx-auto text-center md:ml-0 lg:ml-0 lg:text-5xl font-bold text-gray-800">
                  <a
                    className="flex justify-center md:justify-start"
                    href="https://git.io/typing-svg"
                  >
                    <img
                      className="flex  justify-center ml-[30px] md:ml-0"
                      src="https://readme-typing-svg.demolab.com?font=Roboto&weight=900&size=46&pause=1000&color=2563EB&width=472&height=65&lines=Front-End+Developer"
                      alt="Typing SVG"
                    />
                  </a>
                </h1>

                <p className="text-gray-700 px-4     lg:ml-[0px]  md:px-0 text-lg leading-relaxed">
                  Let's collaborate to turn your vision into a stunning web
                  application that stands out!
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#projects"
                    className="ml-4 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                  >
                    My Projects
                  </a>
                </div>
              </div>

              {/* Right Section: Image */}
              <div className="flex md:w-1/2 justify-center mt-10 lg:mt-0 relative">
                <div className="absolute inset-0 mt-[130px] md:mr-[26px] flex justify-center items-center">
                  <div className="md:w-[300px] w-[250px] mt-[170px] md:mt-[200px] md:ml-[20px] h-[250px] md:h-[300px] rounded-full bg-[#275298] animate-pulseLight"></div>
                </div>
                <div className="md:w-[450px]  w-[350px] h-[350px] md:h-[450px]">
                  <Image
                    src={asifImage}
                    alt="Asif Hosen"
                    className="relative z-10 md:ml-[0px] mt-[40px]  rounded-lg "
                  />
                </div>
              </div>

              <style jsx>
                {`
                  @keyframes pulseLight {
                    0% {
                      box-shadow: 0 0 10px 0 rgba(59, 130, 246, 0.5),
                        0 0 30px 10px rgba(59, 130, 246, 0.4),
                        0 0 60px 20px rgba(59, 130, 246, 0.3);
                    }
                    50% {
                      box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.6),
                        0 0 40px 20px rgba(59, 130, 246, 0.5),
                        0 0 80px 40px rgba(59, 130, 246, 0.4);
                    }
                    100% {
                      box-shadow: 0 0 10px 0 rgba(59, 130, 246, 0.5),
                        0 0 30px 10px rgba(59, 130, 246, 0.4),
                        0 0 60px 20px rgba(59, 130, 246, 0.3);
                    }
                  }
                  .animate-pulseLight {
                    animation: pulseLight 2s infinite;
                  }
                `}
              </style>
            </div>
          </div>
        </section>
      </div>
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, dolore
        quibusdam, dolorum amet eaque iste voluptatum, corporis nisi totam ipsa
        vero sint quaerat sit. Numquam, magni dicta ipsam doloremque, illo,
        fugit distinctio voluptas eveniet est nesciunt dolor magnam id nostrum
        tempora? Ullam dolores neque natus magnam voluptate, itaque possimus
        pariatur consequatur ea eius! Quidem dicta ipsum minima. Rerum quia
        facere animi maxime tempore! Illum placeat veniam temporibus repellendus
        eaque, alias aspernatur accusamus cumque mollitia qui fuga tenetur
        cupiditate consectetur corporis quo dignissimos ratione et? Natus
        incidunt sed cumque omnis voluptate asperiores quae iste nemo placeat
        recusandae explicabo necessitatibus voluptates atque at nobis earum
        dolor dignissimos delectus, similique vitae aliquid tempora officia
        nihil debitis? Id eveniet officiis adipisci mollitia iste natus sequi
        quaerat, repellendus quas unde architecto reiciendis ab eum commodi
        aliquam nesciunt vero praesentium earum sunt sint velit, in ex. Dolore
        dignissimos, voluptatem illo sapiente eius architecto in quidem libero.
        Iste itaque dignissimos vel blanditiis ut vitae corrupti eveniet officia
        perferendis, veritatis eos quae quos laudantium repellendus doloremque
        soluta. Alias modi magnam autem reprehenderit quidem a voluptatum cum
        deserunt quis pariatur voluptatibus esse perferendis asperiores
        veritatis vel, placeat quaerat doloremque debitis eligendi in aperiam
        minus ipsum! Ipsum perferendis laborum adipisci iste beatae quia
        praesentium iure odio, doloremque, iusto commodi molestiae. Provident
        iure quae adipisci molestiae tempora, reiciendis quibusdam quo doloribus
        deleniti explicabo quasi commodi libero consequatur nihil animi, dolor
        suscipit quidem, delectus et. Nobis provident pariatur dicta quisquam
        distinctio, laudantium, magnam nam iusto vero quaerat soluta nisi nulla!
        Magnam optio cupiditate officia, hic laborum molestiae ex ea cum,
        excepturi quia ratione. Quidem laboriosam maxime deleniti culpa aliquam,
        magnam praesentium sint a doloribus, vel ratione? Reiciendis, molestiae.
        Dignissimos, quasi! Porro delectus aliquid deserunt! Voluptatem rerum
        dolorum delectus debitis temporibus esse enim voluptate reiciendis,
        dolores molestiae iste provident aliquam fugiat voluptas quidem ab
        voluptates laboriosam deleniti ad veniam? Labore dolores repellendus
        error architecto, modi et fuga tempora dignissimos, omnis saepe suscipit
        soluta nemo excepturi incidunt accusamus in quibusdam dolorem quas odio
        voluptates quis! Adipisci voluptate temporibus rerum, ipsa debitis
        perferendis, distinctio aperiam cum laboriosam ducimus dolor sequi
        dolores dolorum, facilis veniam in officia voluptas. Et, odio
        perspiciatis culpa laborum tempore, quo cum totam eveniet magni officia
        quidem fuga alias id mollitia? Similique deleniti assumenda magni nemo
        ab esse maxime ipsum provident dignissimos consectetur impedit quas
        mollitia, odio in? Inventore exercitationem eos veniam necessitatibus
        sequi hic alias in quisquam doloribus, ea omnis debitis animi nisi iure
        cupiditate numquam harum modi blanditiis iusto aliquam. Dolor quos eos
        itaque magni quisquam veritatis iste autem, accusamus, minus, eaque
        nobis ea in repellendus. Dolorem facere voluptate odio cupiditate dicta
        itaque eum, voluptatibus provident error quae illum a laboriosam
        expedita vero totam facilis nisi quidem id similique ducimus
        exercitationem consequuntur. Sunt cum cupiditate aut natus maxime,
        itaque laboriosam expedita saepe iusto doloremque ullam, nobis
        reiciendis voluptatum eos ipsa veniam dolore soluta ad blanditiis
        nostrum! Esse porro temporibus eos amet, nostrum nulla maiores alias
        nesciunt animi architecto, nam cupiditate distinctio reiciendis aperiam
        aspernatur, fugit doloribus! Voluptates neque mollitia sint itaque
        minima, qui quaerat amet soluta impedit repellendus quis a repellat
        maiores, quam expedita delectus accusantium facilis! Eveniet voluptatum
        obcaecati provident facere maxime blanditiis totam dolore dolorem
        adipisci reiciendis quas soluta inventore exercitationem cum laborum
        aperiam maiores, dicta distinctio esse saepe vero labore porro optio
        quaerat. Quidem, pariatur cupiditate aliquid, alias odit consequatur sed
        in est placeat voluptas minima porro possimus fugit corrupti quaerat
        asperiores, tenetur suscipit saepe. Quibusdam obcaecati, maxime rerum
        perspiciatis molestiae praesentium numquam expedita facere quisquam
        similique beatae consectetur eum pariatur repellat, cum dolores.
        Nostrum, accusantium veritatis laboriosam ab corporis quas molestias
        tempora minus suscipit amet adipisci perferendis quae deleniti, magnam
        modi nobis doloribus possimus iure sint cupiditate laudantium voluptate
        voluptates distinctio. Ab reiciendis ipsam, voluptatibus ut fugit dolore
        sequi delectus magni optio earum alias vel pariatur eos itaque, aperiam
        tenetur id illo! Voluptate, est, nesciunt non necessitatibus itaque
        eveniet quaerat quasi officia perferendis neque reprehenderit assumenda
        odio tempore doloribus quo veniam sequi numquam! Iure, non voluptatum
        repudiandae maxime quam voluptatibus reprehenderit sit accusantium quod
        distinctio error adipisci nam iusto nemo a eum quasi ad consequuntur
        optio nobis quos? Doloremque a dolorum iusto officiis eum nostrum.
        Molestiae, quibusdam fuga. Omnis provident id fugiat dolorem tenetur,
        fuga consequatur ut, voluptas et sapiente laboriosam culpa ipsum ipsa
        eos veniam nostrum labore. Ipsa quis provident sunt laboriosam, corporis
        temporibus sequi quia totam impedit alias velit! Et nihil dolorum quidem
        facilis maiores. Quo, tempore ad mollitia iure nam aliquid magnam ipsa
        eaque iusto molestias ut atque sunt veritatis facilis dolorum
        accusantium consequuntur ex? Assumenda omnis eius, perspiciatis illum
        praesentium corporis ut deleniti necessitatibus ipsum aliquam quas iste
        quod vel. Ratione natus, inventore eaque ipsam veritatis totam ab rem
        officiis quod necessitatibus officia molestias alias labore sequi
        tenetur ipsa. Dolorum sunt recusandae nihil doloribus odit pariatur,
        necessitatibus perferendis amet repellendus? Alias libero, dolore
        dolorum minus dolores rem ipsam maxime laboriosam itaque, corporis sunt?
        Voluptate nemo sint sequi delectus ipsam minus fugiat fuga odit placeat
        amet at molestiae, quis pariatur veniam optio dicta? Eligendi ex,
        nesciunt ut obcaecati quisquam, officia qui distinctio magni eius culpa,
        aliquid doloremque reprehenderit numquam cupiditate repellendus. Quas,
        nemo voluptatem. Molestiae assumenda veniam eligendi facere
        exercitationem nisi aspernatur itaque nihil nulla. Voluptas nostrum
        pariatur nihil harum. Aliquam nesciunt, qui, officiis dolorem in culpa
        consequuntur assumenda eaque, sequi quibusdam explicabo fugiat.
        Accusamus facere eum suscipit perspiciatis. Porro ea veritatis modi
        nobis cupiditate dolor nulla placeat dolorum quae dignissimos, adipisci
        ad soluta sint impedit blanditiis tempore odio sit? Illo totam quaerat
        enim quod. Ex saepe, molestiae eum voluptatem, harum, delectus rem
        assumenda fugit dolorum voluptatum id. Maiores esse delectus at nobis
        culpa quod cumque facilis dolor commodi, nesciunt minima porro facere,
        necessitatibus nemo quia et praesentium omnis voluptas doloremque qui
        perspiciatis nisi optio quibusdam! Sit, nihil tempora, delectus corporis
        quae explicabo culpa recusandae fuga nesciunt nisi, hic ullam expedita
        excepturi et quod dolores in repellendus quos. A quaerat maxime harum
        dolore nostrum voluptatum et expedita dolores ut aliquid totam quod
        fugit, magnam omnis nihil! Doloribus repellendus iure enim sequi animi,
        iste odit vel laudantium cum sit quidem exercitationem quos, magni
        molestias, non sunt fuga ad? Alias dicta libero dignissimos facere quam
        eveniet quasi, blanditiis, praesentium perferendis officiis laborum in
        recusandae maiores aspernatur cupiditate veritatis incidunt aliquid.
        Cum, blanditiis in similique atque aliquam maxime officiis voluptatem
        accusamus dignissimos autem molestias fugiat. Molestias quidem quisquam
        repellat deserunt mollitia necessitatibus inventore libero magni aut sit
        eos tempore, voluptate possimus, impedit odio ipsam cum reprehenderit
        minima nesciunt officiis dicta error voluptatem! Blanditiis ea error
        temporibus, voluptates autem dolores veniam soluta, harum quia
        doloribus, ullam ipsa ex atque molestiae accusantium repellendus in
        maiores optio dolorem? Cupiditate?
      </h2>
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, dolore
        quibusdam, dolorum amet eaque iste voluptatum, corporis nisi totam ipsa
        vero sint quaerat sit. Numquam, magni dicta ipsam doloremque, illo,
        fugit distinctio voluptas eveniet est nesciunt dolor magnam id nostrum
        tempora? Ullam dolores neque natus magnam voluptate, itaque possimus
        pariatur consequatur ea eius! Quidem dicta ipsum minima. Rerum quia
        facere animi maxime tempore! Illum placeat veniam temporibus repellendus
        eaque, alias aspernatur accusamus cumque mollitia qui fuga tenetur
        cupiditate consectetur corporis quo dignissimos ratione et? Natus
        incidunt sed cumque omnis voluptate asperiores quae iste nemo placeat
        recusandae explicabo necessitatibus voluptates atque at nobis earum
        dolor dignissimos delectus, similique vitae aliquid tempora officia
        nihil debitis? Id eveniet officiis adipisci mollitia iste natus sequi
        quaerat, repellendus quas unde architecto reiciendis ab eum commodi
        aliquam nesciunt vero praesentium earum sunt sint velit, in ex. Dolore
        dignissimos, voluptatem illo sapiente eius architecto in quidem libero.
        Iste itaque dignissimos vel blanditiis ut vitae corrupti eveniet officia
        perferendis, veritatis eos quae quos laudantium repellendus doloremque
        soluta. Alias modi magnam autem reprehenderit quidem a voluptatum cum
        deserunt quis pariatur voluptatibus esse perferendis asperiores
        veritatis vel, placeat quaerat doloremque debitis eligendi in aperiam
        minus ipsum! Ipsum perferendis laborum adipisci iste beatae quia
        praesentium iure odio, doloremque, iusto commodi molestiae. Provident
        iure quae adipisci molestiae tempora, reiciendis quibusdam quo doloribus
        deleniti explicabo quasi commodi libero consequatur nihil animi, dolor
        suscipit quidem, delectus et. Nobis provident pariatur dicta quisquam
        distinctio, laudantium, magnam nam iusto vero quaerat soluta nisi nulla!
        Magnam optio cupiditate officia, hic laborum molestiae ex ea cum,
        excepturi quia ratione. Quidem laboriosam maxime deleniti culpa aliquam,
        magnam praesentium sint a doloribus, vel ratione? Reiciendis, molestiae.
        Dignissimos, quasi! Porro delectus aliquid deserunt! Voluptatem rerum
        dolorum delectus debitis temporibus esse enim voluptate reiciendis,
        dolores molestiae iste provident aliquam fugiat voluptas quidem ab
        voluptates laboriosam deleniti ad veniam? Labore dolores repellendus
        error architecto, modi et fuga tempora dignissimos, omnis saepe suscipit
        soluta nemo excepturi incidunt accusamus in quibusdam dolorem quas odio
        voluptates quis! Adipisci voluptate temporibus rerum, ipsa debitis
        perferendis, distinctio aperiam cum laboriosam ducimus dolor sequi
        dolores dolorum, facilis veniam in officia voluptas. Et, odio
        perspiciatis culpa laborum tempore, quo cum totam eveniet magni officia
        quidem fuga alias id mollitia? Similique deleniti assumenda magni nemo
        ab esse maxime ipsum provident dignissimos consectetur impedit quas
        mollitia, odio in? Inventore exercitationem eos veniam necessitatibus
        sequi hic alias in quisquam doloribus, ea omnis debitis animi nisi iure
        cupiditate numquam harum modi blanditiis iusto aliquam. Dolor quos eos
        itaque magni quisquam veritatis iste autem, accusamus, minus, eaque
        nobis ea in repellendus. Dolorem facere voluptate odio cupiditate dicta
        itaque eum, voluptatibus provident error quae illum a laboriosam
        expedita vero totam facilis nisi quidem id similique ducimus
        exercitationem consequuntur. Sunt cum cupiditate aut natus maxime,
        itaque laboriosam expedita saepe iusto doloremque ullam, nobis
        reiciendis voluptatum eos ipsa veniam dolore soluta ad blanditiis
        nostrum! Esse porro temporibus eos amet, nostrum nulla maiores alias
        nesciunt animi architecto, nam cupiditate distinctio reiciendis aperiam
        aspernatur, fugit doloribus! Voluptates neque mollitia sint itaque
        minima, qui quaerat amet soluta impedit repellendus quis a repellat
        maiores, quam expedita delectus accusantium facilis! Eveniet voluptatum
        obcaecati provident facere maxime blanditiis totam dolore dolorem
        adipisci reiciendis quas soluta inventore exercitationem cum laborum
        aperiam maiores, dicta distinctio esse saepe vero labore porro optio
        quaerat. Quidem, pariatur cupiditate aliquid, alias odit consequatur sed
        in est placeat voluptas minima porro possimus fugit corrupti quaerat
        asperiores, tenetur suscipit saepe. Quibusdam obcaecati, maxime rerum
        perspiciatis molestiae praesentium numquam expedita facere quisquam
        similique beatae consectetur eum pariatur repellat, cum dolores.
        Nostrum, accusantium veritatis laboriosam ab corporis quas molestias
        tempora minus suscipit amet adipisci perferendis quae deleniti, magnam
        modi nobis doloribus possimus iure sint cupiditate laudantium voluptate
        voluptates distinctio. Ab reiciendis ipsam, voluptatibus ut fugit dolore
        sequi delectus magni optio earum alias vel pariatur eos itaque, aperiam
        tenetur id illo! Voluptate, est, nesciunt non necessitatibus itaque
        eveniet quaerat quasi officia perferendis neque reprehenderit assumenda
        odio tempore doloribus quo veniam sequi numquam! Iure, non voluptatum
        repudiandae maxime quam voluptatibus reprehenderit sit accusantium quod
        distinctio error adipisci nam iusto nemo a eum quasi ad consequuntur
        optio nobis quos? Doloremque a dolorum iusto officiis eum nostrum.
        Molestiae, quibusdam fuga. Omnis provident id fugiat dolorem tenetur,
        fuga consequatur ut, voluptas et sapiente laboriosam culpa ipsum ipsa
        eos veniam nostrum labore. Ipsa quis provident sunt laboriosam, corporis
        temporibus sequi quia totam impedit alias velit! Et nihil dolorum quidem
        facilis maiores. Quo, tempore ad mollitia iure nam aliquid magnam ipsa
        eaque iusto molestias ut atque sunt veritatis facilis dolorum
        accusantium consequuntur ex? Assumenda omnis eius, perspiciatis illum
        praesentium corporis ut deleniti necessitatibus ipsum aliquam quas iste
        quod vel. Ratione natus, inventore eaque ipsam veritatis totam ab rem
        officiis quod necessitatibus officia molestias alias labore sequi
        tenetur ipsa. Dolorum sunt recusandae nihil doloribus odit pariatur,
        necessitatibus perferendis amet repellendus? Alias libero, dolore
        dolorum minus dolores rem ipsam maxime laboriosam itaque, corporis sunt?
        Voluptate nemo sint sequi delectus ipsam minus fugiat fuga odit placeat
        amet at molestiae, quis pariatur veniam optio dicta? Eligendi ex,
        nesciunt ut obcaecati quisquam, officia qui distinctio magni eius culpa,
        aliquid doloremque reprehenderit numquam cupiditate repellendus. Quas,
        nemo voluptatem. Molestiae assumenda veniam eligendi facere
        exercitationem nisi aspernatur itaque nihil nulla. Voluptas nostrum
        pariatur nihil harum. Aliquam nesciunt, qui, officiis dolorem in culpa
        consequuntur assumenda eaque, sequi quibusdam explicabo fugiat.
        Accusamus facere eum suscipit perspiciatis. Porro ea veritatis modi
        nobis cupiditate dolor nulla placeat dolorum quae dignissimos, adipisci
        ad soluta sint impedit blanditiis tempore odio sit? Illo totam quaerat
        enim quod. Ex saepe, molestiae eum voluptatem, harum, delectus rem
        assumenda fugit dolorum voluptatum id. Maiores esse delectus at nobis
        culpa quod cumque facilis dolor commodi, nesciunt minima porro facere,
        necessitatibus nemo quia et praesentium omnis voluptas doloremque qui
        perspiciatis nisi optio quibusdam! Sit, nihil tempora, delectus corporis
        quae explicabo culpa recusandae fuga nesciunt nisi, hic ullam expedita
        excepturi et quod dolores in repellendus quos. A quaerat maxime harum
        dolore nostrum voluptatum et expedita dolores ut aliquid totam quod
        fugit, magnam omnis nihil! Doloribus repellendus iure enim sequi animi,
        iste odit vel laudantium cum sit quidem exercitationem quos, magni
        molestias, non sunt fuga ad? Alias dicta libero dignissimos facere quam
        eveniet quasi, blanditiis, praesentium perferendis officiis laborum in
        recusandae maiores aspernatur cupiditate veritatis incidunt aliquid.
        Cum, blanditiis in similique atque aliquam maxime officiis voluptatem
        accusamus dignissimos autem molestias fugiat. Molestias quidem quisquam
        repellat deserunt mollitia necessitatibus inventore libero magni aut sit
        eos tempore, voluptate possimus, impedit odio ipsam cum reprehenderit
        minima nesciunt officiis dicta error voluptatem! Blanditiis ea error
        temporibus, voluptates autem dolores veniam soluta, harum quia
        doloribus, ullam ipsa ex atque molestiae accusantium repellendus in
        maiores optio dolorem? Cupiditate?
      </h2>
    </div>
  );
};

export default Hero;
