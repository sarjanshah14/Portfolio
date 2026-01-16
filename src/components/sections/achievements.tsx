import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Trophy, Users, User, Calendar } from "lucide-react";

const AchievementsSection = () => {
    return (
        <SectionWrapper id="achievements" className="max-w-7xl mx-auto py-20 px-4 md:px-0">
            <SectionHeader
                id="achievements"
                title="Achievements"
                desc="Recognition and milestones."
            />

            <div className="grid grid-cols-1 gap-8 mt-12">
                <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden group hover:border-primary/50 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                        {/* Visual Side - Takes 2/5 (40%) space */}
                        <div className="relative h-full min-h-[300px] overflow-hidden lg:col-span-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />

                            {/* Image Grid */}
                            <div className="grid grid-cols-1 grid-rows-2 h-full gap-4 px-2 py-8 bg-muted/20">
                                <div className="relative rounded-lg overflow-hidden w-full h-full bg-black/5">
                                    <Image
                                        src="/assets/hackathon/hack1.jpg"
                                        alt="Hackovate Stage Moment"
                                        fill
                                        className="object-contain object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="relative rounded-lg overflow-hidden w-full h-full bg-black/5">
                                    <Image
                                        src="/assets/hackathon/hack2.jpg"
                                        alt="Winning Moment"
                                        fill
                                        className="object-contain object-bottom transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Side - Takes 3/5 (60%) space */}
                        <CardContent className="px-6 py-8 lg:p-10 flex flex-col justify-center relative lg:col-span-3">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <Trophy size={120} />
                            </div>

                            <div className="space-y-8 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <Trophy className="w-5 h-5" />
                                        <span className="font-mono text-sm font-bold uppercase tracking-wider">2nd Place Winner</span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                        Hackovate'25
                                    </h3>
                                    <p className="text-xl text-muted-foreground font-medium">
                                        AI Hackathon organized by LJ University
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Badge variant="secondary" className="px-4 py-1.5 text-base">
                                        ₹25,000 Prize
                                    </Badge>
                                    <Badge variant="outline" className="px-4 py-1.5 text-base gap-2">
                                        <Calendar className="w-4 h-4" /> 2025
                                    </Badge>
                                    <Badge variant="outline" className="px-4 py-1.5 text-base gap-2">
                                        <Users className="w-4 h-4" /> 800+ Participants
                                    </Badge>
                                    <Badge variant="outline" className="px-4 py-1.5 text-base gap-2">
                                        <Users className="w-4 h-4" /> 250+ Teams
                                    </Badge>
                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                                    <p>
                                        Secured 2nd position in a highly competitive AI hackathon featuring top talent from across the region.
                                    </p>
                                    <p>
                                        We developed <strong>Sensor Guard</strong>, an innovative AI-driven security solution designed to enhance surveillance capabilities. Our project utilized advanced sensor integration and real-time data processing (trained on dummy data) to detect anomalies with high precision, showcasing our ability to solve complex real-world problems.
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-border/50">
                                    <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                                        <Users className="w-4 h-4" /> Team
                                    </h4>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                                            <div className="bg-primary/10 p-2 rounded-full">
                                                <User className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-foreground">Sneh Patel</p>
                                                <p className="text-xs text-muted-foreground">Teammate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </SectionWrapper>
    );
};

export default AchievementsSection;
