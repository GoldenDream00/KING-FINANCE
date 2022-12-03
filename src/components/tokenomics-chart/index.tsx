import { ResponsivePie } from '@nivo/pie';
import { useTranslation } from 'react-i18next';

export const DeskTopTokenChart = () => {
  const { t } = useTranslation();
  const TokenData = [
    {
      id: `${t('token.staking')}`,
      label: `${t('token.staking')} 4%`,
      value: 4,
      color: '#B1B1B1'
    },
    {
      id: `${t('token.burned')}`,
      label: `${t('token.burned')} 20%`,
      value: 20,
      color: '#FEE496'
    },
    {
      id: `${t('token.holding')}`,
      label: `${t('token.holding')} 60%`,
      value: 60,
      color: '#FBA037'
    },
    {
      id: `${t('token.liquidity')}`,
      label: `${t('token.liquidity')} 16%`,
      value: 16,
      color: '#FFFFFF'
    }
  ];

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
      arcLinkLabelsStraightLength={56}
      arcLabelsSkipAngle={10}
      tooltip={() => <></>}
      theme={{ fontSize: 20 }}
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

export const MobileTokenChart = () => {
  const { t } = useTranslation();
  const TokenData = [
    {
      id: `${t('token.staking')}`,
      label: `${t('token.staking')} 4%`,
      value: 4,
      color: '#B1B1B1'
    },
    {
      id: `${t('token.burned')}`,
      label: `${t('token.burned')} 20%`,
      value: 20,
      color: '#FEE496'
    },
    {
      id: `${t('token.holding')}`,
      label: `${t('token.holding')} 60%`,
      value: 60,
      color: '#FBA037'
    },
    {
      id: `${t('token.liquidity')}`,
      label: `${t('token.liquidity')} 16%`,
      value: 16,
      color: '#FFFFFF'
    }
  ];
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
      theme={{ fontSize: 30 }}
      enableArcLinkLabels={false}
      tooltip={() => <></>}
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
