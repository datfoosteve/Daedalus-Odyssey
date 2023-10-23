"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import classNames from 'classnames';

type PortfolioItemProps = {
    title: string;
    description: string;
    image: string;
    tags: string[];
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({
    title,
    description,
    image,
    tags,
}) => {
    return (
        <motion.div
            className={classNames(
                'flex',
                'flex-col',
                'items-center',
                'justify-center',
                'p-4',
                'bg-white',
                'shadow-lg',
                'rounded-lg',
                'overflow-hidden',
                'hover:shadow-xl',
                'transition-shadow',
                'duration-300'
            )}
            whileHover={{ scale: 1.05 }}
        >
            <Image src={image} alt={title} width={400} height={300} />
            <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
            <motion.div className="flex flex-wrap mt-4 justify-center">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        className={classNames(
                            'px-3',
                            'py-1',
                            'mr-2',
                            'mb-2',
                            'text-sm',
                            'font-medium',
                            'text-gray-700',
                            'bg-gray-200',
                            'rounded-full',
                            'hover:bg-gray-300',
                            'focus:outline-none',
                            'focus:ring-2',
                            'focus:ring-offset-2',
                            'focus:ring-gray-500'
                        )}
                    >
                        {tag}
                    </button>
                ))}
            </motion.div>
        </motion.div>
    );
};

const PortfolioPage: React.FC = () => {
    const portfolioItems = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/images/project1.jpg',
            tags: ['React', 'Tailwind CSS', 'Framer Motion'],
        },
        {
            title: 'Project 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/project2.jpg',
            tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        },
        {
            title: 'Project 3',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: '/images/project3.jpg',
            tags: ['React', 'Tailwind CSS', 'Framer Motion'],
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center flex-1 px-20">
                <h1 className="text-4xl font-bold text-center text-gray-900">
                    Portfolio Showcase
                </h1>
                <p className="mt-3 text-lg text-center text-gray-600">
                    Check out some of my recent projects.
                </p>
                <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolioItems.map((item) => (
                        <PortfolioItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            tags={item.tags}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default PortfolioPage;
