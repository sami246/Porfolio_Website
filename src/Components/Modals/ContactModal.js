import { AnimatePresence, motion } from "framer-motion";
import { MdContactPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ContactModal.css";


const ContactModal = ({ isOpen, setIsOpen }) => {

    const notify = () => {
        toast.success("Copied to Clipboard")

    };
    return (
        <AnimatePresence>
            <ToastContainer
                position="bottom-center"
                autoClose={1500}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
            />
            {isOpen && (
                <motion.div
                    key="contact-modal-div-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="modal-container"
                >
                    <motion.div
                        key="contact-modal-div-2"
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="modal-content"
                    >
                        <IoIosMail className="alert-icon" />
                        <div className="modal-content-inner">
                            <div className="i-icon-middle">
                                <MdContactPhone />
                            </div>
                            <h3 className="big-text">
                                Contact Me
                            </h3>
                            <p className="text">
                                If you feel like there is a role which may suit my skillset and experience feel free to email me with the details below.
                            </p>
                            <div key="email-contact" className=" contact-row">
                                <CopyToClipboard key='email-copy-button' text="samisamadur@gmail.com" onCopy={notify}>
                                    <div className="copy-button"><IoIosMail /></div>
                                </CopyToClipboard>
                                <CopyToClipboard key='email-contact-info' text="samisamadur@gmail.com" onCopy={notify}>
                                    <div className="contact-info">
                                        samisamadur@gmail.com
                                    </div>
                                </CopyToClipboard>
                            </div>
                            {/* <div className="contact-row">
                                <CopyToClipboard text="royzltd@outlook.com" onCopy={notify}>
                                    <div className="copy-button" id='phone-icon'><FaPhone /></div>
                                </CopyToClipboard>
                                <CopyToClipboard text="royzltd@outlook.com" onCopy={notify}>
                                    <div className="contact-info">
                                        07563717299
                                    </div>
                                </CopyToClipboard>
                            </div> */}
                        </div>
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence >
    );
};

export default ContactModal;