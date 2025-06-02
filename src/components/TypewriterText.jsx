import { useEffect, useState } from "react";

const texts = ["distraksi", "halangan", "gangguan", "godaan"];

const TypewriterText = () => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingTimeout, erasingTimeout;
    if (typing) {
      if (display.length < texts[index].length) {
        typingTimeout = setTimeout(() => {
          setDisplay(texts[index].slice(0, display.length + 1));
        }, 370); // lebih smooth ngetiknya
      } else {
        // Biarkan selama 3 detik, baru mulai menghapus
        erasingTimeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (display.length > 0) {
        erasingTimeout = setTimeout(() => {
          setDisplay(texts[index].slice(0, display.length - 1));
        }, 50); // lebih smooth hapusnya
      } else {
        setIndex((prev) => (prev + 1) % texts.length);
        setTyping(true);
      }
    }
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [display, typing, index]);

  return (
    <span className="text-primary-10 font-bold border-r-2 border-primary-10">
      {display}
    </span>
  );
};

export default TypewriterText;
