import { graphvizRender } from "./markdown/graphvizRender";
import { highlightRender } from "./markdown/highlightRender";
import { mathRender } from "./markdown/mathRender";
import { mermaidRender } from "./markdown/mermaidRender";
import { flowchartRender } from "./markdown/flowchartRender";
import { chartRender } from "./markdown/chartRender";
import { abcRender } from "./markdown/abcRender";
import { mindmapRender } from "./markdown/mindmapRender";
import { plantumlRender } from "./markdown/plantumlRender";
import "../assets/scss/export.scss";
class Protyle {
    /** 对 graphviz 进行渲染 */
    static graphvizRender = graphvizRender;
    /** 为 element 中的代码块进行高亮渲染 */
    static highlightRender = highlightRender;
    /** 对数学公式进行渲染 */
    static mathRender = mathRender;
    /** 流程图/时序图/甘特图渲染 */
    static mermaidRender = mermaidRender;
    /** flowchart.js 渲染 */
    static flowchartRender = flowchartRender;
    /** 图表渲染 */
    static chartRender = chartRender;
    /** 五线谱渲染 */
    static abcRender = abcRender;
    /** 脑图渲染 */
    static mindmapRender = mindmapRender;
    /** UML 渲染 */
    static plantumlRender = plantumlRender;
}
export default Protyle;
