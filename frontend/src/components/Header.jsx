import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative flex flex-col md:flex-row flex-wrap bg-primary rounded-xl px-6 md:px-10 lg:px-20 overflow-hidden shadow-md">

      {/* Background Effects */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl" />

      {/* ===== Left Side ===== */}
      <div className="relative z-10 md:w-1/2 flex flex-col items-center md:items-start justify-center gap-5 py-10 md:py-20 lg:py-24 md:mb-[-30px]">

        {/* Small Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          <span className="text-xs font-medium text-white/80 tracking-wide">
            Trusted Healthcare Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-[1.12] tracking-tight text-center md:text-left">
          Book Appointment
          <br className="hidden md:block" />
          <span className="text-white/85">
            With Trusted Doctors
          </span>
        </h1>

        {/* Description */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light">
          <img
            className="w-28 drop-shadow-md"
            src={assets.group_profiles}
            alt="Trusted doctors"
          />

          <p className="text-center md:text-left text-white/70 leading-relaxed md:max-w-sm">
            Simply browse through our extensive list of trusted doctors
            and schedule your appointment hassle-free.
          </p>
        </div>

        {/* CTA */}
        <a
          href="#speciality"
          className="group flex items-center gap-3 bg-white px-7 py-3.5 rounded-full text-gray-800 font-semibold text-sm mt-1 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <span>Book Appointment</span>

          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 transition-transform duration-300 group-hover:translate-x-1">
            <img
              className="w-3"
              src={assets.arrow_icon}
              alt=""
            />
          </span>
        </a>
      </div>

      {/* ===== Right Side ===== */}
      <div className="relative md:w-1/2 mt-8 md:mt-0 flex items-end justify-center">

        {/* Decorative Circle */}
        <div className="absolute bottom-[-100px] right-[-50px] w-[420px] h-[420px] rounded-full bg-white/10" />

        {/* Decorative dots */}
        <div className="absolute top-20 right-10 w-2 h-2 rounded-full bg-white/30" />
        <div className="absolute top-32 right-24 w-1.5 h-1.5 rounded-full bg-white/20" />

        <img
          className="relative z-10 w-full md:absolute bottom-0 right-0 max-w-md lg:max-w-lg m-auto drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          src={assets.header_img}
          alt="Doctors"
        />
      </div>

    </div>
  );
};

export default Header;