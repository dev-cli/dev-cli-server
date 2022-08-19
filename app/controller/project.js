'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async template() {
    const { ctx } = this;
    const res = await ctx.model.Project.find({});
    ctx.body = res;
  }
}

module.exports = ProjectController;
