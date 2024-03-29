let project_counter = document.getElementById("project_count");

let cerf_counter = document.getElementById("certifications_count");


function getData()
{
    let counter = 1;
    let projects = 4;
    let certificates = 12;

    let project = setInterval(()=>{
        project_counter.innerHTML = counter;
        if(counter == projects)
            clearInterval(project);
        counter++;
    },300);

    counter = 1;
    let certificate = setInterval(()=>{
        cerf_counter.innerHTML = counter;
        if(counter == certificates)
            clearInterval(certificate);
        counter++;
    },200);
}

document.getElementById("emailButton").addEventListener("click", function() {
    window.location.href = "mailto:azarudeensuban@gmail.com";
});

document.getElementById("linkedIn").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/azar2002", "_blank");
});

document.getElementById("downloadButton").addEventListener("click", function() {
    // Create an anchor element
    var downloadLink = document.createElement("a");
    // Set the href attribute to the path of your PDF file
    downloadLink.href = "resume.pdf";
    // Set the download attribute to the filename you want the PDF to be saved as
    downloadLink.download = "resume.pdf";
    // Append the anchor element to the body
    document.body.appendChild(downloadLink);
    // Trigger a click event on the anchor element
    downloadLink.click();
    // Remove the anchor element from the DOM
    document.body.removeChild(downloadLink);
});