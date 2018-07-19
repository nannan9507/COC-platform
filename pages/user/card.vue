<template>
  <div class="user-setting container">
    <el-form label-width="80px">
      <!-- <el-form-item :label="type.label" v-for="type in typelist" :key="type.name">
        <el-input-number v-if="adjust.number && adjust.type.indexOf(type.name) > -1" v-model="form[type.name]" :step="1" :min="type.min" :max="user.property[type.name]" @change="getMin(type)"></el-input-number>
        <template v-else>{{ user.property[type.name] }}</template>
      </el-form-item> -->
      <!-- <el-form-item>
        <el-button type="primary" @click="nextStep" :disabled="!isPass">下一步</el-button>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
import Skill from '~/models/mods/Skill.js'
// import Investigator from '~/models/Investigator.js'
// console.log(Skill)

export default {
  layout: 'user',
  data() {
    return {
    }
  },
}

// export default {
//   layout: 'user',
//   components: {
//   },
//   data() {
//     return {
//       adjust: {
//         number: 0,
//         type: [],
//         nowCount: 0,
//       },
//       typelist: [
//         {
//           label: '力量',
//           name: 'STR',
//         },
//         {
//           label: '体质',
//           name: 'CON',
//         },
//         {
//           label: '体型',
//           name: 'SIZ',
//         },
//         {
//           label: '敏捷',
//           name: 'DEX',
//         },
//         {
//           label: '外貌',
//           name: 'APP',
//         },
//         {
//           label: '智力',
//           name: 'INT',
//         },
//         {
//           label: '意志',
//           name: 'POW',
//         },
//         {
//           label: '教育',
//           name: 'EDU',
//         },
//       ],
//       user: {},
//       form: {
//         name: '',
//         age: 15,
//       },
//     }
//   },
//   created() {
//     // 初始化form type
//     this.typelist.forEach(type => {
//       this.$set(this.form, type.name, '')
//       type.min = 0
//     })

//     this.test()
//   },
//   computed: {
//     isPass() {
//       if (!this.form.name || !this.form.age) {
//         return false
//       }

//       return true
//     },
//   },
//   methods: {
//     test() {
//       // this.form.name = 'aaa'
//       // this.form.age = 42
//       // this.nextStep()
//     },
//     // async nextStep() {
//     //   if (this.steps === 0) {
//     //     // 创建用户
//     //     await this.createUser()
//     //     // 调整属性
//     //     await this.sureProperty()
//     //   } else if (this.steps === 1) {
//     //     // 选择职业
//     //   } else if (this.steps === 2) {
//     //     // 创建背景
//     //   } else if (this.steps === 3) {
//     //   }

//     //   this.steps++
//     // },
//     /**
//      * 创建用户并且初始化属性
//      */
//     async createUser() {
//       const { name, age } = this.form
//       this.user = new Investigator({ name, age, })
//       await this.user.init()
//       const { number, type } = await this.user.adjustByAge()
//       this.adjust.number = number
//       this.adjust.type = type

//       // 根据岁数调整属性值
//       const proplist = Object.keys(this.user.property)
//       proplist.forEach(prop => {
//         // 赋值
//         this.form[prop] = this.user.property[prop]
//       })

//         // 设置最小值
//       this.typelist.forEach(type => {
//         // 记录值
//         type.flag = this.form[type.name]
//       })
//     },
//     /**
//      * 确认属性值
//      */
//     async sureProperty() {

//     },
//     getMin(type) {
//       // 上一次的值
//       const item = this.typelist.filter(item => {
//         return item.name === type.name
//       })[0]

//       const last = item.flag
//       const now = this.form[type.name]

//       // 计算当前是增还是减
//       const diff = now - last
//       const symbol = diff < 0 ? '+' : '-'

//       if (symbol === '+') {
//         this.adjust.nowCount++
//       } else {
//         this.adjust.nowCount--
//       }

//       this.typelist.forEach(item => {
//         if (this.adjust.nowCount === this.adjust.number) {
//           item.min = this.form[item.name]
//         } else {
//           item.min = 0
//         }
//       })

//       // 每次记录当前的值
//       item.flag = this.form[type.name]
//     },
//   }
// }
</script>

<style lang="stylus" scoped>
.user-setting {
  .el-form {
    // width: 40%
    .el-button {
      margin-top: 20px
      width: 100%
    }
  }
}
</style>
