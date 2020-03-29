<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.title"
        :placeholder="$t('table.title')"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('table.search') }}
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-plus"
        @click="handleCreate"
      >
        {{ $t('table.add') }}
      </el-button>

      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="danger"
        icon="el-icon-delete"
        @click="handleBatchDelete"
      >
        {{ $t('table.delete') }}
      </el-button>
    </div>

    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column :label="$t('table.name')" align="center">
        <template slot-scope="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.articleClassCover')" align="center">
        <template slot-scope="{row}">
          <img :src="row.articleClassCoverUrl" min-width="30" height="30">
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.remark')" align="center">
        <template slot-scope="{row}">
          <span>{{ row.remark }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.actions')" align="center" class-name="small-padding fixed-width" width="230">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            {{ $t('table.edit') }}
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row.id)">
            {{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.start"
      :limit.sync="listQuery.pageSize"
      @pagination="getList"
    />

    <el-dialog :title="formTitle[dialogStatus]" :visible.sync="dialogFormVisible">
      <!-- rules表示表单验证规则 -->
      <el-form ref="dataForm" :rules="rules" :model="formData" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('table.name')" prop="name">
              <el-input v-model="formData.name" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('table.articleClassCover')" prop="articleClassCover">
              <el-upload
                class="avatar-uploader"
                :action="url"
                :data="param"
                :headers="headers"
                :on-success="handleAvatarSuccess"
                :show-file-list="false"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon" />
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item :label="$t('table.remark')" prop="remark">
              <el-input
                v-model="formData.remark"
                :autosize="{ minRows: 4, maxRows: 8}"
                type="textarea"
                placeholder="Please input"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          {{ $t('table.cancel') }}
        </el-button>
        <el-button type="primary" @click="dialogStatus==='add'?addSave():editSave()">
          {{ $t('table.confirm') }}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import waves from '@/directive/waves'
import {
  addArticleClass,
  editArticleClass,
  delArticleClass,
  delArticleClassByIds,
  getArticleClasses
} from '@/api/articleClass'
import baseData from '@/config/baseData'
import { getToken } from '@/utils/auth'
import bucket from '@/config/bucket'
import config from '@/config'

export default {
  name: 'ArticleClass',
  components: { Pagination },
  directives: { waves },
  filters: {
    whetherFilter(type) {
      var whetherFilterKeyValue = baseData.whetherOptions.reduce((acc, cur) => {
        acc[cur.key] = cur.value
        return acc
      }, {})
      return whetherFilterKeyValue[type]
    }
  },
  data() {
    return {
      imageUrl: null,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        start: 1,
        pageSize: 20,
        title: null
      },
      formData: {
        id: '',
        name: null,
        articleClassCover: null,
        remark: null
      },
      dialogFormVisible: false,
      dialogStatus: '',
      formTitle: {
        edit: this.$t('Edit'),
        add: this.$t('Add')
      },
      whetherOptions: baseData.whetherOptions,
      rules: {
        attrName: [{ required: true, message: '必填', trigger: 'change' }]
      },
      headers: {
        Authorization: 'Bearer ' + getToken()
      },
      url: config.apiUrl.dev + '/api/oss/uploadOSS',
      param: bucket.bucketPubR
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(file)
      console.log(res)
      if (res.code === 200) {
        this.imageUrl = URL.createObjectURL(file.raw)
        this.formData.articleClassCover = res.data.id
      }
    },
    getList() {
      this.listLoading = true
      getArticleClasses(this.listQuery).then(res => {
        console.log(res)
        this.list = res.data.data
        this.total = res.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    resetTemp() {
      this.formData = {
        id: '',
        name: null,
        articleClassCover: null,
        remark: null
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'add'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(data) {
      this.formData = Object.assign({}, data)// copy obj
      this.dialogStatus = 'edit'
      this.dialogFormVisible = true
      this.imageUrl = data.articleClassCoverUrl
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    addSave() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          console.log(this.formData)
          addArticleClass(this.formData).then((res) => {
            this.$message.success(res.message)
            this.getList()
            this.dialogFormVisible = false
          })
        }
      })
    },
    editSave() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          console.log(this.formData)
          editArticleClass(this.formData).then((res) => {
            console.log(res)
            this.$message.success(res.message)
            this.getList()
            this.dialogFormVisible = false
          })
        }
      })
    },
    handleDelete(data) {
      this.$confirm('确定删除该数据吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (data instanceof Array) {
          delArticleClassByIds(data).then((res) => {
            this.getList()
            this.$message.success('res.message')
          })
        } else {
          delArticleClass(data).then((res) => {
            this.getList()
            this.$message.success('res.message')
          })
        }
      }).catch(() => {
        this.$message.info('已取消')
      })
    },
    handleBatchDelete() {
      var datas = this.$refs.multipleTable.selection
      var ids = []
      if (datas.length === 0) {
        this.$message.error('请选择至少一条数据')
        return
      }
      for (var i = 0; i < datas.length; i++) {
        ids.push(datas[i].id)
      }
      this.handleDelete(ids)
    }
  }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
