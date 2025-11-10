import { useRef, useState, useNavigate } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [datas, setDatas] = useState();
  const NameRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const names = NameRef.current.value;

    try {
      const res = await axios.post("http://localhost:8000/leap", {
        name: names,
      });
      if (res) {
        setDatas(res.data.message);
      }
    } catch (error) {
      console.error("error in sending request");
    }
  };

  return (
    <>
      <form>
        <label htmlFor="userName">UserName</label>
        <input type="text" id="userName" ref={NameRef} />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <div className="card">
        <p>{datas}</p>
      </div>
    </>
  );
}

export default App;
