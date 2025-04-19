import React from "react";
import { CalendarDays } from "lucide-react";

const TimelineItem = ({ 
  date, 
  title, 
  description, 
  image,
  delay = 0 
}: { 
  date: string; 
  title: string; 
  description: string;
  image: string;
  delay?: number;
}) => {
  return (
    <div className="timeline-item animate-slide-right" style={{ animationDelay: `${delay}s` }}>
      <div className="mb-2 flex items-center">
        <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="w-full h-[330px] overflow-hidden rounded-lg group">
  <img 
    src={image} 
    alt={title} 
    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
  />
</div>

    </div>
  );
};

const Timeline = () => {
  const timelineItems = [
    {
      date: "November 2024",
      title: "First Attempt",
      description: "The initial prototype for violence detection was built using a custom H5 model developed with Conv2D layers, TensorFlow, and OpenCV. Trained on custom dataset.",
      image: "/lovable-uploads/a1.jpg"
    },
    {
      date: "March 2025",
      title: "Second Attempt",
      description: "Built on the same H5 model, the system is now integrated with Flask to provide a sleek, modern UI—enhanced with face detection and a physical reporting feature that allows users to report violence at the press of a button.",
      image: "/lovable-uploads/a23.jpg"
    },
    {
      date: "April 2025",
      title: "Final Implementation",
      description: "Fully-featured system with YOLOv5 integration, geospatial intelligence, and centralized dashboard and violence detection monitoring system with automatic violence reporting.",
      image: "/lovable-uploads/testing.png"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-slide-up">Project Timeline</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          The evolution of our violence detection system through multiple iterations
        </p>
        
        <div className="max-w-2xl mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={index} 
              date={item.date} 
              title={item.title} 
              description={item.description}
              image={item.image}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
