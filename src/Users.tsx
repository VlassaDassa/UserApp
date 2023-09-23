import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { requestUsers, User, requestUsersWithError } from "./api";

const Users: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<Boolean>(false)
  const [error, setError] = useState<String>('')

  const [ageFilter, setAgeFilter] = useState<string>('')
  const [nameFilter, setNameFilter] = useState<string>('')

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [countElements, setCountElements] = useState<number>(4)
  const [totalCountElements, setTotalCountElements] = useState<number>(11)
  

  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await requestUsers({ name: nameFilter, age: ageFilter, limit: countElements, offset: (currentPage-1) * countElements});
      // const data = await requestUsersWithError();  ---> Ошибка
      if (data) {
        setUsers(data);
        setLoading(false)
      }
    }
    
    catch (error) {
        setError(String(error))
        setLoading(false)
    }
    
  };

  useEffect(() => {
    fetchData();
  }, [ageFilter, nameFilter, countElements, currentPage]); 


  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  }

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeFilter(event.target.value);
  }

  const handleCountChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCountElements(parseInt(event.target.value, 10));
  };


  return (
    <div className="container">
      <label htmlFor="nameFilter">Name</label><br />
      <input type="text" id="nameFilter" onInput={handleNameChange} /><br />

      <label htmlFor="ageFilter">Age</label><br />
      <input type="text" id="ageFilter" onInput={handleAgeChange} />

      <div className="usersContainer">
        {error ?
          (
            <p>{error}</p>
          ) 
        : 
        loading ? 
          (
            <p>Loading...</p>
          ) 
        : 
        users.length === 0 ? 
          (
            <p>Users not found</p>
          ) 
        : 
          (
            users.map((user) => (
              // <p key={user.id}>{user.id}. {user.name}, {user.age}</p> ---> С id, для удобства
              <p key={user.id}>{user.id}. {user.name}, {user.age}</p>
            ))
          )}
      </div>
      


      <label htmlFor="countElements">Кол-во элементов   </label>
      <select id="countElements" defaultValue={countElements} onChange={handleCountChange}>
        {Array.from({ length: totalCountElements }, (_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>

      
      <div className="pgnContainer">
        <button onClick={() => setCurrentPage(currentPage - 1)}>Назад</button>
        <p>Страница: {currentPage}</p>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Вперёд</button>
      </div>
      
    </div>

    
  );
};

export default Users;