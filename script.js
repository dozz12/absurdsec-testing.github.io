document.addEventListener("DOMContentLoaded", function () {
    const text = "We Are AbsurdSEC Fear Us...";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});
