// giá  trị ngươì dùng nhâp vaò từ client/signup/signup.component.ts = arrListUser
// => Observable && post core/services/signupCourse/signupcourse.service.ts
export interface UserSignUp {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  email: string;
  soDt: string;
}

// ELEMENT_DATA!: ListUserTableManager[] => admin/user-management/user-management.component.ts
// => Observable && post core/services/listUser/listUser.service.ts
export interface ListUserTableManager {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDt: string;
  maLoaiNguoiDung: string;
}

// src/app/admin/modalusermanager/updateuser/updateuser.component
// Observable => service/editUserManager/editusermanager.service";
export interface UpdatetUserManager {
  email?: string;
  hoTen?: string;
  matKhau?: string;
  taiKhoan?: string;
  maLoaiNguoiDung?: string;
  maNhom?: string;
  soDt?: string;
}

// src/app/admin/modalusermanager/userregister/userregister.component
export interface UserRegister {
  email?: string;
  hoTen?: string;
  taiKhoan?: string;
  maLoaiNguoiDung?: string;
  maNhom?: string;
  soDt?: string;
}

// deleteUser?: DeleteUsers => admin/user-management/user-management.component.ts row 19
// => Observable && post core/services/deleteuser/deleteuser.service.ts
export interface DeleteUsers {
  TaiKhoan: string
}

// formAddUsers !: AddUsers => admin/adduser/adduser.component.ts row 13
// => Observable && post core/services/adduser/adduser.service.ts
export interface AddUsers {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  email: string;
}

// signIns?: SigIn => client/sigin/sigin.component.ts row 14
// Observable && post core/services/siginCourse/sigincourse.service.ts
export interface UserSigIn {
  hoTen: string;
  taiKhoan: string;
  matKhau: string;
}

// Observable => service/searchUser/searchuser.service
export interface SearchUser {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDt: string;
  matKhau: null;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
}


