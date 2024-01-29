import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../utils/authContext';
import { LoginInput } from '../utils/apiSchema'

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>();
    const { login, isAuthenticated } = useAuth();
    const [errMsg, setErrMsg] = useState('')

    const onSubmit: SubmitHandler<LoginInput> = async (userInput) => {
        if (login) {
            const result = await login(userInput);
            if (!result.success) {
                setErrMsg(result.err.message);
            }
        }
    };
    
    return (<>
        <h1>login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email" {...register("email", {required: true})} />
            <input type="password" placeholder="Password" {...register("password", { required: true, minLength: 8 })} onChange={() => setErrMsg('')} />
            {errors.password && errors.password.type === "minLength" && (<span>密碼至少 8 碼以上</span>)}
            {errMsg && (<span>{errMsg}</span>)}

            <input type="submit" />
        </form>
    </>);
}