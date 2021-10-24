import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { collection, query } from "firebase/firestore";
import './secret.css'
export default function Secret() {
  const [stus, setStus] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "registrations"));

    onSnapshot(q, (querySnapshot) => {
      const students = [];
      querySnapshot.forEach((doc) => {
        students.push(doc.data());
      });
      setStus(students);
    });
  }, []);

  return (
    <div className="secret_container ">
      <p>Total registered {stus.length}</p>

      <table className='fullscreen' >
      <thead>
          <tr>

            <th>Teams</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>CodeChef ID</th>

            <th>Branch</th>
            <th>Mail</th>
            <th>Mobile</th>


          </tr>
        </thead>
        <tbody>
      {
          stus.map((s,index)=>{
            return <tr>
                <td>
                    {index+1}
                </td>
                <td>
                {s.member1.rollNumber} <br />
                {s.member2.rollNumber}
                </td>
                <td>
                {s.member1.name} 
                {s.member2.name}
                </td>
                <td>
                {s.member1.codechefid} <br />
                {s.member2.codechefid}
                </td>
                <td>
                {s.member1.branch} <br />
                {s.member2.branch}
                </td>
                <td>
                {s.member1.email} <br />
                {s.member2.email}
                </td>
                <td>
                {s.member1.mobile} <br />
                {s.member2.mobile}
                </td>
            </tr>
          })
      }
        
        
          
        </tbody>
      </table>
    </div>
  );
}
