let Validator = require('jsonschema').Validator;


let registerValidator = (instance = { userEmail, userName, userPhone, userPass, userRePass ,referral}) => {
    let v = new Validator();
    Validator.prototype.customFormats.passVal = function (pass) {
        return pass === instance.userRePass;
    };
    return v.validate(instance, {
        type: "object",
        properties: {
            userName: { type: 'string', minLength: 3, required: true },
            userEmail: { type: "string", minLength: 3, required: true },
            userPhone: { type: "string", minLength: 3, required: true },
            userPass: { type: "string", minLength: 3, required: true },
            userRePass: { type: "string", minLength: 3, required: true },
            referral: { type: "string" },
        }
    }, { nestedErrors: true });
}

let fetchError = ({ valObj = v.validate(), property = "" }) => {
    if (property) {
        property = property.includes("instance.") ? property : "instance." + property;
        let errObj = valObj.errors.find(errObj => errObj.property === property);
        if (typeof errObj === "object") {
            if (errObj) {
                
            }
            return errObj;
        }
        return false;
    }
}

export { registerValidator, fetchError }