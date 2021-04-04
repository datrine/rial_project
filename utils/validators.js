import validator from 'validator';
import { memoFn } from "./utilFns"
let host = process.env.SELF_URL || process.env.NEXT_PUBLIC_SELF_URL
let registerValidator = async (instance = {
    userEmail: "", userName: "", userPhone: "", userPass: "", userRePass: "", referral
}) => {
    let { userEmail, userName, userPass, userPhone, userRePass, referral } = instance
    //console.log(instance)
    let errorList = []

    if (!validator.isLength(userName, { min: 1 })) {
        let errObj = {
            msg: "Username cannot be blank",
            info: "Fill username",
            prop: "userName",
            value: userName
        }
        errorList.push(errObj)
    }

    if (!validator.isLength(userName, { min: 4 })) {
        let errObj = {
            msg: "Username length cannot be less than 4",
            info: "Username length must be up to 4.",
            prop: "userName",
            value: userName
        }
        errorList.push(errObj)
    }

    else {
        try {
            let resUsernameVerify = await memoFn(fetch, `${host}/api/verify/username?q=${userName}`, {
                method: "GET"
            }, `username_${userName}`)
            let resObjUsernameVerify = {};
            if (("bodyUsed" in resUsernameVerify) && (resUsernameVerify.bodyUsed === false)) {
                resObjUsernameVerify = await memoFn(`username_${userName}`, await resUsernameVerify.json())
            }
            else if (("isExistingUsername" in resUsernameVerify)) {
                resObjUsernameVerify = await memoFn(`username_${userName}`);
            }
            else {
                resObjUsernameVerify = await memoFn(`username_${userName}`);
            }
            let { isExistingUsername, err } = resObjUsernameVerify
            if (isExistingUsername) {
                let errObj = {
                    msg: "Username already exists",
                    info: "Ensure username is unique",
                    prop: "userName",
                    value: userName,
                }
                errorList.push(errObj)
            } else if (err) {
                let errObj = {
                    msg: typeof err === "string" ? err : err.msg,
                    info: "Retry later please...",
                    prop: "userName",
                    value: userName,
                }
                errorList.push(errObj)
            }
        } catch (err) {
            let errObj = {
                msg: err,
                info: "Retry later please...",
                prop: "userName",
                value: userName,
            }
            errorList.push(errObj)
        }
    }

    if (!validator.isMobilePhone(userPhone, "en-NG")) {
        let errObj = {
            msg: "Phone format is not valid",
            info: "Ensure phone is a valid format",
            prop: "userPhone",
            value: userPhone,
        }
        errorList.push(errObj)
    }

    if (!validator.isEmail(userEmail)) {
        let errObj = {
            msg: "Email is not valid",
            info: "Ensure email is a valid format",
            prop: "userEmail",
            value: userEmail,
        }
        errorList.push(errObj)
    }
    else if (validator.isEmail(userEmail)) {
        try {
            let res = await memoFn(fetch, `${host}/api/verify/email?q=${userEmail}`, {
                method: "GET"
            }, `email_${userEmail}`)
            let resObj = {};
            if (("bodyUsed" in res) && (res.bodyUsed === false)) {
                resObj = await memoFn(`email_${userEmail}`, await res.json())
            }
            else if (("isExistingEmail" in res)) {
                resObj = await memoFn(`email_${userEmail}`);
            }
            else {
                resObj = await memoFn(`email_${userEmail}`);
            }
            let { isExistingEmail, err } = resObj
            if (isExistingEmail) {
                let errObj = {
                    msg: "Email already exists",
                    info: "Ensure email is unique",
                    prop: "userEmail",
                    value: userEmail,
                }
                errorList.push(errObj)
            } else if (err) {
                let errObj = {
                    msg: typeof err === "string" ? err : err.msg,
                    info: "Retry later please...",
                    prop: "userEmail",
                    value: userEmail,
                }
                errorList.push(errObj)
            }
        } catch (err) {
            console.log(err)
            let errObj = {
                msg: err,
                info: "Retry later please...",
                prop: "userEmail",
                value: userEmail,
            }
            errorList.push(errObj)
        }
    }

    if (validator.isAlpha(userPass)) {
        let errObj = {
            msg: "Password not valid without a number or a special character",
            info: "Include a number or a special character",
            prop: "userPass",
            value: userPass,
        }
        errorList.push(errObj)
    }

    let passwordScore = validator.isStrongPassword(userPass,
        {
            minLength: 6, minLowercase: 1, minUppercase: 0, minNumbers: 1,
            pointsForContainingNumber: 10,
            pointsForContainingSymbol: 10, pointsForContainingLower: 8, pointsPerUnique: 8,
            pointsForContainingUpper: 8, returnScore: true
        })
    if (passwordScore < 70) {
        let errObj = {
            msg: "Password not strong enough",
            info: "Ensure password length is at least 6 characters and has at least a number",
            prop: "userPass",
            value: userPass,
        }
        errorList.push(errObj)
    }

    if (!validator.equals(userPass, userRePass)) {
        let errObj = {
            msg: "Passwords don't match",
            info: "",
            prop: "userPass",
            value: userPass,
        }
        errorList.push(errObj)
    }
    console.log(errorList)
    if (errorList.length > 0) {
        return { valid: false, errorList };
    };
    return { valid: true, instance };
}

