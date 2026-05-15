const Contact =() =>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Contact Us</h1>
                    <p>If you have any questions, comments, or inquiries, please feel free to reach out to us. We value your feedback and are here to assist you in any way we can. You can contact us through the following methods:</p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
        </>
    )
}
export default Contact;