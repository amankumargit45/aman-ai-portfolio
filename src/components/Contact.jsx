import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
function Contact() {

  const [success, setSuccess] = useState(false);
const [sending, setSending] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  setSending(true);

  emailjs
    .sendForm(
      "service_4h1p774",
      "template_zc8o9qh",
      e.target,
      "AqcWtJQKI8Yxd7ZY7"
    )
    .then(() => {
      setSending(false);

      setSuccess(true);

      e.target.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    })
    .catch((error) => {
      console.error(error);

      setSending(false);

      alert("Something went wrong. Please try again.");
    });
};


  return (
  <section id="contact" className="max-w-7xl mx-auto px-8 py-28">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >

      <p className="uppercase tracking-[5px] text-blue-500 font-semibold">
        Contact
      </p>

      <h2 className="text-5xl font-bold mt-4">
        Let's Build Something Great
      </h2>

      <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
        Have a project in mind or looking for an Software Developer?
        Let's connect.
      </p>

    </motion.div>

    <div className="grid lg:grid-cols-2 gap-14 mt-20">

      {/* LEFT */}

      <div className="space-y-8">

        <div className="flex items-center gap-5 bg-white/5 p-6 rounded-3xl border border-white/10">

          <Mail className="text-blue-500" />

          <div>

            <h3 className="font-bold">Email</h3>

            <p className="text-gray-400">
              amankumargupta899@gmail.com
            </p>

          </div>

        </div>

        <div className="flex items-center gap-5 bg-white/5 p-6 rounded-3xl border border-white/10">

          <Phone className="text-blue-500" />

          <div>

            <h3 className="font-bold">Phone</h3>

            <p className="text-gray-400">
              +91 7355242858
            </p>

          </div>

        </div>

        <div className="flex items-center gap-5 bg-white/5 p-6 rounded-3xl border border-white/10">

          <MapPin className="text-blue-500" />

          <div>

            <h3 className="font-bold">Location</h3>

            <p className="text-gray-400">
              India
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <form onSubmit={sendEmail} className="space-y-6">

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-green-500/30 bg-green-500/10 backdrop-blur-xl p-5"
          >

            <div className="flex gap-4">

              <CheckCircle
                size={30}
                className="text-green-400 mt-1"
              />

              <div>

                <h3 className="text-green-400 text-xl font-bold">

                  Message Sent Successfully!

                </h3>

                <p className="text-gray-300 mt-2 leading-7">

                  Thank you for contacting me.

                  <br />

                  We will contact you shortly.

                </p>

              </div>

            </div>

          </motion.div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none"
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none resize-none"
        />

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 px-8 py-4 rounded-2xl font-semibold duration-300"
        >

          {sending ? "Sending..." : "Send Message"}

        </button>

      </form>

    </div>

  </section>
);
}

export default Contact;