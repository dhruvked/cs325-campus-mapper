data = {
  "library" : {
          "8":"10",
          "9":"12",
          "10":"25",
          "11":"20",
          "12":"30",
          "13":"40",
          "14":"40",
          "15":"50",
          "16":"30",
          "17":"20",
          "18":"20",
          "19":"15",
          "20":"10"
  },
  "wooster" : {
      "8":"10",
      "9":"10",
      "10":"10",
      "11":"10",
      "12":"10",
      "13":"10",
      "14":"10",
      "15":"10",
      "16":"10",
      "17":"10",
      "18":"10",
      "19":"10",
      "20":"10"
  },
  "rec" : {
      "8":"20",
      "9":"20",
      "10":"20",
      "11":"15",
      "12":"15",
      "13":"30",
      "14":"50",
      "15":"60",
      "16":"40",
      "17":"25",
      "18":"21",
      "19":"20",
      "20":"10"
  }
}

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

    back = document.createElement("button")
    back.style.position = "absolute"

    back.innerHTML = "back"
    page2.appendChild(back)
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

function third_page(){
  let container = document.createElement("div")
  let map = document.createElement("img")
  map.src = "Screenshot 2022-11-26 at 11.46.28 AM.png"
  container.style.height = "600px"
  container.style.width = "600px"
  container.style.overflow = "scroll"
  
  back = document.createElement("button")
    back.style.position = "absolute"
    container.appendChild(back)
    back.innerHTML = "back"

  library = document.createElement("button")
  library.style.position = "absolute"
  library.style.top = "500px"
  library.style.left = "390px"
  container.appendChild(library)
  container.appendChild(map)

  wooster = document.createElement("button")
  wooster.style.position = "absolute"
  wooster.style.top = "190px"
  wooster.style.left = "570px"
  container.appendChild(wooster)
  container.appendChild(map)

  wooster = document.createElement("button")
  wooster.style.position = "absolute"
  wooster.style.top = "190px"
  wooster.style.left = "570px"
  container.appendChild(wooster)
  container.appendChild(map)
  

  rec = document.createElement("button")
  rec.style.position = "absolute"
  rec.style.top = "595px"
  rec.style.left = "131.5px"
  container.appendChild(rec)
  container.appendChild(map)
  
  container.style.position="absolute"
  document.body.appendChild(container);
}

third_page()