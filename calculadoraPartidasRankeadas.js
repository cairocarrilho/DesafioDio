function partidaRankeada(vitorias, derrotas){
    let resultado = vitorias - derrotas
    let nivel;
    if(resultado <= 10){
        nivel = 'FERRO'
    }else if(resultado > 10 && resultado <= 20){
        nivel= 'Bronze'
    }else if(resultado > 21 && resultado <= 50){
        nivel= 'Prata'
    }else if(resultado > 51 && resultado <= 80){
        nivel= 'Ouro'
    }else if(resultado > 81 && resultado <= 90){
        nivel= 'Diamante'
    }else if(resultado > 91 && resultado <= 100){
        nivel= 'Lendario'
    }else{
         nivel= 'IMORTAL'
    }

    return `O Herói tem de saldo de ${resultado} está no nível de ${nivel}`

}

console.log(partidaRankeada(150, 140 ))