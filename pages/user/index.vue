<template>
  <div class="user-setting container">
    <el-form label-width="100px">
      <el-form-item label="调查员名字">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="调查员年龄">
        <el-input-number v-model="form.age" :step="1" :min="15" :max="89"></el-input-number>
      </el-form-item>
      <el-form-item class="special" label="跑团类型">
        <el-switch
          v-model="form.isFace"
          active-text="网团"
          inactive-text="面团">
        </el-switch>
      </el-form-item>

      <el-button type="primary" @click="nextStep">下一步</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'user',
  data() {
    return {
      form: {
        name: '',
        age: 15,
        isFace: true,
      },
    }
  },
  methods: {
    nextStep() {
      this.$router.push('/user/card')
    },
  },
}
</script>

<style lang="stylus" scoped>
.user-setting {
  .el-form {
    .el-button {
      margin-top: 20px
      width: 100%
    }
    .el-switch {
      user-select: none
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0)
      -webkit-tap-highlight-color: transparent
    }
  }
}
</style>

<style lang="stylus">
.user-setting {
  .el-form {
    .special {
      height: 38px
      line-height: 38px
    }
  }
}
</style>
