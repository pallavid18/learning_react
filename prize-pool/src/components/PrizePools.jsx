import React from 'react';
import { Trophy, Globe, Award, FileCheck, Layers } from 'lucide-react';

const PrizePools = () => {
    // Mock Data for scalability
    const prizes = [
        { rank: '1st Prize', amount: '30,00,000', currency: 'RUSSIAN RUBLES' },
        { rank: '2nd Prize', amount: '20,00,000', currency: 'RUSSIAN RUBLES' },
        { rank: '3rd Prize', amount: '10,00,000', currency: 'RUSSIAN RUBLES' },
    ];

    const perks = [
        { icon: <Trophy className="w-5 h-5 text-red-500" />, text: 'TROPHIES & MEDALS' },
        { icon: <Globe className="w-5 h-5 text-red-500" />, text: 'GLOBAL RECOGNITION' },
        { icon: <Layers className="w-5 h-5 text-red-500" />, text: 'INTERNATIONAL OPPORTUNITIES' },
        { icon: <FileCheck className="w-5 h-5 text-red-500" />, text: 'CERTIFICATES' },
    ];

    const categories = [
        {
            title: 'Mini Category',
            subtitle: 'Robot Battle',
            members: '1-5 Members',
            weight: 'Up to 110kg',
            dimensions: '150 x 150x200 cm',
            description: 'Teams design powerful combat robots equipped with weapons, armor, and control systems.',
        },
        {
            title: 'JUNIOR Category',
            subtitle: 'Mini Robot Battle',
            members: '1-5 Members',
            weight: 'Up to 110kg',
            dimensions: '150 x 150x200 cm',
            description: 'Teams design powerful combat robots equipped with weapons, armor, and control systems.',
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans p-8 md:p-12 selection:bg-red-600 selection:text-white">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header Section */}
                <header className="space-y-2 border-b border-neutral-800 pb-6">
                    <p className="text-red-500 font-bold uppercase tracking-wider text-sm">2026 Season</p>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-red-500 tracking-tight">PrizePool</h1>
                    <p className="text-neutral-400 text-sm md:text-base max-w-3xl leading-relaxed mt-2">
                        Complete for significant prizes across both championship categories. Top teams take home major rewards with prize amounts mentioned in Russian Rubles (RUB).
                    </p>
                </header>

                {/* Prize Pool Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {prizes.map((prize, idx) => (
                        <div
                            key={idx}
                            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3 transition-all hover:border-red-500/50 hover:shadow-xl hover:shadow-red-950/20"
                        >
                            <Trophy className="w-8 h-8 text-amber-500" />
                            <h3 className="text-amber-500 font-semibold tracking-wide uppercase text-sm">{prize.rank}</h3>
                            <p className="text-3xl font-black tracking-tight text-neutral-100">{prize.amount}</p>
                            <p className="text-xs text-neutral-500 font-medium tracking-widest">{prize.currency}</p>
                        </div>
                    ))}
                </section>

                {/* Total Prize Fund Label & Perks */}
                <section className="space-y-6">
                    <div className="flex items-center space-x-2 text-xl font-bold tracking-wide uppercase text-neutral-100">
                        <Award className="w-6 h-6 text-red-500" />
                        <h2>Total Prize Fund</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                        {perks.map((perk, idx) => (
                            <div key={idx} className="flex items-center space-x-3 bg-neutral-900/50 border border-neutral-800/60 rounded-lg p-4">
                                {perk.icon}
                                <span className="text-xs md:text-sm font-semibold tracking-wide text-neutral-300">{perk.text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Competition Categories */}
                <section className="space-y-8 pt-6">
                    <div className="text-center space-y-1">
                        <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Competition Programs</p>
                        <h2 className="text-2xl font-black uppercase text-red-500 tracking-wider">Battle Categories</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {categories.map((cat, idx) => (
                            <div
                                key={idx}
                                className="bg-neutral-900 border-l-4 border-red-600 rounded-r-xl rounded-l-sm p-6 space-y-6 transition-all hover:bg-neutral-900/80"
                            >
                                <div>
                                    <span className="text-xs font-bold tracking-wider text-red-500 uppercase">{cat.title}</span>
                                    <h3 className="text-xl font-extrabold text-neutral-100 mt-1">{cat.subtitle}</h3>
                                </div>

                                <div className="grid grid-cols-3 gap-2 border-y border-neutral-800 py-4 text-xs font-medium text-neutral-400">
                                    <div className="space-y-1">
                                        <p className="text-neutral-500 text-[10px] uppercase font-bold">Team Size</p>
                                        <p>{cat.members}</p>
                                    </div>
                                    <div className="space-y-1 border-x border-neutral-800 px-2">
                                        <p className="text-neutral-500 text-[10px] uppercase font-bold">Weight Limits</p>
                                        <p>{cat.weight}</p>
                                    </div>
                                    <div className="space-y-1 pl-2">
                                        <p className="text-neutral-500 text-[10px] uppercase font-bold">Dimensions</p>
                                        <p>{cat.dimensions}</p>
                                    </div>
                                </div>

                                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                    {cat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PrizePools;
