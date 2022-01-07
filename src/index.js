import { CourierClient } from "@trycourier/courier";

export default (router, { services, exceptions, env }) => {

  const { ItemsService } = services;

  const courier = CourierClient({
    authorizationToken: env.AUTH_KEY,
  });

  router.post("/", (req, res, next) => {

    if (req.accountability.user == null || req.accountability.role == null){
     return res.send({
        "status": "error",
      });
    }

    const { ServiceUnavailableException } = exceptions;

    (async () => {
      try {
        const { messageId } = await courier.send(req.body);
        res.send(messageId);
      } catch (error) {
        res.send(res.error);
      }
    })();
  });
};
