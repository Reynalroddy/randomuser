const url = "https://randomuser.me/api/";
const logic = ()=>{

  //grab elements
const getElement = (selection)=>{


  const element = document.querySelector(selection);
  if(element) {return element}
  else{throw new Error("element not selected");}

}


const fetchUser = async ()=>{
const response = await fetch(url);
const data = await response.json();
const person = data.results[0]
const {email,phone,login:{password},location:{city,state,country,street:{number,name}},name:{first,last},picture:{
  medium
}} = person;
const myPerson = {
"name":`${first} ${last}`,
"email":`${email}`,
"address":`${number} ${name}, ${city} ${
 state} ${country}`,
"phone":`${phone}`,
"password":`${password}`,
"img":`${medium}`






}
return myPerson
}


const displayUser = (person)=>{
//grab elements

const title = getElement(".user-title")
const value = getElement(".user-value")
const img = getElement(".user-img") 


title.textContent = `my name is`;
value.textContent = person.name
img.src = person.img;


//grab all buttons
const btns = document.querySelectorAll(".my-btn");
const buttons = [...btns]
buttons.forEach((btn)=>{
btn.addEventListener("click",(e)=>{

// console.log(e.target.parentElement.dataset.label)
const label = e.target.parentElement.dataset.label;
 console.log(label)
title.textContent = `my ${label} is`;
value.textContent = person[label];

})

})



}

//return logics
return {

  getElement,
  fetchUser,
  displayUser
}
}

const btn = logic().getElement(".random-btn");
btn.addEventListener("click",()=>{
logic().fetchUser().then((data)=>{

 logic().displayUser(data)
// console.log(data)
})
})