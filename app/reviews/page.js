import ContactUs from "@/components/contactUs";
import FooterCustom from "@/components/footerCustom";
import GetInTouch from "@/components/getInTouch";
import NavBar from "@/app/navBar";
import ServicesContent from "@/components/servicesContent";
import Image from "next/image";
import ReviewsContent from "@/components/reviewsContent";
import ShareReview from "@/components/shareReview";
import WelcomeSection from "@/components/welcomeSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-white lg:max-w-screen-xl mx-auto">
      <div className="md:overflow">
        <WelcomeSection
          name="Customer Reviews"
          content="  Discover what our valued customers have to say about their
            experiences with Maguta Capital"
        />
      </div>

      {/* <Image
        className="w-full"
        src="/workplace-team.png"
        alt="workplace team"
        width={1920}
        height={480}
        priority
      /> */}
      <div className="bg-redishWhite m-5 p-5 flex-col h-fit space-y-5 text-black md:hidden">
        <button className="border  text-greenCustom  border-greenCustom w-fit px-5">
          Commitment
        </button>
        <h2 className={`mb-3 text-2xl  `}>
          Cultivating Prosperity, Nurturing Dreams
        </h2>

        <div className="flex flex-col space-y-1">
          <p className=" text-black text-start">
            These testimonials reflect the impact of our commitment to shared
            success, financial empowerment, and sustainable growth. Read on to
            explore the stories of those who have joined us on the journey
            towards a brighter and more prosperous future.
          </p>
          <GetInTouch />
          <Image
            className="w-full "
            src="/countryside-workers-together-field.png"
            alt="countryside workers together field.png"
            width={1920}
            height={480}
            priority
          />
        </div>
      </div>
      <div className="bg-redishWhite mx-40 p-5 md:p-5  flex-col h-fit space-y-5 text-black hidden md:block md:box md:overlay md:flex-row md:flex space-x-5 justify-evenly ">
        <div className="md:w-1/2 justify-evenly space-y-5 ">
          <button className="border  text-greenCustom  border-greenCustom w-fit px-5">
            Commitment
          </button>
          <h2 className={`mb-3 text-2xl  `}>
            Cultivating Prosperity, Nurturing Dreams
          </h2>

          <div className="flex flex-col space-y-1">
            <p className=" text-black text-start">
              These testimonials reflect the impact of our commitment to shared
              success, financial empowerment, and sustainable growth. Read on to
              explore the stories of those who have joined us on the journey
              towards a brighter and more prosperous future.
            </p>
            <GetInTouch />
          </div>
        </div>{" "}
        <div className="flex flex-col space-y-1 md:w-1/2 max-h-max">
          <Image
            className="w-full "
            src="/countryside-workers-together-field.png"
            alt="countryside workers together field.png"
            width={1920}
            height={480}
            priority
          />
        </div>
      </div>
      <ReviewsContent />
      <ShareReview />
      <Image
        className="w-full"
        src="/growing-money-plant-on-coins-finance-and-investment.png"
        alt="growing money plant on coins finance and investment"
        width={1920}
        height={480}
        priority
      />
      <ContactUs />
      <FooterCustom />
    </main>
  );
}
