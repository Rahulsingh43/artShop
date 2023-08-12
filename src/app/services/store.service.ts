import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  setData(fname:string,lname:string,email:string,profile_pic:string,token:string){
    window.localStorage.setItem('first_name',fname);
    window.localStorage.setItem('last_name',lname);
      window.localStorage.setItem('email',email);
      window.localStorage.setItem('profile_pic',profile_pic);
      window.sessionStorage.setItem('token',token);
    }

    getToken(){
      return window.sessionStorage.getItem('token');
    }


    getData(){
      const saveData = [];
  
      let data = {
        first_name:window.localStorage.getItem('first_name'),
        last_name:window.localStorage.getItem('last_name'),
        email:window.localStorage.getItem('email'),
        prof_img:window.localStorage.getItem('profile_pic'),
      }
      saveData.push(data);
  
      return saveData;
    }

    
    getDestroy(){
      return window.sessionStorage.clear();
    }
}
