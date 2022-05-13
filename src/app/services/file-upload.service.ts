import { Injectable } from '@angular/core';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { initializeApp } from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  firebaseConfig = {
    apiKey: 'AIzaSyCLdj2Q-peocQKzL4Fu4YeF9ZKezqwlmAk',
    authDomain: 'wfar-management-system.firebaseapp.com',
    databaseURL: 'https://wfar-management-system-default-rtdb.firebaseio.com',
    storageBucket: 'wfar-management-system.appspot.com'
  };
  firebaseApp = initializeApp(this.firebaseConfig);
  metadata = { contentType: 'image/jpeg' };
  storage = getStorage();
  constructor() {
  }

  getFile(path: string) {
    return getDownloadURL(ref(this.storage, path)).then((url) => {
      return url;
    })
  }

  uploadFile(files: File[]) {
    for (const file of files) {
      const storageRef = ref(this.storage, 'images/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, this.metadata);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              console.log("storage/unauthorized");
              break;
            case 'storage/canceled':
              console.log('storage/canceled');
              break;
            case 'storage/unknown':
              console.log('storage/unknown');
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
          });
        }
      );
    }

  }


} // end of class