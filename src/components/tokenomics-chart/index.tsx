import { ResponsivePie } from '@nivo/pie';
import { TokenData } from './data';

export const TokenomicsChart = () => {
  return (
    <ResponsivePie
      data={TokenData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={5}
      cornerRadius={3}
      activeOuterRadiusOffset={10}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['brighter', 0.2]]
      }}
      colors={(prop) => prop.data.color}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#ffffff"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLabels={false}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['brighter', 4]]
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 10,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 20
        }
      ]}
    />
  );
};
