import Pusher, { Options } from "pusher-js";
import Echo from "laravel-echo";
import { API_TOKEN } from "./redux/api/api";

Pusher.logToConsole = true;

// You need the JWT token to be authorized
const pusherOptions: Options = {
  cluster: "eu",
  authEndpoint: "http://127.0.0.1:8000/v1/broadcasting/auth",
  auth: {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(API_TOKEN)}`,
    },
  },
};

const PUSHER_KEY = process.env.REACT_APP_PUSHER_KEY as string;

const client = new Pusher(PUSHER_KEY, pusherOptions);

// To create channel (be careful, your token need to be valid at this moment)
export const channel = new Echo({
  broadcaster: "pusher",
  forceTLS: false,
  client,
});

// channel.private("App.User.21905790")
// .notification((notification: any) => {
//   console.log(notification)
// })

export default channel;
