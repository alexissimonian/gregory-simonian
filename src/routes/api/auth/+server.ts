import { json } from "@sveltejs/kit";
import { adminAuth } from "$lib/firebase/firebase.admin";

export async function POST({request}){
    const idToken = await request.json();
    adminAuth.verifyIdToken(idToken).then((decodedToken) => {
        console.log("here");
        console.log(decodedToken);
    })
    return json({status: 200});
}
