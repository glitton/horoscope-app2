// When page loads, display console log message
$(document).ready(function() {
    console.log( "page is loaded" );

  // Hide preloader div 
  $("#preloader").hide();  

// This function uses POST request with ajax, jquery to the Horoscope-API
  function showHoroscope(sign){  

    $.ajax({
      type:'POST',
      url:'https://aztro.herokuapp.com?sign='+sign+'&day=today',
      success:function(data){
      document.getElementById("message").innerHTML = data.description
      document.getElementById("date").innerHTML = data.current_date;
      console.log(data.description);
      console.log(data);
      }
    });
  }    

    function showHideLoader(sign){
      console.log('loader called')
        // display the preloader div
        $("#preloader").show();
        $("#status").show();
        // will first fade out the loading animation
        $("#status").delay(5000).fadeOut();
        // will fade out the whole DIV that covers the website after 3 seconds
        $("#preloader").delay(2000).fadeOut(3000);
      };

  // Using an event listener which is the submit button
  //Return zodiac sign depending on user input of month and date, 
  // call showHideLoader function
    document.getElementById("submit").addEventListener("click", function(){   
    // Display zodiac sign, the date, and horoscope for the day
      // Values needed to return zodiac sign, need to be inside the function
      var month = document.getElementById('month').value;
      var day = document.getElementById('day').value;
      var getZodiac = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius']
      var sign;
      
      // var zodiacImg;  TO DO, add image

      console.log("You were born on " + month + ' ' + day); 
      
      if((month == 'January' && day <= 20) || (month == 'December' && day >=22)) { sign = getZodiac[0];
        // zodiacImg = 'img/capricorn-2-128.png';
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);

      } else if ((month == 'January' && day >= 21) || (month == 'February' && day <= 18)) { sign = getZodiac[1];
        // zodiacImg = 'img/capricorn-2-128.png';
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);

      } else if((month == 'February' && day >= 19) || (month == 'March' && day <= 20)) { sign = getZodiac[2];
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);

      } else if((month == 'March' && day >= 21) || (month == 'April' && day <= 20)) { sign = getZodiac[3];
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);

      } else if((month == 'April' && day >= 21) || (month == 'May' && day <= 20)) { sign = getZodiac[4];
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);
      
      } else if((month == 'May' && day >= 21) || (month == 'June' && day <= 20)) { sign = getZodiac[5];
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);

      } else if((month ==  'June' && day >= 22) || (month == 'July' && day <= 22)) { sign = getZodiac[6];
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);

      } else if((month == 'July' && day >= 23) || (month == 'August' && day <= 23)) { sign = getZodiac[7];
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);

      } else if((month == 'August' && day >= 24) || (month == 'September' && day <= 23)) { sign = getZodiac[8];
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);
  
      } else if((month == 'September' && day >= 24) || (month == 'October' && day <= 23)) { sign = getZodiac[9];
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);
  
      } else if((month == 'October' && day >= 24) || (month == 'November' && day <= 22)) { sign = getZodiac[10];
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);
      
      } else if((month == 'November' && day >= 23) || (month == 'December' && day <= 21)) { sign = getZodiac[11];
        console.log(sign);
        showHideLoader(sign);
        showHoroscope(sign);
      }
      // Add the user sign on to the page
      document.getElementById('sign').textContent = sign
      // document.getElementById("zodiac-img").src = zodiacImg; FIX THIS
  });    

});