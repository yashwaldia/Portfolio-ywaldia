import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import Button from '../../shared/Button/Button';
import styles from './Contact.module.css';

const INFO = [
  { icon: <FiMail size={18} />,     label: 'Email',    value: 'ywaldia@gmail.com',                 href: 'mailto:ywaldia@gmail.com' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/yashwaldia',         href: 'https://linkedin.com/in/yashwaldia' },
  { icon: <FiGithub size={18} />,   label: 'GitHub',   value: 'github.com/yashwaldia',              href: 'https://github.com/yashwaldia' },
  { icon: <FiMapPin size={18} />,   label: 'Location', value: 'Greater Noida, Uttar Pradesh, India', href: null },
];

function Contact() {
  const formRef  = useRef();
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
      console.log('SERVICE:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log('TEMPLATE:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log('KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    try {
    await emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formRef.current,
    { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className="container">
        <SectionHeader title="Contact Me" subtitle="Get In Touch" />

        <div className={styles.grid}>
          {/* Info panel */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.infoTitle}>Let's work together</h3>
            <p className={styles.infoDesc}>
              I'm open to full-time roles and freelance opportunities.
              Drop me a message and I'll get back within 24 hours.
            </p>

            <ul className={styles.infoList}>
              {INFO.map(({ icon, label, value, href }) => (
                <li key={label} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{icon}</span>
                  <div>
                    <span className={styles.infoLabel}>{label}</span>
                    {href
                      ? <a href={href} target="_blank" rel="noopener noreferrer" className={styles.infoValue}>{value}</a>
                      : <span className={styles.infoValue}>{value}</span>
                    }
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input name="user_name" type="text" required placeholder="Your name" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input name="user_email" type="email" required placeholder="your@email.com" className={styles.input} />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Subject</label>
              <input name="subject" type="text" required placeholder="Project / Opportunity" className={styles.input} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea name="message" rows="5" required placeholder="Tell me about your project..." className={styles.textarea} />
            </div>

            <Button type="submit" variant="primary" size="lg" className={styles.submit}>
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </Button>

            {status === 'success' && <p className={styles.msgSuccess}>✅ Message sent! I'll reply soon.</p>}
            {status === 'error'   && <p className={styles.msgError}>❌ Something went wrong. Try emailing directly at ywaldia@gmail.com</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
