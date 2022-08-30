import React, { Component } from "react";
import { connect } from "react-redux";

class formSinhVien extends Component {
  state = {
    maSV:'',
    hoTen:'',
    soDienThoai:'',
    email:''
  }
  handleChange = (event) => {
        let {id,value} = event.target;
        this.setState({
          [id]:value
        },()=>{
          console.log(this.state)
        })
        
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.themSinhVien(this.state)

  }
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
              <input type="text" className="form-control" id="maSV" value={this.state.maSV} onInput={this.handleChange}/>
            </div>
            <div className="form-group mt-4">
              <p>Số điện thoại:</p>
              <input type="text" className="form-control" id="soDienThoai" value={this.state.soDienThoai} onInput={this.handleChange} />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mt-4">
              <p>Họ tên:</p>
              <input type="text" className="form-control" id="hoTen" value={this.state.hoTen} onInput={this.handleChange} />
            </div>
            <div className="form-group mt-4">
              <p>Email:</p>
              <input type="text" className="form-control" id="email" value={this.state.email} onInput={this.handleChange} />
            </div>
          </div>
        </div>
        <div className="card-footer mt-2 ">
            <button type="submit" className="btn btn-success">Thêm sinh viên</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien:(sinhVien) => {
      const action = {
        type: 'THEM_SINH_VIEN',
        sinhVien
      }
      dispatch(action);
    }

  }
}

export default connect(null,mapDispatchToProps)(formSinhVien);
