// fs package
const fs = require("fs");

const transfer = (ctx, options) => {

    const { name, path, mimetype = "text/plain" } = options;

    if (!!name || !!path) {
        throw new Error("File name or path are invalid or not informed yet.");
    }

    ctx.status = 200;
    ctx.body = fs.createReadStream(path);
    ctx.set("Content-disposition", `attachment; filename=${name}`;
    ctx.set("Content-type", `${mimetype}`);
    return true;

};

module.exports = transfer;
