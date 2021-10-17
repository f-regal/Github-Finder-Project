//MY GITHUB FINDER

//Initialise (Init) Github
const github = new Github;

//Initialise (Init) UI class
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e => {

//get input text
const userText = e.target.value;

    if(userText !== '') {
        //Make http call
        github.getUsers(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show alert
                    ui.showAlert('User Not Found', 'alert alert-danger')
                    console.log('hey')
                } else {
                    //Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                    console.log(data.repos);
                }
            })
    } else {
        //Clear profile
        ui.clearProfile();
    }




}))



