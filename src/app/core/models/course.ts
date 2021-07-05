// sử dụng tại formAddUsers !: AddUsers => client/hone/listcourse/listcourse.component.ts row 15
// sử dụng tại Observable && get core/services/listCourse/listcourse.service.ts
export interface ListCourse {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: User;
  danhMucKhoaHoc: Category;
}
//  +
export interface Category {
  maDanhMucKhoahoc: string;
  tenDanhMucKhoaHoc: string;
}
//  +
export interface User {
  taiKhoan: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
}
// sử dụng tại infoRegisterer?: RegistedCourse => client/detail/detail.component.ts row 14
// sử dụng tại Observable && post core/services/registerercourse/registerercourse.service.ts
export interface RegistedCourse {
  maKhoaHoc: string;
  taiKhoan: string;
}
// sử dụng tại infoRegisterer?: RegistedCourse => client/detail/detail.component.ts row 15
// sử dụng tại Observable && post core/services/registerercourse/registerercourse.service.ts
export interface DetailCourse {
  maKhoaHoc:      string;
  biDanh:         string;
  tenKhoaHoc:     string;
  moTa:           string;
  luotXem:        number;
  hinhAnh:        string;
  maNhom:         string;
  ngayTao:        string;
  soLuongHocVien: number;
  nguoiTao:       nguoiTao;
  danhMucKhoaHoc: cateGory;
}
//  +
export interface cateGory {
  maDanhMucKhoahoc:  string;
  tenDanhMucKhoaHoc: string;
}
//  +
export interface nguoiTao {
  taiKhoan:         string;
  hoTen:            string;
  maLoaiNguoiDung:  string;
  tenLoaiNguoiDung: string;
}




