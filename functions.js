/**
 * Removes part of string between two sub strings
 * @param {string} text The original string
 * @param {string} start The starting string
 * @param {string} end The ending string
 * @return {string} The string in between
 * @throws (Error} If start or end not found
 */
function between(string, start, end) {
    var startAt = string.indexOf(start);
    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }
    return string.slice(startAt, endAt);
}
/**
 * Returns an area code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 * @throws {Error} If the format is incorrect
 */
function getAreaCode(phoneNum) {
    var areaCode;
    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        }
        else {
            throw new Error("Invalid area code: " + areaCode);
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
}
/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
/**
 * Returns an CO code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The CO code
 * @throws {Error} If the format is incorrect
 */
function getCoCode(phoneNum) {
    var coCode;
    try {
        coCode = between(phoneNum, ")", "-");
        coCode = coCode.trim();
        if (coCode.length == 3 && Number(coCode)) {
            return coCode;
        }
        else {
            throw new Error("Invalid CO code: " + coCode);
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
}
/**
 * Displays the co code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayCoCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var coCode = getCoCode(phoneNum);
        outputText = "Your CO code is " + coCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
/**
 * Returns an Line code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The Line code
 * @throws {Error} If the format is incorrect
 */
function getLineCode(phoneNum) {
    var lineCode;
    var Index
    try {
        Index = phoneNum.indexOf("-");
        lineCode = phoneNum.slice((Index + 1));
        if (Index == -1) {
            throw new Error("Invalid Line code: No - found")
        }
        if (lineCode.length == 4 && Number(lineCode)) {
            return lineCode;
        }
        else {
            throw new Error("Invalid Line code: " + lineCode);
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
}
/**
 * Displays the line code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayLineCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var lineCode = getLineCode(phoneNum);
        outputText = "Your Line code is " + lineCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
/**
 * Uses getAreaCode, getLineCode, getCoCode functions to determine whether or not each section of the phone numer is valid. Determines whether phone numer is too long
 * @param   {string} phoneNum The phone number
 * @returns {string} the phone number
 * @throws {Error} If any of the phone number is invalid
 */
function phoneNumberValidator(phoneNum) {
    if ((getAreaCode(phoneNum)).isNaN) {
        return getAreaCode(phoneNum);
    }
    if ((getLineCode(phoneNum)).isNaN) {
        return getLineCode(phoneNum);
    }
    if ((getCoCode(phoneNum)).isNaN) {
        return getCoCode(phoneNum);
    }
    if (phoneNum.length != 14) {
        throw new Error("Invalid phone number: Incorrect length")
    }
    else {
        return phoneNum;
    }
}
/**
 * Displays the phone number code for an inputted phone number along with a message for the user
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayPhoneNumberValidator(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    try {
        var phoneNum = phoneNumberValidator(phoneNum);
        outputText = "Your phone number " + phoneNum + " is valid";
    }
    catch (error) {
        outputText = "Your phone number " + phoneNum + " is invalid. Please write in in format (###) ###-####.";
    }
    document.getElementById(outputId).innerHTML = outputText;
}
