import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [datas, setDatas] = useState();
  const NameRef = useRef();
  const handleSubmit = async (e) => {
    const names = NameRef.current.value;
    setName(names);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/leap", { name });
      if (res.status === "200") {
        setDatas(res.data.message);
      }
      console.log(res.data.message);
    } catch (error) {
      console.error("error in sending request");
    }
  };

  return (
    <>
      <form>
        <label id="userName">UserName</label>
        <input type="text" id="userName" ref={NameRef} />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      {datas && (
        <div>
          <p>{datas}</p>
        </div>
      )}
    </>
  );
}

export default App;
