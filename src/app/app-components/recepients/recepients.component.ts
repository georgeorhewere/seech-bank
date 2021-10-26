import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recepients',
  templateUrl: './recepients.component.html',
  styleUrls: ['./recepients.component.scss']
})
export class RecepientsComponent implements OnInit {

  faUser= faUserCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
