import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare const API_URL: string
declare const database: string



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('userDemo');

  ngOnInit(): void {
    console.log('API_URL:' + API_URL)
    console.log('databse:' + database)

  }
}
