import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1528900",
  key: "3d65071d7d59bf3482c0",
  secret: "17e9c8fec5e831a005e4",
  cluster: "us2",
  useTLS: true,
});

export const clientPusher = new ClientPusher('3d65071d7d59bf3482c0', {
  cluster: 'us2',
  forceTLS: true,
  });