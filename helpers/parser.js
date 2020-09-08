/* eslint-disable arrow-body-style */
exports.successParser = (status, message, data) => {
    return {
        status,
        message,
        data,
    };
};

exports.errorParser = (status, message, data) => {
    return {
        status,
        message,
        data,
    };
};
