import { CLOUDFLARE_SECRET } from "$env/static/private";
import { fail } from "@sveltejs/kit";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
  },
  token: async ({ request }) => {
    const data = await request.formData();
    const token = data.get('token');
    const isTokenValid = await isCloudflareTokenValid(token);
    if (isTokenValid) {
      return { message: "Token is valid" };
    }
    
    return fail(400, {message: "Invalid token"});
  },
};

async function isCloudflareTokenValid(token: string): Promise<boolean> {
  const formData = new FormData();
  formData.append('secret', CLOUDFLARE_SECRET);
  formData.append('response', token);
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData
  })

  const result = await response.json();
  return result.success;
}