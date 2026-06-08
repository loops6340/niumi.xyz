"use client";

import { useRef } from "react";

const FormularioAntiBot = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="w-screen h-screen z-50 bg-white absolute p-2">
      <form
        action=""
        className="flex z-50 flex-col"
        onSubmit={(e) => {
            e.preventDefault();
          ref.current!.style = "display: none;";
        }}
      >
        <h1>Formulario anti bots :'v</h1>
        <input type="text" placeholder="ola" />
        <textarea name="" id="" placeholder="soigei"></textarea>
        <button>aseptar</button>
      </form>
    </div>
  );
};

export default FormularioAntiBot;
