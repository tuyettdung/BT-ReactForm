import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

class ReactForm extends Component {
  render() {
    return (
      <div className='container'>
        <FormSinhVien />
        <TableSinhVien />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(ReactForm)
