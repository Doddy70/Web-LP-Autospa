"use client";

import React, { useEffect } from 'react';

type DisqusProps = {
    url: string;
    identifier: string;
    title: string;
};

export default function DisqusComments({ url, identifier, title }: DisqusProps) {
    useEffect(() => {
        // @ts-ignore
        if (window.DISQUS) {
            // @ts-ignore
            window.DISQUS.reset({
                reload: true,
                config: function () {
                    // @ts-ignore
                    this.page.url = url;
                    // @ts-ignore
                    this.page.identifier = identifier;
                    // @ts-ignore
                    this.page.title = title;
                },
            });
        } else {
            // Load Disqus script
            const d = document;
            const s = d.createElement('script');
            s.src = 'https://autospa-jakarta.disqus.com/embed.js';
            s.setAttribute('data-timestamp', (+new Date()).toString());
            (d.head || d.body).appendChild(s);
        }
    }, [url, identifier, title]);

    return (
        <div className="mt-16 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Discussion</h3>
            <div id="disqus_thread" className="bg-white/5 p-8 rounded-2xl min-h-[200px]"></div>
        </div>
    );
}
