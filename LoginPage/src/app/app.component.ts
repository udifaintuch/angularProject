import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
    this.check();
  }

  public check(){
    $( document ).ready(function(){
    if(window.location.search=="?x=fail1"){
      document.getElementById("fail1").style.display="block";
    }
    if(window.location.search=="?x=fail2"){
      document.getElementById("fail2").style.display="block";
    }
    if(window.location.search=="?x=fail3"){
      document.getElementById("fail3").style.display="block";
    }
  })

}
  
  

  

  



}
