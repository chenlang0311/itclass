<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="chalk" unique-opened router background-color="#242f42" text-color="#fff" active-text-color="#409eff">
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [

        // {
        //   icon: "el-icon-setting",
        //   index: "readme",
        //   title: "万合传播"
        // },
        {
          icon: "el-icon-menu",
          index: "all",
          title: "优秀文案"
        },
        {
          icon: "el-icon-star-on",
          index: "advertiser",
          title: "广告主"
        },
        {
          icon: "el-icon-share",
          index: "ip",
          title: "IP地址"
        },
        {
          icon: "el-icon-edit",
          index: "operate",
          title: "操作页面",
          subs: [
            {
              index: "wxoperate",
              title: "微信账号"
            },
            {
              index: "adoperate",
              title: "订阅号"
            },
            {
              index: "hyoperate",
              title: "广告主行业"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 250px;
  left: 0;
  top: 70px;
  bottom: 0;
}

.sidebar > ul {
  height: 100%;
}
</style>
