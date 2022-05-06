import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

getCategoryList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/category/');
}

addCategory(val:any){
  return this.http.post(this.APIUrl + '/category/',val);
}

updateCategory(val:any){
  return this.http.put(this.APIUrl + '/category/',val);
}

deleteCategory(val:any){
  console.log('delete category sharedservice ' + val);
  return this.http.delete(this.APIUrl + '/category/',val);
}

getToolList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/tool/');
}

addTool(val:any){
  return this.http.post(this.APIUrl + '/tool/',val);
}

updateTool(val:any){
  return this.http.put(this.APIUrl + '/tool/',val);
}

deleteTool(val:any){
  return this.http.delete(this.APIUrl + '/tool/',val);
}

getCommandList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/command/');
}

addCommand(val:any){
  return this.http.post(this.APIUrl + '/command/',val);
}

updateCommand(val:any){
  return this.http.put(this.APIUrl + '/command/',val);
}

deleteCommand(val:any){
  return this.http.delete(this.APIUrl + '/command/',val);
}

getAllCategoryNames():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/category/');
}

}
