import EmployeeItem from "./EmployeeItem";

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

                    <th>Gender</th>
                    <th>Department</th>
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
export default EmployeeList;