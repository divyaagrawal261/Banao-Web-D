function joinGrp()
{
    document.getElementById("leaveGrpBtnSmall").innerHTML="Join Group"
    document.getElementById("joinGrpBtn").classList.add("d-hidden")
    document.getElementById("leaveGrpBtn").classList.remove("d-hidden")
    document.getElementById("recommendedGrps").classList.remove("d-hidden")
    document.getElementById("columns").classList.remove("d-hidden")
    document.getElementById("seeMore").classList.remove("d-hidden")
}
function leaveGrp()
{
    document.getElementById("leaveGrpBtnSmall").innerText="Leave Group"
    document.getElementById("recommendedGrps").classList.add("d-hidden")
    document.getElementById("columns").classList.add("d-hidden")
    document.getElementById("seeMore").classList.add("d-hidden")
    document.getElementById("joinGrpBtn").classList.remove("d-hidden")
    document.getElementById("leaveGrpBtn").classList.add("d-hidden")
}

function switchIn()
{
    document.getElementById("SignUp").classList.add("d-hidden")
    document.getElementById("SignIn").classList.remove("d-hidden")
}
function switchUp()
{
    document.getElementById("SignUp").classList.remove("d-hidden")
    document.getElementById("SignIn").classList.add("d-hidden")
}

function loginUser()
{
    document.getElementById("loggedInUser").classList.remove("d-hidden")
    document.getElementById("CreateAccButton").classList.add("d-hidden")
    joinGrp()
    document.getElementById("locationInput").disabled=false
}

function follow(element)
{
    if(element.innerText=="Follow")
    {element.innerText="Followed"
    element.style.backgroundColor="black"
    element.style.color="white"}
    else{
        element.innerText="Follow"
    element.style.backgroundColor="#edeef0"
    element.style.color="black"
    }
}

function updateGrp()
{
    if(document.getElementById("leaveGrpBtnSmall").innerHTML=="Leave Group")
    {        
        joinGrp()
        return;
    }
    if(document.getElementById("leaveGrpBtnSmall").innerHTML=="Join Group")
    {
        leaveGrp()
        return;
    }
}

function hideMobileModal()
{
    document.body.style.overflow="block"
    document.getElementById("mobileModal").classList.add("d-hidden")
}
function showMobileModal()
{
    document.getElementById("mobileModal").classList.remove("d-hidden")
    document.body.style.overflow="hidden"
}