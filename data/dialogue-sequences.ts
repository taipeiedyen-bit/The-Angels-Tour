// Comprehensive Dialogue State Machine for All Pathways in The Angels Tour Project

const dialogueStateMachine = {
    dreamer: {
        onEntry: "Welcome, Dreamer! Ready to explore your potential?",
        transitions: {
            askAboutDreams: {
                response: "What dreams do you have in mind?",
                nextState: "exploreDreams"
            },
            provideGuidance: {
                response: "Here’s some guidance to help you achieve your dreams.",
                nextState: "helpDreams"
            },
        },
        exploreDreams: {
            response: "Let’s delve deeper into your dreams.",
            transitions: { /* further actions */ }
        },
        helpDreams: {
            response: "Here’s a plan to achieve your dreams!",
            transitions: { /* further actions */ }
        }
    },
    guardian: {
        onEntry: "Welcome, Guardian! Ready to protect and nurture?",
        transitions: {
            askAboutConcerns: {
                response: "What concerns do you have to address?",
                nextState: "addressConcerns"
            },
            shareWisdom: {
                response: "Here’s some wisdom for a better journey.",
                nextState: "inspireWisdom"
            },
        },
        addressConcerns: {
            response: "Let’s address your concerns one by one.",
            transitions: { /* further actions */ }
        },
        inspireWisdom: {
            response: "Here’s a piece of wisdom to guide you!",
            transitions: { /* further actions */ }
        }
    },
    pioneer: {
        onEntry: "Welcome, Pioneer! Ready to break new ground?",
        transitions: {
            askAboutGoals: {
                response: "What new paths do you wish to forge?",
                nextState: "exploreGoals"
            },
            provideSupport: {
                response: "Here’s support for your pioneering journey.",
                nextState: "supportPioneer"
            },
        },
        exploreGoals: {
            response: "Let’s map out your goals together.",
            transitions: { /* further actions */ }
        },
        supportPioneer: {
            response: "Here are resources to assist your pioneering efforts.",
            transitions: { /* further actions */ }
        }
    }
};

export default dialogueStateMachine;