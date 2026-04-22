
const Banner = () => {
  
  const headingText = "Friends to keep close in your life";
  const subHeading = "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.";

  return (
    <header className="py-16 text-center">
       
      <h1 className="mb-4 text-4xl font-bold md:text-6xl text-white">
        {headingText}
      </h1>

      
      <p className="mx-auto mb-6 max-w-2xl text-slate-400">
        {subHeading}
      </p>

       
      <button 
        type="button"
        className="rounded-lg bg-green-800 px-6 py-3 font-semibold transition-all duration-300 hover:bg-green-700 active:opacity-90"
      >
        + Add a Friend
      </button>
    </header>
  );
};

export default Banner;