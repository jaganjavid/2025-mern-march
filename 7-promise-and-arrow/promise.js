
const posts = [
    {title:"Post one"},
    {title:"Post two"}
];

function createPost(post){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject("Some thing went worng");
            }
           


        }, 2000)

    })

}


function getPosts(){

    setTimeout(() => {
        let output = "";

        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        })

        document.body.innerHTML = output;
    }, 1000)

}

createPost({title:"post three"})
.then(getPosts)
.catch((err) => {
    document.body.innerHTML = err;
})