import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Thomas Hardy",
      email: "thomashardy@gmail.com",
      address: "80 chicago rd, Portland,USA",
      phone: "(171 555 2222)"
    }
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  function addEmployee(newEmployee){
    setEmployees(prevEmployees => [
      ...prevEmployees,
      {
        ...newEmployee,
        id: Math.max(...prevEmployees.map(emp=> emp.id),0)+1
      }
    ])

  }

  return (
    <div className="container">
      <div className="table-wrapper">
        <Header onOpenAddModal={() => setIsAddModalOpen(true)} />
        <EmployeeList calisanlist={employees} />
        <AddEmployeeModal isOpen={isAddModalOpen} onCloseAddModal={() => setIsAddModalOpen(false)} onAddEmployee= {addEmployee} />
      </div>
    </div>
  )

}


function Header({ onOpenAddModal }) {
  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>Manage <b>Employees</b></h2>
        </div>
        <div className="col-sm-6">
          <button onClick={onOpenAddModal} className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></button>
          <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>
        </div>
      </div>
    </div>
  )

}
function AddEmployeeModal({ isOpen, onCloseAddModal,onAddEmployee }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  })

  function handleChange(e) {
    const {name,value} = e.target;
    setFormData(prevState => ({
      ...prevState, 
      [name]:value
    }))
    
    
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log("form data",formData);
    onAddEmployee(formData);
    onCloseAddModal();
    setFormData({
      name: '',
      phone: '',
      email:'',
      address:'',
    })
  }
  if (!isOpen) return null;

  return (
    <>
      <div id="addEmployeeModal" className="modal fade show">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
                <button onClick={onCloseAddModal} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text"
                    className="form-control"
                    required
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email"
                    className="form-control"
                    required
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    className="form-control"
                    required
                    name='address'
                    value={formData.address}
                    onChange={handleChange}>

                  </textarea>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange} />
                </div>
              </div>
              <div className="modal-footer">
						<button type="button" className="btn btn-default"  >Cancel</button>
						<button type="submit" className="btn btn-success" >Add</button>
					</div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backgrop fade show"></div>
    </>
  )
}

function EmployeeList({ calisanlist }) {

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input type="checkbox" id="selectAll"></input>
              <label htmlFor="selectAll"></label>
            </span>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          calisanlist.map(kisi =>
            (<EmployeeItem key={kisi.id} secilenkisi={kisi} />))
        }

      </tbody>
    </table>
  )

}

function EmployeeItem({ secilenkisi }) {
  return (
    <tr>
      <td>
        <span className="custom-checkbox">
          <input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
          <label htmlFor="checkbox1"></label>
        </span>
      </td>
      <td>{secilenkisi.name}</td>
      <td>{secilenkisi.email}</td>
      <td>{secilenkisi.address}</td>
      <td>{secilenkisi.phone}</td>
      <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
      </td>
    </tr>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

/*
   const [count, setCount] = useState(0);
 
   function handleIncrement(){
     console.log("handle increment FIRED");
     setCount(count + 1);
     setCount(count => count + 1);
     console.log(count);
   }
   function handleDecrement() {
     console.log("handle decrement FIRED")
     setCount(count -1);
   }
 
   return (
        <div>
           <h1>Count : {count}</h1>
           <div> 
             <button onClick = {handleIncrement} >Increment </button>
             <button onClick = {handleDecrement}>Decrement</button>
           </div>
        </div>
   )
 }
   */

