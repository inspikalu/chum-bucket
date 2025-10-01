"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((error) => {
        // Autoplay was prevented.
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/chumbucket.mp3" loop />
      <Button onClick={toggleMute} variant="outline" size="icon" className="bg-[#0A85C2] border border-[#0A85C2]">
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default MusicPlayer;
