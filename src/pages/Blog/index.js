import Link from 'next/link'
import React from 'react'

// step 1 : Collect all the files from blogData directory
// step 2: Iterate through the blogs and show them 
const Blog = () => {
    return (
        <>
            <div className=" my-10">
                <div className="container px-40 block mx-auto">
                    <div className="card-1 mb-16  ">
                        <Link href={'/Blogpost/Regular Exercise'}>
                            <h3 className="mb-5 text-blue-600 font-semibold text-lg ">
                                The Benefits of Regular Exercise
                            </h3>
                        </Link>
                        <p className="text-[#666]">
                            Discover the numerous benefits of incorporating regular exercise
                            into your daily routine. From improved physical health to mental
                            well-being, find out why exercise is essential for a balanced
                            lifestyle.
                        </p>
                    </div>

                    <div className="card-1 mb-16">
                        <Link href={'/Blogpost/Traveling'}>
                            <h3 className="mb-5 text-blue-600 font-semibold text-lg">
                                Traveling on a Budget: Tips and Tricks
                            </h3>
                        </Link>
                        <p className="text-[#666]">
                            Learn how to make the most of your travel experiences without
                            breaking the bank. Explore budget-friendly destinations,
                            accommodation options, and money-saving strategies for an
                            unforgettable journey.
                        </p>
                    </div>

                    <div className="card-1 mb-16">
                        <Link href={'/Blogpost/Time Management'}>
                            <h3 className="mb-5 text-blue-600 font-semibold text-lg">
                                Mastering Time Management for Productivity
                            </h3>
                        </Link>
                        <p className="text-[#666]">
                            Unlock the secrets of effective time management to boost your
                            productivity and achieve your goals. Explore practical techniques
                            and tools to optimize your daily schedule and make the most of
                            your time.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog