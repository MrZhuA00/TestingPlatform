// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入各种图表，图表后缀都为 Chart
import { BarChart, PieChart, LineChart, CustomChart } from 'echarts/charts'; //这里我引用两个类型的图表
// 引入提示框，标题，直角坐标系等组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    ToolboxComponent,
    LegendComponent,
    // PolarComponent
    // seriesComponent
    // GeoCoComponent
    DataZoomComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    LineChart,
    PieChart,
    // PolarComponent,
    // LiquidFillChart,
    CanvasRenderer,
    ToolboxComponent,
    // seriesComponent
    DataZoomComponent,
    CustomChart
]);

export default echarts;
