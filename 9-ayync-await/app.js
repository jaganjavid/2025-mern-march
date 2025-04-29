

async function MyFunc() {
    
    const promise = new Promise((reslove, reject) => {
        setTimeout(() => reslove("Hello"), 3000);
    })

    const error = false;

    if(!error){
        const res = await promise;
        return res;
    }else{
        await Promise.reject("Something went worng");
    }

}

MyFunc().then(res => console.log(res))
.catch(err => console.log(err));