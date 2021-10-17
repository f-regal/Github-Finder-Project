//MY GITHUB FINDER

class Github {

    constructor() {
        this.client_id = '03ff34aa03d33a83b69e';
        this.client_secret = 'd14d068bd51df69f3f7c0416cd220e900f28a9d3';
    }

    //Get Method

    async getUsers(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
        


    }




}