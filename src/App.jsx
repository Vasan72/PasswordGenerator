import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const GeneratePassword = () => {
    let charSet = "";
    if (includeLowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charSet += "0123456789";
    if (includeSymbols) charSet += "!@#$%^&*()_=+";
    let generatedpassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedpassword += charSet[randomIndex];
    }
    setPassword(generatedpassword);
  };

  const CopyClipboard = ()=>{
    navigator.clipboard.writeText(password)
    alert('Password Copied')
  }

  return (
    <>
      <div className="app-container">
        <h3>STRONG PASSWORD GENERATOR</h3>
        <div className="pass-length">
          <label htmlFor="password-length">Password Length: </label>
          <input
            type="number"
            id="num"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="checkbox-grp">
          <input
            type="checkbox"
            id="lower"
            checked={includeLowercase}
            onChange={(e) => {
              setIncludeLowercase(e.target.checked);
            }}
          />
          <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox-grp">
          <input
            type="checkbox"
            id="upper"
            checked={includeUppercase}
            onChange={(e) => {
              setIncludeUppercase(e.target.checked);
            }}
          />
          <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-grp">
          <input
            type="checkbox"
            id="number"
            checked={includeNumbers}
            onChange={(e) => {
              setIncludeNumbers(e.target.checked);
            }}
          />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-grp">
          <input
            type="checkbox"
            id="symbols"
            checked={includeSymbols}
            onChange={(e) => {
              setIncludeSymbols(e.target.checked);
            }}
          />
          <label htmlFor="symbols">Include Symbols</label>
        </div>
        <button className="generate-password"  onClick={GeneratePassword}>Generate Password</button>
        <div className="generated-password">
          <input type="text " readOnly value={password} />
          <button className="copy-btn" onClick={CopyClipboard}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
