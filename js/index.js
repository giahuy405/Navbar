function domID(id) {
    return document.getElementById(id);
}

var open = domID('open');
var closer = domID('closer');
var navList = domID('navList');

function windowResize(breakpoint) {
    if (breakpoint.matches) {
        // nếu như breakpoint === 767.98px -> hiện bar tắt close 
        if (breakpoint.matches) {
           // cái navList luôn ẩn do ta dùng right:-100% và overflow hidden cho nó, khi nhấn nút mới gắn class changeBar { right:0 } right:0 vào
            open.classList.remove('none');
            closer.classList.add('none');
        } else { // ngược lại tắt bar hiện close
            // cái navList luôn ẩn do ta dùng right:-100% và overflow hidden cho nó, khi nhấn nút mới gắn class changeBar { right:0 } right:0 vào
            closer.classList.remove('none');
            open.classList.add('none');
        }
    }
}

var breakpoint = window.matchMedia("(max-width: 767.98px)");
// hàm này sẽ chạy đầu tiên 
windowResize(breakpoint);
// khi người dùng thay đổi màn hình -> xoay ngang điện thoại,tablet
breakpoint.addEventListener("change", () => {
    console.log(breakpoint);
    windowResize(breakpoint);
});
// khi nút bar được click thì hiện cái nav-list lên
open.addEventListener("click", function () {
    navList.classList.add("changeBar");
    // hiện nút close 
    closer.classList.remove("none");
    // tắt nút bar 
    open.classList.add("none");
});
// ngược lại 
closer.addEventListener("click", function () {
    navList.classList.remove("changeBar");
    // tắt nút close 
    closer.classList.add("none");
    // hiện nút bar 
    open.classList.remove("none");

});