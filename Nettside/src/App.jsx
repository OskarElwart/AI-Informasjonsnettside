import './App.css'

const sections = [
  {
    title: 'What is AI?',
    simple: 'AI is like a robot brain that can learn from examples and help humans do tasks.',
    metaphor: "Imagine you have a smart notebook that learns your favorite colors, games, and snacks. The more you use it, the better it guesses what you like. That’s how AI learns!",
    bg: '#f7cac9',
  },
  {
    title: 'How AI Learns',
    simple: 'AI learns by looking at lots of examples and finding patterns.',
    metaphor: "Think of AI like a detective. If you show it thousands of pictures of cats, it looks for clues (like pointy ears and whiskers) to figure out what a cat looks like.",
    bg: '#b5ead7',
  },
  {
    title: 'Where AI is Used',
    simple: 'AI helps with games, smartphones, self-driving cars, and even medicine.',
    metaphor: "AI is like a helpful sidekick that can make your life easier—like a robot friend who reminds you of your homework or helps your parents drive safely.",
    bg: '#ffdac1',
  },
  {
    title: 'Good Things AI Can Do',
    simple: 'AI can help doctors, teachers, and even save energy in homes.',
    metaphor: "AI is like a superhero with special powers—it can spot problems really fast, like detecting sickness in a plant or helping you find the fastest route to school.",
    bg: '#c7ceea',
  },
  {
    title: 'Problems AI Can Cause',
    simple: 'AI can make mistakes, be unfair, or spread wrong information.',
    metaphor: "Imagine if your robot friend learned the wrong rules—it might give bad advice, like telling everyone to eat only candy.",
    bg: '#ffb7b2',
  },
  {
    title: 'Privacy and Safety',
    simple: 'AI sometimes knows too much about people, which can be risky.',
    metaphor: "It’s like a robot that remembers everything you do. You need to be careful what you share, like keeping your diary private.",
    bg: '#b2f7ef',
  },
  {
    title: 'Bias in AI',
    simple: 'AI can be unfair if it only learns from some people or places.',
    metaphor: "If a robot only reads books about dogs, it might think cats don’t exist. That’s why AI needs to learn from everyone, not just a few.",
    bg: '#f6dfeb',
  },
  {
    title: 'How to Use AI Wisely',
    simple: 'Always double-check what AI says and use it as a helper, not a boss.',
    metaphor: "AI is like a magic map—it can show you a path, but you still decide which road to take.",
    bg: '#e2f0cb',
  },
]

function App() {
  return (
    <div className="ai-homepage">
      <h1 className="main-title">Understanding AI: How it works and its risks</h1>
      <div className="sections">
        {sections.map((section, idx) => (
          <section
            key={idx}
            className="ai-section"
            style={{ background: section.bg }}
          >
            <div className="section-content">
              <div className="simple-version">
                <h2>{section.title}</h2>
                <p>{section.simple}</p>
              </div>
              <div className="metaphor-version">
                <p>{section.metaphor}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default App
