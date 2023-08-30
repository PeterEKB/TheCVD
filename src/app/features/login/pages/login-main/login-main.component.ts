import { Component } from '@angular/core';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent {

  constructor(){

  }

  ngOnInit() {
    
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: '461323705173-0pjolinvo4qg7pmbl1pipabshf6b1l69.apps.googleusercontent.com',
      callback: this.handleCredentialResponse
    });
    // @ts-ignore
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    // @ts-ignore
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  handleCredentialResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
}
