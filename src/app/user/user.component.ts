import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output()select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }


  // selectedUser = DUMMY_USERS[randomIndex]
  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  // onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
    // this.selectedUser = DUMMY_USERS[randomIndex]
  // }

}
