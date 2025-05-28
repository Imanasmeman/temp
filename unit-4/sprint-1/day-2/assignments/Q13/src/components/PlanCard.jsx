import React from 'react';
import FeatureItem from './FeatureItem';
import Button from './Button';

function PlanCard({ title, price, buttonColor }) {
  return (
    <div className="plan-card">
      <div className="left">
        <h2>{title}</h2>
        <FeatureItem text="1 lorem ipsum" />
        <FeatureItem text="Lorem, ipsum dolor." />
        <FeatureItem text="Monthly Updates" />
      </div>
      <div className="right">
        <h2 className="price">{price}</h2>
        <Button text="Get Started" color={buttonColor} />
      </div>
    </div>
  );
}

export default PlanCard;