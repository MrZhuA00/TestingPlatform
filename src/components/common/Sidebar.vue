<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <template v-for="(threeItem, i) in subItem.subs">
                                    <el-submenu v-if="threeItem.subs" :index="threeItem.index" :key="threeItem.index">
                                        <template slot="title">{{ threeItem.title }}</template>
                                        <el-menu-item v-for="(fourItem, i) in threeItem.subs" :key="i" :index="fourItem.index">
                                            {{ fourItem.title }}
                                        </el-menu-item>
                                    </el-submenu>
                                    <el-menu-item v-else :key="i" :index="threeItem.index">
                                        {{ threeItem.title }}
                                    </el-menu-item>
                                </template>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-cascades',
                    index: '1',
                    title: '????????????',
                    subs: [
                        {
                            index: 'testExecutiveProject',
                            title: '??????'
                        },
                        {
                            index: 'testVersionProject',
                            title: '????????????'
                        },
                        {
                            index: 'testNeed',
                            title: '??????'
                        },
                        {
                            index: 'testWork',
                            title: '??????'
                        },
                        {
                            index: 'testManagepool',
                            title: '???????????????',
                            subs: [
                                {
                                    index: 'projectManage',
                                    title: '????????????'
                                },
                                {
                                    index: 'projectKind',
                                    title: '????????????'
                                }
                            ]
                        },
                        {
                            index: 'testUsecase',
                            title: '????????????'
                        },
                        {
                            index: 'submitBug',
                            title: '????????????bug'
                        },
                        {
                            index: 'testReport',
                            title: '????????????'
                        },
                        {
                            index: 'reportForms',
                            title: '??????',
                            subs: [
                                {
                                    index: 'defectStatistics',
                                    title: '??????????????????',
                                    subs: [
                                        {
                                            index: 'statusDistribution',
                                            title: '?????????????????????'
                                        },
                                        {
                                            index: 'severLevel',
                                            title: '???????????????????????????'
                                        },
                                        {
                                            index: 'buildPersonSeverLevel',
                                            title: '????????????????????????????????????'
                                        },
                                        {
                                            index: 'handPersonSeverLevel',
                                            title: '??????????????????????????????'
                                        },
                                        {
                                            index: 'BugDistribution',
                                            title: '?????????bug?????????'
                                        },
                                        {
                                            index: 'ProjectDistribution',
                                            title: '????????????bug?????????'
                                        }
                                    ]
                                },
                                {
                                    index: 'trendStatistics',
                                    title: '?????????????????????',
                                    subs: [
                                        {
                                            index: 'trendDayStatistics',
                                            title: '????????????????????????'
                                        },
                                        {
                                            index: 'trendTotalStatistics',
                                            title: '????????????????????????'
                                        }
                                    ]
                                },
                                {
                                    index: 'defectAgeStatistics',
                                    title: '??????????????????'
                                },
                                {
                                    index: 'defectResetStatistics',
                                    title: '??????????????????????????????'
                                },
                                {
                                    index: 'taskTimeDistribution',
                                    title: '??????????????????'
                                },
                                // {
                                //     index: 'reportotherForm',
                                //     title: '??????????????????',
                                //     subs: [
                                //         // {
                                //         //     index: 'regressinDistribution',
                                //         //     title: '??????????????????'
                                //         // },c
                                //         {
                                //             index: 'defectForm',
                                //             title: '???????????????'
                                //         }
                                //     ]
                                // },
                                {
                                    index: 'censusForm',
                                    title: '??????????????????',
                                    subs: [
                                        {
                                            index: 'statisticalReport',
                                            title: '???????????????'
                                        },
                                        {
                                            index: 'usecaseForm',
                                            title: '?????????????????????'
                                        },
                                        {
                                            index: 'usecaseExecution',
                                            title: '???????????????????????????'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-link',
                    index: '2',
                    title: '????????????',
                    subs: [
                        {
                            index: 'testProject',
                            title: '??????'
                        },
                        {
                            index: 'testModule',
                            title: '??????'
                        },
                        {
                            index: 'testApi',
                            title: '????????????'
                        },
                        {
                            index: 'testCase',
                            title: '????????????'
                        },
                        {
                            index: 'testEnvironment',
                            title: '????????????'
                        },
                        {
                            index: 'testDatabase',
                            title: '???????????????'
                        },
                        {
                            index: 'testTaskSet',
                            title: '?????????',
                            subs: [
                                {
                                    index: 'testTaskSet',
                                    title: '???????????????'
                                },
                                {
                                    index: 'testTaskSetHistory',
                                    title: '???????????????'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-brush',
                    index: '6',
                    title: 'UI AUTO',
                    subs: [
                        {
                            index: 'uiTestStep',
                            title: 'UI?????????'
                        },
                        {
                            index: 'uiTestCase',
                            title: '????????????'
                        },
                        {
                            index: 'uiTestTaskSet',
                            title: '????????????'
                        },
                        {
                            index: 'uiLibrary',
                            title: '?????????'
                        },
                        {
                            index: 'uiTestReport',
                            title: '????????????'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-settings',
                    index: '3',
                    title: '????????????',
                    subs: [
                        {
                            index: 'testProject5',
                            title: '??????1'
                        },
                        {
                            index: 'serverList',
                            title: '???????????????'
                        },
                        {
                            index: 'clusterInfo',
                            title: '????????????'
                        }
                    ]
                },
                {
                    icon: 'el-icon-collection',
                    index: '4',
                    title: '?????????',
                    subs: [
                        // {
                        //     index: 'testKnowledgeVideo',
                        //     title: '????????????',
                        //     subs: [
                        {
                            index: 'testKnowledgeVideo',
                            title: '??????'
                        },
                        {
                            index: 'testKnowledgeFile',
                            title: '??????'
                        }
                        //     ]
                        // }
                    ]
                },
                {
                    icon: 'el-icon-sugar',
                    index: '5',
                    title: '????????????',
                    subs: [
                        {
                            index: 'prizeInfo',
                            title: '??????'
                        },
                        {
                            index: 'luckDraw',
                            title: '??????'
                        },
                        {
                            index: 'luckRules',
                            title: '??????'
                        }
                    ]
                }
                // {
                //     icon: 'el-icon-lx-home',
                //     index: 'dashboard',
                //     title: '????????????'
                // },
                // {
                //     icon: 'el-icon-lx-cascades',
                //     index: 'table',
                //     title: '????????????'
                // },
                // {
                //     icon: 'el-icon-lx-copy',
                //     index: 'tabs',
                //     title: 'tab?????????'
                // },
                // {
                //     icon: 'el-icon-lx-calendar',
                //     index: '4',
                //     title: '????????????',
                //     subs: [
                //         {
                //             index: 'form',
                //             title: '????????????'
                //         },
                //         {
                //             index: '4-2',
                //             title: '????????????',
                //             subs: [
                //                 {
                //                     index: 'editor',
                //                     title: '??????????????????'
                //                 },
                //                 {
                //                     index: 'markdown',
                //                     title: 'markdown?????????'
                //                 }
                //             ]
                //         },
                //         {
                //             index: 'upload',
                //             title: '????????????'
                //         }
                //     ]
                // },
                // {
                //     icon: 'el-icon-lx-emoji',
                //     index: 'icon',
                //     title: '???????????????'
                // },
                // {
                //     icon: 'el-icon-pie-chart',
                //     index: 'charts',
                //     title: 'schart??????'
                // },
                // {
                //     icon: 'el-icon-rank',
                //     index: '6',
                //     title: '????????????',
                //     subs: [
                //         {
                //             index: 'drag',
                //             title: '????????????'
                //         },
                //         {
                //             index: 'dialog',
                //             title: '????????????'
                //         }
                //     ]
                // },
                // {
                //     icon: 'el-icon-lx-global',
                //     index: 'i18n',
                //     title: '???????????????'
                // },
                // {
                //     icon: 'el-icon-lx-warn',
                //     index: '7',
                //     title: '????????????',
                //     subs: [
                //         {
                //             index: 'permission',
                //             title: '????????????'
                //         },
                //         {
                //             index: '404',
                //             title: '404??????'
                //         }
                //     ]
                // },
                // {
                //     icon: 'el-icon-lx-redpacket_fill',
                //     index: '/donate',
                //     title: '????????????'
                // }
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // ?????? Event Bus ??????????????????????????????????????????
        bus.$on('collapse', (msg) => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 200px;
}
.sidebar > ul {
    height: 100%;
}
.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.el-menu-item:focus,
.el-menu-item:hover {
    outline: 0;
    background-color: #ecf5ff;
}
</style>
