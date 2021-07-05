// ourseManager!: CourseManager => admin/course-management/course-management.component
// Observable => service/listCourseManager/listCourseManager.service
export interface CourseManager {
  currentPage: number;
  count: number;
  totalPages: number;
  totalCount: number;
  items: Item[];
}
// +
export interface Item {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: NguoiTAO;
  danhMucKhoaHoc: DanhMucKhoaHoc;
}
// +
export interface DanhMucKhoaHoc {
  maDanhMucKhoahoc: string;
  tenDanhMucKhoaHoc: string;
}
// +
export interface NguoiTAO {
  taiKhoan: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
}

// listUserRegistration: ListUserRegistration[] = [] => admin/modalcoursemanager/listuserunregisterd/listuserunregisterd.component row 17
// arrListUserRegistration: ArrListUserRegistration[] = [] => shared/shareData/shareInfoRegistered/shareinforegistered.service row 10
// Observable => service/modalCourseService/listUserRegistration/listuserregistration.service row 15
export interface ArrListUserRegistration {
  taiKhoan: string;
  hoTen: string;
  biDanh: string;
}

// infoCourse?: InfoCourse => admin/modalcoursemanager/course-management/course-management.component row 17
export interface InfoCourse {
  maKhoaHoc?: string;
  biDanh?: string;
  tenKhoaHoc?: string;
  moTa?: string;
  luotXem?: number;
  hinhAnh?: string;
  maNhom?: string;
  ngayTao?: string;
  soLuongHocVien?: number;
  nguoiTao?: NguoiTAO;
  danhMucKhoaHoc?: DanhMucKhoaHoc;
}
// +
export interface DanhMucKhoaHoc {
  maDanhMucKhoahoc: string;
  tenDanhMucKhoaHoc: string;
}
// +
export interface NguoiTAO {
  taiKhoan: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
}

// registerCourse?: RegisterCourse => aListuserunregisterdComponent.component row 18
// registerCourse?: RegisterCourse => ListuserapprovalComponent.component row 16
// registerCourse?: RegisterCourse => listuserwaitapproval.component.component row 16
// Observable => service/modalCourseService/listUserRegistration/listuserregistration.service row 22
export interface RegisterCourse {
  maKhoaHoc: string;
  taiKhoan: string;
}

// listUerWaitApproval?: ListUerWaitApproval  => listuserwaitapproval.component.component row 16
export interface ListUerWaitApproval {
  maKhoaHoc?: string;
}

// ListUerApproval?: ListUerApproval => listuserapproval.component row 18
// listUerApproval?: listUerApproval => ListuserunregisterdComponent.component row 20
// listUerApproval?: listUerApproval => ListuserwaitapprovalComponent.component row 20
export interface ListUerApproval {
  maKhoaHoc?: string;
}



