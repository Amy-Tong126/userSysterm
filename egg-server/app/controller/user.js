'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller 用户管理
 */

class UserController extends Controller {
  /**
  * @summary 创建用户
  * @description 创建用户，记录用户账户/密码/类型 
  * @router post /user
  * @request body createUserRequest *body
  * @response 200 baseResponse 创建成功
  */
  async index() {
    const { ctx, service } = this;
    // a();
    // ctx.body = 'user ctrl999';
    // 参数校验
    // console.log(ctx.rule.createUserRequest);
    ctx.validate(ctx.rule.createUserRequest);
    // 组装参数
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    const res = await service.user.create(payload);
    ctx.helper.success({ ctx, res });
  }


}

module.exports = UserController;
