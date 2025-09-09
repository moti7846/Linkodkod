import { useState } from "react";
import { Link } from "react-router";

export default function InputIdPost() {
    const [id, setId] = useState("");

    function handleChange(e : any) {
        e.preventDefault();
        setId(e.target.value);
    }

    return (
        <>
            <h2>Enter id post</h2>
                <input type="number" onChange={handleChange} /><br />
            <Link to={`/post/${id}`}><button>Send</button></Link>
        </>
    )
}
