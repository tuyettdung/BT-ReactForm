import React, { Component } from "react";
import { connect } from "react-redux";

class formSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  };
  handleChange = (event) => {
    let { id, value,type,pattern } = event.target;

    //Kiểm tra rỗng:
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

    let values = { ...this.state.values, [id]: value };
    let errors = { ...this.state.errors, [id]: errorMess };
    this.setState(
      {
        values: values,
        errors: errors,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.themSinhVien(this.state.values);
  };

  render() {
    return (
      <form action="" className="card mt-3" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">
          <h3>Thông tin sinh viên</h3>
        </div>
        <div className="card-body row my-0 py-0">
          <div className="col-6">
            <div className="form-group mt-4 ">
              <p>Mã sinh viên:</p>
              <input
                type="text"
                className="form-control"
                id="maSV"
                value={this.state.values.maSV}
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.maSV}</p>
            </div>
            <div className="form-group mt-4">
              <p>Số điện thoại:</p>
              <input
                 pattern="^(0|[1-9][0-9]*)$"
                className="form-control"
                id="soDienThoai"
                value={this.state.values.soDienThoai}
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.soDienThoai}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mt-4">
              <p>Họ tên:</p>
              <input
                type="text"
                className="form-control"
                id="hoTen"
                value={this.state.values.hoTen}
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.hoTen}</p>
            </div>
            <div className="form-group mt-4">
              <p>Email:</p>
              <input
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className="form-control"
                id="email"
                value={this.state.values.email}
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.email}</p>
            </div>
          </div>
        </div>
        <div className="card-footer mt-2 ">
          <button type="submit" className="btn btn-success">
            Thêm sinh viên
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(formSinhVien);
