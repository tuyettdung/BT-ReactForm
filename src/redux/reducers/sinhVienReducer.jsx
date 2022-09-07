const stateDefault = {
  sinhVienInfo: {
    maSV: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
  },
  errorInfo: {
    maSV: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
  },
  mangSinhVien: [
    {
      maSV: 22,
      hoTen: "Linh Nguyễn",
      email: "linhtu@gmail.com",
      soDienThoai: "0999888",
    },
  ],
};

export const sinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE": {
      const { id, value, type, pattern } = action.payload;
      let svUpdate = { ...state.sinhVienInfo };
      svUpdate[id] = value;
      state.sinhVienInfo = svUpdate;
      //Valid
      // //Kiểm tra rỗng:
      let errorMess = "";
      if (value.trim() === "") {
        errorMess = id + " không được bỏ trống !";
      }
      //Kiểm tra email:
      if (type === "email") {
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
          errorMess = id + " không đúng định dạng";
        }
      }
      //Kiểm tra số điện thoại:
      if (id === "soDienThoai") {
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
          errorMess = id + " không đúng định dạng";
        }
      }
      let err = { ...state.errorInfo };
      err[id] = errorMess;
      state.errorInfo = err;
      return { ...state };
    }
    //THÊM SINH VIÊN:
    case "HANDLE_SUBMIT": {
      let sinhVien = action.payload;
      let mangUpdate = [...state.mangSinhVien];
      mangUpdate.push(sinhVien);
      state.mangSinhVien = mangUpdate;
      return { ...state };
    }
    //XÓA SINH VIÊN
    case "XOA_SV": {
      let index = action.payload;
      let mangUpdate = [...state.mangSinhVien];
      mangUpdate.splice(index,1);
      state.mangSinhVien = mangUpdate;
      return { ...state };
    }
    //SỬA TT SINH VIÊN
    case "SUA_SV": {
      let index = action.payload;
      let svUpdate = {...state.sinhVienInfo};
      svUpdate = state.mangSinhVien[index];
      state.sinhVienInfo = svUpdate;
      return { ...state };
    }
    

    default: {
      return { ...state };
    }
  }
};
