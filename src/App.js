import { useState } from "react";
import "./App.css";
import TagTree from "./components/TagTree";

function App() {
  const [showJson, setShowJson] = useState(false);
  const [jsonTree, setJsonTree] = useState("");
  return (
    <div className="App flex flex-col justify-between w-screen h-screen">
      <TagTree setShowJson={setShowJson} setJsonTree={setJsonTree} />

      {/* show Json tree*/}
      {showJson && (
        <div className="h-[40vh] border-t-2 border-black flex p-3">
          {JSON.stringify(jsonTree)}
        </div>
      )}
    </div>
  );
}

export default App;
