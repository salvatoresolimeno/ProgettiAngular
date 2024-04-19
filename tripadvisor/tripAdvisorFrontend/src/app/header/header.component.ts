import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private sanitizer: DomSanitizer) { }
  log = false;
  userLog:any;
  img:any;

  ngOnInit(){
    if(localStorage.getItem("user")){
      this.log = true;
      this.userLog=JSON.parse(localStorage.getItem("user")!);
      this.transformImg(this.userLog.img);
   
    }
  }

  logout(){
    this.log = false;
    localStorage.removeItem("user");
  }

  transformImg(path:string) {
    let base64String = "data:image/*;base64, " + " " + path;
    this.img = this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }

}
