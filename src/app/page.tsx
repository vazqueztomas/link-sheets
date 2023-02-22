import api from "@/api";
import Link from "next/link";
import React from "react";
import '../styles.css';

export default async function Home() {
  const users = await api.user.list();

  return (
    <main className = "container flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline">Lista de usuarios:</h1>
      <ul className = ' flex gap-2 flex-col mt-3'>
      {users.map((user) => <li className = 'bg-sky-500/50 p-1 rounded-lg text-center' key = {user.url}>
        <Link href = {`/${user.slug}`}>{user.slug}</Link>
      </li>)}
      </ul>
    </main>
  )
}
