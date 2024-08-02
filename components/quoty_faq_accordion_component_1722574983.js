/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1722574983", {
    template: `
    <section class="py-8 bg-gradient-to-br from-pink-400 via-purple-500 to-magenta-600 pl-4">
        <h2 class="text-2xl font-bold mb-5 text-white">Frequently Asked Questions About Our Blockchain Analysis App</h2>
        <!-- Accordion -->
        <div class="space-y-3">
            <!-- Accordion item -->
            <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white shadow-lg" :class="[{ 'expanded': term.expanded }]">
                <h3>
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3 text-white" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                        <span>{{ term.title }}</span>
                        <svg class="shrink-0 ml-8 fill-white" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                        </svg>
                    </button>
                </h3>
                <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="text-white grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]">
                    <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                        <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
                            {{ term.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            terms: [
                { title: "What is this app used for?", description: "Our app provides powerful analytics and insights into new blockchain data as it gets added to the ledger. It helps you stay on top of the latest transactions, contracts, and activities happening on the blockchain.", expanded: false },
                { title: "How does the analysis work?", description: "We utilize advanced algorithms and machine learning models to parse and interpret the raw blockchain data. Our app then surfaces key metrics, trends, and anomalies that you can easily explore and monitor.", expanded: false },
                { title: "What blockchains are supported?", description: "Currently we support analysis for Bitcoin, Ethereum, and several other major blockchain networks. We are constantly working to add support for more blockchains based on user demand.", expanded: false },
                { title: "Is there a free trial?", description: "Yes, we offer a 30-day free trial so you can test out the full capabilities of our blockchain analysis app before subscribing. Sign up today to get started!", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
