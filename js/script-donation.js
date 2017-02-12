// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//button active and non-active states
$('.button').on('click', function(){
    $('.button').removeClass('selected');
    $(this).addClass('selected');
});

$(document).ready(function(){

	detectSelectedButton();
	$("#donate-button").click(function(){
		sendMessage();
		$('.tab-content-no1').css("display", "none");
		$('.tab-content-no2').css("display", "block");
		// setTimeout(function(){ 
		// $('.tab-content-no2').css("display", "none");
		// $('.tab-content-no1').css("display", "block");}, 2500);
	});

	$("#back-button").click(function(){
		$('.tab-content-no2').css("display", "none");
		$('.tab-content-no1').css("display", "block");
		// setTimeout(function(){ 
		// $('.tab-content-no2').css("display", "none");
		// $('.tab-content-no1').css("display", "block");}, 2500);
	});

	$(".button").click(function(){
		detectSelectedButton();
	});

	$("#donate-ammount-field").change(function() {
		var num;
		num = $("#donate-ammount-field").val();
		if (num === '2') {
			$('.button').removeClass('selected');
    	$('#donate1').addClass('selected');
		} 
		else if (num === '10') {
			$('.button').removeClass('selected');
    	$('#donate2').addClass('selected');
		}
		else if (num === '25') {
			$('.button').removeClass('selected');
    	$('#donate3').addClass('selected');
		}
		else if (num === '50') {
			$('.button').removeClass('selected');
    	$('#donate4').addClass('selected');
		}
		else if (num === '100') {
			$('.button').removeClass('selected');
    	$('#donate5').addClass('selected');
		}
		else {
			$('.button').removeClass('selected');
    	$('#donate6').addClass('selected');
		}
	});

	$("#donate-ammount-field").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


});


function detectSelectedButton() {
	if ($("#donate1").hasClass("selected")) {
		$("#donate-ammount-field").val("2");
	}
	else if ($("#donate2").hasClass("selected")) {
		$("#donate-ammount-field").val("10");
	}
	else if ($("#donate3").hasClass("selected")) {
		$("#donate-ammount-field").val("25");
	}
	else if ($("#donate4").hasClass("selected")) {
		$("#donate-ammount-field").val("50");
	}
	else if ($("#donate5").hasClass("selected")) {
		$("#donate-ammount-field").val("100");
	}
	else if ($("#donate6").hasClass("selected")) {
		$("#donate-ammount-field").val("");
		$("#donate-ammount-field").focus();
	}
}

function detectDonationFieldChange() {

}

function sendMessage() {
	var amount = $("#donate-ammount-field").val();
	if (amount >= 50) {
		$.post("send.php", { amount: amount });
	}
	
}