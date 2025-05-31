import { React } from 'react'
import Marquee from "react-fast-marquee";

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import FindUs from '../components/FindUs';
import FeatureCard from '../components/FeatureCard';
import BubbleChat from '../components/BubbleChat';

import Preview1 from '../../public/assets/preview-1.png'
import ImageStatistik from '../assets/statistik.png'
import ImageAudio from '../assets/Audio.png'
import ImageTimer from '../assets/Timer.png'
import IconAlarmClock from "../../public/assets/icons/alarm-clock.svg";
import IconDirectHit from "../../public/assets/icons/direct-hit.svg";
import IconBarChart from "../../public/assets/icons/bar-chart.svg";

const LandingPage = () => {  
  // TODO: Ini adalah data untuk section fitur, ganti dengan data yang sesuai
  const FeatureData = [
    {
      icon: IconAlarmClock,
      title: "Fokus Timer",
      descrition: "Atur waktu belajar dan istirahatmu dengan teknik Pomodoro. Fokus selama sesi kerja, lalu ambil jeda sejenak untuk menyegarkan pikiran."
    },
    {
      icon: IconDirectHit,
      title: "Do Not Disturb",
      descrition: "Atur waktu belajar dan istirahatmu dengan teknik Pomodoro. Fokus selama sesi kerja, lalu ambil jeda sejenak untuk menyegarkan pikiran."
    },
    {
      icon: IconBarChart,
      title: "Fokus Statistik",
      descrition: "Atur waktu belajar dan istirahatmu dengan teknik Pomodoro. Fokus selama sesi kerja, lalu ambil jeda sejenak untuk menyegarkan pikiran."
    }
  ];

  // TODO: Ini adalah data untuk section review, ganti dengan data yang sesuai
  const ReviewData = [
    {
      avatar: "https://via.placeholder.com/50",
      star: 5,
      text: "Focusify adalah aplikasi pendamping belajar yang dirancang untuk meningkatkan fokus dan produktivitas! Dengan teknik Pomodoro Timer, Focusify memastikan sesi belajar menjadi lebih efektif dan terstruktur."
    },
    {
      avatar: "https://via.placeholder.com/50",
      star: 4,
      text: "Aplikasi ini sangat membantu saya dalam mengatur waktu belajar. Fitur statistiknya juga sangat berguna untuk melihat kemajuan saya."
    },
    {
      avatar: "https://via.placeholder.com/50",
      star: 5,
      text: "Saya suka dengan tampilan dan fungsionalitasnya. Fokus saya meningkat sejak menggunakan Focusify!"
    }
  ];
  
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto my-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo ante, convallis nec nibh at, iaculis vulputate magna.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {/* ICON GOOGLE */}
            GET IT ON <span className="font-semibold ml-1">Google Play</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Coba Aplikasi
            {/* ICON ARROW */}
          </a>
        </div>
      </section>

      {/* Preview Image */}
      <section className="my-10 md:my-16 flex justify-center">
        <img
          src={Preview1}
          alt="Focusify Timer App Mockup"
          className="rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
        />
      </section>

      {/* Introduction */}
      <section className="bg-[#F8F8FA] text-center py-10 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
          Ayo Kenalan Sama Focusify!
        </h2>
        <p className="text-slate-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Focusify adalah aplikasi pendamping belajar yang dirancang untuk meningkatkan fokus dan produktivitas! Dengan teknik Pomodoro Timer, Focusify memastikan sesi belajar menjadi lebih efektif dan terstruktur.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-slate-50 font-sans">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Fitur yang Dirancang <br className="sm:hidden" /> Untuk Fokus
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
              Kami disini untuk memperbaiki belajar kamu tanpa overcomplicating
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left Column: Feature Image */}
            <div className="lg:w-2/5 flex justify-center lg:justify-end">
              <img
                src={ImageTimer}
                alt="Focusify App Features Mockup"
                className="max-w-xs sm:max-w-sm md:max-w-xs rounded-lg"
              />
            </div>

            {/* Right Column: Feature Cards */}
            <div className="flex flex-col lg:w-3/5 w-full max-w-xl lg:max-w-none mx-auto justify-center items-center">
              <div className="space-y-6 w-full">
                {FeatureData.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    descrition={feature.descrition}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specical Thanks */}
      <section className="bg-[#F8F8FA] text-center py-10 md:py-16">
        <div className="flex items-center gap-10 lg:gap-16">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
                Fitur yang Dirancang <br className="sm:hidden" /> Untuk Fokus
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
                Kami disini untuk memperbaiki belajar kamu tanpa overcomplicating
              </p>
            </div>
          </div>

          <div className="container">
            <div className="h-96 overflow-hidden relative">
              <Marquee
                direction="up"
                speed={40}
                gradient={false}
                pauseOnHover={false}
                style={{ height: '100%' }}
              >
                <div className="flex flex-col items-center space-y-6">
                  {ReviewData.map((review, index) => (
                    <BubbleChat
                      key={index}
                      avatar={review.avatar}
                      star={review.star}
                      text={review.text}
                    />
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <svg 
        className="w-full h-20 sm:h-32 md:h-40 lg:h-48 xl:h-64" 
        viewBox="0 0 1440 320" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_2387_4274)">
          <path d="M0 224L48 208C96 192 192 160 288 149.3C384 139 480 149 576 170.7C672 192 768 224 864 224C960 224 1056 192 1152 181.3C1248 171 1344 181 1392 186.7L1440 192V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V224Z" fill="#32375D"/>
        </g>
        <defs>
          <clipPath id="clip0_2387_4274">
            <rect width="1440" height="320" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      <FindUs />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default LandingPage