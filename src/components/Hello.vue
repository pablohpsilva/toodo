<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}">
    <q-toolbar
      slot="header">
      <q-toolbar-title>
        Quasar App
        <div slot="subtitle">Running on Quasar v{{$q.version}}</div>
      </q-toolbar-title>
    </q-toolbar>

    <div class="flex row full-width drag-wrapper no-wrap">
      <template
        v-for="(list, index) in lists">
        <div class="flex column list-wrapper">
          <p>{{ list.title }}</p>
          <draggable
            @add="added"
            :list="list.data"
            class="drag-area"
            :options="{
              forceFallback: true,
              fallbackTolerance: 0,
              group:{
                name:'people',
                put: index !== 0
              }
            }">
            <transition-group
              name="list-complete">
              <div
                v-for="(element, index) in list.data"
                :key="index"
                class="list-complete-item">
                {{element.name}}
              </div>
            </transition-group>
          </draggable>
        </div>
      </template>
    </div>

  </q-layout>
</template>

<script>
  import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSide,
    QItemMain
  } from 'quasar'
  import Draggable from 'vuedraggable'

  export default {
    name: 'index',
    data () {
      return {
        lists: [
          {
            validation: true,
            title: 'List 1',
            data: [
              { name: '111111', valid: false },
              { name: '2222222', valid: false },
              { name: '33333333', valid: false }
            ]
          },
          {
            validation: true,
            title: 'List 2',
            data: [
              { name: '444444444', valid: false }
            ]
          }
        ]
      }
    },
    computed: {
    },
    components: {
      Draggable,
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QItem,
      QItemSide,
      QItemMain
    },
    methods: {
      added (event) {
        console.log(event)
      }
    },
    mounted () {
    },
    beforeDestroy () {
    }
  }
</script>

<style>
/* body {
  background: #E1F1F7;
} */

.list-wrapper {
  background: rgb(234, 234, 234);
  margin: 0 4px;
  padding: 8px;
}

.list-wrapper p {
  padding: 0 1px;
  color: rgb(72, 63, 63);
  font-family: Roboto;
  font-weight: 400;
  display:inline-block;
  width: 250px;
  white-space: nowrap;
  overflow:hidden !important;
  text-overflow: ellipsis;
}

.list-complete-item {
  padding: 8px;
  background: rgba(255, 255, 255, 1);
  margin-top: 10px;
  height: 80px;
  /* border: solid 1px rgba(0, 0, 0, .36); */
  box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 0px 0px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  border-radius: 3px;
  transition: all .36s;
}

.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
}

.drag-wrapper {
  overflow-x: scroll;
  padding: 8px 0;
  flex-wrap: unset;
}

.drag-area {
  height: calc(100vh - 50px);
  max-height: calc(100vh - 125px);
  width: 250px;
  overflow-y: scroll;
}

.drag-area
.list-complete-item:first-child {
  margin: 0;
}

.drag-area span {
  display: block;
  height: 100%;
}

.sortable-drag {
  -webkit-transition: -webkit-transform .1s ease-out !important;
  -moz-transition: -moz-transform .1s ease-out !important;
  -o-transition: -o-transform .1s ease-out !important;
  transition: transform .1s ease-out !important;
}
</style>
