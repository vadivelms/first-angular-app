import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  currentUserId?: string;
  onSelectedUser(id: string) {
    this.currentUserId = id;
    console.log('Selected user id: ' + id);
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.currentUserId)!;
  }

}
