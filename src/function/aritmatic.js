const pertambahan = (a, b, option) => {
    const result = a + b;
    return {
        result: result,
        explain: `karena anda telah menginput data ${a} dan ${b} dengan operasi aritmakia penjumlahan (+) maka akan menghasilkan angka ${result} `
    }
}

const pengurangan = (a, b, option) => {
    const result = a - b;
    return {
        result: a - b,
        explain: `karena anda telah menginput data ${a} dan ${b} dengan operasi aritmakia pengurangan (-) maka akan menghasilkan angka ${result} `
    }
}

const perkalian = (a, b, option) => {
    const result = a * b;
    return {
        result: result,
        explain: `karena anda telah menginput data ${a} dan ${b} dengan operasi aritmakia perkalian (*) maka akan menghasilkan angka ${result} `
    }
} 

const pembagian = (a, b, option) => {
    const result = a / b;
    return {
        result: result,
        explain: `karena anda telah menginput data ${a} dan ${b} dengan operasi aritmakia pembagian (/) maka akan menghasilkan angka ${result} `
    }
}

const modulo = (a, b, option) => {
    const result = a % b;
    return {
        result: result,
        explain: `karena anda telah menginput data ${a} dan ${b} dengan operasi aritmakia modulo (%) maka akan menghasilkan angka ${result} `
    }
}

const pangkat = (a, b, option) => {
    const result = a ** b;
    return {
        result: result,
        explain: `karena anda telah menginput data ${a} dan ${b} dengan operasi aritmakia pangkat (**) maka akan menghasilkan angka ${result} `
    }
}

const akar = (a, option) => {
    const result = Math.sqrt(a);
    return {
        result: result,
        explain: `karena anda telah menginput data ${a} dengan operasi aritmakia akar (√) maka akan menghasilkan angka ${result} `
    }
}   