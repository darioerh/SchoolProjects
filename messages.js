//Array of objects containing motivational quotes and fortune keywords
const motivationalPhrase = [
    { 
        quote: "Nothing is impossible, the word itself says 'I'm possible.'",
        author: 'Aubrey Hepburn'}, 
    {
        quote: "If you see someone without a smile today, give 'em yours.",
        author: 'unknown'
    },
    {
        quote: "Stay positibe. Better days are on their way.",
        author: 'unknown'
    },
    {
        quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
        author: 'Kobe Bryant'
    },
    {
        quote: "Once you replace negative thoughts with positive ones, you'll start having positive results.",
        author: 'unknown'
    },
    {
        quote: "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
        author: 'Les Brown'
    },
    {
        quote: "If it wasn’t hard, everyone would do it. It’s the hard that makes it great.",
        author: 'Tom Hanks'
    },
    {
        quote: "You’re braver than you believe, and stronger than you seem, and smarter than you think.",
        author: 'A.A. Mine'
    },
    {
        quote: "Live life to the fullest, and focus on the positive.",
        author: 'Matt Cameron'
    },
    {
        quote: "You’ll never do a whole lot unless you’re brave enough to try.",
        author: 'Dolly Parton'
    },
    {
        quote: "Life is like a bicycle. To keep your balance, you must keep moving.",
        author: 'Albert Einstein'
    },
    {
        quote:  "Know what sparks the light in you. Then use that light to illuminate the world.",
        author: 'Oprah Winfrey'
    },
    {
        quote: "Success is falling nine times and getting up ten.",
        author: 'Jon Bon Jovi'
    },
    {
        quote: "Success is only meaningful and enjoyable if it feels like your own.",
        author: 'Michelle Obama '
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: 'Mahatma Gandhi'
    }, {keyword: 'prosperous'}, {keyword: 'brilliant'}, {keyword: 'peaceful'}, {keyword: 'uncertain'}, {keyword: 'possibly enjoyable'}]

//Function that randomly selects motivation phrase or fortune phrase
const motivationPhrase = () => {
    let ranIndex = Math.floor(Math.random() * motivationalPhrase.length);
    if (ranIndex < 15) {
        console.log(ranIndex)
        console.log(`Motivational phrase of the day:
    "${motivationalPhrase[ranIndex].quote}" ${motivationalPhrase[ranIndex].author}`);
    } 
    else {
        console.log(ranIndex)
        console.log(`Fortune: Your future will be ${motivationalPhrase[ranIndex].keyword}.`);
    }
}

motivationPhrase();