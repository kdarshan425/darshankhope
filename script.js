/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//type
$('document').ready(function(){
            var typed=new Typed('#effect',{
        strings:["SEARCHER!","RECOMMENDER!","SELECTOR!"],
        backSpeed:50,
        typeSpeed:50,
        loop:true,
             })
        }) 
        $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
                width: $(this).attr("data-width")
            },2000)
        });

//smooth nav
$(document).ready(function(){
          // Add scrollspy to <body>
            $('body').scrollspy({target: ".navbar", offset: 50});   

           // Add smooth scrolling on all links inside the navbar
                $("#myNavbar a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
                    if (this.hash !== "") {
             // Prevent default anchor click behavior
                    event.preventDefault();

              // Store hash
                      var hash = this.hash;

             // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function(){
   
            // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                    });
                }  // End if
            });
            });

//loader

   var myVar;

function myFunction4() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
    
    function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
    // Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function dk_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function dk_close() {
    mySidebar.style.display = "none";
}


//sticky navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//ser



// progress bar
    wind.on('scroll', function() {
        $(".skills-progress span").each(function() {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
