import React, { useRef } from 'react'
import { useAuth } from '../context/AuthContext'
const Login = () => {
    const inputRef = useRef()
    const { login } = useAuth()
    const submit = () => {
        if ((inputRef.current.value).length > 2) {
            login(inputRef.current.value)

        }
        else {
            alert("En az 3 karakter girmeniz gerekmektedir.")

        }
    }

    return (
        <main>
            <div className=' login'>
                <label>Kullanıcı Adı</label>
                <input type="text"
                    placeholder='Kullanıcı Adınızı Giriniz'
                    ref={inputRef} />
                <button onClick={submit}>Giriş Yap</button>

            </div>
        </main>
    )
}

export default Login
