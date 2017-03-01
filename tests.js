QUnit.test("Test the phoneNumberChecker() function.", function (assert) {
    currentInput = (415) 453-4352
    displayCurrentInput();
    assert.equal(document.getElementById("screen").value, "VALID", "We expect the value to be VALID.");
    currentInput = 4153335678
    displayCurrentInput();
    assert.equal(document.getElementById("screen").value, "INVALID", "We expect the result to be INVALID.");
    currentInput = 435
    displayCurrentInput();
    assert.equal(document.getElementById("screen").value, "INVALID", "We expect the result to be INVALID.");
});
