import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactInformationComponent } from './contact-information/contact-information.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})

export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void { }
  
  // Fires on button click
  onBtnClick(){
    // Navigate to /products page
    this.router.navigate(['/contact-information.component.html']);
}
}