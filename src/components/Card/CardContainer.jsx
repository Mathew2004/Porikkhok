import React from 'react';
import Card from './Card';

const CardContainer = () => {
    const cardContent = [
        {
            "title": "পরীক্ষক: পরীক্ষার সমাধান!",
            "description": "১০ লক্ষাধিক প্রশ্নের ডেটাবেজ থেকে প্রশ্ন তৈরি করুন ও পরীক্ষা নিন কয়েক সেকেন্ডে!"
        },
        {
            "title": "ডেটাবেজ ও ব্যাচ",
            "description": "সাইন্স, আর্টস ও কমার্স সকল স্যাব্জেক্ট এর সব অধ্যায় ও টপিক এর অসংখ্য প্রশ্ন থাকায় প্রশ্ন তৈরি নিয়ে এখন চিন্তার কোনো কারণ নেই। শুধুমাত্র টপিকওয়াইজ ও স্ট্যাবভাইজ সিলেক্ট করলেই তৈরি হয়ে যাবে আপনার পরীক্ষা!"
        },
        {
            "title": "অফলাইন পরীক্ষা",
            "description": "অফলাইন পরীক্ষার জন্য প্রশ্ন কাস্টমাইজ করে প্রণয়ন, উত্তরপত্র ও OMR প্রিন্ট এবং যত ইচ্ছে তত সেট তৈরি করার সুযোগ।"
        },
        {
            "title": "অনলাইন পরীক্ষা",
            "description": "অনলাইনে যত ইচ্ছে তত জন শিক্ষার্থীর একসাথে পরীক্ষা নেওয়া এবং ব্যাচ তৈরি।"
        },
        {
            "title": "লিডারবোর্ড ও রেজাল্ট",
            "description": "শিক্ষার্থীরা পরীক্ষা শেষে লিডারবোর্ডে নিজ অবস্থান দেখতে পারবে এবং পরীক্ষক চাইলেই অভিভাবকদের ফলাফল মেসেজও করতে পারবেন।"
        },
        {
            "title": "লিডারবোর্ড ও রেজাল্ট",
            "description": "শিক্ষার্থীরা পরীক্ষা শেষে লিডারবোর্ডে নিজ অবস্থান দেখতে পারবে এবং পরীক্ষক চাইলেই অভিভাবকদের ফলাফল মেসেজও করতে পারবেন।"
        }


    ];

    // cardContent.map((item) => console.log(item.title));


    return (
        <div className="container mx-auto px-7 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    cardContent.map((item, index) =>
                        <Card key={index}
                            title={item.title}
                            description={item.description} />
                    )
                }

            </div>
        </div>
    );
};

export default CardContainer;