document.getElementById("header").textContent="Namste";
document.getElementById("header1").innerHTML="<p>Hello World</>"; //inner html means the same as text conetent and used for paragraph
document.getElementsByClassName("headerclass")[0].innerHTML = "<p>Hello Hero </p>" //[0] le hamro first ma 0 index nai khojxa


let data = document.getElementsByTagName("span"); //since span is tag elements so we call it by tagname
for(let i=0; i<data.length; i++){ //when we know the results we use for loop
    data[i].innerHTML ="New Text"
}

document.getElementById("data").style.color="red"; //id call garyau ani font color diye 
document.getElementById("data").style.fontStyle="italic";
document.getElementById("data").style.fontSize="40px";



Object.assign(document.getElementById("data1").style,{
    color: "green",
    fontSize: "40px",
    fontStyle: "italic"
});

/* Object.assign(document.getElementById("myLink"), {
  href: "https://www.google.com/",
  target: "_blank",
  style: "color:orange; text-decoration:none; font-size:50px;",
}); */

const clickButton = document.getElementById("clickButton");
const Message = document.getElementById("Message");
clickButton.addEventListener("click", function () {
  Message.textContent = "Message ";
});
clickButton.addEventListener("mouseover", function () {
  Message.textContent = "hover mouse ";
});
clickButton.addEventListener("mouseout", function () {
  Message.textContent = " ";
});

const clickButton1 = document.getElementById("clickButton1");
const Message1 = document.getElementById("Message1");
clickButton.addEventListener("click", function () {
  Message.textContent = "Message 1";
});
clickButton.addEventListener("mouseover", function () {
  Message.textContent = "hover mouse 1";
});
clickButton.addEventListener("mouseout", function () {
  Message.textContent = " ";
});