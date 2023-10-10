import React, { useState } from 'react';
import Select from 'react-select';
import './supportForm.css'

const SupportForm = () => {
    const [inputs, setInputs] = useState({});
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
    };

    

    const handleChangeSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='mainDiv_SupportForm'>
            <form onSubmit={handleSubmit} className='formSupport'>

                <input
                    placeholder='Full Name'
                    type="text"
                    name="name"
                    value={inputs.name || ''}
                    onChange={handleChange}
                    className='selectElement'
                />

                <input
                    placeholder='Email Address'
                    type="text"
                    name="email"
                    value={inputs.email || ''}
                    onChange={handleChange}
                    className='selectElement'
                />


                <input
                    placeholder='Phone Number'
                    type="text"
                    name="phone"
                    value={inputs.phone || ''}
                    onChange={handleChange}
                    className='selectElement'
                />

                <Select
                    key={`select_${selectedOption ? selectedOption.value : ''}`} // Change the key when selected option changes
                    value={selectedOption}
                    onChange={handleChangeSelect}
                    options={options}
                    placeholder="Why contacting us?"
                    className='selectElement'
                />


                <button type="submit" className='selectElement'>Contact Us</button>
            </form>
        </div>
    )
}

export default SupportForm;