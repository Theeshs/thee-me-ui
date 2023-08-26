import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface skillData {
  skillName: string
  percentage: number
}

const SkillMeter: React.FC<skillData> = (props) => {
  debugger
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    debugger
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option: echarts.EChartsOption = {
        // tooltip: {
        //   trigger: 'item',
        // },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: true,
            label: {
              show: true,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
            // labelLine: {
            //   show: false,
            // },
            data: [{ value: props.percentage, name: props.skillName, selected: true }, { value: 100 - props.percentage,  selected: false}],
          },
        ],
      };

      chart.setOption(option);

      // Cleanup
      return () => {
        chart.dispose();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default SkillMeter;
