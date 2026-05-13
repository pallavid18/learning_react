const Contact = () => {
    return (
        <>
            <section id="contact" className="py-5">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="p-4 bg-white rounded shadow-sm">
                                <h2 className="mb-4">Connect With Me</h2>
                                <p className="mb-4">
                                    Send a message and I will get back to you as soon as possible.
                                </p>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="contactName" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contactName"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="contactEmail" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="contactEmail"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="contactSubject" className="form-label">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contactSubject"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="contactMessage" className="form-label">
                                            Message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="contactMessage"
                                            rows="6"
                                            placeholder="Write your message here..."
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rounded overflow-hidden shadow-sm">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195492446394!2d-122.08424968468145!3d37.422065979825196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c4f424b79%3A0x5a4e12a6426c118c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="450"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;