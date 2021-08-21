const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const objectName = require("../config/objectName");
const CONFIG = require("../config/config");

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: CONFIG.jwt_secret
}

const enableVerifyJWT = (passport, sfConn) => {
    passport.use("jwt", new JWTStrategy(options, (jwtPayload, done) => {
        const objectConn = sfConn.sobject(objectName.participant);
        const queryData = {
            Id: jwtPayload.Id
        };
        const filterData = {
            Id: 1,
            email__c: 1,
            Name: 1,
            Last_Name__c: 1,
            isVerified__c: 1,
            role__c: 1
        }
        objectConn.find({Id: jwtPayload.id}, filterData).limit(1).execute((err, userInfo) => {
            if (err) {
                console.log(err.message);
                return done(err, null);
            }

            if(userInfo.length === 0) {
                return done(null, null);
            }

            return done(null, userInfo[0]);
        });
    }));
}

module.exports = enableVerifyJWT;