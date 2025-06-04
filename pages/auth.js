import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("შესვლა წარმატებულია!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("რეგისტრაცია წარმატებულია!");
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div style={{maxWidth: 400, margin: "50px auto"}}>
      <h2>{isLogin ? "შესვლა" : "რეგისტრაცია"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="ელ.ფოსტა"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{width:"100%", marginBottom:10}}
        />
        <input
          type="password"
          placeholder="პაროლი"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{width:"100%", marginBottom:10}}
        />
        <button type="submit" style={{width:"100%", marginBottom:10}}>
          {isLogin ? "შესვლა" : "რეგისტრაცია"}
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} style={{width:"100%"}}>
        {isLogin ? "არ გაქვს ანგარიში? რეგისტრაცია" : "უკვე გაქვს? შესვლა"}
      </button>
      {err && <div style={{color:"red", marginTop:10}}>{err}</div>}
    </div>
  );
}