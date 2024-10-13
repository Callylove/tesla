// src/store/types.ts
export interface ChartOptions {
  chart: {
    id: string;
    type: string; // Add the type property here
    animations: {
      enabled: boolean;
      easing: string;
      speed: number;
      animateGradually: {
        enabled: boolean;
        delay: number;
      };
      dynamicAnimation: {
        enabled: boolean;
        speed: number;
      };
    };
  };
  xaxis: {
    type: string;
  };
  title: {
    text: string;
    align: string;
  };
  subtitle: {
    text: string;
    align: string;
  };
  labels: string[];
  yaxis: {
    opposite: boolean;
  };
  legend: {
    horizontalAlign: string;
  };
}

export interface ChartData {
  series: Array<{
    name: string;
    data: number[];
  }>;
  options: ChartOptions;
}

export interface State {
  chartData: ChartData;
}
