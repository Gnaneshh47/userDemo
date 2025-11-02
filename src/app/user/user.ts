import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDialogComponent } from '../user-dialog-component/user-dialog-component';

export interface UserModel {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number | null;
  email?: string;
  phoneNumber?: string;
  status?: 'Active' | 'Inactive';
  department?: string;
  designation?: string;
}

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule, UserDialogComponent],
  templateUrl: './user.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.Default
})
export class User {
  
  users: UserModel[] = [];

  selectedUser: UserModel | null = null;
  showDialog = false;

  editUser(user: UserModel) {
    this.selectedUser = user? {...user}: null;
    this.showDialog = true;
  }

  addUser() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  saveUser(user: UserModel) {
    if (user.id) {
      const index = this.users.findIndex(u => u.id === user.id);
      if (index !== -1) this.users[index] = user;
    } else {
      user.id = this.users.length + 1;
      this.users.push(user);
    }
    this.closeDialog();
  }

  deleteUser(user: UserModel) {
    this.users = this.users.filter(u => u.id !== user.id);
  }

  
}
