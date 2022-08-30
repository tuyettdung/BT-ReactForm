const initialState = {
  mangSinhVien: [
    {
      maSV: 22,
      hoTen: "Linh Nguyễn",
      email: "linhtu@gmail.com",
      soDienThoai: "0999888",
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      //Thêm sinh viên vào mảng sinh viên
      const mangSVUpdate = [...state.mangSinhVien,action.sinhVien];
      state.mangSinhVien = mangSVUpdate;
      return{...state}
      console.log(action)
    }

    default: {
      return {...state}
    }
  }
};
