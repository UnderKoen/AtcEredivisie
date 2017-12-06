function nextSlideShow(t) {
    var items = t.getElementsByClassName("items")[0].getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        var element = items[i];
        if (element.classList.contains("active")) {
            i = i + 1;
            if (i === items.length) i = 0;
            var next = items[i];
            element.classList.remove("active");
            next.classList.add("active");
            break
        }
    }
}

function previousSlideShow(t) {
    var items = t.getElementsByClassName("items")[0].getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        var element = items[i];
        if (element.classList.contains("active")) {
            i = i - 1;
            if (i === -1) i = items.length - 1;
            var next = items[i];
            element.classList.remove("active");
            next.classList.add("active");
            break
        }
    }
}

var autoSlideShow = new Map();

function startSlideShow(t) {
    if (autoSlideShow.get(t) == null) {
        var slide = function () {
            if (autoSlideShow.get(t)) {
                nextSlideShow(t);
            }
            window.setTimeout(slide, 10000);
        };
        window.setTimeout(slide, 10000);
    }
    autoSlideShow.set(t, true);
}

function stopSlideShow(t) {
    autoSlideShow.set(t, false);
}

function showPopup(t) {
    var parent = t.parentElement.parentElement;
    if (parent.classList.contains("slideshow")) {
        stopSlideShow(parent);
    }
    var popup = document.createElement("div");
    t.insertAdjacentElement("afterend", popup);
    var close = document.createElement("i");
    popup.appendChild(close);
    var popup_img = document.createElement("div");
    popup.appendChild(popup_img);
    var img = t.cloneNode();
    popup_img.appendChild(img);
    popup.classList.add("popup");
    close.classList.add("close");
    close.innerHTML = "clear";
    popup_img.classList.add("popup-img");
    img.onclick = "";
    img.className = "";
    close.onclick = function () {
        hidePopup(popup, parent);
    };
}

function hidePopup(t, slideshow) {
    t.parentElement.removeChild(t);
    if (slideshow !== null) {
        startSlideShow(slideshow);
    }
}

function onStart() {
    var t = document.getElementsByClassName("slideshow");
    for (var i = 0; i < t.length; i++) {
        startSlideShow(t[i]);
    }
}

window.setTimeout(onStart, 100);