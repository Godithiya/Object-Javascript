// Cara untuk membuat Object pada Javascript
    // 1. Object Literal
        let mahasiswa = {
            // properti object
            nama : "Angga Adithiya",
            energi : 10,
            // end of properti object

            // method object
            makan : function(porsi){
                this.energi = this.energi + porsi;
                console.log(`Halo ${this.nama}, selamat makan!`);
            }
            // end of object
        }
        let mahasiswa2 = {
            // properti object
            nama : "Adam",
            energi : 10,
            // end of properti object

            // method object
            makan : function(porsi){
                this.energi = this.energi + porsi;
                console.log(`Halo ${this.nama}, selamat makan!`);
            }
            // end of object
        }
    // end of object literal

    // 2. Function Declaration
        function Mahasiswa(nama, energi){
            let mahasiswa = {};
            mahasiswa.nama = nama;
            mahasiswa.energi = energi;

            mahasiswa.makan = function(porsi){
                this.energi += porsi;
                console.log(`Halo ${this.nama}, selamat makan!`);
            }

            mahasiswa.main = function(jam){
                this.energi -= jam;
                console.log(`Halo ${this.nama}, selamat main :) `)
            }

            return mahasiswa;
        }

        // kita lakukan instansiasi
        let angga = Mahasiswa("Angga", 10);
        let adam = Mahasiswa('Adam', 10);

    // end of function declaration

    // 3. Constructor Function
        // keywordnya mew
        function Mahasiswa(nama, energi){
            this.nama = nama;
            this.energi = energi;

            this.makan = function(porsi){
                this.energi += porsi;
                console.log(`Halo ${this.nama}, selamat makan!`);
            }

            this.main = function(jam){
                this.energi -= jam;
                console.log(`Halo ${this.nama}, selamat main :) `)
            }
        }

        // instansiasi harus menggunakan new sebelum memanggil/menggunakan functionnya
        let rafi = new Mahasiswa('Rafi', 10)
        let agung = new Mahasiswa('Agung', 10)
        // apa itu instansiasi? Instansiasi adalah sebuah istilah yang mempunyai arti perwujudan,umumnya istilah ini digunakan untuk objek" yang menginisiasi dari sebuah class, sedangkan sebuah class dapat mempunyai banyak object. Untuk dapat membuat sebuah objek, kita perlu melakukan instansiasi.
        
    // end of constructor function

    // 4. Object.create()
        
    // end of Object.create()