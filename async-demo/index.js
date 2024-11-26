console.log("Before");
//Asynchonous with callback method
getUser(1, displayUser);

console.log("After");
//use namefunction to avoid callback hell
function displayRepos(repos) {
  console.log("Repos:", repos);
}

function displayUser(user) {
  console.log("User:", user);
  getRepos(user.name, displayRepos);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("REading from Database");
    callback({ id: id, name: "Redul" });
  }, 2000);
}
function getRepos(userName, callback) {
  setTimeout(() => {
    callback(["repos1", "repos2", "repos3"]);
  }, 3000);
}
