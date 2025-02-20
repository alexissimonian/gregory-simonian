export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    console.log(data);
  },
};
