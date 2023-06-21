const validateEmailAddress = (email) => {
    let validEmailAddress = false;

    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validEmailRegex)) {
        validEmailAddress = true;
    }
    return validEmailAddress
}

module.exports.validateEmailAddress = validateEmailAddress;
