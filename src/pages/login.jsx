import React from 'react';
import { useForm } from 'react-hook-form';
import './login.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className='loginMainDiv'>
            <p className="title">Registration Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input className='loginInput' placeholder='Name' type="text" {...register("name")} />
                <input className='loginInput' type="email" placeholder='Email' {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input className='loginInput' placeholder='Password' type="password" {...register("password")} />
                <input className='buttonInput' type={"submit"} />
            </form>



        </div>
    )
}
export default Login;



