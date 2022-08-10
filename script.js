function validateForm(){
    let a = document.forms["myform"]["fname"].value;
    let b = document.forms["myform"]["uname"].value;
    let c = document.forms["myform"]["email"].value;
    let d = document.forms["myform"]["street"].value;
    let e = document.forms["myform"]["suite"].value;
    let f = document.forms["myform"]["city"].value;
    let g = document.forms["myform"]["zipcode"].value;
    let h = document.forms["myform"]["lat"].value;
    let i = document.forms["myform"]["long"].value;
    let j = document.forms["myform"]["phone"].value;
    let k = document.forms["myform"]["website"].value;
    let l = document.forms["myform"]["cname"].value;
    let m = document.forms["myform"]["catchPhrase"].value;
    let n = document.forms["myform"]["bs"].value;
    let o = document.getElementById("exampleCheck1").checked;

    if (a=="") {
        alert("Name must be filled out");
        return false;
    }

    else if (b=="") {
        alert("Username must be filled out");
        return false;
    }

    else if (c=="") {
        alert("Email must be filled out");
        return false;
    }

    else if (d=="") {
        alert("Street must be filled out");
        return false;
    }

    else if (e=="") {
        alert("Suite must be filled out");
        return false;
    }

    else if (f=="") {
        alert("City must be filled out");
        return false;
    }

    else if (g=="") {
        alert("Zip Code must be filled out");
        return false;
    }

    else if (h=="") {
        alert("Lat must be filled out");
        return false;
    }

    else if (i=="") {
        alert("Long must be filled out");
        return false;
    }

    else if (j=="") {
        alert("Phone must be filled out");
        return false;
    }

    else if (k=="") {
        alert("Website must be filled out");
        return false;
    }

    else if (l=="") {
        alert("Company Name must be filled out");
        return false;
    }

    else if (m=="") {
        alert("Catch Phrase must be filled out");
        return false;
    }

    else if (n=="") {
        alert("BS must be filled out");
        return false;
    }

    else if (!o) {
        alert("Checkbox must be ticked");
        return false;
    }
}