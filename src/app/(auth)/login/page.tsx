"use client";

import Link from "next/link";
import imgAstronautStudying from "../../../assets/astronauta_estudando.png";
import Image from "next/image";
import Footer from "@/app/(auth)/components/footer";
import { FormEvent, useState } from "react";
import api from "@/services/api";
import AuthInput from "@/app/(auth)/components/auth-input";
import { useRouter } from "next/navigation";
import Logo from "../components/logo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useRouter();

  const handleLogin = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    api
      .post("/auth/login", { email, password })
      .then((result) => {
        localStorage.setItem(
          "site-courses:user",
          JSON.stringify(result.data.user)
        );
        navigate.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="flex">
      <div
        className="bg-gradient-to-br from-customGreen to-blue-500 dark:from-zinc-950  duration-500
                      w-0 md:w-full h-screen relative"
      >
        <Image
          src={imgAstronautStudying}
          alt="Astronaut__Studying"
          className="bottom-0 left-0 absolute"
        />
        <Logo />
      </div>
      <form className="w-full h-screen flex flex-col items-center justify-center p-5 dark:bg-zinc-900">
        <div className="w-full sm:w-3/4">
          <h1 className="text-4xl mb-12 font-semibold  flex items-center justify-center w-full">
            Seja Bem-vindo!
          </h1>
          <AuthInput
            label="E-mail:"
            placeholder="Digite seu Email..."
            setNewState={(event) => setEmail(event)}
            type="text"
          />

          <AuthInput
            label="Senha:"
            placeholder="Digite sua Senha..."
            setNewState={(event) => setPassword(event)}
            type="password"
          />

          <div className="flex flex-col">
            <button
              className="bg-cyan-500 dark:bg-zinc-700 dark:hover:bg-zinc-600 
                          hover:bg-cyan-500/90 hover:text-zinc-100
                            duration-300 p-2 mb-2 mt-4 font-bold text-lg rounded-md"
              onClick={(event) => handleLogin(event)}
            >
              Entrar
            </button>
            <span>
              Não tem uma conta?{" "}
              <Link
                href="/register"
                className="text-blue-500 dark:text-cyan-500 font-semibold"
              >
                Crie uma aqui!
              </Link>
            </span>
          </div>
        </div>
        <Footer />
      </form>
    </main>
  );
}
