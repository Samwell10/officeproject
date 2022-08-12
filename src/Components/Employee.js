import { EmployeeData } from "./EmployeeData";

const Employee = () => {
    return ( 
        <div className="employee">
            <div className="content-title">
                <p>Employees</p>
            </div>
            {EmployeeData.map((employee, key)=>{
                return(
                     <div 
                          className="employee-preview" 
                          key={key}>
                         <div className="employees">
                            <p className="employee-id ">{employee.id}</p>
                            <p className="employee-name">{employee.name}</p>
                            <p className="employee-job">{employee.job}</p>
                         </div>
                    </div>
                )})}
                
        </div>

     );
}
 
export default Employee;