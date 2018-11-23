import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { User } from '../../models/user';
import { Constants } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = Constants.USER_PATH;

  userReference: AngularFireList<User> = null;

  constructor(private db: AngularFireDatabase) {
    this.userReference = db.list(this.dbPath);
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
