
import { useState, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
import { v4 } from "uuid";
import { useData } from "../hooks/useData";
import { serverTimestamp } from "firebase/firestore";


function NewPostPage() {
 const formRef = useRef<HTMLFormElement>(null);
 const [imageUpload, setImageUpload] = useState<File | null>(null);
 const { addNews } = useData();

 const uploadFile = async (imageId: string) => {
   if (imageUpload == null) return;

   const imageRef = ref(storage, imageId);

   const snapshot = await uploadBytes(imageRef, imageUpload);
   const url = await getDownloadURL(snapshot.ref);

   return url;
 };

 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   const selectedFiles = event.target.files;

   if (selectedFiles && selectedFiles.length > 0) {
     const selectedFile: File = selectedFiles[0];
     setImageUpload(selectedFile);
   }
 };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   if (!formRef.current) return;

   const imageId = `images/${imageUpload?.name + v4()}`;
   const imageUrl = await uploadFile(imageId);

   const formData = new FormData(formRef.current);
   const title = formData.get("title") as string;
   const news = formData.get("news") as string;

   await addNews({
     commentCount: 0,
     likesCount: 0,
     news,
     publishedTime: serverTimestamp(),
     title,
     imageUrl,
   });

   formRef.current.reset();
 };

 return (
   <div className="w-screen h-screen bg-[#040D12] text-[#ced3d1] flex flex-col items-center justify-center">
     <form
       onSubmit={handleSubmit}
       ref={formRef}
       className="flex flex-col gap-10 items-center justify-center"
     >
       <input
         type="text"
         placeholder="news title"
         name="title"
         required
         className="bg-[#183D3D] font-input placeholder:text-[#93b1a6c4] text-xl px-[50px] py-[10px] w-[500px] rounded-2xl"
       />
       <textarea
         name="news"
         id="news"
         cols={50}
         rows={5}
         required
         placeholder="news content"
         className="bg-[#183D3D] font-input placeholder:text-[#93b1a6c4] text-xl px-[50px] py-[10px] w-[500px] rounded-2xl"
       ></textarea>

       <input
         type="file"
         accept="image/*"
         onChange={handleFileChange}
         required
       />

       <button
         type="submit"
         className="bg-blue-900 px-5 py-2 rounded-2xl text-white font-semibold text-lg"
       >
         Upload
       </button>
     </form>
   </div>
 );
}
export default NewPostPage