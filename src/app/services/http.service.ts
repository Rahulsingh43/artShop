import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Painting } from '../class/painting';
import { Registration } from '../class/registration';
import { Signin } from '../class/signin';
import { catchError,throwError,Observable, Subject, BehaviorSubject, map} from 'rxjs';
import { UserService } from './user.service';
import { Trending } from '../class/trending';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api_url = "http://localhost:3000/product";
  api_url_tr = "http://localhost:3000/trending";
  signUp_url = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";
  signIn_url = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";
  profile_api = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";
  user_api = " http://localhost:3000/user";
  trend_url = "http://localhost:3000/trending";


  constructor(private http:HttpClient) { }


  signUpData(data:any):Observable<Registration[]>{
return this.http.post<Registration[]>(`${this.signUp_url}`,data);
  }

  signInData(data:any):Observable<Signin[]>{
return this.http.post<Signin[]>(`${this.signIn_url}`,data)
.pipe(catchError(this.errorHandler))
  }
  
  getData():Observable<Painting[]>{
    return this.http.get<Painting[]>(`${this.api_url}`)
  }

  sendData(data:any):Observable<Painting[]>{
    return this.http.post<Painting[]>(`${this.api_url}`,data);
  }

  deleteData(id:any){
    return this.http.delete<Painting[]>(`${this.api_url}/${id}`)
  }
  
  updateData(id:any, data:any):Observable<Painting[]>
  {
    return this.http.put<Painting[]>(`${this.api_url}/${id}`,data)
  }

  getDetail(id:any):Observable<Painting[]>{
     return this.http.get<Painting[]>(`${this.api_url}/${id}`)
  }

  getTrendingPaint():Observable<Painting[]>{
    return this.http.get<Painting[]>(`${this.api_url_tr}`)
  }

  getUserData():Observable<Registration[]>{
    return this.http.get<Registration[]>(this.profile_api);
  }
  errorHandler(error:HttpErrorResponse)
  {
    return throwError(()=>error || "server eror")
  }

  getTrending():Observable<Trending[]>{
    return this.http.get<Trending[]>(`${this.trend_url}`)
  }


  

  
}
