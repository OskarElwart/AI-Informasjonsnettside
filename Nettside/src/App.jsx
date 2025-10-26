import './App.css'
import Cover from './images/Cover.png';
import { useState, useRef, useEffect } from 'react';

const sections = [
  {
    title: 'Wake Up, Robo! (What is AI?)',
    story: '“Bzzzt! Hello there! I’m Robo, a robot with a brain that can learn! My job is to help people and make smart choices. Humans call that AI, which means Artificial Intelligence. It’s like giving a computer a tiny, curious brain!”',
    image: '/images/Page 1.png',
  },
  {
    title: 'Robo the Detective (How AI Learns)',
    story: '“When I want to learn something, I look at lots and lots of examples! If I see many pictures of cats, I notice: pointy ears… whiskers… furry tails! That’s how I figure out what a cat is. I’m like a detective solving a mystery with clues!”',
    image: '/images/Page 2.png',
  },
  {
    title: 'Robo Helps Around Town (Where AI is Used)',
    story: '“I love helping! I can help doctors find sickness faster, guide cars so they don’t crash, and remind kids to do homework. AI is like a helper robot that makes jobs a little easier and life a little brighter!”',
    image: '/images/Page 3.png',
  },
  {
    title: 'Super Robo! (Good Things AI Can Do)',
    story: '“Sometimes I feel like a superhero! I can help save energy, spot sick plants, and help people find lost pets. With the right rules, AI can do amazing things!”',
    image: '/images/Page 4.png',
  },
  {
    title: 'Uh-Oh! Robo Makes a Mistake (Problems AI Can Cause)',
    story: '“Oops! Sometimes I make mistakes. If I learn the wrong things, I might give wrong answers or advice. That’s why AI needs teachers—just like me, just like you!”',
    image: '/images/Page 5.png',
  },
  {
    title: 'Robo Learns About Privacy (Safety)',
    story: '“AI can remember a lot about people—like what they like, buy, or say. But some things are private, like your diary or secret wishes. Good AI keeps secrets safe and never shares too much.”',
    image: '/images/Page 6.png',
  },
  {
    title: 'Robo Learns Fairness (Bias in AI)',
    story: '“If I only learn from one kind of picture, I might forget others exist! AI can be unfair if it doesn’t see everyone’s story. Learning from all people helps me make fair choices.”',
    image: '/images/Page 7.png',
  },
  {
    title: 'Robo’s Wise Rules (How to Use AI Wisely)',
    story: '“Now I know—AI is a helper, not a boss. It can guide us, but we make the final choice. AI is like a magic map—it shows the way, but you decide where to go!”',
    image: '/images/Page 8.png',
  },
  {
    title: 'Robo’s Promise (The Ending)',
    story: '“I’ve learned so much! AI can help the world when it’s kind, fair, and safe. Together, humans and robots can make amazing things happen. Let’s build a better world—one smart choice at a time!”',
    image: '/images/Page 9.png',
  },
]

function useScrollFadeIn(offset = 100) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - offset) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);
  return [ref, visible];
}

function Section({ section, isLast, onHome }) {
  const [titleRef, titleVisible] = useScrollFadeIn(200);
  const [imgRef, imgVisible] = useScrollFadeIn(50); // fade in faster
  const [storyRef, storyVisible] = useScrollFadeIn(50); // fade in faster
  return (
    <section className="ai-section fantasy-section">
      <div ref={titleRef} className={`fantasy-title fantasy-title-scroll fade-in ${titleVisible ? 'visible' : ''}`}>{section.title}</div>
      <div className="fantasy-image-container">
        <div ref={imgRef} className={`fantasy-image-wrapper fade-in ${imgVisible ? 'visible' : ''}`}> 
          <img src={section.image} alt={section.title} className={`fantasy-image-full speech-bubble${imgVisible ? ' visible' : ''}`} />
        </div>
      </div>
      <div ref={storyRef} className={`speech-bubble-container fade-in-story ${storyVisible ? 'visible' : ''}`}> 
        <p className={`section-story speech-bubble${storyVisible ? ' visible' : ''}`}>{section.story}</p>
      </div>
      {isLast && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <button className="continue-btn" onClick={onHome}>Home</button>
        </div>
      )}
    </section>
  );
}

function App() {
  const [showCover, setShowCover] = useState(true);
  const handleHome = () => setShowCover(true);
  return (
    <div className="ai-homepage">
      <h1 className="main-title">Understanding AI: How it works and its risks</h1>
      {showCover ? (
        <div className="cover-image-container cover-centered">
          <img src={Cover} alt="Cover" className="cover-image" />
          <div className="cover-btn-row" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', width: '100%' }}>
            <button className="continue-btn" onClick={() => setShowCover(false)}>Continue</button>
          </div>
        </div>
      ) : (
        <div className="sections fantasy-scroll">
          {sections.map((section, idx) => (
            <Section key={idx} section={section} isLast={idx === sections.length - 1} onHome={handleHome} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
