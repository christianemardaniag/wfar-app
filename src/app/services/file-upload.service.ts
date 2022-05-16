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

  getFile(path: string, folder: string) {
    return getDownloadURL(ref(this.storage, folder+'/'+path)).then((url) => {
      console.log(url);
      
      return url;
    })
  }


} // end of class