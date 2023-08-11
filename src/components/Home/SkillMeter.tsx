import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const SkillMeter: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
            avoidLabelOverlap: false,
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
            labelLine: {
              show: false,
            },
            data: [{ value: 100, name: 'Python - 95%' }, { value: 5 }],
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
