import React, { Component } from "react";
import { connect } from "react-redux";

class formSinhVien extends Component {

  handleChange = (event) => {
    let { id, value,type,pattern } = event.target;
    const action = {
      type: 'HANDLE_CHANGE',
      payload:{
        id:id,
        value:value,
        type:type,
        pattern:pattern
      }
    }
    this.props.dispatch(action); 
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type:'HANDLE_SUBMIT',
      payload: this.props.ttsv
    }
    this.props.dispatch(action)
}

  render() {
    const { maSV,soDienThoai,hoTen,email } = this.props.ttsv;
    let err = this.props.error;
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
                value={maSV}
                onInput={this.handleChange}
              />
              <p className="text-danger">{err.maSV}</p>
            </div>
            <div className="form-group mt-4">
              <p>Số điện thoại:</p>
              <input
                 
                className="form-control"
                id="soDienThoai"
                pattern="[0-9]+"
                value={soDienThoai}
                onInput={this.handleChange}
              />
              <p className="text-danger">{err.soDienThoai}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mt-4">
              <p>Họ tên:</p>
              <input
                type="text"
                className="form-control"
                id="hoTen"
                value={hoTen}
                onInput={this.handleChange}
              />
              <p className="text-danger">{err.hoTen}</p>
            </div>
            <div className="form-group mt-4">
              <p>Email:</p>
              <input
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className="form-control"
                id="email"
                value={email}
                onInput={this.handleChange}
              />
              <p className="text-danger">{err.email}</p>
            </div>
          </div>
        </div>
        <div className="card-footer mt-2 ">
          <button type="submit" className="btn btn-primary">
            Thêm sinh viên
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  ttsv: state.sinhVienReducer.sinhVienInfo,
  error: state.sinhVienReducer.errorInfo,

})

export default connect(mapStateToProps)(formSinhVien)