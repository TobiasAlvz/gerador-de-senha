import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");

  function generate() {
    const characters =
      "1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
  }
  return (
    <div>
      <h1>Gerador de Senha</h1>
      <button>Gerar</button>
      <button>Copiar</button>
      <div>{password}</div>
    </div>
  );
}
