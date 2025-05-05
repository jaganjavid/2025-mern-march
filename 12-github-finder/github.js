

class Github{

    constructor(){
        this.client_id = "Ov23lilebWBbEzjgnBL0";
        this.client_secret = "173edd59d8db300e67d1405c7ab3891914e77528";
    }

    async getUser(user){

      const profileResponse = 
      await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_serect=${this.client_secret}`);

      const profile = await profileResponse.json();

      return profile;
        
    }

}
