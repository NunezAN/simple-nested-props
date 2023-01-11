import React from "react";

export default function NameForm({ name, setName }) {
  return (
    <div>
      <form>
        <label htmlFor="nameInput">Enter name: </label>
        <input
          className="border-2 border-black rounded-xl"
          type="text"
          id="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}
