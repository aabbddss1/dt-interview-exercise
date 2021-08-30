import React from 'react';

import Bullet, { Font, Margin, Size, Tooltip } from 'devextreme-react/bullet';

export default function DiscountCell(cellData) {
  return (
    <Bullet
      showTarget={false}
      showZeroLevel={false}
      value={cellData.value * 1}
      startScaleValue={100}
      endScaleValue={3000}
    >
      <Size width={150} height={35} />
      <Margin top={5} bottom={0} left={5} />
      <Tooltip
        enabled={true}
        paddingTopBottom={2}
        zIndex={5}
        customizeTooltip={customizeTooltip}
      >
        <Font size={18} />
      </Tooltip>
    </Bullet>
  );
}

function customizeTooltip(data) {
  return {
    text: `${parseInt(data.value)}`
  };
}
