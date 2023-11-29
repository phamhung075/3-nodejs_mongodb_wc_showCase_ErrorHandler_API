'use strict';

const { StatusCodes, ReasonPhrases } = require("./httpStatusCode");

class SuccessResponse {
    constructor(data, message, status) {
        this.data = data;
        this.message = message;
        this.status = status;
    }
}

// Các class cụ thể cho từng loại phản hồi thành công
class OkResponse extends SuccessResponse {
    constructor(data, message = ReasonPhrases.OK) {
        super(data, message, StatusCodes.OK);
    }
}

class CreatedResponse extends SuccessResponse {
    constructor(data, message = ReasonPhrases.CREATED) {
        super(data, message, StatusCodes.CREATED);
    }
}

class AcceptedResponse extends SuccessResponse {
    constructor(data, message = ReasonPhrases.ACCEPTED) {
        super(data, message, StatusCodes.ACCEPTED);
    }
}

class NonAuthoritativeInformationResponse extends SuccessResponse {
    constructor(data, message = ReasonPhrases.NON_AUTHORITATIVE_INFORMATION) {
        super(data, message, StatusCodes.NON_AUTHORITATIVE_INFORMATION);
    }
}

class NoContentResponse extends SuccessResponse {
    constructor(data = null, message = ReasonPhrases.NO_CONTENT) {
        super(data, message, StatusCodes.NO_CONTENT);
    }
}

class ResetContentResponse extends SuccessResponse {
    constructor(data, message = ReasonPhrases.RESET_CONTENT) {
        super(data, message, StatusCodes.RESET_CONTENT);
    }
}

class PartialContentResponse extends SuccessResponse {
    constructor(data, message = ReasonPhrases.PARTIAL_CONTENT) {
        super(data, message, StatusCodes.PARTIAL_CONTENT);
    }
}

class MultiStatusResponse extends SuccessResponse {
    constructor(data, message = ReasonPhrases.MULTI_STATUS) {
        super(data, message, StatusCodes.MULTI_STATUS);
    }
}

class AlreadyReportedResponse extends SuccessResponse {
    constructor(data, message = ReasonPhrases.ALREADY_REPORTED) {
        super(data, message, StatusCodes.ALREADY_REPORTED);
    }
}

class IMUsedResponse extends SuccessResponse {
    constructor(data, message = ReasonPhrases.IM_USED) {
        super(data, message, StatusCodes.IM_USED);
    }
}


// ... Thêm các lớp phản hồi thành công khác theo nhu cầu ...

module.exports = {
    OkResponse,
    CreatedResponse,
    AcceptedResponse,
    NonAuthoritativeInformationResponse,
    NoContentResponse,
    ResetContentResponse,
    PartialContentResponse,
    MultiStatusResponse,
    AlreadyReportedResponse,
    IMUsedResponse
    // ... Xuất các lớp phản hồi thành công khác nếu cần ...
};