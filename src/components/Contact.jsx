import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../utils/ThemeToggle";
import ThemeStorage from "../utils/ThemeStorage";
import emailjs from '@emailjs/browser';


const Contact = () => {
	const {theme, toggleTheme} = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];
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
    <section className={`${currentTheme.GeneralBG} ${currentTheme.GeneralText} h-full py-18 poppins-regular overflow-hidden h-screen`}>
		<div>
			<div className={`absolute text-base p-1 px-3 ml-2 poppins-bold border-3 rounded-xl ${submitMessageDisplay} ${submitMessage ? `text-${currentTheme.HeroColor}` : 'text-red-700'}`}>{submitMessage ? 'Success' : 'Failed'}</div>
			<div className={`text-2xl text-center poppins-semibold sm:text-4xl lg:text-4xl`}>Contact&nbsp; 
				<span className={`text-${currentTheme.HeroColor}`}>Me</span>
			</div>
		</div>
		<form className={`flex justify-center items-center flex-col placeholder-${currentTheme.FadedColor} text-base mt-5 md:text-lg`} onSubmit={handleSubmit}>
			<div className="w-[100%] flex flex-wrap justify-center md:w-[100%] lg:w-[60%]">
				<input type="text" name="fullname" ref={fullname} placeholder="Full Name" required autoComplete="off" id="from_name" className={`${InputCSS} w-[80%] sm:w-[45%]`}/>
				<input type="email" name="email" ref={email} placeholder="Email Address" required autoComplete="off" id="email_id" className={`${InputCSS} w-[80%] sm:w-[45%]`}/>
			</div>
			<input type="text" name="subject" ref={subject} placeholder="Email Subject" required autoComplete="off" className={`${InputCSS} w-[80%] md:w-[90%] lg:w-[55%]`}/>
			<textarea rows={"8"} name="message" ref={message} placeholder="Your Message" required autoComplete="off" id="message" className={`${InputCSS} w-[80%] md:w-[90%] lg:w-[55%] resize-none`}></textarea>
			<button type="submit" className={`m-2 rounded-xl border-4 border-transparent bg-${currentTheme.HeroColor} p-2 text-white poppins-semibold transition-all transform ease-in-out duration-200 hover:bg-transparent hover:text-${currentTheme.HeroColor} hover:border-${currentTheme.HeroColor} select-none cursor-pointer`}>
				{submitText}
			</button>
		</form>
	</section>
  )
}

const possibleColors = {
	Placeholder_color1: 'placeholder-black/70',
	Placeholder_color2: 'placeholder-white/70',
	Hover_Placeholder_color1: 'hover:placeholder-teal-800',
	Hover_Placeholder_color2: 'hover:placeholder-yellow-400',
	Text_color1: 'text-teal-800',
	Text_color2: 'text-yellow-400',
	Bg_color1: 'bg-teal-800',
	Bg_color2: 'bg-yellow-400',
	Border_color1: 'border-teal-800',
	Border_color2: 'border-yellow-400',
	Hover_color1: 'hover:text-teal-800',
	Hover_color2: 'hover:text-yellow-400',
	Hover_Border_color1: 'hover:border-teal-800',
	Hover_Border_color2: 'hover:border-yellow-400',
	Shadow_color1: 'shadow-teal-400/40',
	Shadow_color2: 'shadow-yellow-400/40',
	Faded_text1: 'text-black/70',
	Faded_text2: 'text-white/70',
};

export default Contact;