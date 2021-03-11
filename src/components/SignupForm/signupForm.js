import React from 'react';
import { MainDiv, Form, Submit } from './signupForm.elements';
import { useForm }  from 'react-hook-form';

export const SignupForm = (props) => {
    const {register, handleSubmit , errors} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <MainDiv>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign Up</h2>
                <input
                type="text"
                htmlFor="text"
                name="First Name"
                placeholder="First Name"
                ref={register({required:true})}
                />
                <input
                type="text"
                htmlFor="text"
                name="Last Name"
                placeholder="Last Name"
                ref={register({required:true})}
                />
                <input
                type="email"
                htmlFor="Email"
                name="Email"
                placeholder="Email"
                ref={register({required:true})}
                />
                <input
                type="password"
                name="password"
                placeholder="Password"
                ref={register({required : "Password is Required" , minLength : {value:8,message:"TOO SHORT"}})}
                />
                {errors.password && <p style={{fontSize:"15px"}}>{errors.password.message}</p>}
                <Submit type="submit">Sign Up</Submit>
            </Form>
        </MainDiv>
    )
}

