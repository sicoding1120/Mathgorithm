export const BaseResponse = () => {
    const SuccessResponse = (result, a, b, operation, operationSymbol) => {
        return {
            result: result,
            explain: `karena anda telah menginput data ${a} dan ${b} dengan operasi aritmakia ${operation} (${operationSymbol}) maka akan menghasilkan angka ${result} `
        }
    }

    const FailedResponse = (error) => {
        return {
            error: error,
            explain: `terjadi kesalahan pada operasi aritmatika, error: ${error}`
        }
    }

    return {
        SuccessResponse,
        FailedResponse
    }
}