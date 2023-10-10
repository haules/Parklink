import React from 'react';
import './support.css';
import SupportForm from '../components/supportForm';

const Support = () => {
    return (
        <div className='backgroundImage_div'>
            <div className='testing'>
                <div className='title_div'>
                    <h1>Would you like to get in touch?</h1>
                    <p>Do not hesitate to contact usat any time via the contact form below, <br />
                        whether any query, suggestion or feedback.
                    </p>
                </div>

                <div className='div_form'>
                    <SupportForm />
                </div>
            </div>

        </div>

    )
}
export default Support;
