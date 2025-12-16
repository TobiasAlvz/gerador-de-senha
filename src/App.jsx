import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [password, setPassword] = useState("");
  const [passwordSize, setPasswordSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  const [copy, setCopy] = useState("Copiar");

  function generate() {
    const characters =
      "1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";

    let newPassword = "";

    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }

    setPassword(newPassword);
    setCopy("Copiar");
  }

  function copyText() {
    navigator.clipboard.writeText(password);
    setCopy("Copiado");
  }

  return (
    <div>
      <h1>Gerador de Senha</h1>

      <label>
        <input
          type="checkbox"
          checked={showInput}
          onChange={() => setShowInput((show) => !show)}
        />
        Customizar tamanho
      </label>

      {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho: </label>
          <Input
            passwordSize={passwordSize}
            setPasswordSize={setPasswordSize}
          />
        </div>
      )}

      <button onClick={generate}>
        Gerar senha de {passwordSize} caracteres
      </button>

      <button onClick={copyText}>{copy}</button>

      <div>{password}</div>
    </div>
  );
}
