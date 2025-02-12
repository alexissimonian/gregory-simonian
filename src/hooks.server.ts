import type { Handle } from "@sveltejs/kit";
import { ENVIRONMENT } from "$env/static/private";

export const handle: Handle = async ({ event, resolve }) => {
  if (ENVIRONMENT != "development") {
    if (event.url.pathname.includes("login")) {
      return new Response(null, { status: 302, headers: { location: "/" } });
    }
  }

  if (ENVIRONMENT == "development") {
    if (event.url.pathname != "/login") {
      return new Response(null, {
        status: 302,
        headers: { location: "/login" },
      });
    }
  }

  return await resolve(event);
};
