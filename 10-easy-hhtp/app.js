

const http = new EastHTTP();


http.get("https://6810dc5027f2fdac24131e72.mockapi.io/users")
.then(data => console.log(data))
.catch(err => console.log(err));

const data = {
    name:"Jagan Javid"
}

const dataTwo = {
    name:"Javid Jagan"
}

http.post("https://6810dc5027f2fdac24131e72.mockapi.io/users", data)
.then(data => console.log(data))
.catch(err => console.log(err))

http.put("https://6810dc5027f2fdac24131e72.mockapi.io/users/51", dataTwo)
.then(data => console.log(data))
.catch(err => console.log(err))


http.delete("https://6810dc5027f2fdac24131e72.mockapi.io/users/55")
.then(data => console.log(data))
.catch(err => console.log(err))