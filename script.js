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

function btnClickHandeler() {
    var xhr = new XMLHttpRequest()
    console.log(xhr);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            console.log(this.responseText);
            var dataObject = JSON.parse(data)
            for (var i = 0; i < dataObject.length; i++) {
                var tr = document.createElement("tr")
                var td1 = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                var td4 = document.createElement("td");
                var td5 = document.createElement("td");
                td1.innerHTML = dataObject[i].name;
                td2.innerHTML = dataObject[i].phone;
                td3.innerHTML = dataObject[i].email;
                td4.innerHTML = dataObject[i].username;
                td5.innerHTML = dataObject[i].address.city;
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tr.appendChild(td5)
                document.getElementById("test").appendChild(tr);
            }

        }
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09", true);
    xhr.send();
}