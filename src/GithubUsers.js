import React, { useState, useEffect } from "react";

const url = 'https://api.github.com/users'

const GithubUsers = () => {
    const[show, setShow] = useState(false);

    return (
        <>
            <div className="col">
                <h1 className="text-center">GitHub Users</h1>
                <button onClick={() => setShow(!show)} className="btn btn-primary">Show/Hide the Users</button>
                {show && <Users/>}
            </div>
    </> 
    );
};

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () =>{
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    useEffect(() => getUsers, []);

    return (
        <div className="row">
            <ul className="list-group">
                {
                    users.map( (user) => {
                        const {id, login, avatar_url, html_url} = user;
                        return (
                            <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
                                <img src={avatar_url} alt={login} />
                                <h4>{login}</h4>
                                <a href={html_url}></a>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default GithubUsers;