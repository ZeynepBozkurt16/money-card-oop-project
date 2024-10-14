class migrosBase {
     indirimOran = 20;
    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {
        let odenecekTutar = 0;
        //ürün varsa
        if (this.urunVarmi(this.urunler)) {
            // money kart var mı 
            if (this.kartVarmi) {
             this.urunler.forEach(urun => {
                 odenecekTutar += urun.fiyat * (100-this.indirimOran)/100;
             });
            }
            // money kart yoksa
            else {
             this.urunler.forEach(urun => {
                    odenecekTutar += urun.fiyat;
                });
            }
        }

        else {
            alert("ürün yok");
        }
        return odenecekTutar
    }

    urunVarmi(urunler) {
        if (this.urunler.length > 0) {
            return true;
        } else {
            return false;
        }

    }

}