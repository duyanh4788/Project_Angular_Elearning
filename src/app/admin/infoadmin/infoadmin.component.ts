import { Component, OnInit } from '@angular/core';
import { InforuserService } from '@service/inforuser/inforuser.service';
import { SigincourseService } from '@service/signinCourse/sigincourse.service';
import { InforUser } from 'src/app/core/models/inforUser';

@Component({
  selector: 'app-infoadmin',
  templateUrl: './infoadmin.component.html',
  styleUrls: ['./infoadmin.component.scss']
})

export class InfoadminComponent implements OnInit {

  public infoUsers?: InforUser; //InforUser model taọ từ /models/inforUser.ts row 1
  public chiTietKhoaHoc: Array<any> = []
  constructor(private siginCourseService: SigincourseService, private inforuserService: InforuserService,) { }

  ngOnInit(): void {
    this.getInfoUsers()
  }

  // getInfoUserService => post api core/services/infoUser/inforuser.service.ts row 16
  // post & get data khi edit thông tin render html core/services/infoUser/inforuser.service.ts
  // (userSignIn token) => service/signinCourse/sigincourse.service
  getInfoUsers() {
    let userSignIn = this.siginCourseService.getCurrentUser();
    this.inforuserService
      .getInfoUserService(userSignIn.accessToken)
      .subscribe((data) => {
        const { chiTietKhoaHocGhiDanh, ...infoUser } = data
        this.inforuserService.setInforUser(infoUser)// post data
        this.infoUsers = this.inforuserService.getInforUser(); // get data
        this.chiTietKhoaHoc = chiTietKhoaHocGhiDanh
      });
  }

}
