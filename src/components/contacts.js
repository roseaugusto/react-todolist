import React, {useState, useEffect} from 'react'
import ContactForm from './contactform'
import firebaseDB from '../firebase'

function Contacts() {

    var [contacts, setContacts] = useState({});
    var [currentID, setCurrentID] = useState('');

    useEffect(() =>{
        firebaseDB.child('contacts').on('value', snapshot=>{
            if(snapshot.val() != null){
                setContacts({...snapshot.val()})
            }
        })
    }, []);

    const renderTable = () =>{
        return  Object.keys(contacts).map( val => {
            return (
                <tr key={val}>
                    <td>{contacts[val].fullname}</td>
                    <td>{contacts[val].address}</td>
                    <td>{contacts[val].mobile}</td>
                    <td>{contacts[val].email}</td>
                    <td>
                        <a className="btn text-primary" onClick={()=> {setCurrentID(val)}}>
                            EDIT
                        </a>
                        <a className="btn text-danger" onClick={()=> {onDelete(val)}}>
                            DELETE
                        </a>
                    </td>
                </tr>
            )
        })
    }

    const onDelete = currentID =>{
        if (window.confirm('Are you sure you want to delete this record')) {
            firebaseDB.child(`contacts/${currentID}`).remove(
                err => {
                    if(err)
                    console.log(err);
                }
            )
        }
        else {

        }
    }

    const addOrEdit = obj =>{
        if (currentID == '') {
            firebaseDB.child('contacts').push(
                obj,
                err => {
                    if(err)
                    console.log(err);
                }
            )
        }
        else {
            firebaseDB.child(`contacts/${currentID}`).set(
                obj,
                err => {
                    if(err)
                    console.log(err);
                }
            )
        }

    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ContactForm {...({addOrEdit, currentID, contacts})} />
                </div>
                <div className="col-md-6">
                    <div>
                        <h5>List of Contacts</h5>
                        <hr/>
                        <table className="table table-sm table-stripped">
                            <thead>
                                <tr>
                                    <th>FULLNAME</th>
                                    <th>ADDRESS</th>
                                    <th>MOBILE</th>
                                    <th>EMAILS</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    renderTable()
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts
