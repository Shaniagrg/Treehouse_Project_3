//Use the focus() method so when the page first loads the first text field will have the focus state by default to prompt the user
const nameInput = document.getElementById('name');
nameInput.focus();

//#other-job-role hidden line 50
//Store the job element inside a variable
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');

//Hide #other-job-role so it is not displayed when the form first loads
otherJobRole.style.display = 'none';

jobRole.addEventListener('change', (e) => {
    //Display the #other-job-role input field when user clicks "other"
    if (e.target.value === 'other'){
        otherJobRole.style.display = 'block';
    }else{
        //Hidden again when user doesn't click on "other" 
        otherJobRole.style.display = 'none';
        //clears the text written inside the description and Your will have new inputfield that is blank again
        otherJobRole.value = "";
    }
});
