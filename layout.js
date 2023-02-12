let mainBranch = document.getElementsByClassName("text1")[0];
let iconcolor = document.querySelector("i");
let mainclick=()=>{

   mainBranch.classList.add("text");
   iconcolor.classList.add("text");
}
let branchclick=()=>{

    mainBranch.classList.remove("text");
    iconcolor.classList.remove("text");
}