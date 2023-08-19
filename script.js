let index = 0;
function changeMofuinu() {
    const mofuinu = document.getElementById("mofuinu-image");

    // https://unsplash.com/jaでサモエドの画像URLの一部を手動で回収
    const src = [
        "1557109849-e4318569d309",
        "1590209354901-93ec5731b9ec",
        "1636998094434-96c8e4635184",
        "1639655051507-28423cee3637",
        "1608466241709-b7a5cd87164a",
        "1625334955193-c7c208aba883",
    ]
    
    index = (++index) % src.length;
    mofuinu.src = `https://images.unsplash.com/photo-${src[index]}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80`;
}
