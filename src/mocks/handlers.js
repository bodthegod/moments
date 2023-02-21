import { rest } from "msw";

const baseURL = "https://drf-api-deploy.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "test123",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image:
          "https://res.cloudinary.com/drhfh23tl/image/upload/v1/media/../default_profile_c5yzzi",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout`),
  (req, res, ctx) => {
    return res(ctx.status(200));
  },
];
