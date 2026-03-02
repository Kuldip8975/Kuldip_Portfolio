import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ref, onValue, runTransaction } from 'firebase/database';
import { motion } from 'framer-motion';

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const visitorRef = ref(db, 'visitorCount');

    // Increment count on every visit
    runTransaction(visitorRef, (current) => (current || 0) + 1);

    // Listen for real-time updates
    const unsubscribe = onValue(visitorRef, (snapshot) => {
      setCount(snapshot.val());
    });

    return () => unsubscribe();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))',
        border: '1px solid rgba(99,102,241,0.35)',
        borderRadius: '50px',
        padding: '10px 24px',
        backdropFilter: 'blur(10px)',
        width: 'fit-content',
        margin: '0 auto',
      }}
    >
      {/* Pulsing live dot */}
      <motion.span
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }}
      />
      <span style={{ fontSize: '15px', fontWeight: 600, color: '#a78bfa', letterSpacing: '0.5px' }}>
        {count !== null ? (
          <motion.span
            key={count}
            initial={{ scale: 1.3, color: '#fff' }}
            animate={{ scale: 1, color: '#a78bfa' }}
            transition={{ duration: 0.4 }}
          >
            {count.toLocaleString()}
          </motion.span>
        ) : '...'}
        {' '}profile visits
      </span>
      <span style={{ fontSize: '13px', opacity: 0.6 }}>🌍</span>
    </motion.div>
  );
}