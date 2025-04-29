

class EastHTTP{

    // Make an get request

    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject("Something went worng"))
        })
    }

    // Make an post request
    post(url, data){
        return new Promise((reslove, reject) => {
            fetch(url, {
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => reslove(data))
            .catch(err => reject("Something went worng"))
        })
    }

    // Make an put request
    put(url, data){
        return new Promise((reslove, reject) => {
            fetch(url, {
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => reslove(data))
            .catch(err => reject("Something went worng"))
        })
    }

     // Make an put request
     delete(url){
        return new Promise((reslove, reject) => {
            fetch(url, {
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(res => res.json())
            .then(data => reslove("Resource Deleted"))
            .catch(err => reject("Something went worng"))
        })
    }


}