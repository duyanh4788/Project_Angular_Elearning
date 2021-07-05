import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddUsers } from 'src/app/core/models/client';
import { AdduserService } from '@service/modalUserService/adduser/adduser.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  @ViewChild('formAddUser') formAddUser!: NgForm // lâý giá trị từ form adduser.component.html
  public formAddUsers !: AddUsers // model từ core/models/client.ts row 20
  public arrMaNhom: Array<any> = [
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
  ]

  constructor(private adduserService: AdduserService) { }

  ngOnInit(): void {
  }
  // adduserService => phương thức post taọ từ core/services/adduser/adduser.service.ts row 14 + authToken  core/guard/jwt.interceptor.ts
  HandelSubmit() {
    this.formAddUsers = this.formAddUser.value
    this.adduserService.addUserService(this.formAddUsers).subscribe(data => {
      return data
    })
    this.formAddUser.reset()// hàm reset
  }
}
