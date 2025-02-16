import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import ThemeStorage from "../utils/ThemeStorage.js";
import emailjs from '@emailjs/browser';
import possibleColors from "../utils/PossibleColors.js";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Contact = () => {
	const {theme, toggleMenu, menuDisplay, setActiveSection} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

	const { ref } = useInView({
		threshold: 0.5,
		onChange: (inView) => {
			if(inView){
				setActiveSection("contact")
			}
		}
	})

	const [submitMessage, setSubmitMessage] = useState(false);
	const [submitMessageDisplay, setSubmitMessageDisplay] = useState('slide-out');
	const [submitText, setSubmitText] = useState('Send Message');
	const InputCSS = `rounded-xl p-3 m-3 hover:placeholder-${currentTheme.HeroColor} ${currentTheme.HomeBG}`;
	const fullname = useRef();	
	const email = useRef();
	const subject = useRef();
	const message = useRef();
	const handleSubmit = async (event) => {
		event.preventDefault();
		setSubmitText('Sending...'); 
		const combinedMessage = `Subject: ${subject.current.value}\n\nMessage: ${message.current.value}`;
		try{
			await emailjs
				.send(
					import.meta.env.VITE_EMAILJS_SERVICE_ID, 
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
					{
						from_name: fullname.current.value,
						to_name: fullname.current.value,			// reply to sender with sender's name
						email_id: email.current.value,
						message: combinedMessage,
					},
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY
				)
				setSubmitMessage(true); 
				setSubmitMessageDisplay('slide-in'); 
		}
		catch(error){
			setSubmitMessage(false);
			setSubmitMessageDisplay('slide-in');
			setSubmitText('Send Message');
			console.log(error)
		}

		const clearValues = setTimeout(clearValuesTimeout, 4000);

		function clearValuesTimeout() {
			setSubmitText('Send Message')
			setSubmitMessageDisplay('slide-out');
			fullname.current.value = '';
			email.current.value = '';
			subject.current.value = '';
			message.current.value = '';
		}
	};

  return (
	<Element name="contact">
		<section ref={ref} onClick={menuDisplay ? toggleMenu : undefined} className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} h-full pt-15 pb-10 poppins-regular overflow-hidden`}>
			<div>
				<div className={`absolute text-base p-1 px-3 ml-2 poppins-bold border-3 rounded-xl ${submitMessageDisplay} ${submitMessage ? `text-${currentTheme.HeroColor}` : 'text-red-700'}`}>{submitMessage ? 'Success' : 'Failed'}</div>
				<div className={`text-center poppins-bold text-4xl`}>Contact&nbsp; 
					<span className={`text-${currentTheme.HeroColor}`}>Me</span>
				</div>
			</div>
			<form className={`flex justify-center items-center flex-col placeholder-${currentTheme.FadedColor} text-base mt-5 md:text-lg`} onSubmit={handleSubmit}>
				<div className="w-[100%] flex flex-wrap justify-center md:w-[100%] lg:w-[60%]">
					<input type="text" name="fullname" ref={fullname} placeholder="Full Name" required autoComplete="off" id="from_name" className={`${InputCSS} w-[80%] sm:w-[41%] md:w-[44%]`}/>
					<input type="email" name="email" ref={email} placeholder="Email Address" required autoComplete="off" id="email_id" className={`${InputCSS} w-[80%] sm:w-[41%] md:w-[44%] `}/>
				</div>
				<input type="text" name="subject" ref={subject} placeholder="Email Subject" required autoComplete="off" className={`${InputCSS} w-[80%] sm:w-[85%] md:w-[90%] lg:w-[55%]`}/>
				<textarea rows={"8"} name="message" ref={message} placeholder="Your Message" required autoComplete="off" id="message" className={`${InputCSS} w-[80%] sm:w-[85%] md:w-[90%] lg:w-[55%] resize-none`}></textarea>
				<button type="submit" className={`mt-2 rounded-xl border-4 border-transparent bg-${currentTheme.HeroColor} p-2 text-white poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer w-[80%] sm:w-[60%] md:w-[40%] lg:w-[25%] xl:w-[20%]`}>
					{submitText}
				</button>
			</form>
		</section>
	</Element>
  )
}

export default Contact;