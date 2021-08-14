import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import { useParams } from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);

	console.log(users);

	const page = useParams();

	useEffect(() => {
		const fetchUser = () => {
			axios.get(`https://reqres.in/api/users?page=1`).then((res) => {
				setUsers(res.data);
        console.log(res.data)
			});
      
		};
		fetchUser();
	}, []);

	return (
		<>
			<User avatar={users[1].avatar} name={users[1].name} email={users[1].email}/>
		</>
	);
};

export default Users;
