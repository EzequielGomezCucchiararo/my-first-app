import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public allowNewServer: boolean = false;
  public username: string = '';

  constructor() { }

  ngOnInit() {
  }

  resetInput(): void {
    this.username = '';
  }

}
