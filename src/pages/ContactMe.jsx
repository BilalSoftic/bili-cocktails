import { Form, redirect, useNavigation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_CONTACT_TEMPLATE_ID,
      data,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    );

    console.log(response);
    toast.success('Message sent successfully');
    return redirect('/');
  } catch (error) {
    toast.error('There was an error,please try again...');
    console.log(error);
    return error;
  }
};

function ContactMe() {
  const navigation = useNavigation();
  const isSending = navigation.state === 'submitting';

  return (
    <Form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Write me a message
      </h4>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='user_name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          name='user_name'
          id='user_name'
          required
        />
      </div>
      {/* email */}
      <div className='form-row'>
        <label htmlFor='user_email' className='form-label'>
          email
        </label>
        <input
          type='email'
          className='form-input'
          name='user_email'
          id='user_email'
          required
        />
      </div>

      {/* message */}
      <div className='form-row'>
        <label htmlFor='message' className='form-label'>
          message
        </label>
        <textarea
          type='text'
          className='form-textarea'
          name='message'
          id='message'
          required
        />
      </div>

      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
        disabled={isSending}
      >
        {isSending ? 'sending' : 'send'}
      </button>
    </Form>
  );
}
export default ContactMe;
