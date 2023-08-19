// https://unsplash.com/jaでサモエドの画像URLの一部を手動で回収
const src = [
    "1557109849-e4318569d309",
    "1590209354901-93ec5731b9ec",
    "1636998094434-96c8e4635184",
    "1639655051507-28423cee3637",
    "1608466241709-b7a5cd87164a",
    "1653384616158-83090dd5b68d",
    "1625334955193-c7c208aba883",
    "1681228792245-79ce140ccca5",
    "1671202763812-539806f76255",
    "1673267570755-883dd54fd422",
]

// 現在表示している画像のインデックス
let index = 0;

// 画面全体と対応するコンテナ
const container = document.createElement("div");
container.classList.add("container");

// 最初の画像のセット
const image = document.createElement("img");
image.classList.add("image");
image.src = `https://images.unsplash.com/photo-${src[index]}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80`;
image.alt = "mofuinu (samoyed)"

// 画像を切り替えているところかどうか
let isTansitioning = false;

// 画像を切り替える関数
const changeImage = () => {
    if (isTansitioning) return;

    isTansitioning = true;
    index = (++index) % src.length; // 画像のインデックスを周回させる
    image.classList.add("fade-out");
    setTimeout(() => {
        image.src = `https://images.unsplash.com/photo-${src[index]}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80`;
        image.classList.remove("fade-out");
        isTansitioning = false;
    }, 300)
};

// 画面クリック時に画像を切り替える
container.addEventListener('click', changeImage);

// DOMの構成
container.appendChild(image);
document.body.appendChild(container);
