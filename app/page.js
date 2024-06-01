import ContactUs from "@/components/contactUs";
import FooterCustom from "@/components/footerCustom";
import GetInTouch from "@/components/getInTouch";
import NavBar from "@/app/navBar";
import Image from "next/image";
import CarouselQoutes from "@/components/carouselQoutes";
import ContactButton from "@/components/contactButton";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-white lg:max-w-screen-xl mx-auto">
      <div className="bg-redishWhite text-black w-full   md:flex md">
        <div className=" pt-20  md:px-10 md:w-2/5 mx-5 md:mx-0">
          <button className="border mb-5 bg-white text-greenCustom  border-greenCustom w-fit px-5">
            Microfinance services
          </button>

          <div className=" items-center md:items-start ">
            <h2 className={` text-5xl  text-center md:text-left`}>
              Your Potential Our Passion
            </h2>

            <h2 className={`py-5  text-2xl `}>
              At Maguta, we exist to create shared value and give dignity and
              hope to our people.At Maguta, we exist to create shared value and
              give dignity and hope to our people.
            </h2>
            <ContactButton>
              <button
                href="#contact_us"
                type="button"
                className="text-white   text-sm px-4 py-2 text-center  bg-greenCustom hover:bg-redishWhite hover:text-black border-2 border-greenCustom "
              >
                Contact Us
              </button>
            </ContactButton>
          </div>
        </div>
        <div className=" h-full  md:w-3/5 ">
          <Image
            className="w-full max-h-max hidden md:block"
            src="/workplace-team-cooperation-businesswoman-laptop-office.jpg"
            alt="workplace team"
            width={1920}
            height={480}
            priority
          />
        </div>
      </div>
      <Image
        className="w-full md:hidden "
        src="/workplace-team.png"
        alt="workplace team"
        width={1920}
        height={480}
        priority
      />
      <CarouselQoutes />
      {/* Values and culture */}
      <div className="bg-redishWhite p-5 flex-col h-fit space-y-5 md:flex md:flex-row md:mx-20 md:bg">
        <div className="md:w-1/2">
          <button className="border bg-white text-greenCustom  border-greenCustom w-fit px-5 mb-5">
            Values & Culture
          </button>
          <h2 className={`py-5 text-black  text-2xl hidden md:block`}>
            At Maguta, we exist to create shared value and give dignity and hope
            to our people.At Maguta, we exist to create shared value and give
            dignity and hope to our people.
          </h2>
          <div className="flex flex-col items-center text-center space-y-1 md:px-5 md:space-x-2 md:flex-row">
            {/* looks beeter with the list :) */}
            <ul>
              <li></li>
            </ul>
            <button className="border bg-greenCustom p-5 border-greenCustom w-3/4 px-10 md:p-2 md:px-0 ">
              Mission
            </button>
            <button className="border bg-greenCustom p-5 border-greenCustom w-3/4 px-10 md:p-2 md:px-0">
              Vision
            </button>
            <button className="border bg-greenCustom p-5 border-greenCustom w-3/4 px-10 md:p-2 md:px-0">
              Values
            </button>
            <button className="border bg-greenCustom p-5 border-greenCustom w-3/4 px-10 md:p-2 md:px-0">
              Impact
            </button>

            <p className=" text-black text-start md:hidden">
              To create shared value through innovative, sustainable financial
              solutions and partnerships with low-income rural households often
              excluded from the mainstream financial sector. To be the leading
              microfinance company in Africa dedicated to serving low-income,
              rural households.
            </p>
          </div>
          <p className="m-5 p-2 border-2 border-greenCustom bg-white text-black text-start hidden md:block">
            To create shared value through innovative, sustainable financial
            solutions and partnerships with low-income rural households often
            excluded from the mainstream financial sector. To be the leading
            microfinance company in Africa dedicated to serving low-income,
            rural households.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            className="w-full"
            src="/tree-grows-coin-glass-jar-with-copy-space.png"
            alt="tree grows coin glass jar with copy space "
            width={1920}
            height={480}
            priority
          />
        </div>
      </div>{" "}
      <div className="bg-redishWhite p-5 flex-col h-fit space-y-5 md:flex md:flex-row md:m-5 md:bg-greenCustom ">
        <div className="md:w-1/2 m-5 lg:w-1/3 hidden md:block">
          <Image
            className="w-fit object-cover h-fit "
            src="/intercultural-hand-shake-outdoor.jpg"
            alt="tree grows coin glass jar with copy space "
            width={1920}
            height={480}
            priority
          />
        </div>
        <div className="md:w-1/2 md:ml-5">
          <button className="border bg-white text-greenCustom  border-greenCustom w-fit px-5 md:mb-5">
            About Us
          </button>
          <div className="md:w-1/2 m-5 lg:w-1/3 md:hidden">
            <Image
              className="w-fit object-cover h-fit "
              src="/intercultural-hand-shake-outdoor.jpg"
              alt="tree grows coin glass jar with copy space "
              width={1920}
              height={480}
              priority
            />
          </div>
          <div className="flex flex-col items-center text-center space-y-1">
            <p className=" text-black text-start md:text-white">
              Maguta Capital(Private) Limited is a microfinance services
              provider dedicated to serving low-income but economically active
              rural households in Zimbabwe and the SSA region. The company has
              its market rural households who are mostly excluded from
              traditional financial institutions, deprived of financial
              assistance, and offer them fair and sustainable microfinance
              products. Financial assistance ranges between US$100 and US$10,000
              (granted in local currency), with loan periods of 1 month to 12
              months.
            </p>
            <p className=" text-black text-start md:text-white">
              Maguta seeks to create shared value through innovative and
              sustainable microcredit solutions and partnerships with low-income
              rural households often excluded from the mainstream financial
              sector. Eventually, the company aims to be the leading
              microfinance company in Sub-Saharan Africa dedicated to serving
              low-income rural households.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col mb-5 items-start text-start w-full space-y-1 md:hidden">
        <GetInTouch />
      </div>{" "}
      <Image
        className="w-full md:hidden"
        src="/tree-grows-coin-bag.png"
        alt="tree grows coin bag"
        width={1920}
        height={480}
        priority
      />
      <div className="bg-redishWhite  p-5 flex-col h-fit space-y-5 md:flex md:flex-row md:mx-20 md:bg">
        <div className="md:w-1/2 m-5 ">
          <button className="border bg-white text-greenCustom  border-greenCustom w-fit px-5 md:mb-5 ">
            Our Team
          </button>
          <h2 className={`mb-3 text-3xl  text-black`}>
            Our team&apos;s profound knowledge and honed skills guarantee
            impactful solutions.
          </h2>

          <div className="flex flex-col items-center text-center space-y-1 bg-redishWhite">
            <p className=" text-black text-start">
              Maguta employs highly qualified and passionate staff which
              possesses broad financial and agricultural economics expertise and
              a thorough knowledge of the markets in which we operate in. Maguta
              strives to be a premier microcredit provider, an employer of
              choice for people who are passionate about changing lives,
              especially of the low-income but economically active households.
              The company was founded and incorporated in March 2021 by Nixon S.
              Chekenya. He also co-founded the predecessor institution, NAAV
              Investment Partners (Private) Limited in 2020 and successfully
              positioned it as a leading direct sales agent of retail financial
              products in Zimbabwe. The company was contracted by Xtenda
              Financial Holdings Limited (XFHL), a Mauritius-registered retail
              financial services group, to sell its retail financial products in
              the Zimbabwean market.
            </p>
            <p className=" text-black text-start">
              In establishing Maguta Capital (Private) Limited, the founder is
              driven by a desire to change lives, create shared value and doing
              so by taking advantage of his network of local, regional and
              international partnerships to finance the company’s vision.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 m-5  ">
          {" "}
          <Image
            className="w-fit object-cover h-full "
            src="/pexels-pixabay-163064.jpg"
            alt="pexels-pixabay-163064 "
            width={1920}
            height={480}
            priority
          />
        </div>
      </div>
      <div className="space-y-5 ">
        <button className="border  bg-redishWhite mx-5 mt-5 text-greenCustom  border-greenCustom w-fit px-5">
          Our Partners
        </button>

        <div className="bg-redishWhite border border-greenCustom  text-2xl p-5 font-semibold text-greenCustom max-w-xl md:mx-10">
          Kulinda Microinsurance (Private) Limited
        </div>
      </div>
      <div className="bg-redishWhite mt-5 p-5 flex-col h-fit space-y-5 ">
        <div className="mx-20">
          {" "}
          <div className="w-full flex flex-col md:flex-row">
            <h2 className={`mb-3 text-3xl  text-black md:w-1/6`}>
              Results shared here
            </h2>
            <div className="flex flex-col items-center  text-center space-y-1 bg-redishWhite md:w-4/6">
              <p className=" text-black text-start md:mx-40">
                See how we enabled businesses like yours to excel and grow with
                our professional microfinance services.
              </p>
            </div>
            <div className="md:w-1/6 ">
              <button
                href="#contact_us"
                type="button"
                className="text-white   text-sm px-4 py-2 text-center  bg-greenCustom hover:bg-redishWhite hover:text-black border-2 border-greenCustom "
              >
                Read More Testmonials
              </button>
            </div>
          </div>
          <div className="space-y-5 md:flex md:flex-row  md:space-x-5">
            <button className="bg-greenCustom w-full p-5 md:hidden">
              Read More Testmonials
            </button>
            <div className="border bg-white border-greenCustom text-black p-5 space-y-2">
              <p>
                &quot;Maguta Capital believed in my dream when others
                didn&apos;t. With their support, my agribusiness flourished, and
                I can proudly say I am reaping the rewards. Thank you, Maguta,
                for being my financial backbone!&quot;
              </p>
              <p>Jane M.</p>
              <p>Agripreneur</p>
            </div>
            <div className="border bg-white border-greenCustom text-black p-5 space-y-2">
              <p>
                `&quot;Maguta Capital believed in my dream when others
                didn&apos;t. With their support, my agribusiness flourished, and
                I can proudly say I am reaping the rewards. Thank you, Maguta,
                for being my financial backbone!`&quot;
              </p>
              <p>Jane M.</p>
              <p>Agripreneur</p>
            </div>
            <div className="border bg-white border-greenCustom text-black p-5 space-y-2">
              <p>
                `&quot;Maguta Capital believed in my dream when others
                didn&apos;t. With their support, my agribusiness flourished, and
                I can proudly say I am reaping the rewards. Thank you, Maguta,
                for being my financial backbone!`&quot;
              </p>
              <p>Jane M.</p>
              <p>Agripreneur</p>
            </div>
            <div className="border bg-white border-greenCustom text-black p-5 space-y-2">
              <p>
                `&quot;Maguta Capital believed in my dream when others
                didn&apos;t. With their support, my agribusiness flourished, and
                I can proudly say I am reaping the rewards. Thank you, Maguta,
                for being my financial backbone!`&quot;
              </p>
              <p>Jane M.</p>
              <p>Agripreneur</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="w-full md:hidden"
        src="/growing-money-plant-on-coins-finance-and-investment.png"
        alt="growing money plant on coins finance and investment"
        width={1920}
        height={480}
        priority
      />
      <Image
        className="w-full hidden md:block"
        src="/vecteezy_growing-money-plant-on-coins-finance-and-investment.jpg"
        alt="vecteezy_growing-money-plant-on-coins-finance-and-investment"
        width={1920}
        height={480}
        priority
      />
      <ContactUs />
      <FooterCustom />
    </main>
  );
}
