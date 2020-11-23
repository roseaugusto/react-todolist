import React, {useState, useEffect} from 'react'

function ContactForm(props) {
    const initialFieldValues = {
        fullname : '',
        mobile: '',
        email: '',
        address: '',
    }

    var [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
       var {name, value} = e.target
       setValues({
           ...values,
           [name]: value
       })
    }

    const handleFormSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values);
    }

    useEffect(() => {
        if (props.currentID == '') {
            setValues({
                ...initialFieldValues
            })
        }
        else {
            setValues({
                ...props.contacts[props.currentID]
            })
        }
    }, [props.currentID, props.contacts])

    return (
        <div>
            <h5>{props.currentID=='' ? "Add":"Update"} Contact</h5>
            <hr/>
            <form autoComplete="false" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>Fullname</label>
                    <input type="text" className="form-control"  placeholder="Fullname" name="fullname" value={values.fullname} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Apartment, studio, or floor" name="address" value={values.address} onChange={handleInputChange} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" name="email" value={values.email} onChange={handleInputChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Mobile</label>
                        <input type="text" className="form-control" placeholder="Mobile" name="mobile" value={values.mobile} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="btn-toolbar">
                    <div className="btn-group mr-2">
                        <input type="submit" id="btnSubmit" className="btn btn-primary" value={props.currentID=='' ? "Submit":"Update"} />
                    </div>
                    <div className="btn-group">
                        <button type="reset" id="btnCancel" className="btn btn-danger">Cancel</button>
                    </div>
                </div>
                <br/>
            </form>
        </div>
    )
}

export default ContactForm
