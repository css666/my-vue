<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>小米笔记本</h2>
        <p>全新升级：第八代四核处理器，深空灰配色</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  购买数量：
              </div>
              <div class="sales-board-line-right">
                  <v-counter :max="100" :min="20"></v-counter>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  媒介：
              </div>
              <div class="sales-board-line-right">
                  <v-mul-chooser :selections="versionList"></v-mul-chooser>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                  一年
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                  500 元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>全金属机身指笔记本的外壳全部采用金属阳极工艺制作，不包含屏幕、键盘、转轴等组成部件。4.0 GHz为i7-8550U的最高睿频。显卡性能数据来自小米实验室，基于MX150四核版顶配对比940MX经典版顶配，采用3D MARK 11P进行跑分测试。内存标准DDR4 2400 MHz 对比上一代 DDR3 1866 MHz 频率提升28%。 SSD传输速度数据来自小米实验室。游戏配置基于i7-8550U/MX150 2GB/8GB/256GB。散热数据来自小米实验室，对比对象为小米笔记本Air 13.3” 指纹版。清晰度对比1080p分辨率的24英寸显示器是其1.8倍。 充电数据来自小米实验室，1C 快充技术相比一般 0.7C 快充技术，充电效率快30%；关机或者休眠情况下使用自带电源充电，从0至50%电量需30分钟。电池续航时间是使用国际测试标准 MobileMark 2014测试。电池寿命因不同因素而异，包括产品型号、配置、加载的应用、功能、使用情况、无线功能及电源管理设置。使用一段时间后，电池的最大容量将有所下降。有关其他详细信息，请访问 http://www.bapco.com。无LOGO设计特指正面表壳，笔记本屏幕及底壳含商标MI标志。屏幕、主板为示意图，具体以实物为准。本页中的内存容量、尺寸厚度重量、屏幕开合角度等数据均为理论值，实测中存在合理误差。</p>
      </div>
  </div>
</template>

<script>
import VCounter from '../../components/base/counter'
import VMulChooser from '../../components/base/multiplyChooser'
export default {
  components: {
    VCounter,
    VMulChooser
  },
  data () {
    return {
      versionList: [
        {
          label: '纸质报告',
          value: 0
        },
        {
          label: 'pdf',
          value: 1
        },
        {
          label: '页面报告',
          value: 2
        },
        {
          label: '邮件',
          value: 3
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
