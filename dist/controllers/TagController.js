"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagController = void 0;
const Tag_1 = require("../models/Tag");
class TagController {
    async handle(req, res) {
        //@ts-ignore
        const { name } = req.body;
        const tag = new Tag_1.Tag();
        tag.name = name;
        await tag.save(tag);
        return res.json(tag);
    }
}
exports.TagController = TagController;
