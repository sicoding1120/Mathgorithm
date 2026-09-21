export const segitiga = (a, b, c, sudut, besarsudut) => {
    if (!isNumber(a) || !isNumber(b) || !isNumber(c)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const keliling = a + b + c;
    const luas = 1 / 2 * a * b;
    const semiperimeter = keliling / 2;
    switch (sudut) {
        case 'siku':
            luas = 1 / 2 * a * b;
            break;
        case 'samakaki':
            luas = 1 / 2 * a * c;
            break;
        case 'sembarang':
            luas = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
            break;
    }

    if (!Array.isArray(besarsudut)) {
        return "Program yang dimasukan salah"
    }
}

export const persegi = (s) => {
    if (!isNumber(s)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const luas = s * s;
    const keliling = 4 * s;
    const diagonal = Math.sqrt(2) * s;
    const lsdp = 1 / 2 * luas;

    return { luas, keliling, diagonal, lsdp };
}

export const persegiPanjang = (p, l) => {
    if (!isNumber(p) || !isNumber(l)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const luas = p * l;
    const keliling = 2 * (p + l);
    return { luas, keliling };
}

export const lingkaran = (r, PI) => {
    if (!isNumber(r)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }

    const pi = Math.PI;

    switch (PI) {
        case '3.14':
            pi = 3.14;
            break;
        case '22/7':
            pi = 22 / 7;
            break;
        default:
            return "Program yang dimasukan salah";
    }
    const luas = Math.PI * r * r;
    const keliling = 2 * Math.PI * r;
    return { luas, keliling };
}

export const trapesium = (a, b, c, d, sudut, besarsudut, kategori) => {
    
    if (!isNumber(a) || !isNumber(b) || !isNumber(c) || !isNumber(d)) {
            return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const keliling = a + b + c + d;

    const result = {
        keliling,
    }
    switch (kategori) {
        case "sk":
            return {
                ...result, 
                sisiMiring: 2
            }
            
        default:
            return "Tidak ada Kategori trapesium yang terdaftar";
        
    }
}