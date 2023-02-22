import api from "@/api";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const users = await api.user.list();

  return (
    <main>
      <h1>Tomas</h1>
      <ul>
      {users.map((user) => <li key = {user.url}>
        <Link href = {`/${user.slug}`}>{user.slug}</Link>
      </li>)}
      </ul>
    </main>
  )
}
