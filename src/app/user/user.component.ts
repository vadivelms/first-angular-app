import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';

interface User {
  avatar: string;
  name: string;
  id: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required: true}) user!: User;

  @Output() select=new EventEmitter<string>();
  // select = output<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectedUser() {
    this.select.emit(this.user.id);
  }


  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
}
