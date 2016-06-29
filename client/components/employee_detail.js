import React from 'react'

const EmployeeDetail = ({ employee : { name, email, phone, avatar } }) => {
  return (
    <div className="thumbnail">
      <img src={avatar} alt={name} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    </div>
  )
}

export default EmployeeDetail
