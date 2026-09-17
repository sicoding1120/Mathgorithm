import { isNumber } from "../../utils/type.checker.js";
import { BaseResponse } from "../utils/template.response.js";

export const pertambahan = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const result = a + b;
    return BaseResponse.SuccessResponse();
}

export const pengurangan = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const result = a - b;
    return BaseResponse.SuccessResponse();
}

export const perkalian = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const result = a * b;
    return BaseResponse.SuccessResponse();
} 

export const pembagian = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    if (b === 0) {
        return BaseResponse.FailedResponse("pembagi tidak boleh nol");
    }
    const result = a / b;
    return BaseResponse.SuccessResponse();
}

export const modulo = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    if (b === 0) {
        return BaseResponse.FailedResponse("pembagi tidak boleh nol");
    }
    const result = a % b;
    return BaseResponse.SuccessResponse();
}

export const pangkat = (a, b, option) => {
    if (!isNumber(a) || !isNumber(b)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const result = a ** b;
    return BaseResponse.SuccessResponse();

}

export const akar = (a, option) => {
    if (!isNumber(a)) {
        return BaseResponse.FailedResponse("input harus berupa angka");
    }
    const result = Math.sqrt(a);
    return BaseResponse.SuccessResponse();

}   