"use server"
import axios from "axios";
import { Routes } from "discord-api-types/v10";

// enum ServiceType {
//   DISCORD,
//   // posiblemente la base de datos
// }

// class Messages {

//   Service service;

//   constructor(service: ServiceType) {
//     switch (service) {
//       case ServiceType.DISCORD:
//         this.service = new DiscordMessagesService();
//       default:
        
//     }
//   }

//   async getMostsRecent() {
//   }
// }

async function baseRequest(url: string) {
  return await axios(
      url,
      {
        fetchOptions: {
          cache: "no-store",
        },
        headers: {
          Authorization: `Bot ${process.env.TOKEN}`,
        },
      },
  );
}

async function getMostsRecent() {
    const mensajes = await baseRequest(
      `https://discord.com/api/v10${Routes.channelMessages(process.env.CHANNEL_ID!)}`,
    );
    return mensajes.data as Message[]
}

async function getBefore(id: string) {
    const mensajes = await baseRequest(
      `https://discord.com/api/v10${Routes.channelMessages(process.env.CHANNEL_ID!)}?before=${id}`,
    )
    return mensajes.data as Message[]
}

export { getMostsRecent, getBefore };