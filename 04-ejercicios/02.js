function nombreResolucion(ancho,alto) {
    let res;
    if(ancho >= 7680 && alto >= 4320){
        return '8K';
    }
    else if (ancho >=3840 && alto >= 2160){
        return '4K';
    }
    else if (ancho <=2560 && alto >= 1440){
        return 'WQHD';
    }
    else if (ancho >=1920 && alto >= 1080){
        return 'FHD';
    }
    else if (ancho >=1280 && alto >= 720){
        return 'HD';
    }
    else {
        return false;
    }

    //CODIGO LARGO VERIFICANDO UNA Y LUEGO LA OTRA EN BASE A LA PRIMERA

    // if(ancho < 1280){
    //     return false;
    // }
    // else if (ancho>=1280){
    //     res = 'HD';
    // }
    // else if (ancho>=1920){
    //     res = 'FHD';
    // }
    // else if (ancho>=2560){
    //     res = 'WQHD';
    // }
    // else if (ancho>=3840){
    //     res = '4K';
    // }
    // else if (ancho>=7680){
    //     res = '8K';
    // }

    // switch(res) {
    //     case 'HD':
    //     if(alto >= 720)
    //         return 'HD'
    //     break;
    //     case 'FHD':
    //         if(alto >= 1080)
    //         return 'FHD'
    //     break;
    //     case 'WQHD':
    //         if(alto >= 1440)
    //         return 'WQHD'
    //     break;
    //     case '4K':
    //         if(alto >= 2160)
    //         return '4K'
    //     break;
    //     case '8K':
    //         if(alto >= 4320)
    //         return '8K'
    //     break;

    //     default: 
    //     return false;
    //     break;
    // }

}

let nombre = nombreResolucion(1366,768);
console.log(nombre);