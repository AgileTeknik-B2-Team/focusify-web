import React, { useEffect } from 'react'
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';
const googleAnonAvatar = "https://ssl.gstatic.com/accounts/ui/avatar_2x.png";
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import FindUs from '../components/FindUs';
import FeatureSection from "../components/FeatureSection";
import BubbleChat from '../components/BubbleChat';
import TypewriterText from "../components/TypewriterText";
import PreviewSection from "../components/PreviewSection";

const LandingPage = () => {
  // --- AOS setup ---
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 40 });
  }, []);

  const ReviewData = [
    {
      avatar: googleAnonAvatar,
      star: 5,
      text: "Focusify adalah aplikasi pendamping belajar yang dirancang untuk meningkatkan fokus dan produktivitas! Dengan teknik Pomodoro Timer."
    },
    {
      avatar: googleAnonAvatar,
      star: 4,
      text: "Aplikasi ini sangat membantu saya dalam mengatur waktu belajar. Fitur statistiknya juga sangat berguna untuk melihat kemajuan saya."
    },
    {
      avatar: googleAnonAvatar,
      star: 5,
      text: "One of the greatest app for student, help more focus on academics and keep track for your progress"
    },
    {
      avatar: googleAnonAvatar,
      star: 5,
      text: "Focusify sangat membantu saya untuk tetap fokus saat belajar."
    },
    {
      avatar: googleAnonAvatar,
      star: 5,
      text: "Aplikasi ini sangat membantu saya dalam mengatur waktu belajar."
    },
    {
      avatar: googleAnonAvatar,
      star: 5,
      text: "Gacor banget aplikasinya, fitur-fiturnya lengkap dan mudah digunakan. "
    },
  ];


  return (
    <>
      {/* Navbar */}
      {/* <div className="absolute -top-16 size-72 bg-primary-10 rounded-full blur-3xl" /> */}
      <div className="absolute -top-16 size-72 bg-gradient-radial from-[#4C8AFD] via-[#93A4F9] to-[#FF65A2] rounded-full blur-3xl" />
      <Navbar />

      {/* Header */}
      <section
        id="hero"
        className="text-center max-w-2xl mx-auto my-16 px-4 pt-28"
        data-aos="fade-down"
      >
        <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl leading-tight">
          <span className="text-primary-10">Focusify</span>
          {" Bantu mencapai targetmu dengan mudah dan tanpa "}
          <TypewriterText />
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Blokir notifikasi mengganggu saat aktivitas dan atur timer sesuai dengan keinginanmu
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a className="playstore-button h-[60px] flex items-center" href="https://play.google.com/store/search?q=FOCUSIFY&c=apps">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon" viewBox="0 0 512 512">
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
            <span className="texts">
              <span className="text-1">GET IT ON</span>
              <span className="text-2">Google Play</span>
            </span>
          </a>
          <a
            href="/nameinput"
            className="inline-flex items-center justify-center px-8 py-5 h-[60px] border border-transparent text-base font-medium rounded-full text-white bg-primary-10 hover:bg-primary-20 transition"
          >
            <span className='me-2'>Coba Aplikasi</span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12V18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19C19.7348 19 19.4804 18.8946 19.2929 18.7071C19.1054 18.5196 19 18.2652 19 18V14.4137L12.7075 20.7075C12.6146 20.8004 12.5043 20.8741 12.3829 20.9244C12.2615 20.9747 12.1314 21.0006 12 21.0006C11.8686 21.0006 11.7385 20.9747 11.6171 20.9244C11.4957 20.8741 11.3854 20.8004 11.2925 20.7075C11.1996 20.6146 11.1259 20.5043 11.0756 20.3829C11.0253 20.2615 10.9994 20.1314 10.9994 20C10.9994 19.8686 11.0253 19.7385 11.0756 19.6171C11.1259 19.4957 11.1996 19.3854 11.2925 19.2925L17.5863 13H14C13.7348 13 13.4804 12.8946 13.2929 12.7071C13.1054 12.5196 13 12.2652 13 12C13 11.7348 13.1054 11.4804 13.2929 11.2929C13.4804 11.1054 13.7348 11 14 11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12ZM29 16C29 18.5712 28.2376 21.0846 26.8091 23.2224C25.3807 25.3603 23.3503 27.0265 20.9749 28.0104C18.5995 28.9944 15.9856 29.2518 13.4638 28.7502C10.9421 28.2486 8.6257 27.0105 6.80762 25.1924C4.98953 23.3743 3.75141 21.0579 3.2498 18.5362C2.74819 16.0144 3.00563 13.4006 3.98957 11.0251C4.97351 8.64968 6.63975 6.61935 8.77759 5.1909C10.9154 3.76244 13.4288 3 16 3C19.4467 3.00364 22.7512 4.37445 25.1884 6.81163C27.6256 9.24882 28.9964 12.5533 29 16ZM27 16C27 13.8244 26.3549 11.6977 25.1462 9.88873C23.9375 8.07979 22.2195 6.66989 20.2095 5.83733C18.1995 5.00476 15.9878 4.78692 13.854 5.21136C11.7202 5.6358 9.76021 6.68345 8.22183 8.22183C6.68345 9.7602 5.63581 11.7202 5.21137 13.854C4.78693 15.9878 5.00477 18.1995 5.83733 20.2095C6.66989 22.2195 8.07979 23.9375 9.88873 25.1462C11.6977 26.3549 13.8244 27 16 27C18.9164 26.9967 21.7123 25.8367 23.7745 23.7745C25.8367 21.7123 26.9967 18.9164 27 16Z" fill="white"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Preview Section */}
      <section data-aos="fade-up">
        <PreviewSection />
      </section>

      {/* Introduction */}
      <section
        className="relative bg-gradient-to-br from-[#F8F8FA] via-[#F0F0F5] to-[#E8E8F0] text-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-10/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-[#8B7EC8]/20 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary-10/15 rounded-full blur-md animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-[#9A8FD3]/20 rounded-full blur-xl animate-pulse delay-1500"></div>
        </div>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-full h-28 md:h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="topWave" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4361EE" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4361EE" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              fill="url(#topWave)"
              d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,160C672,181,768,203,864,202.7C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative max-w-5xl mx-auto z-10">
          <div className="mb-8">
            <h1 className="text-lg md:text-4xl font-black text-slate-800 drop-shadow-lg mb-4 leading-tight" data-aos="zoom-in">
              Ayo Kenalan Sama{' '}
              <span className="bg-gradient-to-r from-primary-10 via-[#8B7EC8] to-[#9A8FD3] bg-clip-text text-transparent animate-pulse">
                Focusify
              </span>
              !
            </h1>
            <div className="relative mx-auto w-24 h-2 mb-2">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-10 to-[#8B7EC8] rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B7EC8] to-[#9A8FD3] rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-slate-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium" data-aos="fade-up" data-aos-delay="200">
            Focusify adalah aplikasi pendamping belajar yang dirancang untuk meningkatkan fokus dan produktivitas.
            Menggunakan teknik <span className="font-bold text-primary-10">Pomodoro Timer</span>, Focusify membantu Anda:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-12">
            {[
              {
                icon: "M9 12l2 2 4-4",
                text: "Menjaga fokus selama sesi kerja dengan timer yang dapat disesuaikan.",
                color: "from-emerald-400 to-emerald-600"
              },
              {
                icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4",
                text: "Memberi jeda terstruktur agar otak tetap segar dan produktif.",
                color: "from-blue-400 to-blue-600"
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                text: "Memantau progres belajar lewat statistik dan analisis mendalam.",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                text: "Menyajikan kutipan inspiratif untuk memotivasi sepanjang hari.",
                color: "from-pink-400 to-pink-600"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-start space-x-4 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/80 border border-white/50"
                data-aos="fade-up"
                data-aos-delay={150 * (i + 1)}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-slate-800 font-medium text-base leading-relaxed group-hover:text-slate-900 transition-colors duration-200">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-28 md:h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="bottomWave" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4361EE" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#4361EE" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4361EE" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              fill="url(#bottomWave)"
              d="M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,106.7C672,128,768,192,864,197.3C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V224Z"
            ></path>
          </svg>
        </div>
      </section>
      <section id="feature" data-aos="fade-up">
        <FeatureSection />
      </section>
      <section className="relative isolate overflow-hidden bg-[#F8F8FA] py-12 md:py-20" data-aos="fade-up">
        <div className="absolute -top-16 -left-20 size-72 bg-indigo-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-16 size-48 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <header className="text-center lg:text-left" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
              <span className="bg-gradient-to-r from-primary-10 to-primary-20 bg-clip-text text-transparent">
                Special Thanks&nbsp;  
              </span>
              Buat Kalian!
            </h2>
            <p className="mt-5 max-w-md mx-auto lg:mx-0 text-lg text-slate-600">
              Maupun kalian seorang profesional, pelajar, ataupun lainnya. Kami akan hadir untuk menemani kalian.
            </p>
          </header>
          <div
            className="relative h-[28rem] overflow-hidden px-6 flex items-center"
            data-aos="fade-left"
          >
            <Marquee
              direction="up"
              speed={30}
              gradient={false}
              style={{ height: "100%", width: "100%" }}
            >
              {[...ReviewData, ...ReviewData].map((review, i) => (
                <div key={i} className="w-full max-w-md">
                  <BubbleChat {...review} />
                </div>
              ))}

            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F8F8FA] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F8F8FA] to-transparent" />
          </div>
        </div>
      </section>


      {/* SVG wave bawah */}
      <svg
        className="w-full h-20 sm:h-32 md:h-40 lg:h-48 xl:h-64"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_2387_4274)">
          <path d="M0 224L48 208C96 192 192 160 288 149.3C384 139 480 149 576 170.7C672 192 768 224 864 224C960 224 1056 192 1152 181.3C1248 171 1344 181 1392 186.7L1440 192V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V224Z" fill="#32375D" />
        </g>
        <defs>
          <clipPath id="clip0_2387_4274">
            <rect width="1440" height="320" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {/* Contact/FindUs */}
      <section id="contact">
        <FindUs />
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default LandingPage
