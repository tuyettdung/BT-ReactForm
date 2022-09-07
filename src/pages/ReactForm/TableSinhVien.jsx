import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  
  renderSinhVien = () =>{
    const {mangSinhVien} = this.props;
    return mangSinhVien.map((sinhVien,index)=>{
      return <tr key={index}>
        <td>{sinhVien.maSV}</td>
        <td>{sinhVien.soDienThoai}</td>
        <td>{sinhVien.hoTen}</td>
        <td>{sinhVien.email}</td>
        <td>
          <button className="btn btn-danger mx-2" onClick={()=>{
            const action = {
              type: 'XOA_SV',
              payload: index
            }
            this.props.dispatch(action); 
          }}>XÓA</button>
          <button className="btn btn-primary" onClick={()=>{
            const action = {
              type: 'SUA_SV',
              payload: index
            }
            this.props.dispatch(action); 
          }}>SỬA</button>
        </td>
      </tr>
    })
  }
  render() {
    return (
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <td>Mã sinh viên</td>
            <td>Họ tên</td>
            <td>Số điện thoại</td>
            <td>Email</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {this.renderSinhVien()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  mangSinhVien: state.sinhVienReducer.mangSinhVien
});

export default connect(mapStateToProps)(TableSinhVien);
