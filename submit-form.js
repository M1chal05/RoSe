

var submitBtn = document.getElementById("submitForm")

function submitFrm(){
    var form = document.getElementById("form")
    form.submit()
    form.reset()
}

submitBtn.addEventListener("click", submitFrm)