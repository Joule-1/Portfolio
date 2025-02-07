import { AwesomeSupport_Dark, AwesomeSupport_Light, CleanCode_Dark, CleanCode_Light, CreativeDesign_Dark, CreativeDesign_Light, MaterialUIIcons_Dark, MaterialUIIcons_Light, MaterialUI_Dark, MaterialUI_Light, ResponsiveDesign_Dark, ResponsiveDesign_Light } from "../assets";

const ServiceStorage = {
    CreativeDesign:{
        Icon: [CreativeDesign_Light, CreativeDesign_Dark],
        HeadLine: "Creative Design",
        ByLine: "Creative design blends art and technology to create engaging, user-centric experiences that inspire and innovate."
    },
    CleanCode:{
        Icon: [CleanCode_Light, CleanCode_Dark],
        HeadLine: "Clean Code",
        ByLine: "Clean code ensures clarity, simplicity, and maintainability, leading to efficient, scalable, and high-quality software solutions."
    },
    ResponsiveDesign:{
        Icon: [ResponsiveDesign_Light, ResponsiveDesign_Dark],
        HeadLine: "Adaptive Design",
        ByLine: 'Responsive design adapts seamlessly across devices, ensuring accessibility, usability, and performance on all screen sizes.'
    },
    AwesomeSupport:{
        Icon: [AwesomeSupport_Light, AwesomeSupport_Dark],
        HeadLine: "Awesome Support",
        ByLine: 'Awesome support delivers fast, personalized solutions, ensuring user satisfaction, reliability, and a seamless experience.'
    },
    MaterialUI:{
        Icon: [MaterialUI_Light, MaterialUI_Dark],
        HeadLine: "Material UI",
        ByLine: 'Material UI combines aesthetics with functionality, enabling developers to craft intuitive and visually appealing interfaces.'
    },
    MaterialUIIcons:{
        Icon: [MaterialUIIcons_Light, MaterialUIIcons_Dark],
        HeadLine: "Material UI Icons",
        ByLine: 'Material UI Icons offer a vast, consistent symbol library that enhances usability, accessibility, and seamless navigation.'
    },
};

export default ServiceStorage;