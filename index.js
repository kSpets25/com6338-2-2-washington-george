// Your code here


function greet() {
    var userName = prompt('What is your name?');
    if (userName && userName.trim()) {
        alert('Hello, ' + userName + '!')
        var userAge = prompt("How old are you?");
        if (parseInt(userAge)) {
            var userBirthYear = confirm ('Have you had a birthday this year?')
            if (userBirthYear) {
                var currentYear = new Date().getFullYear()
                var birthYear = currentYear - parseInt(userAge);
                alert('Your Birth year is: ' + birthYear);
            } else {
                var userAge = parseInt(userAge) + 1;
                var birthYear = new Date().getFullYear() - parseInt(userAge);
                alert('Your Birth year is: ' + birthYear);
            }
            if (birthYear - currentYear) {
                alert('You have had a birthday!');
        
            } else {
                alert('You have NOT had a birthday!');
            }
        } else {
            alert('No user age enterd')
        }
    } else {
        alert('Error, no valid name')
    }

} 

    
    
        
        
    
    
          
