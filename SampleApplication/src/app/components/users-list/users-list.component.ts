import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: any;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUsersList()
    .subscribe((res)=>{
      console.log(res);
      this.usersList = res; 
    });
  }

  onEdit(userData: any) {
    const navigatePath = 'updateUser/' +  userData.id;
    this.router.navigate([navigatePath])
  };


  onDelete(userData: any) {
    this.userService.deleteUser(userData.id).subscribe(()=>{
      this.getUserList();
    });
  }

  createUser() {
    this.router.navigate(['createUser']);
  }

}
