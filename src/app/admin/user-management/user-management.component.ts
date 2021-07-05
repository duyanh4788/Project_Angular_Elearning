import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SearchuserService } from '@service/userManagerService/searchUser/searchuser.service';
import { SharemodalusermanagerService } from '@shared/shareData/shareModalUserManager/sharemodalusermanager.service';
import { Subscription } from 'rxjs';
import { ListUserTableManager } from 'src/app/core/models/client';
import { DeleteuserService } from '@service/userManagerService/deleteUser/deleteuser.service';
import { ListuserService } from '@service/userManagerService/listUser/listuser.service';
import { ModalusermanagerComponent } from '../modalusermanager/modalusermanager.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {

  @ViewChild('formSearchApi') formSearchApi?: NgForm // get value form search api
  @ViewChild(MatSort, { static: true }) sort!: MatSort; // material angular sort
  @ViewChild(MatPaginator) paginator!: MatPaginator; // material angular paginator

  public ELEMENT_DATA!: ListUserTableManager[]; //ListUser đôí tương taọ từ /models/client.ts row 14
  public arrListUser = new MatTableDataSource(this.ELEMENT_DATA); // dùng cho sort + paginator

  public maNhom: string = "" // get value maNhom
  public notify: string = "" // thông báo delete

  displayedColumns: Array<any> = ['taiKhoan', 'hoTen', 'maLoaiNguoiDung', 'email', 'soDt', 'setting', 'ghiDanh',]; // arr sort
  arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',]; // arr maNhom

  constructor(
    private listuserService: ListuserService,
    private deleteuserService: DeleteuserService,
    private modalUser: MatDialog,
    private shareModalUserManagerService: SharemodalusermanagerService,
    private searchUserService: SearchuserService,
  ) { }

  private subscription = new Subscription(); // huỷ call api nếu ko thành công

  ngOnInit(): void {
    this.selectGroupDefault();// call api load page
  }

  ngAfterViewInit() {
    // material angular
    this.arrListUser.paginator = this.paginator;
    this.arrListUser.sort = this.sort;
  }
  findFilter(find: any) {
    // material angular => sự kiện keyup từ user-management.component.html row 5
    this.arrListUser.filter = find.target.value.trim().toLowerCase();
  }

  // GetListUser => phương thức get taọ từ services/getlistuser.service.ts row 15
  // maNhom => lấy từ (click)="selectGroup(ma)" => user-management.component.html
  selectGroup(maNhom: string) {
    this.maNhom = maNhom
    this.subscription.add(this.listuserService.getListUser(maNhom).subscribe((data) => {
      console.log(data);

      this.arrListUser.data = data;
    }))
  }
  // lấy danh sách mã nhóm GP01 mặc định khi hiển thị lần đầu
  selectGroupDefault() {
    this.maNhom = 'GP01'
    this.listuserService.getListUser(this.maNhom).subscribe((data) => {
      console.log(data);

      this.arrListUser.data = data;
    });
  }

  // deleteUser => phương thức delete taọ từ core/services/deleteUser/deleteuser.service.ts row 15 ,
  // taiKhoan => lấy từ (click)="deleteUsers(user.taiKhoan)" => user-management.component.html
  deleteUsers(taiKhoans: string) {
    this.deleteuserService.deleteUser(taiKhoans).subscribe((success) => {
      if (success) {
        let arrUpdate = [...this.arrListUser.data]
        let index = arrUpdate.findIndex(item => item.taiKhoan === taiKhoans)
        arrUpdate.splice(index, 1)
        this.notify = ""// thông báo về rỗng
        this.arrListUser.data = arrUpdate // render lại html
      }
    }, err => {
      if (err) {
        this.notify = err.error // xuất thông báo nếu user đã ghi danh
      }
    });
  }

  // modal open modalusermanager/modalusermanager.component
  // post object users => shared/shareData/shareModalUserManager/sharemodalusermanager.service
  // data (this.arrListUser.data) trả về ko có maNhom
  // post maNhom (render html) => shared/shareData/shareModalUserManager/sharemodalusermanager.service
  modalUserManager(users: object) {
    this.shareModalUserManagerService.getModalUser(users)
    this.shareModalUserManagerService.getModalMaNhom(this.maNhom)
    this.modalUser.open(ModalusermanagerComponent) // open modal
  }

  // (ngSubmit)="handleSubmit() html
  // getSearchUser => callapi get data service/searchUser/searchuser.service
  handleSubmit() {
    // code logic , data trả về có 6 value trong object , tách 2 giá trị gán vào mảng hiện tại => render html
    this.searchUserService.getSearchUser(this.formSearchApi?.value.searchApi, this.maNhom).subscribe(data => {
      console.log(data);
      let dataFilter = data.map((item) => {
        const { tenLoaiNguoiDung, matKhau, ..._item } = item
        return _item
      })
      this.arrListUser.data = dataFilter
      if (this.formSearchApi?.value.searchApi === "") {
        this.ngOnInit()
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // dùng để huỷ call api khi ko thành công hoặc truyển trang
  }

}
