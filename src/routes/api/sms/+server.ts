import { adminFirestore } from "$lib/firebase/firebase.admin";
import { GREGORY_PHONENUMBER, ALEXIS_PHONENUMBER } from "$env/static/private";
import { json } from "@sveltejs/kit";

export async function POST({request}) {
    const {message} = await request.json();
    return await adminFirestore.collection("messages").add({
        to: ALEXIS_PHONENUMBER,
        message: message
    }).then(() => {
        console.log("Message envoyé.");
        return json({message: "Message envoyé."}, {status: 200});
    }).catch((error) => {
        console.error(error);
        return json({message: "Votre message n'a pu être envoyé."}, {status: 500});
    })
}