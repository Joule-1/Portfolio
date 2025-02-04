import { Logo_Light, Logo_Dark, AwesomeSupport_Dark, AwesomeSupport_Light, CleanCode_Dark, CleanCode_Light, CreativeDesign_Dark, CreativeDesign_Light, MaterialUIIcons_Dark, MaterialUIIcons_Light, MaterialUI_Dark, MaterialUI_Light, ResponsiveDesign_Dark, ResponsiveDesign_Light } from "../assets";


const ThemeStorage = {
    LightTheme: {
        Logo: Logo_Light,
        HeroColor: "teal-800",
        HomeBG: "bg-[#F8F8FF]",
        GeneralText: "text-black",
        FadedText: "text-black/70",
        Shadow: "shadow-teal-400/40",
        GeneralBG: "bg-[#F2F2FB]",
        ServiceBG: "bg-[#E6E6F2]",
    },
    
    DarkTheme: {
        Logo: Logo_Dark,
        HeroColor: "yellow-400",
        HomeBG: "bg-gradient-to-r from-[#2E1A47] to-[#4B3F72]",
        GeneralText: "text-white",
        FadedText: "text-white/70",
        Shadow: "shadow-yellow-400/40",
        GeneralBG: "bg-gradient-to-r from-[#1A0F2B] to-[#352A52]",
    }
};

export default ThemeStorage;