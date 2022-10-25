

function parseAndDisplayName(fullName) {
    let first = fullName.substring(0, fullName.indexOf(" "));
    let last = fullName.substring(fullName.indexOf(" ") + 1);
    console.log("Name: " + fullName + "\n" + "First name: " + first + "\n" + "Last name: " + last);

}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
