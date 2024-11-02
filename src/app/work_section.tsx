import React from 'react';
import Image from 'next/image';

const WorkItem = ({ icon, title, label, description }) => {
  return (
    <div className="flex items-start space-x-4 py-0">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <Image src={icon} alt={title} width={56} height={56} className="w-10 h-10 rounded-full" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="inline-block bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-full mt-1 mb-2">
          {label}
        </span>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WorkSection = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold">Work</h2>
      <p className="text-gray-600 mb-6">
        Products or online appearances I've built or contributed to for clients.
      </p>
      <div className="space-y-6">
        <WorkItem
          icon="/marveen.png"
          title="Marveen"
          label="Eco-responsible file transfer app"
          description="Built large chunks of the mobile app and backend. Conceptioned and developed the web app with Next.js"
        />
        <WorkItem
          icon="/path-to-icon/yay-way.png"
          title="Yay Way"
          label="Circular Economy System"
          description="Built the mobile app and helped with the backend infrastructure"
        />
        <WorkItem
          icon="/path-to-icon/earnn.png"
          title="Earnn"
          label="Modern Cashback App"
          description="Contributed to the backend & mobile app with Flutter"
        />
        {/* Add more WorkItem components as needed */}
      </div>
    </section>
  );
};

export default WorkSection;
