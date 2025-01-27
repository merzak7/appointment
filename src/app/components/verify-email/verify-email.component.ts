import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})

export class VerifyEmailComponent implements OnInit {

  email: string;
  mailSent: boolean;
  isProgressVisible: boolean;
  firebaseErrorMessage: string;

  constructor(private authService: AuthService, public afAuth: AngularFireAuth) {
    
    this.email = '';
    this.mailSent = false;
    this.isProgressVisible = false;
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {               // if the user is logged in, update the form value with their email address
      if (user) {
        // this.email = user.email;
      }
    });
  }

  // resendVerificationEmail() {
  //   this.isProgressVisible = true;                          // show the progress indicator as we start the Firebase password reset process

  //   this.authService.resendVerificationEmail().then((result) => {
  //     this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
  //     if (result == null) {                               // null is success, false means there was an error
  //       console.log('verification email resent...');
  //       this.mailSent = true;
  //     }
  //     else if (result.isValid == false) {
  //       console.log('verification error', result);
  //       this.firebaseErrorMessage = result.message;
  //     }
  //   });
  // }

}
