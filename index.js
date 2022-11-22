

function first_page(){
    let login = document.createElement("div");
    let login_head = document.createElement("h2");
    login_head.textContent="LOGIN"

    let username = document.createElement("input");
    username.type = "text"
    username.placeholder = "username"

    let password = document.createElement("input");
    password.type = "text"
    password.placeholder = "password"

    let login_btn = document.createElement("button");
    login_btn.innerHTML="enter"

    let alternate_login = document.createElement("h2");
    alternate_login.textContent="Not a Student?"

    let terms = document.createElement("a")
    terms.innerHTML = "terms"
    terms.href = "/"

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox")
    
    let alternate_login_btn = document.createElement("button");
    alternate_login_btn.innerHTML="Login as guest"

    login.appendChild(login_head)
    login.appendChild(username)
    login.appendChild(password)
    login.appendChild(login_btn)
    login.appendChild(alternate_login)
    login.appendChild(terms)
    login.appendChild(check)
    login.appendChild(alternate_login_btn)


    
    //temp
    document.body.appendChild(login);
}


function second_page(){

    let page2 = document.createElement("div");
    let filter_head = document.createElement("h2");
    filter_head.textContent="Filter"


    let select_filters = document.createElement("input");
    select_filters.setAttribute("list", "filters")
    let dataset = document.createElement("datalist");
    dataset.id = "filters"

    let add_option = (str) => {
        let options = document.createElement("option");
        options.value = str
        dataset.appendChild(options)
    }

    add_option("library");
    add_option("cafe");
    add_option("basketball courts");
    add_option("gym");
    add_option("dining hall");
    add_option("car parks");

    
    


    select_filters.appendChild(dataset)

    page2.appendChild(filter_head);
    page2.appendChild(select_filters)
    document.body.appendChild(page2);
}

first_page()
second_page()


const mapElement = $(".map .svg")[0];
const panzoom = Panzoom(mapElement, { contain: 'outside', startScale: 1.5 });

mapElement.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
mapElement.parentElement.addEventListener('wheel', function (event) {
  if (!event.shiftKey) return;
  panzoom.zoomWithWheel(event);
})

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;
index.js
