import "./contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-card'>
        <div className='card-header'>
          <h4>Get In Touch</h4>
        </div>
        <div className='card-body'>
          <form
            action='https://api.web3forms.com/submit'
            method='POST'
            id='contactForm'>
            <input
              type='hidden'
              name='access_key'
              value='7059166b-c9d1-48c3-a26c-197a90008ddf'
            />
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <div className='input-group'>
                <span className='icon'>
                  <i className='fas fa-user'></i>
                </span>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Your Name'
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <div className='input-group'>
                <span className='icon'>
                  <i className='fas fa-envelope'></i>
                </span>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Your Email'
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <div className='input-group'>
                <span className='icon'>
                  <i className='fas fa-phone'></i>
                </span>
                <input
                  type='tel'
                  name='phone'
                  id='phone'
                  placeholder='Your Number'
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <div className='input-group'>
                <span className='icon'>
                  <i className='fas fa-message'></i>
                </span>
                <textarea
                  name='message'
                  id='message'
                  rows='4'
                  placeholder='Your Message...'
                  required></textarea>
              </div>
            </div>
            <div className='button-group'>
              <button type='reset' className='btn-cancel'>
                Cancel
              </button>
              <button type='submit' className='btn-submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='card-footer'>
          <h5>Thanks for visiting!</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
