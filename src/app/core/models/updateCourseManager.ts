// updateCourse!: UpdateCourse => shared/shareData/shareUpdateCourse/shareupdatecourse.service
export interface UpdateCourse {
  maKhoaHoc?: string;
  tenKhoaHoc?: string;
  moTa?: string;
  luotXem?: number;
  hinhAnh?: string;
  maNhom?: string;
  ngayTao?: string;
  danhGia?: string;
  nguoiTao?: NguoiTAO;
  danhMucKhoaHoc?: DanhMucKhoaHoc;
}
// +
export interface DanhMucKhoaHoc {
  maDanhMucKhoahoc?: string;
  tenDanhMucKhoaHoc?: string;
}
// +
export interface NguoiTAO {
  taiKhoan?: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
}
