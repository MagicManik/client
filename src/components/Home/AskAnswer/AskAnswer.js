import React from 'react';
import './AskAnswer.css';

const AskAnswer = () => {
    return (
        <div className='bg-primary w-full pb-24'>
            <h1 className='text-center py-12'>Frequently Asked Questions</h1>
            <div className=' lg:px-48'>
                <div tabIndex="0" className="collapse collapse-arrow border accordiaon-bg">
                    <div className="collapse-title text-2xl font-bold">
                        What is Pioneerflix?
                    </div>
                    <div className="collapse-content text-xl">
                        <p className='pb-2'>Pioneerflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                </div>
            </div>
            <div className=' lg:px-48'>
                <div tabIndex="0" className="collapse collapse-arrow border accordiaon-bg">
                    <div className="collapse-title text-2xl  font-bold">
                        How much does Pioneerflix cost?
                    </div>
                    <div className="collapse-content text-xl">
                        <p className='pb-2'>Watch Pioneerflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 3.99 to USD 11.99 a month. No extra costs, no contracts.</p>
                    </div>
                </div>
            </div>
            <div className=' lg:px-48'>
                <div tabIndex="0" className="collapse collapse-arrow border accordiaon-bg">
                    <div className="collapse-title text-2xl  font-bold">
                        Where can I watch?
                    </div>
                    <div className="collapse-content text-xl">
                        <p className='pb-2'>Watch anywhere, anytime. Sign in with your Pioneerflix account to watch instantly on the web at https://Pioneerflix.netlify.app/ from your personal computer or on any internet-connected device that offers the Pioneerflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        </p>
                        <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Pioneerflix with you anywhere.</p>
                    </div>
                </div>
            </div>
            <div className=' lg:px-48'>
                <div tabIndex="0" className="collapse collapse-arrow border accordiaon-bg">
                    <div className="collapse-title text-2xl  font-bold">
                        How do I cancel?
                    </div>
                    <div className="collapse-content text-xl">
                        <p className='pb-2'>Pioneerflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </p>
                    </div>
                </div>
            </div>
            <div className=' lg:px-48'>
                <div tabIndex="0" className="collapse collapse-arrow border accordiaon-bg">
                    <div className="collapse-title text-2xl  font-bold">
                        What can I watch on Pioneerflix?
                    </div>
                    <div className="collapse-content text-xl">
                        <p className='pb-2'>Pioneerflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Pioneerflix originals, and more. Watch as much as you want, anytime you want.
                        </p>
                    </div>
                </div>
            </div>
            <div className=' lg:px-48'>
                <div tabIndex="0" className="collapse collapse-arrow border accordiaon-bg">
                    <div className="collapse-title text-2xl  font-bold">
                        Is Pioneerflix is for kids?
                    </div>
                    <div className="collapse-content text-xl">
                        <p className='pb-2'>The Pioneerflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                        </p>
                        <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskAnswer;