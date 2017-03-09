QUnit.test("Test the getAreaCode() function.", function (assert) {
    var num = "(415) 444-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});
QUnit.test("Test the getCoCode() function.", function (assert) {
    var num = "(415) 444-5555";
    var result = getCoCode(num);
    assert.deepEqual(result, "444", "Valid CO code test passed.");
});
QUnit.test("Test the getLineCode() function.", function (assert) {
    var num = "(415) 444-5555";
    var result = getLineCode(num);
    assert.deepEqual(result, "5555", "Valid Line code test passed.");
});
QUnit.test("Test the phoneNumberChecker() function.", function (assert) {
    var num = "(415)453-4352";
    phoneNumberChecker(num);
    assert.equal(document.getElementById("output").value, "VALID", "We expect the value to be VALID.");
    var num = "4153335678";
    phoneNumberChecker(num);
    assert.equal(document.getElementById("output").value, "INVALID", "We expect the result to be INVALID.");
    var num = "435";
    phoneNumberChecker(num);
    assert.equal(document.getElementById("output").value, "INVALID", "We expect the result to be INVALID.");
});
