
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
const activityInput = document.querySelectorAll('input[type="checkbox"]');
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

//------------Form Validation------------------

//show error message if not filled properly
function showError(element){
    
    const parent = element.parentElement;
    const hint = parent.querySelector('.hint');

    // shows that the field has an error
    parent.classList.add('not-valid');
    //remove the "valid" class because the field is not valid
    parent.classList.remove("valid");

    if (hint){
        //displays the error message
        hint.style.display = 'block';
    }
}

//Show success message when filled correctly
function showSuccess(element){
    
    const parent = element.parentElement;
    const hint = parent.querySelector('.hint');

    //shows that the field is correct
    parent.classList.add('valid');
    //remove the "not-valid" class because the field is valid
    parent.classList.remove("not-valid");

    if (hint){
        //hide the error message
        hint.style.display = 'none';
    }
}

//Validate Name Field
function validateName(){
    //remove extra space and check if the name field is empty it will show error
    if (nameInput.value.trim() === ""){
        showError(nameInput);
        return false
    }else{
        showSuccess(nameInput);
        return true;
    }
}

//validate Email field
const emailInput = document.getElementById('email');
function validateEmail(){

    //Regular expression to check the format of email address
    //Basic format xyz@gmail.com
    //source geeksforgeeks.org https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-an-email-address/
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //removes extra spaces
    const emailValue = emailInput.value.trim();

    // ! runs when the email is invalid
    if (!email.test(emailValue)){
        showError(emailInput);
        return false;
    }else{
        showSuccess(emailInput);
        return true;
    }
}

//Validate activities field
function validateActivities(){
    const selectedActivities = document.querySelectorAll('input[type="checkbox"]:checked');
    const activitiesHint = document.getElementById('activities-hint');

    if (selectedActivities.length === 0){
        activities.classList.add('not-valid');
        activities.classList.remove('valid');
        activitiesHint.style.display = "block";
        return false;
    }else{
        activities.classList.add('valid');
        activities.classList.remove('not-valid');
        activitiesHint.style.display = "none";
        return true;
    }
}

//Validate credit card field
const cardNumber = document.getElementById('cc-num')
function validateCreditCard(){
    //requires between 13 and 16 digits
    const creditcardNum = /^\d{13,16}$/;
    const creditCardValue = cardNumber.value.trim();

    if (!creditcardNum.test(creditCardValue)){
        showError(cardNumber);
        return false;
    }else{
        showSuccess(cardNumber);
        return true;
    }
}


//Validate zip code
const zipCode = document.getElementById('zip');

function validateZipCode(){
    //accepts exact 5 gigits
    const zipPattern = /^\d{5}$/;
    const zipValue = zipCode.value.trim();

    if(!zipPattern.test(zipValue)){
        showError(zipCode);
        return false;
    }else{
        showSuccess(zipCode);
        return true;
    }
}

//Validate CVV
const cvv = document.getElementById('cvv');

function validateCvv(){
    const cvvPattern = /^\d{3}$/;
    const cvvValue = cvv.value.trim();

    if(!cvvPattern.test(cvvValue)){
        showError(cvv);
        return false;
    }else{
        showSuccess(cvv);
        return true;
    }
}

//validate when the submission is detected
const form = document.querySelector('form');
form.addEventListener('submit', (e) =>{
    const nameIsValid = validateName();
    const emailIsValid  = validateEmail();
    const activitiesValid = validateActivities();

    let paymentIsValid = true;

    //when credit card is selected validate credit card field 
    if (payment.value === 'credit-card'){
        const cardNumberIsValid = validateCreditCard();
        const zipCodeIsValid  = validateZipCode();
        const cvvIsValid = validateCvv();
        
        paymentIsValid = cardNumberIsValid && zipCodeIsValid && cvvIsValid
    }

    if(!nameIsValid || !emailIsValid || !activitiesValid || !paymentIsValid){
        e.preventDefault();
    }

});

//Step 8------------The Activities Section------------------
//loop through all the checkbox for focus and blur
for (let i = 0; i < activityInput.length; i++){
    //focus when user tabs on the checkbox
    activityInput[i].addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focus');
    });

    //blur when user tabs away from the checkbox
    activityInput[i].addEventListener('blur', (e) => {
        const focusLabel = document.querySelector('.focus');

        if (focusLabel){
            focusLabel.classList.remove('focus');
        }
    });
}

