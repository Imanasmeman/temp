import React from 'react';
import PlanCard from './PlanCard';

function PlanList() {
  return (
    <div className="plan-list">
      <PlanCard
        title="Starter"
        price="Free"
        buttonColor="#d1d5db"
      />
      <PlanCard
        title="Lorem Plus"
        price="$32.00"
        buttonColor="#a78bfa"
      />
      <PlanCard
        title="Lorem Pro"
        price="$50.00"
        buttonColor="#d1d5db"
      />
    </div>
  );
}

export default PlanList;