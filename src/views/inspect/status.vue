<template>
  <mt-page>
    <!-- header -->
    <mt-titlebar title="经营状况" slot="header"></mt-titlebar>
    <!-- 表单信息 -->
    <div class="pb60" slot="content">
      <div class="business-content">
        <div class="business-top">
          <h1 class="business-title">
            <i class="vm"></i>
            <span class="vm ml10">基础信息</span>
          </h1>
          <ul class="business-list">
            <li class="business-list_item">
              <span class="business-litem_label">主体名称</span>
              <span class="business-litem_value" id="ztmc">深圳市华美信达投资有限公司</span>
            </li>
            <li class="business-list_item">
              <span class="business-litem_label">统一社会信用代码/注册号/许可证号</span>
              <span class="business-litem_value" id="shxydm">SP8813588888888</span>
            </li>
            <li class="business-list_item">
              <span class="business-litem_label">主体地址</span>
              <span class="business-litem_value" id="ztdz">深圳市南山区西丽街道丽山路 14号大学城</span>
            </li>
            <li class="business-list_item">
              <span class="business-litem_label">法人/负责人</span>
              <span id="fr" class="business-litem_value">杨哈哈</span>
            </li>
            <li class="business-list_item">
              <span class="business-litem_label">联系电话</span>
              <!--<span class="business-litem_value" id="lxdh">17728939988</span>-->
              <div class="business-litem_value">
                <img
                  id="phonemark"
                  style="width: .4rem;height: .4rem"
                  src="src/assets/copy.png"
                  onclick="callTel();"
                />
                <span
                  id="lxdh"
                  style="width: 4rem;color: #168CEC;text-align: center;"
                  onclick="callTel();"
                ></span>
                <span
                  id="editphone"
                  class="business-litem_label"
                  style="width: 2rem;color: #168CEC;text-align: center;border-left: 1px #f5f5f5 solid;padding-left: 0.366667rem;"
                  onclick="telPrompt();"
                >编辑</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="business-top">
          <h1 class="business-title">
            <i class="vm"></i>
            <span class="vm ml10">任务类型</span>
          </h1>
          <dl id="rwlx_info" class="business-btm"></dl>

          <h1 class="business-title">
            <i class="vm"></i>
            <span class="vm ml10">被检查单位经营情况</span>
          </h1>
          <dl id="jyqk_info" class="business-btm">
            <dd class="business-btm_item">
              <label class="input-box input-box_radio">
                <input type="radio" hidden name="from" id="zcjy" checked />
                <span class="icon"></span>
                <span class="txt">正常经营（继续录入）</span>
              </label>
            </dd>
            <dd class="business-btm_item">
              <label class="input-box input-box_radio">
                <input id="jyyc" type="radio" hidden name="from" />
                <span class="icon"></span>
                <span class="txt">经营异常（进入后续处理）</span>
              </label>
            </dd>
          </dl>

          <div id="ycjy_info" class="bgw mt10" style="display: none; ">
            <dl id="ycjy_add" class="business-btm" style="margin-left: 0.3rem"></dl>
            <h2 class="business-title">
              <i class="vm"></i>
              <span class="vm ml10">补充说明</span>
            </h2>
            <textarea
              id="reMark"
              placeholder="请输入补充说明"
              style="width: 8rem; height: 2rem; font-size: 0.4rem; border: none; margin-top: 0.32rem"
            ></textarea>
          </div>
          <div id="photoShow" class="cell col case_content" style="display: none; ">
            <!-- file upload -->
            <div class="p-file-upload">
              <div class="ck-form" style="padding-top: 0; border: none;">
                <div class="cell col" style="border-bottom: 0px">
                  <label>
                    <i>*</i>
                  </label>
                  <div class="img-pnl">
                    <div id="pz" class="img-box upload-box" onclick="addpicClicked()">
                      <img src onerror="this.style.display='none'" />
                      <!--<input type="file"/>-->
                    </div>
                  </div>
                  <div id="spots"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div slot="footer">
      <div class="bottom-button mt10">
        <button class="btn-ellipse big submit-button">下一步</button>
      </div>
    </div>
  </mt-page>
