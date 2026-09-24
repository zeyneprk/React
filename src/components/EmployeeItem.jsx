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
    <td>{secilenkisi.gender}</td>
    <td>{secilenkisi.department}</td>
    <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons"
                data-toggle="tooltip" title="Edit">&#xE254;</i></a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons"
                data-toggle="tooltip" title="Delete">&#xE872;</i></a>
    </td>
</tr>
)
}

export default EmployeeItem;