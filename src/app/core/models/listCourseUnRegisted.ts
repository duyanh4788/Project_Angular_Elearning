// => admin/modalusermanager/userregister/userregister.component row 15
// Observable => service/listCourseRegistration/listCourseregistration.service";
export interface ListCouseUnRegisteds {
  maKhoaHoc?: string;
  biDanh?: string;
  tenKhoaHoc?: string;
}

// => admin/modalusermanager/courseregister/courseregister.component row 15
export interface ListCouseRegisteds { // row 16
  maKhoaHoc?: string;
  biDanh?: string;
  tenKhoaHoc?: string;
}

// service/listCourseRegistration/listCourseregistration.service";
// Observable => postListCourseRegister
export interface TaiKhoanRegisted {
  taiKhoan?: string;
}

// service/listCourseRegistration/listCourseregistration.service";
// Observable => postListCourseWaitApproval
// listWaitApproval: ListWaitApproval => admin/modalusermanager/userregister/userregister.component row 15
export interface ListWaitApproval {
  maKhoaHoc:  string;
  tenKhoaHoc: string;
}

// => admin/modalusermanager/userregister/userregister.component row 21
//Observable => service/listCourseRegistration/listCourseregistration.service";
export interface ThongTinGhiDanh {
  maKhoaHoc?: string;
  taiKhoan?: string;
}
