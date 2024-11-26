// getCustomer(1, (customer) => {
//   console.log("Customer", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top Movies:", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

async function notifyCustomer() {
  const customer = await getCustomer(1);
  console.log("Customer", customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log("Top Movies:", movies);
    await sendEmail(customer.email, movies);
    console.log("Email sent...");
  }
}
notifyCustomer();

// function getCustomer(id, callback) {
//   setTimeout(() => {
//     callback({
//       id: 1,
//       name: "Redul Hossen",
//       isGold: true,
//       email: "email",
//     });
//   }, 4000);
// }
//use Promises
function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Redul Hossen",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}

// function getTopMovies(callback) {
//   setTimeout(() => {
//     callback(["Movie1", "Movie2"]);
//   }, 4000);
// }
//using Promise
function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Movie1", "Movie2"]);
    }, 4000);
  });
}

// function sendEmail(email,movies,callback){
//     setTimeout(() => {
//         callback();
//     }, 4000);
// }
//using Promise

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}
