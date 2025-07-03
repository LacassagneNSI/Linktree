function addapp(image, nom, url){

    const template = document.getElementById("template");
    const main = document.querySelector("main");

    const clone = template.content.cloneNode(true);
    const a = clone.querySelector("a");
    const img = a.querySelector("img");
    const h1 = a.querySelector("h1");

    a.href = url
    img.src = image
    img.style.height= "2rem"
    img.style.width= "2rem"
    h1.textContent = nom

    main.appendChild(clone);

}

addapp("insta.png", "Instagram", "https://www.instagram.com/the_emerald_of_unova/" )
addapp("github.png", "Github", "https://github.com/LacassagneNSI")
addapp("tiktok.png", "TikTok", "https://www.tiktok.com/@the_emerald_of_unova?is_from_webapp=1&sender_device=pc")
addapp("aishiteru.png", "AIshiteru", "https://aishiteruai.netlify.app")