'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async template() {
    const { ctx } = this;
    const opts = {};
    if (ctx.query.tag) {
      opts.tag = { $elemMatch: { $eq: ctx.query.tag } };
    }
    const res = await ctx.model.Project.find(opts);
    ctx.body = res;
  }
}

module.exports = ProjectController;
