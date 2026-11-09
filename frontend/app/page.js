"use client";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export default function Home() {
  const [message, setMessage] = useState("Chargement...");

  useEffect(() => {
    fetch(`${API}/api/hello`)
      .then((r) => r.json())
      .then((d) => setMessage(d.message))
      .catch(() => setMessage("Impossible de joindre le backend"));
  }, []);

  return (
    <main>
      <h1>Next.js + Spring Boot</h1>
      <p>Réponse du backend : <strong>{message}</strong></p>
    </main>
  );
}
