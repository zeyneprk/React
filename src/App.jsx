import { useState } from "react";
import Header from "./components/Header";
import AddEmployeeModal from "./components/AddEmployeeModal";
import EmployeeList from "./components/EmployeeList";
import EditEmployeeModal from "./components/EditEmployeeModal";

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
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEmployee, setselectedEmployee] = useState(null);

    function addEmployee(newEmployee) {
        setEmployees(prevEmployees => [
            ...prevEmployees,
            {
                ...newEmployee,
                id: Math.max(...prevEmployees.map(emp => emp.id), 0) + 1
            }
        ])

    }
    function editClick(employee){
        setIsEditModalOpen(true);
        setselectedEmployee(employee);

    }
    function editEmployee(updatedEmployee){
        setEmployees(prevEmployees=>
            prevEmployees.map(emp =>
                emp.id === updatedEmployee.id ? updatedEmployee : emp
            )
        )
    }

    return (
        <div className="container">
            <div className="table-wrapper">
                <Header onOpenAddModal={() => setIsAddModalOpen(true)} />
                <EmployeeList onEditClick={editClick} List={employees} />
                <AddEmployeeModal isOpen={isAddModalOpen} onCloseAddModal={() => setIsAddModalOpen(false)} onAddEmployee={addEmployee} />
                <EditEmployeeModal 
                     isOpen={isEditModalOpen}
                     employee={selectedEmployee}
                     onCloseEditModal= {() => {
                        setIsEditModalOpen(false);
                        selectedEmployee(null);
                     }  }
                     onEditEmployee={editEmployee}
                     />
            </div>
        </div>
    )

}
export default App;