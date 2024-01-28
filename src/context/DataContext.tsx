import { FieldValue, addDoc, collection } from "firebase/firestore";
import { createContext } from "react";
import { db } from "../firebase/firebaseConfig";

type newsObjType = {
  commentCount: number;
  likesCount: number;
  news: string;
  publishedTime: FieldValue;
  title: string;
  imageUrl: string | undefined;
};

const INITIAL_CONTEXT = {
  addNews: ()=> {},
};

type dataContextType = {
  addNews: (newsObj: newsObjType) => void;
};


export const DataContext = createContext<dataContextType>(INITIAL_CONTEXT);

function DataContextProvider({ children }: { children: React.ReactNode }) {

  const addNews = async (newsObj: newsObjType) => {
    const collectionRef = collection(db, "news");

    try {
      await addDoc(collectionRef, newsObj);
      console.log("New News added..");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <DataContext.Provider value={{ addNews }}>{children}</DataContext.Provider>
  );
}
export default DataContextProvider;
