$(document).ready(function () {
  $("#submitButton").click(function () {
    //FULL NAME VALIDATION

    let NAME = $("#fullname").val();
    if (NAME == "") {
      $("#name-error").css("display", "block");
      $("#name-error").text("Please enter a name.");
      $("#fullname").focus();
      $("#fullname").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
    } else {
      $("#name-error").css("display", "none");
      $("#fullname").css({ borderColor: "#888c8c", borderWidth: "1px" });
    }

    //MOBILE NUMBER VALIDATION

    let MOBILE = $("#mobile").val();
    var phoneno = /^\d{10}$/;
    if (MOBILE == "") {
      $("#mobile-error").css("display", "block");
      $("#mobile-error").text(
        "Please enter a phone number so we can call if there are any issues with delivery."
      );
      $("#mobile").focus();
      $("#mobile").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
    } 
    else {
      $("#mobile-error").css("display", "none");
      $("#mobile").css({ borderColor: "#888c8c", borderWidth: "1px" });
    }

    //PINCODE VALIDATION

    var PINCODE = $("#pincode").val();
    var pin = /^\d{6}$/;
    if (PINCODE == "") {
      $("#pincode-error").css("display", "block");
      $("#pincode-error").text("Please enter a ZIP or postal code.");
      $("#pincode").focus();
      $("#pincode").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
    } else if (!c.match(pin)) {
      $("#pincode-error").css("display", "block");
      $("#pincode-error").text(
        "Pincode number cannot be String. Enter valid 6 digit number."
      );
      $("#pincode").focus();
      $("#pincode").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
    } else {
      $("#pincode-error").css("display", "none");
      $("#pincode").css({ borderColor: "#888c8c", borderWidth: "1px" });
    }

    //ADDRESS VALIDATION

    var ADDRESS = $("#address").val();
    if (ADDRESS == "") {
      $("#address-error").css("display", "block");
      $("#address-error").text("Please enter an address.");
      $("#address").focus();
      $("#address").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
    } else {
      $("#address-error").css("display", "none");
      $("#address").css({ borderColor: "#888c8c", borderWidth: "1px" });
    }

    //AREA VALIDATION

    var AREA = $("#area").val();
    if (AREA == "") {
      $("#area-error").css("display", "block");
      $("#area-error").text("Please enter an area.");
      $("#area").focus();
      $("#area").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
    } else {
      $("#area-error").css("display", "none");
      $("#area").css({ borderColor: "#888c8c", borderWidth: "1px" });
    }

    //CITY VALIDATION

    var CITY = $("#city").val();
    if (CITY == "") {
      $("#city-error").css("display", "block");
      $("#city-error").text("Please enter a city name.");
      $("#city").focus();
      $("#city").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
    } else {
      $("#city-error").css("display", "none");
      $("#city").css({ borderColor: "#888c8c", borderWidth: "1px" });
    }

    //STATE VALIDATION

    var STATE = $("#state").val();
    if (STATE == "") {
      $("#state-error").css("display", "block");
      $("#state-error").text("Please enter a state, region or province.");
    } else {
      $("#state-error").css("display", "none");
    }

    //COUNTRY VALIDATION

    var COUNTRY = $("#country").val();
    if (COUNTRY == "") {
      $("#country-error").css("display", "block");
      $("#country-error").text("Please enter a country.");
    } else {
      $("#country-error").css("display", "none");
    }
  });
});
