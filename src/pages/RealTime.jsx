import React, { useState, useEffect } from "react";
// Link dan useNavigate tidak digunakan jika navigasi via window.location.href
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import backgroundTimerDesktop from "../assets/Timerdesktop.png"; // Ganti nama jika beda untuk halaman ini
import backgroundTimerMobile from "../assets/FindMobile.jpg"; // Ganti nama jika beda untuk halaman ini
import Logo from "../assets/logo-focusify.png";
import AnimatedContent from "../components/AnimatedContent";
import BlurText from "../components/BlurText";


const RealtimePage = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [username, setUsername] = useState("");
    const [quote, setQuote] = useState("");

    const quotes = [
        "Fokus adalah kunci kesuksesan.",
        "Sedikit demi sedikit menjadi bukit.",
        "Mulailah dari sekarang, jangan tunda.",
        "Kerja keras tidak akan mengkhianati hasil.",
        "Hari ini adalah kesempatan baru.",
        "Kesabaran adalah kekuatan."
    ];

    const [backgroundImage, setBackgroundImage] = useState(
        window.innerWidth <= 768 ? backgroundTimerMobile : backgroundTimerDesktop
    );

    useEffect(() => {
        const handleResize = () => {
            setBackgroundImage(
                window.innerWidth <= 768 ? backgroundTimerMobile : backgroundTimerDesktop
            );
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const storedName = localStorage.getItem("username") || "Guest";
        setUsername(storedName);

        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Set random quote on load
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);

        return () => clearInterval(interval);
    }, []); // quotes tidak perlu jadi dependency jika hanya di-set sekali

    const formatTime = (time) => {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour >= 5 && hour < 12) return `Selamat Pagi, ${username}. Sudah Sarapan kah?`;
        if (hour >= 12 && hour < 15) return `Udah Siang nih, ${username}. Tetap Fokus yaa!`;
        if (hour >= 15 && hour < 18) return `Senja Telah Tiba, ${username}. Hampir Selesai!`;
        return `Sudah Malam , ${username}. Jangan sering bergadang!!`;
    };

    return (
        <>
            {/* Background Layer */}
            <div
                className="fixed inset-0 w-screen h-screen -z-10"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Content Layer with Scroll */}
            {/* Sesuaikan pb-24 (padding-bottom) dengan tinggi navigation bar Anda */}
            <div className="relative flex flex-col min-h-screen items-center text-white overflow-y-auto pt-20 pb-28 md:pb-24 px-4">

                {/* Logo */}
                <div className="absolute top-6 w-full flex justify-center md:justify-start md:left-8 items-center space-x-2 z-10">
                    <img
                        src={Logo}
                        alt="Focusify Logo"
                        className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full"
                    />
                    <div className="text-lg md:text-3xl font-bold text-white"> {/* Pastikan warna teks terlihat */}
                        Focusify
                    </div>
                </div>

                {/* Quote Random */}
                {/* Disesuaikan agar lebih aman di berbagai layar */}
                <div className="absolute top-20 md:top-7 left-1/2 md:left-auto md:right-8 transform -translate-x-1/2 md:translate-x-0 text-white text-xs sm:text-sm md:text-base italic text-center md:text-right max-w-[180px] sm:max-w-xs md:max-w-[220px] z-10">
                    "{quote}"
                </div>

                {/* Time Display and Greeting - Centered content */}
                {/* Menggunakan flex-grow agar konten utama mengisi ruang dan mendorong navigasi (jika konten sedikit) */}
                <div className="flex flex-col items-center justify-center flex-grow text-center w-full mt-12 md:mt-0">
                    <BlurText
                        text={getGreeting()}
                        delay={150}
                        className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif text-white mb-4 md:mb-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
                    />
                    <AnimatedContent
                        distance={50}
                        direction="vertical"
                        delay={200}
                        config={{ tension: 100, friction: 40 }}
                    >
                        <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold tabular-nums">{formatTime(currentTime)}</h2>
                    </AnimatedContent>
                </div>

                {/* Navigation Icons - Fixed at the bottom */}
                {/* Strukturnya sama dengan di TimerPage, pastikan styling konsisten */}
                <div className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto flex justify-around px-4 py-3 bg-blue-700/80 backdrop-blur-sm text-white rounded-t-xl shadow-lg md:bottom-5 md:left-1/2 md:transform md:-translate-x-1/2 md:w-auto md:gap-5 md:px-5 md:rounded-lg z-50">
                    <button onClick={() => window.location.href = '/'} className="hover:scale-110 transition p-2" title="Beranda" aria-label="Beranda">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75V20a1.25 1.25 0 01-1.25 1.25H4.25A1.25 1.25 0 013 20V9.75z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21V12h6v9" />
                        </svg>
                    </button>
                    <button onClick={() => window.location.href = '/realtime'} className="hover:scale-110 transition p-2 text-blue-300" title="Realtime Calm" aria-label="Realtime Calm"> {/* Current page indicator */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                    </button>
                    <button onClick={() => window.location.href = '/timerpage'} className="hover:scale-110 transition p-2" title="Timer Fokus" aria-label="Timer Fokus">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3M15 3H9M12 22a9 9 0 100-18 9 9 0 000 18z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default RealtimePage;