"use client"



const ReviewLinks = () => {
  return (
    <div className=" w-full h-auto flex justify-evenly border-b-2 text-[18px] font-satoshi mt-20">
      {/* Navigation links */}
      
        <button
          className="hover:underline"
          onClick={() => document.getElementById('#')?.scrollIntoView()}
        >
          Product Details
        </button>
        <button
          className="hover:underline"
          onClick={() => document.getElementById('#')?.scrollIntoView()}
        >
          Review & Rating
        </button>
        <button
          className="hover:underline"
          onClick={() => document.getElementById('#')?.scrollIntoView()}
        >
          FAQ
        </button>
     
      </div>
  );
};

export default ReviewLinks;
