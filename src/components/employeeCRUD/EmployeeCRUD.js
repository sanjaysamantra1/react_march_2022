import React, { useState } from "react";

export default function EmployeeCRUD() {
  const [employees,setEmployee] = useState([
    { id: 101, name: "sanjay", sal: 5000 },
    { id: 102, name: "yash", sal: 7000 },
    { id: 103, name: "suresh", sal: 6000 },
  ]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [sal, setSal] = useState(0);

  const addEmployee = (e)=>{
      e.preventDefault();
      const empObj = {"id":id,"name":name,"sal":sal};
      setEmployee([...employees,empObj]);
  }
  const deleteEmp = (id)=>{
    let temp = employees.filter(emp=>emp.id!=id);
    setEmployee(temp);
  }

  return (
    <>
      <h1 className="text-center">Employee CRUD</h1>

      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Eid</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.sal}</td>
                    <td>
                      <button>Edit</button>
                      <button>View</button>
                      <button onClick={()=>deleteEmp(emp.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-sm-3">
            <form onSubmit={addEmployee}>
              Eid: <input value={id} onChange={(e)=>{setId(e.target.value)}} />
              Name: <input value={name} onChange={(e)=>{setName(e.target.value)}} />
              Sal: <input value={sal} onChange={(e)=>{setSal(e.target.value)}} />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
