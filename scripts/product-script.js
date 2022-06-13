function show_info(){
    var req = new XMLHttpRequest()
    req.open("GET", "product-info.html")
    req.send()
    req.onload = function (){
        if(req.status == 200){
            document.getElementById("info").innerHTML = req.responseText
        }else{
            document.getElementById("info").innerHTML = req.status
        }
    }
}

function show_images(){
    var req = new XMLHttpRequest()
    req.open("GET", "product-images.html")
    req.send()
    req.onload = function (){
        if(req.status == 200){
            document.getElementById("info").innerHTML = req.responseText
        }else{
            document.getElementById("info").innerHTML = req.status
        }
    }
}

//მოცემული სკრიფტი product.html გვერდზე არსებულ საინფორმაციო განყოფილებაში იძახებს ორ სხვადასხვა ფაილს
//რომლის მეშვეობითაც მომხმარებელს შეუძლია გამოიტანოს ან წერილობითი ინფორმაცია პროდუქტის შესახებ, ან მისი
//ფოტოები, შესაბამის ღილაკებზე დაჭერით