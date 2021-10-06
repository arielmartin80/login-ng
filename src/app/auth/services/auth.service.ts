
import { first } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password)
      return result
    } catch (error) {
        return console.log('ERROR: '+error)
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password)
      return result
    } catch (error) {
        return console.log('ERROR: '+error)
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut()
    } catch (error) {
        return console.log('ERROR: '+error)
    }
  }

}
