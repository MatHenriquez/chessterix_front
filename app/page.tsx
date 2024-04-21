'use client';

import React, { useState } from 'react';
import Landing from './landing/Landing';

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <Landing
      showLoginModal={showLoginModal}
      setShowLoginModal={setShowLoginModal}
    />
  );
}
