
const Contact = () =>{
    return (
        <section id="contact">
        <div className="contact-container">
            <div className="contact-content">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="contact-body">
                <div className="contact-form">
                    <form action="">
                        <div>
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name"/>
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div>
                            <label for="message">Message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>
                        <div>
                            <button type="button">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9666117947327!2d85.3349549!3d27.68742679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x23bb4647745b3c5%3A0x188d79956864ba46!2sTechspire%20College!5e0!3m2!1sen!2snp!4v1735372288948!5m2!1sen!2snp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Contact;