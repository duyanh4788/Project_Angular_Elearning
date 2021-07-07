// => finfoUsers?: InforUser => components/inforuser/inforuser.component.ts row 13
// => Observable && get core/services/inforuser/inforuser.service.ts
// => infoUsers?: InforUser => admin/infoadmin/infoadmin.component";
export interface InforUser {
  chiTietKhoaHocGhiDanh: ChiTietKhoaHocGhiDanh[];
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  email: string;
}
// +
export interface ChiTietKhoaHocGhiDanh {
  maKhoaHoc: string;
  tenKhoaHoc: string;
}

// infoUnSubrice?: UnSubsCribeCouse => components/inforuser/inforuser.component.ts row 14
// => Observable service/unsubscribeCourse/unsubscribecourse.service
export interface UnSubsCribeCouse {
  maKhoaHoc: string;
  taiKhoan: string;
}

// components/modalinfouser/modalinfouser.component
export interface EditUser {
  chiTietKhoaHocGhiDanh: ChiTietKhoaHocGhiDanh[];
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  email: string;
}
// +
export interface ChiTietKhoaHocGhiDanh {
  maKhoaHoc: string;
  tenKhoaHoc: string;
}
//  +
// service/editInfoUser/editinfouser.service"
export interface EditInfoUser {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  email: string;
}











