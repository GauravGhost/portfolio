import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  let initial = {
    user_name: "",
    user_email: "",
    message: "",
  }
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState(
    initial
  )
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setErrors(initial)
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setSuccess(false);
  };

  function validateFormData(data) {
    const errors = {};
    // Validate name
    if (!data.user_name || data.user_name.trim() === "") {
      errors.user_name = "Name is required";
    }

    // Validate email
    if (!data.user_email || data.user_email.trim() === "") {
      errors.user_email = "Email is required";
    } else {
      // Regex for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.user_email)) {
        errors.user_email = "Invalid email format";
      }
    }

    // Validate message
    if (!data.message || data.message.trim() === "") {
      errors.message = "Message is required";
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateFormData(form);

    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    }

    setLoading(true);

    console.log(form)

    emailjs
      .send(
        "service_z906gri",
        "template_gcuy99h",
        form.current,
        "IFlQEEHBhHHUWCHFp"
      )
      .then(
        () => {
          setLoading(false);
          // alert("Thank you. I will get back to you as soon as possible.");
          // swal({
          //   icon: "success",
          //   title: "Thank you.",
          //   text: " I will get back to you as soon as possible.",
          // })

          setForm(initial);
          setSuccess(true);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          // alert("Something went wrong.");
          // swal("Opps! Something went wrong.", {
          //   icon: "error",
          // })
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-[#008059] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="text-red-500 text-sm mt-2 pb-0 mb-0" >{errors.user_name}</p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="user_email"
              value={form.user_email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="text-red-500 text-sm mt-2 " >{errors.user_email}</p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="text-red-500 text-sm mt-2 " >{errors.message}</p>
          </label>
          {
            success && (
              <div className="text-green-500 bg-green-950 pt-4 pb-4 pl-6 pr-6 rounded-2xl">
            Thank you! I will get in touch with you as soon as possible.
          </div>
            )
          }
          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-[1.2] xl:h-auto md:h-[450px] h-[250px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
