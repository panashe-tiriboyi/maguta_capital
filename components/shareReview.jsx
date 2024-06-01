import React from "react";

const ShareReview = () => {
  return (
    <div className="bg-white  p-5 flex-col h-fit space-y-5 md:px-56">
      <button className="border bg-redishWhite  text-greenCustom  border-greenCustom w-fit px-5">
        Share Your Experience
      </button>
      <h2 className={`mb-3 text-2xl  `}>Your Review Matters</h2>
      <div className="flex flex-col items-center text-center space-y-1">
        <p className=" text-black text-start">
          At Maguta Capital, we value your feedback and would love to hear about
          your experience with our services. Your insights help us continuously
          improve and better serve our community. If you&apos;ve had a positive
          experience, faced unique challenges, or have suggestions for us,
          please take a moment to share your thoughts.
        </p>
      </div>
      <form
        className="space-y-2 items-center text-center"
        action="Post"
        id="message-form"
      >
        <input
          className="border border-greenCustom p-5 w-full"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="border border-greenCustom p-5 w-full"
          type="email"
          placeholder="Your Email"
        />
        <input
          className="border border-greenCustom p-5 w-full"
          type="text"
          placeholder="Your City/Town/Province (Optional)"
        />
        <textarea
          id="message"
          name="message"
          rows="4"
          className="border border-greenCustom  p-5 px-10 w-full"
          placeholder="Your Review"
        />
        <input
          className="border border-greenCustom p-5 w-full"
          type="text"
          placeholder="Rating: 1-5 Stars"
        />
        <br />
        <button className="bg-greenCustom p-5 px-10 w-full">Submit</button>
      </form>
    </div>
  );
};

export default ShareReview;
