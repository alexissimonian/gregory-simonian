import type { Handle } from "@sveltejs/kit";
import { ENVIRONMENT } from "$env/static/private";
import { auth } from "$lib/firebase/firebase.client";
import type { User } from "firebase/auth";

export const handle: Handle = async ({ event, resolve }) => {
  if(ENVIRONMENT != 'development'){
	if(event.url.pathname.includes('login')){
		return new Response(null, {status: 302, headers: {location: '/'}})
	}
  }

  if (ENVIRONMENT == 'development'){
	let user = getCurrentUser();
	if (!user && event.url.pathname != '/login'){
		return new Response(null, {status: 302, headers: {location: '/login'}})
	}
  }

  return await resolve(event);
};

function getCurrentUser() : User | null {
	return auth?.currentUser;
}