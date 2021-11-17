/*

Hello, Name or World!

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"

*/

// solution:
function hello(name) {
    if (name == null || name == '' || name == undefined) {
        return 'Hello, World!';
    } else {
        name = name.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return `Hello, ${name}!`;
    }
}

// solution-2:
function hello(name) {
    if (name) {
        return "Hello, " + name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
        return "Hello, World!";
    }
}
