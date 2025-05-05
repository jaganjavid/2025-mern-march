

class UI{

    constructor(){
        this.profile = document.querySelector("#profile");
    }

    // Display the user profile

    showProfile(user){

       if(user.message === "Not Found"){
        this.profile.innerHTML = `<h1>User Not Found</h1>`
       }else{
          
        this.profile.innerHTML = `  
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img width="100%" src=${user.avatar_url} alt="">
                    <a href=${user.html_url} target="_blank" class="btn btn-dark mt-5">
                        Visit Profile
                    </a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary">Public Repos : ${user.public_repos}</span>
                    <span class="badge bg-secondary">Follwers : ${user.followers}</span>
                    <span class="badge bg-info">Following : ${user.following}</span>

                    <div class="mb-4"></div>

                    <ul class="list-group">
                    <li class="list-group-item">
                        Company : ${user.company}
                    </li>
                    <li class="list-group-item">
                        Bio : ${user.bio}
                    </li>
                    <li class="list-group-item">
                        Location : ${user.location}
                    </li>
                    </ul>

                </div>
            </div>
            </div>
    `

       }


    }

    clearProfile(){
        this.profile.innerHTML = "";
    }

}