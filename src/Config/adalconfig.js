import { AuthenticationContext, adalFetch, withAdalLogin } from "react-adal";

//this is for Dev
export const adalConfig = {
  tenant: "f3211d0e-125b-42c3-86db-322b19a65a22",
  clientId: "feb52479-df55-4d4b-be89-d88ef1042cfe",
  endpoints: {
    api:
      "https://login.microsoftonline.com/f3211d0e-125b-42c3-86db-322b19a65a22"
  },
  cacheLocation: "localStorage",
  redirectUri: "https://isa-dev.accenture.com/callback"
};
export const authContext = new AuthenticationContext(adalConfig);

//this is for Test
// export const adalConfig = {
//   tenant: "f3211d0e-125b-42c3-86db-322b19a65a22",
//   clientId: "fe281252-5ccc-459f-b785-aba34023143a",
//   endpoints: {
//     api:
//       "https://login.microsoftonline.com/f3211d0e-125b-42c3-86db-322b19a65a22"
//   },
//   cacheLocation: "localStorage",
//   redirectUri: "https://isa-test.accenture.com/callback"
// };
// export const authContext = new AuthenticationContext(adalConfig);


