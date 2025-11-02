import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { UserModel } from '../user/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dialog-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-dialog-component.html',
  styleUrl: './user-dialog-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDialogComponent {
  @Input() user: UserModel | null = null;
  @Output() save = new EventEmitter<UserModel>();
  @Output() close = new EventEmitter<void>();

  tempUser: UserModel = {
    id: 0,
    firstName: '',
    lastName: '',
    age: null,
    email: '',
    phoneNumber: '',
    status: 'Active',
    department: '',
    designation: ''
  };

  departments = ['IT', 'HR', 'Finance', 'Marketing', 'Operations'];
  designations = ['Developer', 'Manager', 'Analyst', 'Intern', 'Lead'];

  ngOnInit() {
    this.tempUser = this.user ? { ...this.user } : { ...this.tempUser };
  }

  onSave(form: any) {
    if (form.valid) 
    {
      this.save.emit(this.tempUser);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected')
  }

  get isPhoneInvalid(): boolean {
  return !!(
    this.tempUser.phoneNumber &&
    !/^[0-9]{10}$/.test(this.tempUser.phoneNumber)
  );
}
}
