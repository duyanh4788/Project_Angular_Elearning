import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignUp } from 'src/app/core/models/client';
import { SignupcourseService } from 'src/app/core/services/signupCourse/signupcourse.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('formSignUp', { static: false }) formSignUp!: NgForm // lâý values từ form signup.component.html
  public arrListUser: UserSignUp[] = []  //UserSignUp model taọ từ /models/client.ts row 1
  public arrMaNhom: Array<any> = [
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
  ]

  constructor(private signupcourseService: SignupcourseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  // signUpUser => phương thức get taọ từ core/services/signupCourse/signupcourse.service.ts row 16
  handelSignUp() {
    this.signupcourseService.signUpUser(this.formSignUp.value).subscribe(data => {
      this.arrListUser = data
      this.formSignUp.reset() // hàm reset laị form
      this.router.navigate(['/signin'])
    }, err => {
      alert(err.error)
    })
  }
}






