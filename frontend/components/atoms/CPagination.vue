<template>
  <div class="pagination">
    <el-pagination :current-page="page" small background :total="props.total" :page-size="props.limit" :pager-count="4"
      class="mt-4" :layout="paginationLayout" @current-change="paginateHandler" />
  </div>
</template>
<script lang="ts" setup>
import { watch, computed, ref, Ref } from "vue"
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()

const props = withDefaults(
  defineProps<{
    total: number;
    limit: number;
  }>(),
  {
    limit: 10,
  }
)

const pageQuery = computed(() => Number(route.query?.page || 1))

const page: Ref<number> = ref(1)

const paginationLayout = computed(() => {
  const firstPage = 1
  const lastPage = Math.ceil(Number(props.total) / Number(props.limit))

  if (page.value === firstPage && page.value === lastPage) {
    return "pager"
  } else if (page.value === firstPage) {
    return "pager, next"
  } else if (page.value === lastPage) {
    return "prev, pager"
  } else {
    return "prev, pager, next"
  }
})

watch(
  () => pageQuery.value,
  () => {
    page.value = pageQuery.value
  },
  {
    immediate: true,
  }
)

const paginateHandler = (nextPage: number) => {
  page.value = nextPage

  router.push({
    query: {
      page: nextPage,
    },
  })
}
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;

  .el-pagination {
    display: flex !important;
    justify-content: center !important;

    .el-pager {

      .number {
        border-radius: 8px !important;
        background-color: #cfcfcf !important;
        color: #FFF;
        font-weight: 700;
        font-size: 14px;
        line-height: 13px;
        text-align: center;
        text-transform: uppercase;
        margin: 0 3px !important;
        width: 32px;
        height: 32px;

        &.is-active {
          &.is-active {
            background-color: #169bc5 !important;
          }

        }

        .more {
          background-color: #cfcfcf !important;
          color: #FFF;
          border-radius: 8px;
          width: 32px;
          height: 32px;
        }

      }

      button {

        &.btn-next,
        &btn-prev {

          .el-icon {
            color: white !important;
            right: 0 !important;
          }
        }

        &.btn-prev,
        &.btn-next {
          background-color: #cfcfcf !important;
          border-radius: 8px !important;
          width: 32px;
          height: 32px;
        }

        &:disabled {
          display: none !important;
        }

        i {
          right: 4px;
        }
      }
    }
  }
}
</style>
