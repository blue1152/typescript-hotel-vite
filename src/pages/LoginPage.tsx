import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Header } from '../components';
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
        <Header />
        <div>
            <p>享樂酒店，誠摯歡迎</p>
            <h1>立即開始旅程</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">電子信箱</label>
                <input id="email" type="text" placeholder="Email" {...register("email", { required: true })} />
                <label htmlFor="password">密碼</label>
                <input id="password" type="password" placeholder="Password" {...register("password", { required: true, minLength: 8 })} onChange={() => setErrMsg('')} />
                {/*TODO: Add more reminder msg  */}
                {errors.password && errors.password.type === "minLength" && (<span>密碼至少 8 碼以上</span>)}
                {errMsg && (<span>{errMsg}</span>)}

                <button type="submit">會員登入</button>
                <p>沒有會員嗎？</p>
                <a href={`/signup`}>前往註冊</a>
            </form>
        </div>
    </>);
}