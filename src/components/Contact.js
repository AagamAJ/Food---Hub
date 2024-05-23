const Contact = () => {
    return (
        <div className="contact">
            <h2 className="contact-head">
                <u>Contact Us</u>
            </h2>
            <form className="myForm">
                <input
                    className="myInput"
                    type="text"
                    placeholder="Enter Your Name"
                ></input>
                <input
                    className="myInput"
                    type="text"
                    placeholder="Enter Your e-Mail"
                ></input>
                <input
                    className="myInput"
                    type="tel"
                    placeholder="Enter Your Mobile Number"
                ></input>
                <textarea
                    className="myInput"
                    cols={30}
                    rows={3}
                    placeholder="Enter Your Concern"
                ></textarea>
                <textarea
                    className="myInput"
                    cols={30}
                    rows={3}
                    placeholder="Enter Your Address"
                ></textarea>
            </form>

            <div className="my-btn">Submit</div>
        </div>
    );
};

export default Contact;
