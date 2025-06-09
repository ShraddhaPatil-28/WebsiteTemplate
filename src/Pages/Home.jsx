import React from "react";
import "../Pages/Home" // Ensure it includes FontAwesome + Google Fonts


const PaperKitHome = () => {
  return (
    <div className="relative min-h-screen bg-[#121c26] text-white font-montserrat">
      {/* Background Image */}
      <img
        src="https://storage.googleapis.com/a1aa/image/879ce659-4928-41e5-8872-bb2d5fafdf95.jpg"
  alt="Foggy mountain landscape"
  className="fixed inset-0 w-full h-full object-cover -z-10"
      />

      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 select-none uppercase text-[11px] font-bold tracking-[0.15em]">
        <div>PAPER KIT PRO REACT</div>
        <nav className="flex items-center gap-6 text-[#d1d9e6] font-semibold tracking-[0.1em]">
          <div className="flex items-center gap-1 cursor-pointer hover:text-white">
            COMPONENTS <i className="fas fa-chevron-down text-[8px]"></i>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white">
            SECTIONS <i className="fas fa-chevron-down text-[8px]"></i>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white">
            EXAMPLES <i className="fas fa-chevron-down text-[8px]"></i>
          </div>
          <button className="flex items-center gap-2 bg-[#ff4422] text-white rounded-full px-5 py-2 text-[11px] font-semibold shadow-md uppercase hover:bg-[#e03e1a] hover:shadow-lg transition">
            <i className="fas fa-shopping-cart text-xs"></i> Buy Now
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 mt-24 sm:mt-32 flex flex-col items-center text-center">
        <h1 className="relative font-black text-[56px] sm:text-[72px] leading-tight text-white select-none">
          Paper Kit
          <span className="absolute top-[-8px] left-full ml-3 bg-[#151f20] text-[12px] font-bold px-2 py-1 rounded select-none">
            PRO
          </span>
        </h1>
        <h2 className="font-black text-[56px] sm:text-[72px] leading-tight text-[#a9b3c1] mt-1 select-none drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]">
          React
        </h2>
        <p className="mt-6 text-[15px] sm:text-[16px] font-light leading-relaxed tracking-wide max-w-md text-[#e1e9f0] drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]">
          Make your mark with a premium Bootstrap 4, React, React Hooks and Reactstrap UI{" "}
          <a href="#" className="text-[#5d78ff] hover:text-[#3f56d1] underline transition">
            Kit
          </a>
          !
        </p>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-[10px] font-bold tracking-[0.15em] uppercase text-[#a0a9b8] flex justify-center items-center gap-2 drop-shadow-[0_0_3px_rgba(0,0,0,0.4)] select-none">
        Designed and coded by
        <img
          src="https://storage.googleapis.com/a1aa/image/03caaa58-59a1-43de-ac36-dee8b45fa2d9.jpg"
          alt="Creative Tim logo"
          className="rounded-full w-5 h-5 shadow"
        />
        Creative Tim
      </footer>
    </div>
  );
};

export default PaperKitHome;
