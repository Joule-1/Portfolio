import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import ThemeStorage from "../utils/ThemeStorage.js";
import emailjs from "@emailjs/browser";
import possibleColors from "../utils/PossibleColors.js";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const { theme, toggleMenu, menuDisplay, setActiveSection } =
        useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

    const { ref } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) {
                setActiveSection("contact");
            }
        },
    });

    const [submitMessage, setSubmitMessage] = useState(false);
    const [submitMessageDisplay, setSubmitMessageDisplay] =
        useState("slide-out");
    const [submitText, setSubmitText] = useState("Send Message");
    const InputCSS = `rounded-xl p-3 m-3 hover:placeholder-${currentTheme.HeroColor} ${currentTheme.HomeBG}`;
    const fullname = useRef();
    const email = useRef();
    const subject = useRef();
    const message = useRef();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitText("Sending...");
        const combinedMessage = `Subject: ${subject.current.value}\n\nMessage: ${message.current.value}`;
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: fullname.current.value,
                    to_name: fullname.current.value, // reply to sender with sender's name
                    email_id: email.current.value,
                    message: combinedMessage,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSubmitMessage(true);
            setSubmitMessageDisplay("slide-in");
        } catch (error) {
            setSubmitMessage(false);
            setSubmitMessageDisplay("slide-in");
            setSubmitText("Send Message");
            console.log(error);
        }

        const clearValues = setTimeout(clearValuesTimeout, 4000);

        function clearValuesTimeout() {
            setSubmitText("Send Message");
            setSubmitMessageDisplay("slide-out");
            fullname.current.value = "";
            email.current.value = "";
            subject.current.value = "";
            message.current.value = "";
        }
    };

    return (
        <Element name="contact">
            <section
                ref={ref}
                onClick={menuDisplay ? toggleMenu : undefined}
                className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} poppins-regular h-full overflow-hidden pt-20 pb-20`}
            >
                <div>
                    <div
                        className={`poppins-bold absolute ml-2 rounded-xl border-3 p-1 px-3 text-base ${submitMessageDisplay} ${submitMessage ? `text-${currentTheme.HeroColor}` : "text-red-700"}`}
                    >
                        {submitMessage ? "Success" : "Failed"}
                    </div>
                    <div className={`poppins-bold text-center text-4xl`}>
                        Contact&nbsp;
                        <span className={`text-${currentTheme.HeroColor}`}>
                            Me
                        </span>
                    </div>
                </div>
                <form
                    className={`flex flex-col items-center justify-center placeholder-${currentTheme.FadedColor} mt-5 text-base md:text-lg`}
                    onSubmit={handleSubmit}
                >
                    <div className="flex w-[100%] flex-wrap justify-center md:w-[100%] lg:w-[60%]">
                        <input
                            type="text"
                            name="fullname"
                            ref={fullname}
                            placeholder="Full Name"
                            required
                            autoComplete="off"
                            id="from_name"
                            className={`${InputCSS} w-[80%] sm:w-[41%] md:w-[44%]`}
                        />
                        <input
                            type="email"
                            name="email"
                            ref={email}
                            placeholder="Email Address"
                            required
                            autoComplete="off"
                            id="email_id"
                            className={`${InputCSS} w-[80%] sm:w-[41%] md:w-[44%]`}
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        ref={subject}
                        placeholder="Subject"
                        required
                        autoComplete="off"
                        className={`${InputCSS} w-[80%] sm:w-[85%] md:w-[90%] lg:w-[55%]`}
                    />
                    <textarea
                        rows={"8"}
                        name="message"
                        ref={message}
                        placeholder="Your Message"
                        required
                        autoComplete="off"
                        id="message"
                        className={`${InputCSS} w-[80%] resize-none sm:w-[85%] md:w-[90%] lg:w-[55%]`}
                    ></textarea>
                    <button
                        type="submit"
                        className={`mt-2 rounded-xl border-4 border-transparent bg-${currentTheme.HeroColor} poppins-semibold transform p-2 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} w-[80%] cursor-pointer select-none sm:w-[60%] md:w-[40%] lg:w-[25%] xl:w-[20%]`}
                    >
                        {submitText}
                    </button>
                </form>
            </section>
        </Element>
    );
};

export default Contact;
