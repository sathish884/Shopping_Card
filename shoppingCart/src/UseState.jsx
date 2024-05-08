import { useState } from "react";

function UseState() {

    // const [count, setCount] = useState(0);
    const [data, setData] = useState(
        {
            userName: "",
            password: ""
        }
    );

    const [formData, setFormData] = useState([{
        userName: "",
        password: ""
    }])

    const resetField = () => {
        setData({
            userName: "",
            password: ""
        })
    }

    const [submit, setSubmit] = useState(false);

    const updateInputField = (e) => {
        //  console.log(e);
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const addForm = (e) => {
        e.preventDefault()
        setFormData([...formData, {
            userName: data.userName,
            password: data.password
        }])

        setData({
            userName: "",
            password: ""
        })
        setSubmit(true);

    }

    //const [deletes, setDelete] = useState()



    return (
        <div>

            <form onSubmit={addForm}>
                <label htmlFor="UserName">UserName</label>
                <input type="text" name="userName" value={data.userName} onChange={updateInputField} />
                <label htmlFor="Password">Password</label>
                <input type="text" name="password" value={data.password} onChange={updateInputField} />
                <button>Add</button>
                <button onClick={resetField}>Reset</button>
                {/* <button onClick={() => setDelete(deletes => alert("success"))}>Delete</button> */}
            </form>

            {/* <p>UserName : {data.userName}</p>
            <p>Password : {data.password}</p> */}
            {/* <button onClick={() => setCount(count + 1)}>Click</button> 
            <p>Clicked {count} times</p> */}


            {formData.map((item, i) => (
                <div key={item.i}>
                    <p>{submit ? item.userName : null}</p>
                    <p>{submit ? item.password : null}</p>
                </div>
            ))}



        </div>
    )
}

export default UseState
