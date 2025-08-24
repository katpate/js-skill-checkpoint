// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(users => {
  const newUsers = users.map(function(user) {
    return user.name;
  });
  console.log(newUsers);
});