</template>

<script>
import { inspectTypes, getToken } from "@/api/inspect";
export default {
  name: "Status",
  data() {
    return {};
  },
  components: {},
  mounted: function() {
    this.loadToken();
    this.loadInspectTypes();
  },
  methods: {
    async loadInspectTypes() {
      let result = await inspectTypes();
    },
    async loadToken() {
      let result = await getToken({ username: "admin" });
    }
  }
};
</script>

<style lang="less" scoped>
.business-content {
  .business-top {
    margin-bottom: 0.58666667rem;
    background-color: #fff;
    padding: 0 0 0 0.58666667rem;

    .business-title {
      font-size: 0.48rem;
      font-weight: 500;
      color: #0c87e4;
      border-bottom: 1px solid #e5e5e5;
      padding: 0.4rem 0;
    }

    .business-title i {
      display: inline-block;
      height: 0.3733333333rem;
      border-left: 0.133333333rem solid #0c87e4;
    }

    .business-list_item {
      display: -webkit-box;
      display: flex;
      flex-basis: row;
      -webkit-box-pack: justify;
      justify-content: space-between;
      padding: 0.4rem 0;
      line-height: 1.3;
      border-bottom: 1px solid #e5e5e5;

      .business-litem_label {
        font-size: 0.48rem;
        width: 3.38666667rem;
        color: #384744;
      }
      .business-litem_value {
        font-size: 0.42666667rem;
        width: calc(100% - 3.3866666666666667rem);
        text-align: right;
        color: #888888;
        margin-right: 0.58666667rem;
      }
    }
    .business-list_item:last-child {
      margin-bottom: 0;
      border-bottom: 0;
    }
  }
}

.business-content .business-btm {
  padding: 0.48rem 0.48rem 0.61333333rem 0;
  background-color: #fff;
}
.business-content .business-btm_title {
  margin-bottom: 0.53333333rem;
  color: #384744;
  font-size: 0.48rem;
  line-height: 0.48rem;
}
.business-content .business-btm_item {
  margin-bottom: 0.93333333rem;
}
.business-content .business-btm_item:last-child {
  margin-bottom: 0;
}

.button-add {
  width: 80%;
  bottom: 0.47rem;
  height: 1.33333333rem;
  color: #fff;
  background: #108ee9;
  /* box-shadow: 0px 0.21333333rem 0.42666667rem 0px rgba(16, 142, 233, 0.2); */
  border-radius: 0.66666667rem;
  font-size: 0.48rem;
  line-height: 1.33333333rem;
  left: 10%;
  margin-top: 0.8rem;
}

.button-yczradd {
  width: 42%;
  bottom: 0.47rem;
  height: 1.33333333rem;
  color: #fff;
  background: #108ee9;
  /* box-shadow: 0px 0.21333333rem 0.42666667rem 0px rgba(16, 142, 233, 0.2); */
  border-radius: 0.66666667rem;
  font-size: 0.48rem;
  line-height: 1.33333333rem;
  left: 28%;
  margin-top: 0.8rem;
}

/**
* 单选/多选样式
* 单选：input-box_radio
* 多选：input-box_checkbox··
* e.x.
* <label class="input-box input-box_radio">
*   <input type="radio" hidden>
*   <span class="icon"></span>
*   <span class=txt">。。。</span>
* </label>
*/
.input-box {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0.42666667rem;
  color: #384744;
}
.input-box .icon {
  display: inline-block;
  flex-shrink: 0;
  width: 0.69333333rem;
  height: 0.69333333rem;
  border-radius: 50%;
  border: 1px #f9f9f9 solid;
  background: url(src/assets/inspect/icon_uncheck.png) no-repeat center center;
  background-size: 100% auto;
  margin-right: 0.16rem;
}
.input-box input {
  display: none;
}
.input-box.input-box_radio input:checked + .icon {
  background-image: url(src/assets/inspect/icon_check.png);
}
.input-box.input-box_checkbox input:checked + .icon {
  background-image: url(src/assets/inspect/icon_check2.png);
}
.input-box.input-box_checkbox input:checked + .zt_content {
  color: #ffffff;
}
</style>
