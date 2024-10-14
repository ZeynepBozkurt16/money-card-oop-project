let mesaj =
    ` 
migros kartınız var mı?
1-Evet
2-Hayır
`
const urunler = [
    {
        urunIsmi: "süt",
        fiyat: 15
    },
    {
        urunIsmi: "bebek bezi",
        fiyat: 100
    },
    {
        urunIsmi: "et",
        fiyat: 220
    }
]

let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc) {
    // money kartı var
    let isim = prompt("Lütfen isminizi giriniz");
    let soyisim = prompt("Lütfen soyisminizi giriniz");
    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(`müşteri bilgi ${isim} ${soyisim} ${odenecekTutar}`);

}
else {
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`müşteri bilgi ${odenecekTutar}`);
}