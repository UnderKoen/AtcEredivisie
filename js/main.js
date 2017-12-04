function nextSlideShow(t) {
    var items = t.parentElement.getElementsByClassName("items")[0].getElementsByClassName("item");
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
    var items = t.parentElement.getElementsByClassName("items")[0].getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        var element = items[i];
        if (element.classList.contains("active")) {
            i = i - 1;
            if (i === -1) i = items.length-1;
            var next = items[i];
            element.classList.remove("active");
            next.classList.add("active");
            break
        }
    }
}