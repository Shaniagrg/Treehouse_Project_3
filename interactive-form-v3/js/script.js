
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

//------------Activities Section------------------

const activities = document.getElementById('activities');
//select all the checkbox inputs in the document
const acticityInput = document.querySelectorAll('input[type="checkbox"]');
const activityCost = document.getElementById('activities-cost');

//keep track of the cost
let totalCost = 0;

activities.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox'){
        //convert the string to int
        const eachActivityCost = parseInt(e.target.getAttribute('data-cost'));

        if (e.target.checked){
            //add activity cost
            totalCost += eachActivityCost;
        }else{
            //subtract activity cost when you de-select
            totalCost -= eachActivityCost;
        }

        activityCost.textContent = `Total: $${totalCost}`;
    }
});

//------------Payment Info Section------------------

const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

//Make the credit card a default option
payment.value = 'credit-card';

//hide paypal and bitcoin description like its <h3> and <p>
payPal.style.display = 'none';
bitCoin.style.display = 'none';

payment.addEventListener('change', (e) => {

    //First hide all the payment section
    creditCard.style.display = 'none';
    payPal.style.display = 'none';
    bitCoin.style.display = 'none';

    if (e.target.value === 'credit-card'){
        //when user selects credit-card it will show it's description
        creditCard.style.display = 'block';
    }else if(e.target.value === 'paypal') {
        //when user selects paypal it will show it's description 
        payPal.style.display = 'block';
    }else if(e.target.value === 'bitcoin'){
        //when user selects bitcoin it will show it's description
        bitCoin.style.display = 'block';
    }
});



