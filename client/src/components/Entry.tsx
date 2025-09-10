import { useContext, useState } from "react"
import { UserContext } from "../App"
import "./styles/Entry.css"
import { useNavigate } from "react-router";

export default function Entry() {
    // const setUser = useContext(UserContext).setUser;
    const setUser = useContext(UserContext).setUser;
    const [msg, setMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate();


    async function formEntry(e : any) {
        setMsg("")
        setIsLoading(true)
        e.preventDefault();
        const [name, password] = [e.target.name.value, e.target.password.value]
        const res = await fetch("http://localhost:3200/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        //   "token" : user.token
        },
        body: JSON.stringify({ userName: name, password: password})
      })
      const tempMsg = (await res.json()).msg
      setTimeout(() => {
        setIsLoading(false)
        setMsg(tempMsg)
      }, 3000);
      if(res.status === 200) {
        setUser(name)
        setTimeout(() => {
            navigate('/')
        }, 4000);
      }
    }


    return (
        <div className="Entry">
            <button onClick={() => setIsLogin((p) => !p)}>{isLogin ? "login" : "singup"}</button>
            <form onSubmit={ formEntry }>
                <h2>{isLogin ? "singup" : "login" }</h2>
                <label htmlFor="name">user name:</label>
                <input type="text" required maxLength={20} id="name" />
                <label htmlFor="description">password</label>
                <input type="text" required maxLength={240} id="password" />
                <button type="submit">{isLogin ? "login" : "singup"}</button>
                {msg && <h3 className="msg">{msg}</h3>}
                {isLoading && <span className="loaderEntry"></span>}
            </form>
            {isLoading && <span className="loaderEntry"></span>}
            { msg && <h3>{msg}</h3>}
        </div>
    )
}
