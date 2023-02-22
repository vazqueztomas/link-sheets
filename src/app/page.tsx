import api from "@/api";
import React from "react";

export default async function Home() {
  const links = await api.links.fetch();

  return (
    <main>
      <h1>Tomas</h1>
      <ul>
      {links.map((link) => <li key = {link.label}>
        <a href = {link.url}>{link.label}</a>
      </li>)}
      </ul>
    </main>
  )
}
