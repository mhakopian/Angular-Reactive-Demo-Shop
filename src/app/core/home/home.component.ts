import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../messages/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;
  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.messageService.add('MessageService: App ready!');
  }
}