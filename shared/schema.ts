export {};
export const insertMessageSchema = { parse: (v: any) => v };
export const api = {
  messages: {
    create: {
      input: { parse: (v: any) => v },
      path: "/api/messages",
      method: "POST",
      responses: {
        201: { parse: (v: any) => v },
        400: { parse: (v: any) => v }
      }
    }
  }
};
