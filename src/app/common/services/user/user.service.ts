import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { User } from '../../models/user';
import { Constants } from '../../constants/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = Constants.USER_PATH;

  userReference: AngularFireList<User> = null;

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
    this.userReference = db.list(this.dbPath);
  }

  public getSomeData() {
    return this.http.get<myData>('/api/database.php')
  }

  public isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin.php')
  }

  public logout() {
    return this.http.get<logoutStatus>('/api/logout.php')
  }

  createUserDetails(course: User): void {
    this.userReference.push(course); 
  }

  updateUserDetails(key: string, value: any): void {
    this.userReference.update(key, value).catch(error => this.handleError(error));
  }

  deleteUserDetails(key: string): void {
    this.userReference.remove(key).catch(error => this.handleError(error));
  }

  getUserDetailsList(): AngularFireList<User> {
    return this.userReference;
  }

  deleteAll(): void {
    this.userReference.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
