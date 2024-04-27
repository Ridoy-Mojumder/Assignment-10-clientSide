import Lottie from 'react-lottie';
import animationData from './contact_us_animation.json'; // Your Lottie animation JSON file
import Swal from 'sweetalert2';

const ContactUs = () => {
    // Define options for Lottie animation
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const handleContactSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const contactDetails = { name, email, subject, message };
        console.log(contactDetails);

        // Here you could add an API call to send the contact details
        Swal.fire({
            title: 'Thank you!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonText: 'Ok!'
        });
    }

    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-[#2e8572] mb-12">Contact Us</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                    <div className="mb-6 md:mb-0">
                        <Lottie options={defaultOptions} height={300} width={300} />
                    </div>
                    <div className="space-y-6 w-full max-w-3xl">
                        <h1 className="text-xl text-center font-bold text-[#52c9af]">Get in Touch</h1>
                        <p className="text-lg text-center text-gray-600">We're here to help and answer any question you might have. We look forward to hearing from you!</p>
                        <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <input
                                    name="name"
                                    type="text"
                                    id="contact_name"
                                    required
                                    placeholder="Name"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-[#52c9af]"
                                />
                                <label htmlFor="contact_name" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#52c9af]">
                                    Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    name="email"
                                    type="email"
                                    id="contact_email"
                                    required
                                    placeholder="Email"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-[#52c9af]"
                                />
                                <label htmlFor="contact_email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#52c9af]">
                                    Email
                                </label>
                            </div>
                            <div className="relative col-span-2">
                                <input
                                    name="subject"
                                    type="text"
                                    id="contact_subject"
                                    required
                                    placeholder="Subject"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-[#52c9af]"
                                />
                                <label htmlFor="contact_subject" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#52c9af]">
                                    Subject
                                </label>
                            </div>
                            <div className="relative col-span-2">
                                <textarea
                                    name="message"
                                    id="contact_message"
                                    required
                                    placeholder="Message"
                                    className="peer placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-[#52c9af]"
                                ></textarea>
                                <label htmlFor="contact_message" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#52c9af]">
                                    Message
                                </label>
                            </div>
                            <button type="submit" className="col-span-2 bg-[#52c9af] hover:bg-[#256355] text-white font-bold py-2 px-4 rounded-md transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
