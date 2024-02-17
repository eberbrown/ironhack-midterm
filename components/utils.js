async function getProjectByID(id) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/projects?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });

  //    try {
  //     const response = await fetch(`http://localhost:8000/projects?id=${id}`)
  //     const data = await response.json()
  //     return data[0]
  //    } catch (err) {
  //     throw err
  //    }
}

export { getProjectByID };
