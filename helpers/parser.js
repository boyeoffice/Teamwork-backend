/* eslint-disable arrow-body-style */
exports.successParser = (status, message, data) => {
    return {
        status,
        message,
        data,
        version: '1.0.0',
    };
};

exports.errorParser = (status, message, data) => {
    return {
        status,
        message,
        data,
        version: '1.0.0',
    };
};
