
//------------Name Field------------------
//Use the focus() method so when the page first loads the first text field will have the focus state by default to prompt the user
const nameInput = document.getElementById('name');
nameInput.focus();

//------------Job Role Section------------------
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

//------------T-Shirt Info Section------------------

const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
//get all the color option
const colorOptions = document.querySelectorAll("option[data-theme]");

//disable the color (until the user have chosen a design)
shirtColor.disabled = true;

shirtDesign.addEventListener('change', (e) => {
    
    //after selecting it enables the color drop down
    shirtColor.disabled = false;

    //Resets the color menu everytime you change the design
    shirtColor.selectedIndex = 0;
    
    //loop through each color option to show colors that match the selected design
    for(let i = 0; i < colorOptions.length; i++){
        if(e.target.value === colorOptions[i].getAttribute("data-theme")){
          colorOptions[i].hidden = false;
          colorOptions[i].disabled = false;
        }else{
          colorOptions[i].hidden = true;
          colorOptions[i].disabled = true;
        }
      } 
    
});




