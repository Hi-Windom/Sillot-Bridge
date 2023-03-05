import { io } from "socket.io-client";
import * as React from "react";
import * as Client from "react-dom/client";
import App from './App'
import './index.css'
import parse from "html-react-parser";
export default function client() {
  const socket = io("http://localhost:3900", {
    withCredentials: true,
    extraHeaders: {
      "sillot-header": "sillot-bridge",
    },
  });

  socket.on("connect", () => {
    console.log(socket.id);
  });
  socket.on("init",(arg) => {
    const root = Client.createRoot(document.getElementById('root') as HTMLElement)
    root.render(
      <>
        <App />
      </>
    )
  })
  socket.on("createDOM", (id: string, com: string) => {
    const e = document.createElement("div");
    e.id = id;
    document.body.appendChild(e);
    const root = Client.createRoot(e);
    root.render(parse(`${com}`));
  });
  socket.on("disconnect", () => {
    console.log(socket.id); // undefined
  });
}
