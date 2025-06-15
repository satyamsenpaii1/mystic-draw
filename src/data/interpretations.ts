
import { CardInterpretations } from '@/types/tarot';

export const interpretations: Record<string, CardInterpretations> = {
  "The Fool": {
    love: {
      upright: {
        current: "A new, exciting, and possibly unexpected romantic chapter is beginning. You're feeling carefree and open to possibilities.",
        future: "A leap of faith in love is required. This could mean starting a new relationship or taking an existing one to a more spontaneous level.",
        divine: "Trust the journey of your heart. Embrace the unknown with optimism, as the universe supports your new beginnings in love."
      },
      reversed: {
        current: "You may be acting naively or recklessly in your love life, ignoring potential red flags or taking foolish risks.",
        future: "A warning against making impulsive romantic decisions. A lack of planning could lead to instability or heartbreak.",
        divine: "The divine asks you to pause and reflect. Are you being truly open, or just careless? Ground yourself before moving forward."
      }
    },
    career: {
      upright: {
        current: "You are at the start of a new career path or project. It’s a time of great potential and innovation, though the final destination is unknown.",
        future: "An exciting and unconventional opportunity will present itself. Be prepared to take a calculated risk and venture into new territory.",
        divine: "Embrace the beginner's mind. Your fresh perspective is your greatest asset. Trust your potential and take the first step."
      },
      reversed: {
        current: "You may be feeling unprepared for a new venture, or perhaps you're acting recklessly without a proper plan.",
        future: "Avoid starting new projects without due diligence. A risky venture may seem appealing but could have negative consequences.",
        divine: "Ground your ideas in reality. The universe advises caution and planning. Don't mistake a lack of preparation for trusting the flow."
      }
    },
    spiritual: {
      upright: {
        current: "You are embarking on a new spiritual journey, full of wonder and discovery. Your spirit is open and ready to learn.",
        future: "A profound spiritual awakening is possible if you're willing to step into the unknown and question your beliefs.",
        divine: "Your spiritual path is unfolding. Trust your inner voice and the signs from the universe. Every step is a lesson."
      },
      reversed: {
        current: "A disconnection from your spiritual path. You might be ignoring your intuition or feeling lost and ungrounded.",
        future: "Be wary of spiritual bypassing or following a path that is not authentic to you. Seek genuine connection, not just novelty.",
        divine: "Return to your inner self. The divine message is one of grounding and self-awareness. Find your footing before you wander."
      }
    },
    general: {
      upright: {
        current: "You are at a point of new beginnings, with endless potential ahead. It’s a time for spontaneity and embracing the unknown.",
        future: "An opportunity to start fresh is coming. It will require a leap of faith, but promises new experiences and growth.",
        divine: "The universe is presenting you with a blank slate. Trust in the journey ahead, even if you can't see the full path."
      },
      reversed: {
        current: "You may be acting with a lack of foresight, or perhaps you're holding yourself back from a new beginning out of fear.",
        future: "Be mindful of recklessness and foolish choices. Consider the consequences of your actions before you act.",
        divine: "A call for awareness. Are you being held back by fear, or acting without thought? Find the balance between caution and courage."
      }
    }
  },
  "The Magician": {
    love: {
      upright: {
        current: "You have the power to manifest the relationship you desire. You are charming, confident, and able to create a strong connection.",
        future: "A new romance that you actively create is on the horizon. If in a relationship, you can shape it into what you want it to be.",
        divine: "Use your personal power and resources to build the love life you envision. You are the creator of your romantic destiny."
      },
      reversed: {
        current: "Manipulation or deceit may be present in your love life. You or your partner might not be using your power for good.",
        future: "Be wary of illusions in romance. Someone may be presenting a false image. Untapped potential in your love life is being wasted.",
        divine: "The divine urges you to use your powers of attraction with integrity. True love cannot be built on manipulation."
      }
    },
    career: {
      upright: {
        current: "You have all the skills and resources needed to succeed. It's a powerful time for your career; you can make things happen.",
        future: "An opportunity to use your talents to their fullest is coming. You will be able to manifest a significant career achievement.",
        divine: "You are a powerful creator. The universe has given you the tools; now is the time to use them to build your success."
      },
      reversed: {
        current: "You're not using your full potential at work. Procrastination, or a lack of focus is holding you back. Possible deception in the workplace.",
        future: "Missed opportunities are likely if you don't act. Be aware of schemes or empty promises from colleagues.",
        divine: "A message to align your actions with your goals. Stop holding back. The power is within you, but you must choose to wield it."
      }
    },
    spiritual: {
      upright: {
        current: "You are powerfully connected to both the spiritual and material worlds, able to manifest your intentions into reality.",
        future: "Your ability to manifest will grow stronger. You will learn to consciously create your spiritual reality.",
        divine: "As above, so below. You are a channel for divine energy. Focus your will to bring spiritual insights into your everyday life."
      },
      reversed: {
        current: "A disconnect between your spiritual intentions and your actions. You may be trying to force things rather than allowing them to flow.",
        future: "Be careful of misusing spiritual knowledge or power. The path ahead requires genuine intention, not just the appearance of power.",
        divine: "Reconnect with your authentic self. The divine message is to ensure your will is aligned with the highest good, not just personal gain."
      }
    },
    general: {
      upright: {
        current: "You have the power, skills, and determination to achieve your goals. All the elements are in place for you to succeed.",
        future: "You are entering a phase of manifestation. With clear intention and focused action, you can create the reality you desire.",
        divine: "You are the magician of your own life. The universe reminds you of your innate power to turn your ideas into reality."
      },
      reversed: {
        current: "You are feeling powerless or are not utilizing your talents effectively. There may be manipulation or trickery at play.",
        future: "A warning that potential is being wasted. If you don't focus your energy, your goals will remain out of reach.",
        divine: "The universe is calling you to reclaim your power. Stop giving it away and start believing in your own abilities."
      }
    }
  },
  "The High Priestess": {
    love: {
      upright: {
        current: "A deep, intuitive connection exists. There may be secrets or unspoken feelings. Trust your intuition about this relationship.",
        future: "Your love life will deepen, becoming more spiritual and less superficial. A soul connection may be revealed.",
        divine: "Listen to your inner voice. Your intuition holds the key to understanding your heart's true desires. Look beyond the obvious."
      },
      reversed: {
        current: "You are ignoring your intuition, leading to confusion in your love life. Secrets may be causing harm.",
        future: "A warning against gossip or acting on incomplete information. Misunderstandings are likely if you don't seek clarity.",
        divine: "The divine asks you to reconnect with your intuition. Stop listening to outside noise and tune into your inner wisdom."
      }
    },
    career: {
      upright: {
        current: "You have a deep understanding of your field. It's a good time for study, research, or work that requires intuition.",
        future: "An opportunity for education or specialized training will arise. Your intuition will guide you toward the right career move.",
        divine: "Trust your professional instincts. The knowledge you need is already within you. Seek quiet moments to access it."
      },
      reversed: {
        current: "Lack of clarity at work. You may be missing important information or ignoring your gut feelings about a project or colleague.",
        future: "Avoid making important career decisions until you have all the facts. There's a risk of being misled.",
        divine: "Seek truth and clarity. The universe warns against superficial understanding. Dig deeper to find the answers you need."
      }
    },
    spiritual: {
      upright: {
        current: "Your intuition and psychic abilities are heightened. This is a powerful time for spiritual development and connecting with the divine feminine.",
        future: "Your spiritual journey will take you into deeper, more mysterious realms. You will uncover hidden truths.",
        divine: "You are a keeper of sacred knowledge. The universe invites you to explore the mysteries within and without. Trust your inner temple."
      },
      reversed: {
        current: "You are disconnected from your spiritual side or are repressing your intuitive gifts. There's a block to your inner wisdom.",
        future: "A period of spiritual confusion. Be wary of false prophets or superficial spiritual paths. The journey is inward.",
        divine: "The divine message is to quiet your mind and listen. Your inner guidance is trying to reach you. Remove the blockages."
      }
    },
    general: {
      upright: {
        current: "A situation calls for you to trust your intuition and look beyond the surface. There is more going on than meets the eye.",
        future: "Secrets will be revealed. Your intuition will guide you through a complex situation, leading to greater understanding.",
        divine: "The universe urges you to listen to your dreams and intuition. The answers you seek are not in the external world, but within."
      },
      reversed: {
        current: "Confusion and a lack of clarity are causing problems. You may be ignoring your instincts or listening to bad advice.",
        future: "Be careful of secrets and hidden information coming to light in a disruptive way. Seek clarity and honesty.",
        divine: "A call to connect with your inner truth. The divine message is to stop ignoring the red flags your intuition is showing you."
      }
    }
  }
};
