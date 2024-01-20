// Your code here


function greet() {
    var userName = prompt('What is your name?');
    if (userName && userName.trim()) {
        alert('Hello, ' + userName + '!')
    } else {
        alert('Hello, How are you?')
    }
    var userAge = prompt("How old are you?");
        alert(parseInt(userAge, 10))
    var userBirthYear = confirm ('Have you had a birthday this year?');
    if (userBirthYear) {
        const userBirthYear = (parseInt(userAge, 10) - new Date().getFullYear());
        alert('Your Birth Year is ' + userBirthYear)   
    } else {
        const userBirthDate = (parseInt(userAge, 10) - new Date().getFullYear());
        alert('Your Birth Year is ' + userBirthYear)
    }

    
    
        
        
    
    }
          
