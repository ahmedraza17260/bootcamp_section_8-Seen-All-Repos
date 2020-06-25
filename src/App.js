import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([{}]);
  // const [data, setData] = useState([{}]);

  useEffect(() => {
    async function getRepos() {
      const response = await fetch(
        "https://api.github.com/users/ahmedraza17260/repos"
      );
      const data = await response.json();
      console.log(data);
      setRepos(data);
    }
    getRepos();

    // "https://api.github.com/users/ahmedraza17260/repos"
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   fetch("https://api.github.com/users/ahmedraza17260/repos")
    //     .then((response) => response.json())
    //     .then((json) => {
    //       console.log(json);
    //       setData(json);
    //     });
  }, []);

  return (
    <div className="">
      <h1 className="align">You Are Seeing All My Repositories</h1>
      <ul>
        {repos.map((repoObj, ind) => {
          return <li key={ind}>{repoObj.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
