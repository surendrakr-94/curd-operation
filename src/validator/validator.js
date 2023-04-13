const isValidMail = (/^([0-9a-z]([-_\\.]*[0-9a-z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,20})+$/);

const isValidPassword = function (value) {
    if (  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/.test(value) ) return true;
    return false;
  };
const isValidName = (/^[a-zA-Z. ]{3,20}$/)

const isValid = (value) => {
    if (typeof value === "undefined" || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    return true
}

const isValidfild = (value) => {
    if (typeof value === "string" && value.trim().length === 0) return false
    return true
}

const isValidRequestBody = (value) => {
    return Object.keys(value).length > 0
}




module.exports = {
    isValidMail, isValid, isValidName, isValidRequestBody,isValidPassword,isValidfild
}

