import { isNumber } from "../../utils/type.checker.js";
import { BaseResponse } from "../utils/template.response.js";

export const pertambahan = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const result = a + b;
    return BaseResponse.SuccessResponse(result, a,b, "Pertambahan" , "+");
}

export const pengurangan = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const result = a - b;
    return BaseResponse.SuccessResponse(result, a,b, "Pengurangan" , "-");
}

export const perkalian = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const result = a * b;
    return BaseResponse.SuccessResponse(result, a,b, "Perkalian" , "*");
} 

export const pembagian = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    if (b === 0) {
        return BaseResponse.FailedResponse("pembagi tidak boleh nol");
    }
    const result = a / b;
    return BaseResponse.SuccessResponse(result, a,b, "Pembagian" , "/");
}

export const modulo = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    if (b === 0) {
        return BaseResponse.FailedResponse("pembagi tidak boleh nol");
    }
    const result = a % b;
    return BaseResponse.SuccessResponse(result, a,b, "Modulo" , "%");
}

export const pangkat = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const result = a ** b;
    return BaseResponse.SuccessResponse(result, a,b, "Pangkat" , "**");

}

export const akar = (a, option) => {
    if (!isNumber(a)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const result = Math.sqrt(a);
    return BaseResponse.SuccessResponse(result, a, null, "Akar" , "√");

}   