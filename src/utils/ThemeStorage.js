import { Logo_Light, Logo_Dark, Go_Light, Go_Dark } from "../assets";


const ThemeStorage = {
    LightTheme: {
        Logo: Logo_Light,
        Go: Go_Light,
        HeroColor: "teal-800",
        HomeBG: "bg-[#F8F8FF]",
        GeneralText: "text-black",
        OppositeGeneralText: "text-white",
        FadedText: "text-black/70",
        FadedColor: "black/70",
        Shadow: "shadow-teal-400/40",
        GeneralBG: "bg-[#F2F2FB]",
        ServiceBG: "bg-[#E6E6F2]",
    },
    
    DarkTheme: {
        Logo: Logo_Dark,
        Go: Go_Dark,
        HeroColor: "yellow-400",
        HomeBG: "bg-gradient-to-r from-[#2E1A47] to-[#4B3F72]",
        GeneralText: "text-white",
        OppositeGeneralText: "text-black",
        FadedText: "text-white/70",
        FadedColor: "white/70",
        Shadow: "shadow-yellow-400/40",
        GeneralBG: "bg-gradient-to-r from-[#1A0F2B] to-[#352A52]",
    }
};

export default ThemeStorage;