let adminRegisterValidator = async (instance = {
    adminEmail: "", adminPass: "", adminRePass: ""
}) => {
    let { adminEmail, adminPass, adminRePass, } = instance
    //console.log(instance)
    let errorList = []

    if (!validator.isEmail(adminEmail)) {
        let errObj = {
            msg: "Email is not valid",
            info: "Ensure email is a valid format",
            prop: "userEmail",
            value: adminEmail,
        }
        errorList.push(errObj)
    }

    else if (validator.isEmail(adminEmail)) {
        try {
            let res = await memoFn(fetch, `${host}/api/verify/email?q=${adminEmail}`, {
                method: "GET"
            }, `email_${adminEmail}`)
            let resObj = {};
            if (("bodyUsed" in res) && (res.bodyUsed === false)) {
                resObj = await memoFn(`email_${adminEmail}`, await res.json())
            }
            else if (("isExistingEmail" in res)) {
                resObj = await memoFn(`email_${adminEmail}`);
            }
            else {
                resObj = await memoFn(`email_${adminEmail}`);
            }
            let { isExistingEmail, err } = resObj
            if (isExistingEmail) {
                let errObj = {
                    msg: "Email already exists",
                    info: "Ensure email is unique",
                    prop: "userEmail",
                    value: adminEmail,
                }
                errorList.push(errObj)
            } else if (err) {
                let errObj = {
                    msg: typeof err === "string" ? err : err.msg,
                    info: "Retry later please...",
                    prop: "userEmail",
                    value: adminEmail,
                }
                errorList.push(errObj)
            }
        } catch (err) {
            console.log(err)
            let errObj = {
                msg: err,
                info: "Retry later please...",
                prop: "userEmail",
                value: adminEmail,
            }
            errorList.push(errObj)
        }
    }

    if (validator.isAlpha(adminPass)) {
        let errObj = {
            msg: "Password not valid without a number or a special character",
            info: "Include a number or a special character",
            prop: "userPass",
            value: adminPass,
        }
        errorList.push(errObj)
    }

    let passwordScore = validator.isStrongPassword(adminPass,
        {
            minLength: 6, minLowercase: 1, minUppercase: 0, minNumbers: 1,
            pointsForContainingNumber: 10,
            pointsForContainingSymbol: 10, pointsForContainingLower: 8, pointsPerUnique: 8,
            pointsForContainingUpper: 8, returnScore: true
        })
    if (passwordScore < 70) {
        let errObj = {
            msg: "Password not strong enough",
            info: "Ensure password length is at least 6 characters and has at least a number",
            prop: "userPass",
            value: adminPass,
        }
        errorList.push(errObj)
    }

    if (!validator.equals(adminPass, adminRePass)) {
        let errObj = {
            msg: "Passwords don't match",
            info: "",
            prop: "userPass",
            value: adminPass,
        }
        errorList.push(errObj)
    }
    console.log(errorList)
    if (errorList.length > 0) {
        return { valid: false, errorList };
    };
    return { valid: true, instance };
}

