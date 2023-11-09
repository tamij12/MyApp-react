import React, { createContext, useState } from "react";

export const postsContext = createContext();

export default function Blogs({ children }) {
  const [posts, setPosts] = useState([
    {
      id: 0,
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4a36h8rBHhUXJIlB8vl8yw.png",
      titulo: "I Asked ChatGPT To Find Me Free Money",
      autor: "Pablo Cormick",
      creacion: "27 / 11 / 2023",
      descripcion:
        "Regardless, resilience serves to buffer PTSD such that people with greater resilience are less likely to develop pathological outcomes following significant trauma. Not only that, but while many aspects of resilience are innate (related to biological factors affecting brain plasticity, for example), many resilience factors are learnable (“modifiable”). It is these modifiable factors people need to target, train, and track.",
    },
    {
      id: 1,
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*B_88pVqHoDNOTc3vr4AK-Q.png",
      titulo: "2-Minute Rule to Become a Master at Coding — Atomic Habits",
      autor: "Jhonny Bruhs Azirc",
      creacion: "25 / 10 / 2023",
      descripcion:
        "Have you ever started watching an online video tutorial and, in the middle of that video, the tutorial becomes boring for you? Or you always tell yourself that this time you’re going to finish an online course, but when you sit down and start learning, it feels like any other tedious task like washing dishes and laundry. And at the end, you find it impossible to stay productive and make progress.",
    },
    {
      id: 2,
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4fUmHNS6cDqKliI0EC4Qhw.png",
      titulo:
        "Why it’s so hard to find roles in cloud technology, while jobs go unfilled.",
      autor: "Mark Antonhy Louis Mir",
      creacion: "21 / 11 / 2023",
      descripcion:
        "In the last year I’ve met dozens of people who have taken many of the cloud certifications available yet been unable to land jobs in this space. Many have long resumes with impressive backgrounds, others have switched careers from science or math, while some are recent graduates trying to get into the newest area of IT. None of the people I met was obviously unqualified.",
    },
    {
      id: 3,
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dSNe43PNXKIfvblbfMQdFQ.png",
      titulo:
        "The cloud skills shortage and the unemployed army of the certified",
      autor: "Matteo Mark Sanderson",
      creacion: "19 / 09 / 2023",
      descripcion:
        "If you talk to recruiters or Human Resources, you’ll hear that AWS certifications are the hottest words on any technical resume . “There aren’t enough bodies to put in seats!” they say. Then if you turn around and talk to the crowds of the freshly-certified jobless — “Nobody’s responding to our job applications!” the chorus goes. You wonder, are these two groups living in the same universe? What’s going on?",
    },
    {
      id: 4,
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*RRswNgYxAuvTbtVK.jpg",
      titulo: "24 Evidence-Based Ways to Train and Track Resilience",
      autor: "Louis Ann Bea",
      creacion: "14 / 09 / 2023",
      descripcion:
        "Regardless, resilience serves to buffer PTSD such that people with greater resilience are less likely to develop pathological outcomes following significant trauma. Not only that, but while many aspects of resilience are innate (related to biological factors affecting brain plasticity, for example), many resilience factors are learnable (“modifiable”). It is these modifiable factors people need to target, train, and track.",
    },
    {
      id: 5,
      img: "https://miro.medium.com/v2/resize:fit:1100/0*EaoKZrCb-ZIm8ccb",
      titulo: "What Is Resilience, and How Can I Build It Up?",
      autor: "Grant H Brenner",
      creacion: "13 / 05 / 2023",
      descripcion:
        "Resilience can be hard to measure, and many longstanding ways to assess resilience, while helpful, have fallen short. For instance, resilience is not simply the absense of post- traumatic stress disorder; it is the presence of health and, often (but by no means exclusively), accompanied by post-traumatic growth.",
    },
  ]);

  return (
    <postsContext.Provider value={{ posts, setPosts }}>
      {children}
    </postsContext.Provider>
  );
}
