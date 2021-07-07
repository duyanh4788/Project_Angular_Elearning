// => client/listcoursebycategory/listcoursebycategory.component row 11
// => service/CourseListCategory/courselistcategory.service"

// => client/searchcourse/searchcourse.component row 12
// => service/searchlistcourse/searchlistcourse.service

export interface ListCourseByCategory {
  maKhoaHoc:      string;
  biDanh:         string;
  tenKhoaHoc:     string;
  moTa:           string;
  luotXem:        number;
  hinhAnh:        string;
  maNhom:         string;
  ngayTao:        string;
  soLuongHocVien: number;
  nguoiTao:       NguoiTao;
  danhMucKhoaHoc: Category;
}
// +
export interface Category {
  maDanhMucKhoahoc:  string;
  tenDanhMucKhoaHoc: string;
}
// +
export interface NguoiTao {
  taiKhoan:         string;
  hoTen:            string;
  maLoaiNguoiDung:  string;
  tenLoaiNguoiDung: string;
}
