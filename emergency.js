$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
console.log($('.nav-link'))
  $('.nav-link').on('click', function() {
    console.log($(this).attr('href'))
    var id = $(this).attr('href');
    $('html, body').animate({scrollTop: $(id).offset().top - 200}); // scroll to the id of the clicked link - height of the fixed nav

  $('#submit').on('click', function() {
  	var post_data = {
  		'comment': $('#comment').val(),
  		'email': $('#email').val(),
  		'phone': $('#phone').val(),
  		'action': 'store-contact'
  	}
  	var error_text = 'Some error occurred, please try again later';
    $.ajax({
    	url: './indi.php',
    	data: post_data,
    	type: 'POST',
    	dataType: 'JSON'
    }).done(function(response) {
    	if (response.status == 'success') {
    		alert('Thanks for your interest, we will contact you shortly');
    	} else {
    		alert(error_text);
    	}
    }).fail(function() {
      alert(error_text);
    });
  });

});

  var carousel = {
    first: 0,
    last: 0,
    items: [
        {
          'img': '',
          'text': ''
        },
        {
          'img': '',
          'text': ''
        },
        {
          'img': '',
          'text': ''
        }
    ],
    init: function() {
      var no_of_items = 4;
      if (window.width < 540) {
        no_of_items = 1;
      }
      this.last = no_of_items - 1;
      var html = '';
      for (var i = 0; i < no_of_items; i++) {
        html += makeElement(i);
      }
      document.getElementById('carousel-wrapper').innerHTML = html;

    },
    makeElement: function(index) {
      if (index < 0)
        index += items.length;
      index %= items.length;
      var item = items[index];
      var html = '<div class="col-sm-4 carousel-element">' +
      '<img src="' + item.img + '">' +
      '</div>';
    },
    moveRight: function() {
      var i = this.items;
      this.makeElement(this.first - 1);
    },
    moveLeft: function() {
      var i = this.items;

    }

  }

  setInterval(function(){
    var now = new Date();
    var then = new Date(2018, 03, 28, 0, 0, 0);
    var millisecods_per = {};
    millisecods_per.second = 1000;
    millisecods_per.minute = 60 * millisecods_per.second;
    millisecods_per.hour = 60 * millisecods_per.minute;
    millisecods_per.day = 24 * millisecods_per.hour;
    var diff = then.getTime() - now.getTime();
    var days = Math.floor(diff/millisecods_per.day);
    diff -= days * millisecods_per.day;
    var hours = Math.floor(diff/millisecods_per.hour);
    diff -= hours * millisecods_per.hour;
    var minutes = Math.floor(diff/millisecods_per.minute);
    diff -= minutes * millisecods_per.minute;
    seconds = Math.floor(diff/millisecods_per.second);
    document.getElementById('countdown').innerHTML = days + ' days, ' + hours + ':' + minutes + ':' + seconds;
    }, 1000);
});

$(document).ready(function()
{
  // Add smooth scrolling to all links
  $(".nav-link").on('click', function(event)
  {

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
    } // End if
  });
});

// The function actually applying the offset
function offsetAnchor() {
 if (location.hash.length !== 0) {
   window.scrollTo(window.scrollX, window.scrollY - 75);
 }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
 // Click events are captured before hashchanges. Timeout
 // causes offsetAnchor to be called after the page jump.
 window.setTimeout(function() {
   offsetAnchor();
 }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);
