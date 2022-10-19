import { useState } from "react"

export default function Contact() {
    let [errorMsg, setErrorMsg] = useState('');
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [msg, setMsg] = useState('');
    let onSubmit = (e) => {
        let emptyFields = [];
        if (!name) {
            emptyFields.push('name');
        }
        if (!email) {
            emptyFields.push('email');
        }
        if (!msg) {
            emptyFields.push('message');
        }
        if (emptyFields.length) {
            setErrorMsg('The following fields are required: ' + emptyFields.join(', '));
        } else {
            setErrorMsg('');
        }
        e.preventDefault();
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label for="fullName" className="form-label">Name</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="fullName" placeholder="name" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea onChange={(e) => setMsg(e.target.value)} className="form-control" id="message" rows="3"></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            {errorMsg &&
                <div className="alert alert-danger" role="alert">
                    {errorMsg}
                </div>
            }
        </div>
    )
}