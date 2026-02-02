import { useState } from "react";
import PageHeader from "../../component/pageheader/PageHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
    }
  };
  return (
    <>
      <PageHeader
        title="Contact"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />
      <div className="contact-container">
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
        <div className="contact-info">
          <div className="contact-data">
            <li>
              <div className="contact-icon"></div>
              <div className="contact-content">
                <h3>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </li>
            <li>
              <div className="contact-icon"></div>
              <div className="contact-content">
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </li>
            <li>
              <div className="contact-icon"></div>
              <div className="contact-content">
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </li>
          </div>
          <form className="contact-form" action="" onSubmit={handleSubmit}>
            <li>
              <label htmlFor="">Your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Abc"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </li>
            <li>
              <label htmlFor="">Email address</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Abc@def.com"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </li>
            <li>
              <label htmlFor="">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="This is an optional"
              />
            </li>
            <li>
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi! I'd like to ask about"
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </li>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
