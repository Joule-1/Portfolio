import { Logo_Light, 
        Logo_Dark, 
        Go_Light, Go_Dark, 
        ThemeToggle_Light, 
        ThemeToggle_Dark, 
        NavbarMenu_Light, 
        NavbarMenu_Dark, 
        AboutImage_Light,
        AboutImage_Dark,
        GitHub_Light,
        GitHub_Dark
        } from "../assets";


const ThemeStorage = {
    LightTheme: {
        ThemeImage: ThemeToggle_Light,
        NavbarMenu: NavbarMenu_Light,
        GitHubIcon: GitHub_Light,
        Logo: Logo_Light,
        Go: Go_Light,
        AboutImage: AboutImage_Light,
        HeroColor: "teal-800",
        AlternateHeroColor: "gray-800",
        HomeBG: "bg-[#F8F8FF]",
        GeneralText: "text-black",
        OppositeGeneralText: "text-white",
        FadedText: "text-black/70",
        FadedColor: "black/70",
        Shadow: "shadow-teal-400/40",
        GeneralBG: "bg-[#F2F2FB]",
        ServiceBG: "bg-[#ECECF8]",
    },
    
    DarkTheme: {
        ThemeImage: ThemeToggle_Dark,
        NavbarMenu: NavbarMenu_Dark,
        GitHubIcon: GitHub_Dark,
        Logo: Logo_Dark,
        Go: Go_Dark,
        AboutImage: AboutImage_Dark,
        HeroColor: "yellow-400",
        AlternateHeroColor: "cyan-500",
        HomeBG: "bg-gradient-to-r from-[#2E1A47] to-[#4B3F72]",
        GeneralText: "text-white",
        OppositeGeneralText: "text-black",
        FadedText: "text-white/70",
        FadedColor: "white/70",
        Shadow: "shadow-yellow-400/40",
        GeneralBG: "bg-gradient-to-r from-[#1A0F2B] to-[#352A52]",
        ServiceBG: "bg-gradient-to-r from-[#2D183F] to-[#3C2A53]",
    }
};

export default ThemeStorage;