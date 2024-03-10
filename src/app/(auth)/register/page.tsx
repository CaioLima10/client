"use client";

import Link from "next/link";
import imgAstronautStudying from "../../../assets/astronauta_flutuando_pelo_espaço.png";
import imgAstronautStudyingOne from "../../../assets/astronauta_flutuando.png";
import Image from "next/image";
import Footer from "@/app/(auth)/components/footer";
import { FormEvent, useState } from "react";
import api from "@/services/api";
import AuthInput from "@/app/(auth)/components/auth-input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Logo from "../components/logo";

export default function Login() {
  const route = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msgError, setMsgError] = useState("");
  const [msgSucess, setMsgSucess] = useState("");

  const handleRegister = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    api
      .post("/auth/register", { username, email, password, confirmPassword })
      .then((result) => {
        console.log(result.data);
        setMsgSucess(result.data.msg);
        route.push("/login");
      })
      .catch((error) => {
        console.log(error);
        setMsgError(error.response.data.msg);
      });
  };

  return (
    <main className="flex">
      <div className="bg-purple-500 dark:bg-zinc-950 duration-500 w-0 md:w-full h-screen relative">
        <Image
          src={imgAstronautStudying}
          alt="Astronaut__Studying"
          className="top-0 z-0 -right-24 absolute"
        />
        <Image
          src={imgAstronautStudyingOne}
          alt="Astronaut__Studying"
          className="bottom-0 left-0 absolute"
        />
        <Logo />
      </div>
      <form className="w-full h-screen flex flex-col items-center justify-center p-5  dark:bg-zinc-900">
        <div className="w-full sm:w-3/4">
          <h1 className="text-4xl mb-6 font-semibold flex items-center justify-center w-full">
            Crie sua conta gratuita
          </h1>

          <AuthInput
            label="Nome:"
            placeholder="Digite seu Nome..."
            setNewState={(event) => setUsername(event)}
            type="text"
          />
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

          <AuthInput
            label="Confime sua senha:"
            placeholder="confirme sua Senha..."
            setNewState={(event) => setConfirmPassword(event)}
            type="password"
          />
          {msgError.length > 0 && (
            <span className="text-red-500 flex items-center justify-center w-full">
              {msgError}
            </span>
          )}
          {msgSucess.length > 0 && (
            <span className="text-green-500 flex items-center justify-center w-full">
              {toast.success(msgSucess)}
            </span>
          )}

          <div className="flex flex-col">
            <button
              className="bg-purple-500 hover:bg-purple-600 dark:bg-zinc-700 dark:hover:bg-zinc-600
                          hover:text-zinc-100
                            duration-300 p-2 mb-2 mt-4 font-bold text-lg rounded-md"
              onClick={(event) => handleRegister(event)}
            >
              Entrar
            </button>
            <span>
              Não tem uma conta?{" "}
              <Link
                href="/login"
                className="text-blue-500 dark:text-cyan-500 font-semibold"
              >
                Já tenho cadastro!
              </Link>
            </span>
          </div>
        </div>
        <Footer />
      </form>
    </main>
  );
}
