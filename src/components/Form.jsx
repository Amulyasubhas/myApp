import React,{ useState } from "react";

function Form() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [phone, setNumber]=useState("");
  const [branch, setBranch]=useState("");
  const [usn, setUsn]=useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const data={
      name: name,
      email: email,
      phone: phone,
      usn: usn,
      branch: branch,

    }
    console.log(data);
  
  };

  return (
    <div>
    
        <form onSubmit={handleSubmit}>
<input type="text" value={name} placeholder="Student name" onChange={(e)=> setName(e.target.value)}/>
<br></br>
<br></br>
<input type="email" value={email} placeholder="Student email" onChange={(e)=> setEmail(e.target.value)}/>
<br></br>
<br></br>
<input type="number" value={phone} placeholder="Student phone" onChange={(e)=> setNumber(e.target.value)}/>
<br></br>
<br></br>
<input type="text" value={branch} placeholder="Student branch" onChange={(e)=> setBranch(e.target.value)}/>
<br></br>
<br></br>
<input type="text" value={usn} placeholder="Student usn" onChange={(e)=> setUsn(e.target.value)}/>
<br></br>
<button type="submit">submit</button>


</form>  
<p>{name}</p>
    </div>
  )
}


export default Form