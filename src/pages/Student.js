import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function StudentList(){
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/students').then(res => {
            console.log(res);
            setStudents(res.data.students);
        });

    }, [])
    
    var studentDetails = students.map((item, index) => {
        return(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>
        )
    })

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Student List
                                <Link to="/" className="btn btn-primary float-end">Add Student</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Course</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentList;