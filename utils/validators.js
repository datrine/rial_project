import validator from 'validator';
import { memoFn } from "./utilFns"
let host = process.env.SELF_URL || process.env.NEXT_PUBLIC_SELF_URL

let registerValidator = async (instance = {
    email: "", username: "", phone_num: "", password: "", repass: "", referrer
}) => {
    let { email="", username="", password="", phone_num="", repass="", referrer } = instance
   
    let errorList = []

    if (!validator.isLength(username, { min: 1 })) {
        let errObj = {
            msg: "Username cannot be blank",
            info: "Fill username",
            prop: "username",
            value: username
        }
        errorList.push(errObj)
    }

    if (!validator.isLength(username, { min: 4 })) {
        let errObj = {
            msg: "Username length cannot be less than 4",
            info: "Username length must be up to 4.",
            prop: "username",
            value: username
        }
        errorList.push(errObj)
    }

    else {
        try {
            let resUsernameVerify = await memoFn(fetch, `${host}/api/verify/username?q=${username}`, {
                method: "GET"
            }, `username_${username}`)
            let resObjUsernameVerify = {};
            if (("bodyUsed" in resUsernameVerify) && (resUsernameVerify.bodyUsed === false)) {
                resObjUsernameVerify = await memoFn(`username_${username}`, await resUsernameVerify.json())
            }
            else if (("isExistingUsername" in resUsernameVerify)) {
                resObjUsernameVerify = await memoFn(`username_${username}`);
            }
            else {
                resObjUsernameVerify = await memoFn(`username_${username}`);
            }
            let { isExistingUsername, err } = resObjUsernameVerify
            if (isExistingUsername) {
                let errObj = {
                    msg: "Username already exists",
                    info: "Ensure username is unique",
                    prop: "username",
                    value: username,
                }
                errorList.push(errObj)
            } else if (err) {
                let errObj = {
                    msg: typeof err === "string" ? err : err.msg,
                    info: "Retry later please...",
                    prop: "username",
                    value: username,
                }
                errorList.push(errObj)
            }
        } catch (err) {
            let errObj = {
                msg: err,
                info: "Retry later please...",
                prop: "username",
                value: username,
            }
            errorList.push(errObj)
        }
    }

    if (!validator.isMobilePhone(phone_num, "en-NG")) {
        let errObj = {
            msg: "Phone format is not valid",
            info: "Ensure phone is a valid format",
            prop: "phone_num",
            value: phone_num,
        }
        errorList.push(errObj)
    }

    if (!validator.isEmail(email)) {
        let errObj = {
            msg: "Email is not valid",
            info: "Ensure email is a valid format",
            prop: "email",
            value: email,
        }
        errorList.push(errObj)
    }
    else if (validator.isEmail(email)) {
        try {
            let res = await memoFn(fetch, `${host}/api/verify/email?q=${email}`, {
                method: "GET"
            }, `email_${email}`)
            let resObj = {};
            if (("bodyUsed" in res) && (res.bodyUsed === false)) {
                resObj = await memoFn(`email_${email}`, await res.json())
            }
            else if (("isExistingEmail" in res)) {
                resObj = await memoFn(`email_${email}`);
            }
            else {
                resObj = await memoFn(`email_${email}`);
            }
            let { isExistingEmail, err } = resObj
            if (isExistingEmail) {
                let errObj = {
                    msg: "Email already exists",
                    info: "Ensure email is unique",
                    prop: "email",
                    value: email,
                }
                errorList.push(errObj)
            } else if (err) {
                let errObj = {
                    msg: typeof err === "string" ? err : err.msg,
                    info: "Retry later please...",
                    prop: "email",
                    value: email,
                }
                errorList.push(errObj)
            }
        } catch (err) {
            console.log(err)
            let errObj = {
                msg: err,
                info: "Retry later please...",
                prop: "email",
                value: email,
            }
            errorList.push(errObj)
        }
    }

    if (validator.isAlpha(password)) {
        let errObj = {
            msg: "Password not valid without a number or a special character",
            info: "Include a number or a special character",
            prop: "password",
            value: password,
        }
        errorList.push(errObj)
    }

    let passwordScore = validator.isStrongPassword(password,
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
            prop: "password",
            value: password,
        }
        errorList.push(errObj)
    }

    if (!validator.equals(password, repass)) {
        let errObj = {
            msg: "Passwords don't match",
            info: "",
            prop: "password",
            value: password,
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
    email: "", password: "", repass: "", role: "admin"
}) => {
    let { email="", password="", repass="", } = instance
    
    let errorList = []


    if (!validator.isEmail(email)) {
        let errObj = {
            msg: "Email is not valid",
            info: "Ensure email is a valid format",
            prop: "email",
            value: email,
        }
        errorList.push(errObj)
    }
    else if (validator.isEmail(email)) {
        try {
            let res = await memoFn(fetch, `${host}/api/verify/admin/email?q=${email}`, {
                method: "GET"
            }, `email_${email}`)
            let resObj = {};
            if (("bodyUsed" in res) && (res.bodyUsed === false)) {
                resObj = await memoFn(`email_${email}`, await res.json())
            }
            else if (("isExistingEmail" in res)) {
                resObj = await memoFn(`email_${email}`);
            }
            else {
                resObj = await memoFn(`email_${email}`);
            }
            let { isExistingEmail, err } = resObj
            if (isExistingEmail) {
                let errObj = {
                    msg: "Email already exists",
                    info: "Ensure email is unique",
                    prop: "email",
                    value: email,
                }
                errorList.push(errObj)
            } else if (err) {
                let errObj = {
                    msg: typeof err === "string" ? err : err.msg,
                    info: "Retry later please...",
                    prop: "email",
                    value: email,
                }
                errorList.push(errObj)
            }
        } catch (err) {
            console.log(err)
            let errObj = {
                msg: err,
                info: "Retry later please...",
                prop: "email",
                value: email,
            }
            errorList.push(errObj)
        }
    }
/**
    if (validator.isAlpha(password)) {
        let errObj = {
            msg: "Password not valid without a number or a special character",
            info: "Include a number or a special character",
            prop: "password",
            value: password,
        }
        errorList.push(errObj)
    }

    let passwordScore = validator.isStrongPassword(password,
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
            prop: "password",
            value: password,
        }
        errorList.push(errObj)
    } */

    if (!validator.equals(password, repass)) {
        let errObj = {
            msg: "Passwords don't match",
            info: "",
            prop: "password",
            value: password,
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
    let operatorList = ["mtn", "glo", "airtel", "9mobile"]
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
        if (operator === "mtn") {
            let foundMatch = false;
            let mtnList =
                ["07025", "07026", "0703", "0704", "0706",
                    "0803", "0806", "0810", "0813", "0814", "0816",
                    "0903", "0906",
                    "+2347025", "+2347026", "+234703", "+234704", "+234706",
                    "+234803", "+234806", "+234813", "+234810", "+234814",
                     "+234816",
                    "+234903", "+234906"]
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

        if (operator === "glo") {
            let foundMatch = false;
            let gloList =
                ["0705", "0805", "0807", "0811", "0815", "0905",
                    "+234705", "+234805", "+234807", "+234811", "+234815", "+234905"]
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

        if (operator === "airtel") {
            let foundMatch = false;
            let airtelList =
                ["0701", "0708", "0802", "0808", "0812", "0901", "0902", "0907", "+234701",
                    "+234708", "+234802", "+234808", "+234812", 
                    "+234901", "+234902", "+234907"]
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

export { registerValidator, fetchError, phoneValidator, adminRegisterValidator }