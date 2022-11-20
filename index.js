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
    document.body.appendChild(login);
}

first_page()