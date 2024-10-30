const siteContent = {
    hero: {
        title: "Welcome to the Moon Programming Language 🌙",
        subtitle: "The next generation programming language"
    },
    about: {
        title: "Why Moon?",
        description: "Moon is a new, open-source programming language created and built by Michael Pisani (AKA, Benevolence Messiah), founder and sole member of the Moon Programming Language Foundation; Moon is inspired by Python but designed for high-performance computing, AI, and emerging technologies. Moon notably has several unique facets associated with it..."
    },
    features: [
        {
            title: "Python-Like Simplicity",
            description: "Moon adopts Python's developer-friendly syntax, making it accessible to both beginners and experienced developers while enhancing performance through strong typing and optimized memory control."
        },
        {
            title: "High Performance for AI",
            description: "Moon is optimized for leveraging multi-core processors and hardware accelerators, making it efficient for machine learning, scientific computing, and AI model training."
        },
        {
            title: "Seamless Integration",
            description: "Mix and match with other programming languages and repositories. Moon was built to be the ultimate connecting language, facilitating seamless interoperability for any modern project."
        },
        {
            title: "Cultural Touch",
            description: "Moon uniquely incorporates Islamic-themed symbols, such as \"﷽\", adding a culturally relevant touch to programming while keeping it accessible to everyone."
        }
    ],
    cta: {
        title: "Ready to Start Your Journey with Moon?",
        description: "Contribute to the development of Moon on GitHub, or download our latest release to get started.",
        buttons: {
            github: {
                text: "Visit GitHub",
                url: "https://github.com/BenevolenceMessiah/Moon"
            },
            huggingface: {
                text: "Visit HuggingFace Account",
                url: "https://huggingface.co/BenevolenceMessiah"
            },
            qwen: {
                text: "Benevolence Messiah Qwen2.5 Coder 7B 3x Instruct TIES v1.1",
                url: "https://huggingface.co/BenevolenceMessiah/Qwen2.5-Coder-7B-3x-Instruct-TIES-v1.1"
            }
        }
    },
    community: {
        title: "Join the Moon Community",
        description: "Connect with like-minded developers and enthusiasts who are passionate about pushing the boundaries of modern technology with the Moon programming language. Collaborate, contribute, and be a part of the future.",
        links: {
            github: {
                text: "GitHub",
                url: "https://github.com/BenevolenceMessiah/Moon"
            },
            discord: {
                text: "Join Our Discord",
                url: "https://discord.gg/9R74qxbqDn"
            }
        }
    },
    donations: {
        title: "Support the Moon Programming Language Foundation",
        description: "If you'd like to support our work, consider donating. Your contributions help us keep Moon free, open-source, and accessible to everyone.",
        methods: {
            paypal: "[PayPal Donation Link]",
            bitcoin: "bc1q4fwzcfpcm0s6pda7grt3w9a6hqyyxrzf68thcf",
            ethereum: "0x775b3Ba958ceA83Ed567BAe6eC136e121877508D"
        }
    },
    codeExample: {
        title: "Moon in Action",
        interopCode: `﷽:
    # Python libraries
    from 🕋 import pandas as pd
    from 🕋 import numpy as np
    from 🕋 import tensorflow as tf
    
    # R statistical libraries via rpy2
    from 🕋 import rpy2.robjects as ro
    from 🕋 import rpy2.robjects.packages as rpackages
    
    # Julia numerical computing via julia
    from 🕋 import julia
    from julia import Main as jl

    # Initialize interop components
    def initialize_components():
        stats = rpackages.importr('stats')
        ggplot2 = rpackages.importr('ggplot2')
        
        jl.eval('using DataFrames')
        jl.eval('using Statistics')
        
        return stats, ggplot2 ۝`,
        aiCode: `# AI Model Integration Example
﷽

import moon.ai as ai
import moon.data as data

# Moon's unique AI pipeline syntax
dataset = data.load("example.csv") >> 
    data.preprocess() >>
    ai.transform()

model = ai.Model() >>
    ai.train(dataset) >>
    ai.optimize()`
    },
    audio: {
        classic: {
            label: "🎵 Listen to \"Amethyst Pocket (Part I)\"",
            url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/benevolence-messiah/amethyst-pocket-part-i-2&color=%23ffba08&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=true&visual=true"
        },
        vaporwave: {
            label: "🎵 Listen to \"Hill Tops (Benevolence Messiah Remix)\"",
            url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/benevolence-messiah/hill-tops-benevolence-messiah&color=%23ff00ff&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=true&visual=true"
        }
    },
    rainAI: {
        buttonText: "Rain (AI Assistant)",
        url: "https://e987d2133014d28cb1.gradio.live"
    },
    footer: {
        copyright: "© 2024 Moon Programming Language Foundation | Created with Love by Michael Pisani, and lots of AI! 🌙"
    },
    bio: {
        buttonText: "Learn More About Michael Pisani",
        url: "web_pages/biography.html"
    }
};

function loadContent() {
    const isVaporwave = window.location.href.includes('vaporwave');

    // Hero section
    if (document.querySelector('.hero h1')) {
        document.querySelector('.hero h1').textContent = siteContent.hero.title;
    }

    // Audio container
    const audioContainer = document.querySelector('.audio-container');
    if (audioContainer) {
        const audioConfig = isVaporwave ? siteContent.audio.vaporwave : siteContent.audio.classic;
        audioContainer.innerHTML = `
            <div class="audio-label">${audioConfig.label}</div>
            <iframe 
                scrolling="no" 
                frameborder="no" 
                allow="autoplay" 
                style="position: relative; z-index: 10; pointer-events: auto;"
                src="${audioConfig.url}">
            </iframe>
        `;
    }

    // Rain AI button
    const rainButton = document.querySelector('.audio-button');
    if (rainButton) {
        rainButton.textContent = siteContent.rainAI.buttonText;
        rainButton.onclick = () => window.open(siteContent.rainAI.url, '_blank');
    }

    // About section
    if (document.querySelector('.intro-section p')) {
        document.querySelector('.intro-section p').textContent = siteContent.about.description;
    }

    // Features section
    const featuresContainer = document.querySelector('.features-section');
    if (featuresContainer) {
        featuresContainer.innerHTML = siteContent.features.map(feature => `
            <div class="feature">
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `).join('');
    }

    // CTA section
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        const ctaTitle = ctaSection.querySelector('h2');
        const ctaDesc = ctaSection.querySelector('p');
        if (ctaTitle) ctaTitle.textContent = siteContent.cta.title;
        if (ctaDesc) ctaDesc.textContent = siteContent.cta.description;
        
        // Clear existing buttons
        const existingButtons = ctaSection.querySelectorAll('button');
        existingButtons.forEach(button => button.remove());
        
        // Add new buttons
        Object.values(siteContent.cta.buttons).forEach(button => {
            const btnElement = document.createElement('button');
            btnElement.textContent = button.text;
            btnElement.onclick = () => window.location.href = button.url;
            ctaSection.appendChild(btnElement);
        });
    }

    // Community section
    const communitySection = document.querySelector('.community-section');
    if (communitySection) {
        const title = communitySection.querySelector('h2');
        const desc = communitySection.querySelector('p');
        if (title) title.textContent = siteContent.community.title;
        if (desc) desc.textContent = siteContent.community.description;

        const communityLinks = communitySection.querySelector('.community-links');
        if (communityLinks) {
            communityLinks.innerHTML = '';
            Object.values(siteContent.community.links).forEach(link => {
                communityLinks.innerHTML += `
                    <a href="${link.url}" target="_blank" class="community-button">${link.text}</a>
                `;
            });
        }
    }

    // Donations section
    const donationSection = document.querySelector('.donation-section');
    if (donationSection) {
        const title = donationSection.querySelector('h2');
        const desc = donationSection.querySelector('p');
        if (title) title.textContent = siteContent.donations.title;
        if (desc) desc.textContent = siteContent.donations.description;
    }

    // Code examples
    const codeBlocks = document.querySelectorAll('.code-block');
    if (codeBlocks.length >= 2) {
        codeBlocks[0].textContent = siteContent.codeExample.interopCode;
        codeBlocks[1].textContent = siteContent.codeExample.aiCode;
    }

    // Footer
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = siteContent.footer.copyright;
    }

    // Bio button
    const bioContainer = document.querySelector('.bio-container');
    if (bioContainer) {
        bioContainer.innerHTML = `
            <a href="${siteContent.bio.url}" class="bio-button">
                ${siteContent.bio.buttonText}
            </a>
        `;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { siteContent, loadContent };
} 