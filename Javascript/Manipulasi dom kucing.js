let catImage = document.querySelector("#catImage");
catImage.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");
undefined
catImage.getAttribute("src");

'https://i.ibb.co/55VG7vL/three-cat.jpg'
let caption = document.querySelector("#caption");
caption.innerHTML = '<em>Tiga Anak Kucing</em>'
'<em>Tiga Anak Kucing</em>'
let newElement = document.createElement('p');
undefined
newElement.innerHTML = 'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali';

'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali'
document.body.appendChild(newElement);
<p>​…​</p>​

catImage.addEventListener('click', function(event) {
   document.querySelector('#count').innerText++;
});
undefined