$('#modal-benar, #modal-salah').hide();
$(document).ready(function() {
    let nol = "<i class='far fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i>";
    let satu = "<i class='fas fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i>";
    let dua = "<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i>";
    let tiga = "<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i>";
    let empat = "<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='far fa-star'></i>";
    let lima = "<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i>";
    
    let i = 0;
    $('#jawabana1').click(function(){
        $('#modal-benar').show();
        i += 10;
        console.log(i);
        $('#test1').hide();
        $('#test2').removeClass('d-none');
        $('#test2').show();
    });
    $('#jawabana2').click(function(){
        $('#modal-benar').show();
        i += 10;
        console.log(i);
        $('#test2').hide();
        $('#test3').removeClass('d-none');
        $('#test3').show();
    });
    $('#jawabana3').click(function(){
        $('#modal-benar').show();
        i += 10;
        console.log(i);
        $('#test3').hide();
        $('#test4').removeClass('d-none');
        $('#test4').show();
    });
    $('#jawabana4').click(function(){
        $('#modal-benar').show();
        i += 10;
        console.log(i);
        $('#test4').hide();
        $('#test5').removeClass('d-none');
        $('#test5').show();
    });
    $('#jawabana5').click(function(){
        $('#modal-benar').show();
        i += 10;
        console.log(i);
        $('#test5').hide();
        $('#hasil-easy').removeClass('d-none');
        $('#hasil-easy').show();
        document.getElementById('isi-hasil').innerHTML=i;
        if ( i == 0 ) {
            document.getElementById('bintang').innerHTML=nol;
        } else if ( i == 10 ) {
            document.getElementById('bintang').innerHTML=satu;
        } else if ( i == 20 ) {
            document.getElementById('bintang').innerHTML=dua;
        } else if ( i == 30 ) {
            document.getElementById('bintang').innerHTML=tiga;
        } else if ( i == 40 ) {
            document.getElementById('bintang').innerHTML=empat;
        } else if ( i == 50 ) {
            document.getElementById('bintang').innerHTML=lima;
        }
        
    });


    $('#jawabanb1, #jawabanc1, #jawaband1').click(function() {
        $('#modal-salah').show();
        $('#test1').hide();
        $('#test2').removeClass('d-none');
        $('#test2').show();
    });
    $('#jawabanb2, #jawabanc2, #jawaband2').click(function() {
        $('#modal-salah').show();
        $('#test2').hide();
        $('#test3').removeClass('d-none');
        $('#test3').show();
    });
    $('#jawabanb3, #jawabanc3, #jawaband3').click(function() {
        $('#modal-salah').show();
        $('#test3').hide();
        $('#test4').removeClass('d-none');
        $('#test4').show();
    });
    $('#jawabanb4, #jawabanc4, #jawaband4').click(function() {
        $('#modal-salah').show();
        $('#test4').hide();
        $('#test5').removeClass('d-none');
        $('#test5').show();
    });
    $('#jawabanb5, #jawabanc5, #jawaband5').click(function() {
        $('#modal-salah').show();
        $('#test5').hide();
        $('#hasil-easy').removeClass('d-none');
        $('#hasil-easy').show();
        document.getElementById('isi-hasil').innerHTML=i;
        if ( i == 0 ) {
            document.getElementById('bintang').innerHTML=nol;
        } else if ( i == 10 ) {
            document.getElementById('bintang').innerHTML=satu;
        } else if ( i == 20 ) {
            document.getElementById('bintang').innerHTML=dua;
        } else if ( i == 30 ) {
            document.getElementById('bintang').innerHTML=tiga;
        } else if ( i == 40 ) {
            document.getElementById('bintang').innerHTML=empat;
        } else if ( i == 50 ) {
            document.getElementById('bintang').innerHTML=lima;
        }
    });
   
   

    
    $('.modalku').click(function(){
        $('.modalku').hide();
    });
});