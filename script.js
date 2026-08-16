let currentPage = 1;


/* ==========================
   CHANGE PAGE
========================== */

function nextPage() {

    const current =
        document.getElementById(
            `page${currentPage}`
        );

    current.classList.remove("active");


    currentPage++;


    const next =
        document.getElementById(
            `page${currentPage}`
        );

    next.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================
   OPEN GIFT
========================== */

function openGift() {

    const giftBox =
        document.getElementById("giftBox");

    const button =
        document.getElementById("giftButton");

    const finalGift =
        document.getElementById("finalGift");


    /* hide button */

    button.style.display = "none";


    /* gift animation */

    giftBox.style.animation =
        "none";

    giftBox.style.transform =
        "translateY(-10px) scale(0.95)";


    setTimeout(() => {

        giftBox.style.display =
            "none";

        finalGift.classList.add(
            "show"
        );

    }, 450);

}