import React from 'react'

const FeatureCard = ({icon, title, descrition}) => {
  return (
    <div className="bg-primary-10 text-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
      <div className="flex-shrink-0">
        <img src={icon} alt={title} className="h-8 w-8" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-indigo-100 text-sm leading-relaxed opacity-90">{descrition}</p>
      </div>
    </div>
  )
}

export default FeatureCard