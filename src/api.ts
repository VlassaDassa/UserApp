export interface User {
  name: string;
  id: number;
  age: number;
}

export interface Query {
  name: string;
  age: string;
  limit: number;
  offset: number;
}

const baseQuery: Query = {
  name: "",
  age: "",
  limit: 5,
  offset: 0
};

export const requestUsersWithError = (
  params: Query = baseQuery
): Promise<User[]> => {
  return new Promise(() => {
    throw new Error("500, unknown server error");
  });
};

export const requestUsers = (params: Query = baseQuery): Promise<User[]> => {
  const users: User[] = [
    { name: "Jack", id: 0, age: 26 },
    { name: "Helen", id: 1, age: 36 },
    { name: "Rick", id: 2, age: 44 },
    { name: "Tom", id: 3, age: 45 },
    { name: "Sarah", id: 4, age: 40 },
    { name: "Linda", id: 5, age: 41 },
    { name: "Tom", id: 6, age: 42 },
    { name: "Shief", id: 7, age: 21 },
    { name: "Bred", id: 8, age: 17 },
    { name: "Till", id: 9, age: 2 },
    { name: "Kane", id: 10, age: 55 }
  ];

  const filtered = users
    .filter((v) => {
      if (params.name === "" && params.age === "") return true;
      const age = parseInt(params.age, 10);
      const passedAgeFilter = params.age === "" ? true : age === v.age;
      const passedNameFilter =
        params.name === "" ||
        (params.name &&
          v.name.toLowerCase().includes(params.name.toLowerCase()));
      return passedAgeFilter && passedNameFilter;
    })
    .slice(params.offset, params.offset + params.limit);

  return new Promise((res, rej) => {
    setTimeout(() => {
      res(filtered);
    }, 2000);
  });
};
