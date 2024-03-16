function loadURL() {
    var url = document.getElementById("url").value;
    document.getElementById("proxyFrame").src = "proxy.php?url=" + encodeURIComponent(url);
}
