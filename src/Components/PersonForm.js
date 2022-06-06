import React, {useState, useEffect} from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const PersonForm = () => {
    const [people, setPeople] = useState([]);
    const [person, setPerson] = useState({
        name: '',
        email: ''
    });
    const [showValidationModal, setShowValidationModal] = useState(false);
    const [showAddedModal, setShowAddedModal] = useState(false);

    function capitalizeName(name){
        return name.toLowerCase()
                .replace(/\w/, firstLetter => firstLetter.toUpperCase());
    }

    const changeHandler = (e) =>{
        const propName = e.target.name;
        const propValue = e.target.value;
        setPerson({...person, [propName]: propValue});
    };

    const submitHandler = (e) =>{
        e.preventDefault();
        if (person.name && person.email){
            setShowValidationModal(false);
            setShowAddedModal(true);

            setPeople([...people, {...person, id: people.length}]);
            setPerson({
                name: '',
                email: ''
            });
        } else{
            setShowValidationModal(true);
            setShowAddedModal(false);
        } 

    };

    return (
        <>
            <article>
                <h1 className='text-center'>Person Form</h1>
                <form>
                    {showValidationModal && <ValidationModal/>}
                    {showAddedModal && <AddedModal/>}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            className="form-control" 
                            id='name'
                            name='name'
                            type="text" 
                            value={person.name}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            className="form-control"
                            id='email' 
                            name="email" 
                            type="text" 
                            value={person.email}
                            onChange={changeHandler}/>
                    </div>
                    <button onClick={submitHandler} 
                            type="submit" 
                            className="btn btn-primary">
                        Add
                    </button>
                </form> 
            </article>
            <ul className='list-group'>
                <h3 className='text-center'>People added: </h3>
                {
                    people.map((person) => {
                        const {id, name, email} = person;
                        return (
                            <li key={id} 
                                className="list-group-item d-flex justify-content-between align-items-center border-info">
                                <h4>{capitalizeName(name)}</h4>
                                <p>{email}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};

const ValidationModal = () =>{
    return (
        <div>
            <h4 className='text-danger'>Name or Email cannot be empty!!</h4>
        </div>
    );
};

const AddedModal = () =>{
    return (
        <div>
            <h4 className='text-success'>Person added</h4>
        </div>
    );
};

export default PersonForm;