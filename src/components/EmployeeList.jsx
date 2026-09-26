import EmployeeItem from "./EmployeeItem";

function EmployeeList({ List , onEditClick}) {

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

                    <th>Gender</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    List.map(emp =>
                        (<EmployeeItem key={emp.id} 
                        employee={emp} 
                        onEditClick={onEditClick}
                        />))
                }

            </tbody>
        </table>
    )

}
export default EmployeeList;