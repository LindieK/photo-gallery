import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const createUser = async (data) => {
  await addDoc(collection(db, "users"), data);
  console.log("user created");
};
