<template>
<div class="search">
    <Header>
    <div class="center" slot="center">
        <input type="text" v-model="keyword" placeholder="雅马哈吉他">
    </div>
    <div @click="search" class="right" slot="right">
      搜索
    </div>
  </Header>
  <div class="main">
    <div class="history-search" v-if="historySearchs.length>0">
      <div class="title">
        <h2>历史搜索</h2>
        <i @click="del" class="icon icon-del"></i>
      </div>
      <div class="list">
        <router-link class="search-item" v-for="(item,index) in historySearchs"
        :key="index" :to="`/list?keyword=${encodeURI(item)}`">
          {{item}}
        </router-link>
      </div>
    </div>
    <div class="hot-search" v-if="hots.length>0">
      <div class="title">
        搜索发现
      </div>
      <div class="list">
         <router-link class="search-item" :to="`/list?keyword=${encodeURI(item)}`"
      v-for="(item, index) in hots" :key="index">
        {{item}}        
      </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getItem, setItem, removeItem } from "../helper/database.js";
import { isEmpty, uniq } from "lodash";
export default {
  data() {
    return {
      keyword: "",
      hots: ["珠江教学钢琴", "小号", "日芬"],
      historySearchs: getItem("historySearchs") || []
    };
  },
  watch: {
    historySearchs: {
      deep: true,
      handler(newVal) {
        setItem("historySearchs", uniq(newVal));
      }
    }
  },
  methods: {
    search() {
      if (isEmpty(this.keyword)) {
        return this.$dialog.toast({ mes: "搜索内容不能为空" });
      }
      this.historySearchs.push(this.keyword);
      this.$nextTick(() => {
        this.$router.push(`/list?keyword=${encodeURI(this.keyword)}`);
      });
    },
    del() {
      const result = confirm("是否删除所有的历史记录?");
      if (result) {
        removeItem("historySearchs");
        this.historySearchs = [];
      }
    }
  }
};
</script>

