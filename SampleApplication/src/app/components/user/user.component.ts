import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData : any ={};
  isEdit  = false;
  userInfoId: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((res)=>{
      console.log(res)
      if(res.id) {
        this.isEdit = true
        this.userInfoId = res.id;
        this.getUserBy();
      }
    })
  }


  getUserBy() {
    this.userService.userById(this.userInfoId).subscribe(
      (res : any) => {
        console.log(res);
        this.userData = {
          name : res.name,
          email : res.email,
          phone : res.phone,
          website : res.website
        }
      }
    )
  }

  onSubmit() {
    if(!this.isEdit) {
      this.createNewUser();
    }else {
      this.updateUser();
    }
  }

  createNewUser () {
    this.userService.createUser(this.userData).subscribe(
      (res) => {
        console.log(res);
        this.navigateToUsersList();
      }
    )
  }

  updateUser() {
    this.userService.updateUser(this.userInfoId, this.userData).subscribe(
      (res) => {
        console.log(res);
        this.navigateToUsersList();
      }
    )
  }

  navigateToUsersList() {
    this.router.navigate(['usersList']);
  }

}
