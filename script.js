function downloadCV(){

const element = document.getElementById("cv");

const opt = {
margin:0.5,
filename:"Omar_Alkannan_CV.pdf",
image:{ type:"jpeg", quality:0.98 },
html2canvas:{ scale:2 },
jsPDF:{ unit:"in", format:"letter", orientation:"portrait" }
};

html2pdf().set(opt).from(element).save();

}
