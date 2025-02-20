import type { Handle } from "@sveltejs/kit";
import { STAGE } from "$env/static/private";
import { initializeFirebaseAdmin } from "$lib/firebase/firebase.admin";
import { initializeFirebaseClient } from "$lib/firebase/firebase.client";

export const handle: Handle = async ({ event, resolve }) => {
  initializeFirebaseClient();
  if (STAGE != "development") {
    if (event.url.pathname.includes("login")) {
      return new Response(null, { status: 302, headers: { location: "/" } });
    }
  }

  if (STAGE == "development") {
    if (event.url.pathname != "/login" && !event.url.pathname.startsWith("/api/auth") && !event.url.pathname.startsWith("/errors")) {
      initializeFirebaseAdmin();
      const session = event.cookies.get("session");
      if (!session) {
        return new Response(null, {
          status: 302,
          headers: { location: "/login" },
        });
      } else {
        const response = await event.fetch("/api/auth/verifySessionCookie", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(session),
        });

        if (response.ok){
          return await resolve(event);
        } else {
          return new Response(null, {
            status: 302,
            headers: { location: "/errors/unauthorized" },
          });
        }
      }
    }
  }

  return await resolve(event);
};
