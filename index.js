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

function availability(population){
  if(population<20){return "green"}
  else if(population>19 && population<31){return "yellow"}
  return "red"
}

function firstPageCont(){
  window.location.href = "second_page.html"
}

function secondPageCont(){
    thirdPageCont(document.getElementById('time').value)
}


function thirdPageCont(time){
  window.location.href = "third_page.html"
  library=document.getElementById('library')
  time = time.substring(0,2)
  console.log(time)
}
