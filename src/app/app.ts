import {Component, inject} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  httpClient = inject(HttpClient)
  protected readonly title = rxResource({
    stream: ()=> this.httpClient.get<User>('/api/user')

  });
}


interface User {
  name:string;
}