let phoneValidator = (instance = { phoneNum: "", operator: "" }) => {
    let { phoneNum, operator } = instance
    phoneNum = phoneNum.trim()
    let errorList = []
    let operatorList = ["MTN", "GLO", "Airtel", "9mobile"]
    if (operatorList.indexOf(operator) === -1) {
        let errObj = {
            msg: "Mobile operator unknown",
            info: "Ensure operator ID is any of MTN, GLO, Airtel or 9mobile",
            prop: "operator",
            value: operator,
        }
        errorList.push(errObj)
    }

    if (!validator.isMobilePhone(phoneNum, "en-NG")) {
        let errObj = {
            msg: "Phone format is not valid",
            info: "Ensure phone is a valid format",
            prop: "phoneNum",
            value: phoneNum,
        }
        errorList.push(errObj)
    }
    else {
        if (operator === "MTN") {
            let foundMatch = false;
            let mtnList = ["0803", "0703", "0903", "0806", "0706", "0813", "0810", "0814", "0816"]
            for (const operator of mtnList) {
                if (phoneNum.trim().startsWith(operator)) {
                    foundMatch = true;
                    break;
                }
            } if (!foundMatch) {
                let errObj = {
                    msg: "Phone number does not match a valid MTN number",
                    info: "Ensure phone number is an MTN number",
                    prop: "phoneNum",
                    value: phoneNum,
                }
                errorList.push(errObj)
            }
        }

        if (operator === "GLO") {
            let foundMatch = false;
            let gloList = ["0705", "0805", "0807", "0811", "0815", "0905"]
            for (const operator of gloList) {
                if (phoneNum.trim().startsWith(operator)) {
                    foundMatch = true;
                    break;
                }
            } if (!foundMatch) {
                let errObj = {
                    msg: "Phone number does not match a valid GLO number",
                    info: "Ensure phone number is an GLO number",
                    prop: "phoneNum",
                    value: phoneNum,
                }
                errorList.push(errObj)
            }
        }

        if (operator === "Airtel") {
            let foundMatch = false;
            let airtelList = ["0701", "0708", "0802", "0808", "0812", "0901", "0902", "0907"]
            for (const operator of airtelList) {
                if (phoneNum.trim().startsWith(operator)) {
                    foundMatch = true;
                    break;
                }
            } if (!foundMatch) {
                let errObj = {
                    msg: "Phone number does not match a valid Airtel number",
                    info: "Ensure phone number is an Airtel number",
                    prop: "phoneNum",
                    value: phoneNum,
                }
                errorList.push(errObj)
            }
        }

        if (operator === "9mobile") {
            let foundMatch = false;
            let etisalatList = ["0809", "0817", "0818", "0907", "0908"]
            for (const operator of etisalatList) {
                if (phoneNum.trim().startsWith(operator)) {
                    foundMatch = true;
                    break;
                }
            } if (!foundMatch) {
                let errObj = {
                    msg: "Phone number does not match a valid 9mobile number",
                    info: "Ensure phone number is an 9mobile number",
                    prop: "phoneNum",
                    value: phoneNum,
                }
                errorList.push(errObj)
            }
        }
    }
    console.log(errorList)
    if (errorList.length > 0) {
        return { valid: false, errorList };
    };
    return { valid: true, instance };
}


let fetchError = ({ errorList = [], prop = "" }) => {
    if (prop) {
        let errObj = errorList.find(errObj => errObj.prop === prop);
        if (typeof errObj === "object") {
            return errObj;
        }
        return false;
    }
}

export { registerValidator, fetchError, phoneValidator,adminRegisterValidator }