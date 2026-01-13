"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ResumePage() {
    const resumeUrl = "/assets/resume.pdf";

    return (
        <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <header className="z-10 w-full p-4 md:p-6 flex items-center justify-between backdrop-blur-sm sticky top-0 border-b border-border/40">
                <Link href="/">
                    <Button variant="ghost" className="gap-2 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Button>
                </Link>
                <div className="flex gap-2">
                    <a href={resumeUrl} download="resume.pdf">
                        <Button className="gap-2">
                            <Download className="w-4 h-4" />
                            Download PDF
                        </Button>
                    </a>
                </div>
            </header>

            {/* PDF Viewer */}
            <main className="flex-1 z-10 p-4 md:p-8 flex flex-col items-center justify-center">
                <div className="w-full max-w-5xl h-[calc(100vh-8rem)] bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md relative group">

                    <iframe
                        src={resumeUrl}
                        className="w-full h-full"
                        title="Resume"
                    />

                    {/* Fallback for when PDF is missing or fails to load - overlaid */}
                    <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-muted-foreground p-8 text-center bg-card">
                        <p className="text-xl font-semibold mb-2">Resume Preview Unavailable</p>
                        <p className="max-w-md">
                            Please ensure <code>public/assets/resume.pdf</code> exists.
                            <br />
                            If it does, your browser might not support embedded PDFs.
                        </p>
                        <a href={resumeUrl} download className="mt-4 text-primary hover:underline">Download instead</a>
                    </div>
                </div>
            </main>
        </div>
    );
}
