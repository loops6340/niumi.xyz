import NavBar from "@/components/UI/NavBar";
import Link from "next/link";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GoFileSubmodule } from "react-icons/go";
import { RiTodoFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col text-darkmode-light-primary">

      <a href="https://github.com/loops6340/niumi.xyz" target="_blank" className="absolute left-3 bottom-3 bg-dm-light-primary text-3xl rounded-full">
        <FaGithub />
      </a>
      <NavBar route="Kasita" />
      <div className="bg-[url(https://i.imgur.com/3N0gyAY.png)] bg-cover flex flex-col items-center gap-5 flex-1 mt-auto mb-auto h-full">
        <div className="mt-auto mb-auto flex flex-col gap-5">
          <h1 className="text-dm-light-primary font-bold text-4xl mx-auto">Ñumi.xyz</h1>
          <div className="flex flex-col gap-2">
            <Link
              href="/chat"
              className="relative flex gap-2 p-2 hover:bg-dm-light-primary transition hover:text-dm-dark-primary text-dm-light-primary bg-dm-dark-secondary rounded items-center"
            >
              <div className="asbolute left-1 flex items-center text-2xl bg-dm-light-primary p-1 rounded">
                <IoChatbubblesOutline color="var(--color-dm-dark-secondary)"/>
              </div>
              <h2 className="ml-2 mr-20">/Chat</h2>
            </Link>
            {/**Aún no implementado */}
            <Link
              href="/files"
              className="flex gap-2 p-2 hover:bg-dm-light-primary transition hover:text-dm-dark-primary text-dm-light-primary bg-dm-dark-secondary rounded items-center"
            >
              <div className="flex items-center text-2xl bg-dm-light-primary p-1 rounded">
                <GoFileSubmodule color="var(--color-dm-dark-secondary)"/>
              </div>
              <h2 className="ml-2 mr-20">/Archivos</h2>
            </Link>
            <Link
              href="/tasks"
              className="flex gap-2 p-2 hover:bg-dm-light-primary transition hover:text-dm-dark-primary text-dm-light-primary bg-dm-dark-secondary rounded items-center"
            >
              <div className="flex items-center text-2xl bg-dm-light-primary p-1 rounded">
                <RiTodoFill color="var(--color-dm-dark-secondary)"/>
              </div>
              <h2 className="ml-2 mr-20">/Tareas</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
