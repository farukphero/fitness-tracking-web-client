import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesData = [
        {id: 1, 
        name: 'Diet',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sMPMzeEUZBprfOs7WTcOqwNTL1-Q8B_3jg&usqp=CAU',
        description: 'Diet is very important for the health of the human body. You can maintain your daily diet with us.Leave the responsibility of your daily nutrition to us. We will track your progess.'},
        {id: 2, 
        name: 'Exercise',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YSPB7CWGVf1Sue69gD55FzP_Zq8HOvDsHw&usqp=CAU',
        description: 'Exercise is very important for the health of the human body. You can maintain your daily exercise with us.Leave the responsibility of your daily exercise to us. We will track your progess.'},
        {id: 3, 
        name: 'Daily Activities',
        image:'https://us.123rf.com/450wm/yusufdemirci/yusufdemirci1901/yusufdemirci190100100/yusufdemirci190100100.jpg?ver=6',
        description: 'Your Daily Activities is very important for the health of you. You can maintain your Daily Activities like eating, sleeping and all everything with us.Leave the responsibility of your Daily Activities to us. We will track your progess.'},
    ]
    return (
       <div className='bg-slate-700 text-white'>
         <div className='container mx-auto py-10'>
            <h1 className='text-4xl text-center font-semibold'>This is our services</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    servicesData.map(service => <ServiceCard key={service.id}
                    service={service}></ServiceCard>)
                }
            </div>
      </div>
       </div>
    );
};

export default Services;