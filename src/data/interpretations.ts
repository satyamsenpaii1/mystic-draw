
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
        current: "You are at the start of a new career path or project. It's a time of great potential and innovation, though the final destination is unknown.",
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
        current: "You are at a point of new beginnings, with endless potential ahead. It's a time for spontaneity and embracing the unknown.",
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
  },
  "The Empress": {
    love: {
      upright: {
        current: "Your relationship is blossoming with nurturing energy, fertility, and abundance. Love is growing in beautiful ways.",
        future: "A period of emotional abundance and possibly starting a family. Your capacity to give and receive love will expand.",
        divine: "Embrace your feminine power and natural ability to create and nurture. Love flows through you like a river of abundance."
      },
      reversed: {
        current: "You may be smothering your partner or neglecting your own needs. There's an imbalance in giving and receiving.",
        future: "Creative blocks in love or difficulty conceiving plans together. You need to restore balance and self-care.",
        divine: "Reconnect with your inner goddess. You cannot pour from an empty cup - nurture yourself first."
      }
    },
    career: {
      upright: {
        current: "Your creative projects are flourishing. This is an excellent time for artistic endeavors or starting something new.",
        future: "A project you've been nurturing will come to fruition. Success through creativity and collaboration awaits.",
        divine: "Trust in your creative power. The universe supports your artistic expression and innovative ideas."
      },
      reversed: {
        current: "Creative blocks or lack of inspiration are hindering your progress. You may be forcing rather than allowing.",
        future: "Delays in creative projects or difficulty bringing ideas to life. Patience and self-care are needed.",
        divine: "Step back and allow your creativity to flow naturally. Forcing will only create more resistance."
      }
    },
    spiritual: {
      upright: {
        current: "You are deeply connected to the Earth and natural cycles. Your spiritual practice is bearing fruit.",
        future: "A time of spiritual abundance and growth. You will feel more connected to the divine feminine energy.",
        divine: "Honor the sacred feminine within you. Nature is your temple, and creation is your prayer."
      },
      reversed: {
        current: "Disconnection from nature or your feminine energy. You may be suppressing your intuitive gifts.",
        future: "A need to reconnect with natural rhythms and cycles. Spiritual practice may feel forced or empty.",
        divine: "Return to the earth. Spend time in nature to restore your spiritual connection and inner wisdom."
      }
    },
    general: {
      upright: {
        current: "A time of abundance, creativity, and natural growth. Things are developing beautifully in their own time.",
        future: "Fertility in all areas of life. What you've planted will grow into something wonderful and abundant.",
        divine: "Trust in the natural timing of life. Like a garden, your efforts will bloom when the season is right."
      },
      reversed: {
        current: "Blocks to creativity or abundance. You may be trying too hard or not caring for yourself properly.",
        future: "A need to restore balance and nurture yourself. Creative projects may be delayed but not abandoned.",
        divine: "Practice self-compassion. You are worthy of abundance, but first you must believe it yourself."
      }
    }
  },
  "The Emperor": {
    love: {
      upright: {
        current: "Stability and commitment define your romantic situation. There's a protective, authoritative energy in your relationship.",
        future: "A move toward greater commitment, possibly marriage or cohabitation. Structure and security in love await.",
        divine: "True love provides a safe foundation. Build your relationship on trust, respect, and mutual support."
      },
      reversed: {
        current: "Power struggles or controlling behavior may be affecting your relationship. Someone is being too domineering.",
        future: "A need to address imbalances of power in your relationship. Flexibility and compromise will be essential.",
        divine: "Love without freedom is not true love. Examine where control is masquerading as care."
      }
    },
    career: {
      upright: {
        current: "You are in a position of authority or moving toward leadership. Your organizational skills are being recognized.",
        future: "Promotion or increased responsibilities are likely. Your ability to create structure will lead to success.",
        divine: "Leadership is service to others. Use your authority wisely and with compassion."
      },
      reversed: {
        current: "Abuse of power or rigid thinking is creating problems at work. You may be resisting necessary authority.",
        future: "Conflicts with authority figures or difficulty implementing your vision. Flexibility is needed.",
        divine: "True power comes from empowering others. Examine your relationship with authority and control."
      }
    },
    spiritual: {
      upright: {
        current: "Your spiritual practice has structure and discipline. You are building a solid foundation for growth.",
        future: "Leadership in spiritual matters or becoming a teacher. Your wisdom will guide others.",
        divine: "Discipline and structure support spiritual growth. Create sacred routines that honor your path."
      },
      reversed: {
        current: "Spiritual rigidity or dogmatic thinking is limiting your growth. You may be following rules without understanding.",
        future: "A need to question spiritual authorities or break free from limiting beliefs.",
        divine: "True spirituality is flexible and personal. Don't let others' rules replace your own inner knowing."
      }
    },
    general: {
      upright: {
        current: "Order, structure, and authority are prominent themes. You have the power to create stability in your life.",
        future: "Success through discipline and organization. Your ability to lead and structure will bring achievements.",
        divine: "Create order from chaos. Your strength lies in your ability to build solid foundations for the future."
      },
      reversed: {
        current: "Rigidity or abuse of power is creating problems. You may need to question authority or your own controlling tendencies.",
        future: "A need for more flexibility and openness to different approaches. Control is slipping away for good reason.",
        divine: "True strength is knowing when to be firm and when to yield. Power with wisdom, not power for its own sake."
      }
    }
  },
  "The Hierophant": {
    love: {
      upright: {
        current: "Traditional values and commitment are important in your relationship. There may be formal ceremonies or blessings involved.",
        future: "A conventional approach to love will serve you well. Marriage, religious ceremonies, or family approval may be significant.",
        divine: "Some relationships are blessed by tradition and community. Honor the sacred bonds that connect you to others."
      },
      reversed: {
        current: "Questioning traditional relationship roles or feeling restricted by conventional expectations.",
        future: "A need to break free from others' expectations about your love life. Forge your own path.",
        divine: "Your heart knows its own truth. Don't let society's rules override your authentic feelings."
      }
    },
    career: {
      upright: {
        current: "Following established procedures and learning from mentors will advance your career. Respect for tradition pays off.",
        future: "Success through formal education, training, or working within established systems. Certification or credentials may be important.",
        divine: "Honor those who came before you. Learning traditional methods provides a foundation for innovation."
      },
      reversed: {
        current: "Feeling restricted by corporate culture or traditional ways of doing business. You want to innovate but face resistance.",
        future: "Breaking away from conventional career paths or challenging established practices in your field.",
        divine: "Sometimes tradition needs to be challenged. Trust your vision for a better way forward."
      }
    },
    spiritual: {
      upright: {
        current: "Traditional spiritual practices and formal religious study are beneficial now. Learning from established teachers brings wisdom.",
        future: "Deepening your connection through organized religion or formal spiritual training. Community worship has value.",
        divine: "Ancient wisdom has been preserved for a reason. Study the traditions before you try to transcend them."
      },
      reversed: {
        current: "Questioning religious dogma or feeling restricted by organized spirituality. You're seeking your own spiritual truth.",
        future: "Breaking away from formal religious structures to develop a personal spiritual practice.",
        divine: "The divine speaks to each heart differently. Find the spiritual path that resonates with your authentic self."
      }
    },
    general: {
      upright: {
        current: "Conformity, tradition, and working within established systems will serve you now. Respect for convention brings benefits.",
        future: "Success through following proper procedures and seeking guidance from experienced mentors.",
        divine: "There is wisdom in tradition. Learn the rules before you decide which ones to break."
      },
      reversed: {
        current: "Feeling confined by conventional expectations or societal pressures. You're ready to forge your own path.",
        future: "Liberation from restrictive traditions or institutions. Innovation and personal freedom are emerging.",
        divine: "Your authentic self is calling. Honor tradition but don't let it cage your spirit."
      }
    }
  },
  "The Lovers": {
    love: {
      upright: {
        current: "Deep soul connection and harmony in your relationship. Perfect union and understanding between partners.",
        future: "A significant relationship choice or commitment. Twin flame connection or marriage may be indicated.",
        divine: "Love is a choice made daily. Choose each other again and again, through all of life's seasons."
      },
      reversed: {
        current: "Disharmony or difficult choices in love. Values may be misaligned or there's temptation affecting the relationship.",
        future: "A relationship crossroads requiring careful consideration. Not all love connections are meant to last.",
        divine: "Sometimes loving someone means letting them go. Choose what serves your highest good."
      }
    },
    career: {
      upright: {
        current: "Excellent partnerships and collaboration at work. Perfect match between your values and your profession.",
        future: "A career choice that aligns perfectly with your values. Partnership opportunities will enhance success.",
        divine: "When your work aligns with your values, it becomes a form of service. Follow your heart in career matters."
      },
      reversed: {
        current: "Conflict between personal values and professional demands. Poor partnerships or difficult business relationships.",
        future: "A need to choose between competing career paths or resolve conflicts with business partners.",
        divine: "Don't compromise your integrity for success. Find work that honors who you truly are."
      }
    },
    spiritual: {
      upright: {
        current: "Perfect harmony between your spiritual beliefs and daily life. Integration of opposing forces within yourself.",
        future: "A spiritual awakening through love or union. Divine partnership or soulmate connection on the spiritual path.",
        divine: "The divine is experienced through union - with another, with nature, with your higher self."
      },
      reversed: {
        current: "Internal conflict between different aspects of yourself. Spiritual choices causing personal turmoil.",
        future: "A need to integrate opposing spiritual beliefs or resolve conflicts between heart and mind.",
        divine: "True spirituality embraces both light and shadow. Accept all parts of yourself with love."
      }
    },
    general: {
      upright: {
        current: "Perfect choices and harmonious relationships. Everything is aligning beautifully in your life.",
        future: "Important decisions that will shape your future. Choose with your heart as well as your mind.",
        divine: "When you align with love, the universe conspires to support you. Trust in the power of right relationship."
      },
      reversed: {
        current: "Difficult choices or conflicting desires. Temptation may be leading you away from your true path.",
        future: "A crossroads requiring careful consideration. Not all appealing options are right for you.",
        divine: "Sometimes the most loving choice is the hardest one. Have courage to choose what your soul knows is right."
      }
    }
  },
  "The Chariot": {
    love: {
      upright: {
        current: "Determination and willpower are driving your romantic success. You're taking control of your love life with confidence.",
        future: "Victory in love through persistence and focus. If single, you'll attract love through self-confidence.",
        divine: "Love rewards the courageous. Have the strength to pursue what your heart desires."
      },
      reversed: {
        current: "Lack of direction or self-control in love. You may be forcing relationships or acting aggressively.",
        future: "Relationship conflicts due to stubbornness or lack of compromise. Slow down and reassess your approach.",
        divine: "True strength in love is knowing when to advance and when to yield. Balance passion with patience."
      }
    },
    career: {
      upright: {
        current: "Rapid career advancement through determination and focused effort. You're in the driver's seat of your professional life.",
        future: "Significant career victory or achievement through persistent effort. Success is within your grasp.",
        divine: "Success comes to those who persist. Stay focused on your goals and trust in your abilities."
      },
      reversed: {
        current: "Career obstacles due to lack of focus or trying to control too much at once. Scattered energy hinders progress.",
        future: "Delays or setbacks in career goals. You need better strategy and self-discipline.",
        divine: "Sometimes the universe slows us down to prevent us from crashing. Reassess your direction and pace."
      }
    },
    spiritual: {
      upright: {
        current: "Strong spiritual discipline and focused practice are advancing your growth. You're making real progress.",
        future: "Spiritual victory through sustained effort and willpower. You'll overcome inner obstacles.",
        divine: "The spiritual path requires warrior courage. Face your inner demons with strength and determination."
      },
      reversed: {
        current: "Spiritual confusion or lack of discipline in practice. You may be spiritually aggressive or impatient.",
        future: "Need to slow down and reassess your spiritual direction. Inner work cannot be forced.",
        divine: "True spiritual progress is gentle but persistent. Force creates resistance; patience creates flow."
      }
    },
    general: {
      upright: {
        current: "Victory and success through determination and focused will. You have the strength to overcome any obstacle.",
        future: "Triumph in your endeavors through persistent effort and self-control. Success is assured.",
        divine: "You have the power to create your destiny. Harness your will and direct it toward your highest goals."
      },
      reversed: {
        current: "Scattered energy and lack of direction causing setbacks. You may be trying to control too much.",
        future: "Need to slow down and regain focus. Scattered efforts will not bring the success you seek.",
        divine: "Redirect your energy wisely. Sometimes the universe redirects us for our own good."
      }
    }
  },
  "Strength": {
    love: {
      upright: {
        current: "Gentle strength and compassion guide your relationship. You're handling love matters with patience and inner power.",
        future: "Love will triumph through kindness and patience rather than force. A gentle approach wins hearts.",
        divine: "True strength in love is vulnerability coupled with courage. Be brave enough to be tender."
      },
      reversed: {
        current: "Self-doubt or lack of confidence affecting your relationships. You may be too aggressive or too passive.",
        future: "Inner strength needs to be developed before external love can flourish. Work on self-acceptance.",
        divine: "Love yourself first. You cannot give what you do not possess within."
      }
    },
    career: {
      upright: {
        current: "Quiet confidence and inner strength are your greatest professional assets. Lead with compassion.",
        future: "Success through patient persistence and treating others with kindness. Your gentle approach wins.",
        divine: "True leadership inspires rather than intimidates. Lead with your heart as well as your mind."
      },
      reversed: {
        current: "Lack of confidence or inner turmoil affecting your work performance. You may be too harsh or too lenient.",
        future: "Professional challenges requiring inner work. Develop self-confidence before seeking external success.",
        divine: "Strengthen your inner foundation. External success without inner strength is unstable."
      }
    },
    spiritual: {
      upright: {
        current: "You've found the perfect balance between gentle acceptance and strong determination in your spiritual practice.",
        future: "Spiritual mastery through compassion and self-discipline. You'll tame your inner beasts with love.",
        divine: "The highest spiritual strength is gentleness. Approach your growth with patience and self-compassion."
      },
      reversed: {
        current: "Spiritual impatience or being too hard on yourself. Self-criticism is blocking your spiritual progress.",
        future: "Need to develop greater self-acceptance and patience with your spiritual journey.",
        divine: "Be gentle with yourself. Spiritual growth happens in divine timing, not forced schedules."
      }
    },
    general: {
      upright: {
        current: "Inner strength and gentle determination are your superpowers. You can overcome anything with patience and love.",
        future: "Victory through compassion and quiet confidence. Your gentle strength will move mountains.",
        divine: "True power lies in gentleness. Approach all challenges with courage tempered by compassion."
      },
      reversed: {
        current: "Self-doubt or harsh treatment of yourself or others. You need to develop greater self-acceptance.",
        future: "Inner work is required before external success can be sustained. Strengthen your foundation.",
        divine: "The universe asks you to be gentle with yourself. You are stronger than you know."
      }
    }
  },
  "The Hermit": {
    love: {
      upright: {
        current: "A period of introspection in love. You need solitude to understand what you truly want in a relationship.",
        future: "Love will come through self-discovery and patience. The right person appears when you know yourself.",
        divine: "Look within for the love you seek. The relationship with yourself is the foundation of all others."
      },
      reversed: {
        current: "Isolation or withdrawal from love. You may be avoiding intimacy or feeling lost in relationships.",
        future: "Loneliness may persist if you don't seek guidance or open up to others. Don't isolate completely.",
        divine: "Balance solitude with connection. Some wisdom can only be found in relationship with others."
      }
    },
    career: {
      upright: {
        current: "A time for reflection and seeking career guidance. Inner wisdom will illuminate your professional path.",
        future: "Career breakthrough through introspection and possibly seeking mentorship or further education.",
        divine: "The answers you seek are within you. Quiet your mind and listen to your inner guidance."
      },
      reversed: {
        current: "Career stagnation due to isolation or refusal to seek help. You may be avoiding necessary guidance.",
        future: "Professional loneliness or missed opportunities due to withdrawal. Reach out for support.",
        divine: "Even hermits need teachers. Don't let pride prevent you from seeking the guidance you need."
      }
    },
    spiritual: {
      upright: {
        current: "Deep spiritual seeking and inner reflection. You're on a vision quest for higher truth and wisdom.",
        future: "Spiritual enlightenment through solitude and meditation. You'll find the light you've been seeking.",
        divine: "The spiritual path leads inward. In the silence, you will find the answers you seek."
      },
      reversed: {
        current: "Spiritual loneliness or losing your way on the path. You may be avoiding the inner work required.",
        future: "Spiritual confusion if you continue to avoid looking within. Seek a spiritual teacher or guide.",
        divine: "Don't wander in darkness alone. There are guides available when you're ready to accept help."
      }
    },
    general: {
      upright: {
        current: "A necessary period of solitude and self-reflection. You're seeking deeper meaning and understanding.",
        future: "Wisdom and insight gained through introspection. Your inner light will illuminate the path forward.",
        divine: "Sometimes you must withdraw from the world to find your place in it. Trust the process of seeking."
      },
      reversed: {
        current: "Isolation or stubbornly refusing help when you need it. You may be lost and too proud to ask for directions.",
        future: "Continued confusion if you don't seek guidance or look within. Don't suffer in silence.",
        divine: "There's a difference between solitude and isolation. Seek the wisdom you need to move forward."
      }
    }
  }
};
