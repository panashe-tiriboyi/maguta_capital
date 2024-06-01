import ContactUs from "@/components/contactUs";
import FooterCustom from "@/components/footerCustom";
import GetInTouch from "@/components/getInTouch";
import NavBar from "@/app/navBar";
import ServicesContent from "@/components/servicesContent";
import Image from "next/image";
import WelcomeSection from "@/components/welcomeSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-white lg:max-w-screen-xl mx-auto">
      <div className="md:overflow">
        <WelcomeSection
          name="Our services and solutions"
          content="Our services go beyond traditional microfinance. We offer a diverse
        range of products designed to meet the unique needs of low-income,
        economically active rural households."
        />
      </div>
      <div className="bg-redishWhite mx-40 p-5 md:p-5 flex-col h-fit space-y-5 text-black hidden md:block md:box md:overlay md:flex-row md:flex ">
        <div className="md:w-1/2 justify-evenly space-y-5">
          <button className="border  text-greenCustom  border-greenCustom w-fit px-5 ">
            Commitment
          </button>
          <h2 className={`mb-3 text-2xl md:text-4xl `}>
            Your goals steer us towards shared success and sustainable growth.
          </h2>
          <p className=" text-black text-start md:text-2xl">
            Crafting tailored financial strategies perfectly aligned with your
            business goals.
          </p>
          <GetInTouch />
        </div>

        <div className="flex flex-col space-y-1 md:w-1/2 max-h-max">
          <Image
            className="w-full"
            src="/countryside-workers-together-field.png"
            alt="countryside workers together field.png"
            width={1920}
            height={480}
            priority
          />
        </div>
      </div>

      <div className="bg-redishWhite m-5 p-5 flex-col h-fit space-y-5 text-black md:hidden">
        <button className="border  text-greenCustom  border-greenCustom w-fit px-5">
          Commitment
        </button>
        <h2 className={`mb-3 text-2xl  `}>
          Your goals steer us towards shared success and sustainable growth.
        </h2>

        <div className="flex flex-col space-y-1">
          <p className=" text-black text-start">
            Crafting tailored financial strategies perfectly aligned with your
            business goals.
          </p>
          <GetInTouch />
          <Image
            className="w-full"
            src="/tree-growing-on-a-pile-of-coins-with-money-bag-on-soil.png"
            alt="tree growing on a pile of coins with money bag on soil"
            width={1920}
            height={480}
            priority
          />
        </div>
      </div>

      <ServicesContent />
      <ContactUs />
      <FooterCustom />
    </main>
  );
}
