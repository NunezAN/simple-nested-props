import { useState } from "react";
import Name from "../components/Name";
import NameForm from "../components/NameForm";

export default function Home() {
  const [name, setName] = useState("alex");
  return (
    <div className="w-full h-screen text-center p-4">
      <label className="uppercase text-2xl font-bold">Name App</label>
      <Name name={name} />
      <NameForm name={name} setName={setName} />
    </div>
  );
}
