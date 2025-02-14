import { Logo_Light, Logo_Dark, Go_Light, Go_Dark, ThemeToggle_Light, ThemeToggle_Dark, NavbarMenu_Light, NavbarMenu_Dark, CloseIcon_Light, CloseIcon_Dark } from "../assets";


const ThemeStorage = {
    LightTheme: {
        ThemeImage: ThemeToggle_Light,
        NavbarMenu: NavbarMenu_Light,
        CloseIcon: CloseIcon_Light,
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
        ThemeImage: ThemeToggle_Dark,
        NavbarMenu: NavbarMenu_Dark,
        CloseIcon: CloseIcon_Dark,
        Logo: Logo_Dark,
        Go: Go_Dark,
        HeroColor: "yellow-400",
        HomeBG: "bg-gradient-to-r from-[#2E1A47] to-[#4B3F72]",
        GeneralText: "text-white",
        OppositeGeneralText: "text-black",
        FadedText: "text-white/70",
        FadedColor: "white/70",
        Shadow: "shadow-yellow-400/40",
        GeneralBG: "bg-gradient-to-r from-[#2A1C40] to-[#5A487C]",
    }
};

export default ThemeStorage;