import { api } from ".";

const domen = api.PORT ? `${api.URL}:${api.PORT}` : api.URL;

const loginURL = () =>
  `${domen}/${api.API.API}/${api.API.AUTH}/${api.API.LOGIN}`;
const reloginURL = () =>
  `${domen}/${api.API.API}/${api.API.AUTH}/${api.API.RELOGIN}`;
const registrationURL = () =>
  `${domen}/${api.API.API}/${api.API.AUTH}/${api.API.REGISTRATION}`;
const socketURL = () => `${domen}`;
export { loginURL, registrationURL, reloginURL, socketURL };
