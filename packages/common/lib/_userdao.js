const db = require("./_db");

(function(exports) {
    exports.getByIdentifier = identifier => value => {
        return Object.assign(
            {},
            db[
                Object.keys(db).find(id => {
                    return db[id][identifier] === value;
                })
            ]
        );
    };

    exports.getByUsername = username => {
        return exports.getByIdentifier("username")(username);
    };

    exports.getByEmailAddress = email_address => {
        return exports.getByIdentifier("email_address")(email_address);
    };

    exports.signin = (identifier, password) => {
        let user = exports.getByUsername(identifier) || exports.getByEmailAddress(identifier);
        if (user) {
            if (user.password === password) {
                delete user.password;
                return user;
            }
            throw new Error("invalid credentials");
        }
        throw new Error("could not find your account");
    };
})(module.exports);
