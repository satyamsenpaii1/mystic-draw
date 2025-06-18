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
  },
  "Wheel of Fortune": {
    love: {
      upright: {
        current: "Your love life is entering a period of positive change and good fortune. Cycles are turning in your favor.",
        future: "Destiny is bringing significant romantic opportunities. A fated meeting or relationship turning point awaits.",
        divine: "Trust in love's perfect timing. The universe is orchestrating beautiful changes in your romantic destiny."
      },
      reversed: {
        current: "Challenging cycles in love or feeling like you're going in circles. External forces may be disrupting your relationships.",
        future: "Temporary setbacks in love, but remember that all wheels turn. This difficult phase will pass.",
        divine: "Even in love's difficult seasons, growth is happening. Trust that challenges are teaching you what you need to know."
      }
    },
    career: {
      upright: {
        current: "A stroke of professional luck or a turning point in your career. Opportunities are aligning in your favor.",
        future: "Career advancement through fortunate circumstances. Your professional wheel is turning toward success.",
        divine: "Destiny favors your career path. Trust in the opportunities the universe is presenting to you."
      },
      reversed: {
        current: "Career setbacks or feeling stuck in professional cycles. External forces beyond your control may be affecting your work.",
        future: "Temporary career challenges, but persistence will see you through this difficult cycle.",
        divine: "Career challenges are temporary lessons. Stay adaptable and trust that your professional fortune will improve."
      }
    },
    spiritual: {
      upright: {
        current: "A significant spiritual breakthrough or awakening is occurring. You're experiencing karmic completion and new beginnings.",
        future: "Your spiritual journey is reaching a pivotal moment. Higher consciousness and enlightenment are approaching.",
        divine: "You are experiencing divine timing in your spiritual evolution. Embrace this sacred turning point."
      },
      reversed: {
        current: "Spiritual stagnation or resistance to karmic lessons. You may be fighting against natural spiritual cycles.",
        future: "Spiritual lessons may feel challenging, but they're necessary for your growth. Embrace the wisdom in difficulty.",
        divine: "Sometimes we must experience spiritual winter before spiritual spring. Trust in divine timing."
      }
    },
    general: {
      upright: {
        current: "Life is taking a positive turn. Good fortune, lucky breaks, and favorable circumstances are surrounding you.",
        future: "Destiny is working in your favor. Major life changes will bring unexpected opportunities and growth.",
        divine: "You are experiencing divine timing. Trust that everything is unfolding exactly as it should."
      },
      reversed: {
        current: "Challenging circumstances or feeling like you're at the mercy of external forces. Cycles of difficulty are present.",
        future: "Temporary setbacks are teaching you important lessons. This challenging cycle will eventually turn.",
        divine: "Even difficult times serve a purpose. Stay centered and trust that your fortune will improve."
      }
    }
  },
  "Justice": {
    love: {
      upright: {
        current: "Balance and fairness are essential in your relationship. Truth and honesty are creating harmony between you and your partner.",
        future: "A relationship decision based on fairness and balance will serve you well. Justice prevails in matters of the heart.",
        divine: "Love requires both partners to give and receive equally. Seek balance and treat each other with fairness."
      },
      reversed: {
        current: "Imbalance or unfairness in your relationship. Someone may not be taking responsibility for their actions.",
        future: "Relationship issues require honest communication and taking responsibility. Avoid blame and seek understanding.",
        divine: "True love cannot exist without honesty and accountability. Face relationship truths with courage."
      }
    },
    career: {
      upright: {
        current: "Fairness and integrity in your professional life are bringing positive results. Legal matters may be resolved favorably.",
        future: "Professional recognition for your honest work and ethical behavior. Justice and fairness will advance your career.",
        divine: "Integrity in your work creates lasting success. Continue to act with honesty and fairness."
      },
      reversed: {
        current: "Workplace injustice or ethical compromises may be affecting your career. Someone may not be playing fair.",
        future: "Professional challenges requiring you to stand up for what's right. Don't compromise your integrity for advancement.",
        divine: "Your integrity is more valuable than any position. Stand firm in your principles even when it's difficult."
      }
    },
    spiritual: {
      upright: {
        current: "Spiritual balance and karmic justice are manifesting in your life. You're learning important lessons about cause and effect.",
        future: "Spiritual accountability and taking responsibility for your actions will accelerate your growth.",
        divine: "The universe operates on perfect justice. Your actions and intentions create your spiritual reality."
      },
      reversed: {
        current: "Spiritual imbalance or avoiding responsibility for your spiritual growth. You may be judging yourself or others too harshly.",
        future: "Spiritual progress requires honest self-examination and forgiveness. Release judgment and embrace compassion.",
        divine: "Divine justice includes divine mercy. Be as compassionate with yourself as you are seeking truth."
      }
    },
    general: {
      upright: {
        current: "Truth, fairness, and balance are guiding your decisions. Justice is being served in your current situation.",
        future: "Fair outcomes and balanced decisions will shape your future. Truth will prevail in all your endeavors.",
        divine: "The universe supports truth and justice. Continue to act with integrity and fairness."
      },
      reversed: {
        current: "Injustice or imbalance is affecting your life. You may need to take responsibility for your part in current difficulties.",
        future: "Challenging lessons about accountability and fairness are coming. Face truth with courage and make necessary changes.",
        divine: "True justice sometimes requires difficult honesty. Embrace truth even when it's uncomfortable."
      }
    }
  },
  "The Hanged Man": {
    love: {
      upright: {
        current: "A period of waiting and surrendering in love. You're learning to see your relationship from a new perspective.",
        future: "Patience in love will be rewarded. A sacrifice or period of waiting will lead to deeper understanding.",
        divine: "Sometimes love requires letting go of control. Trust the process and allow love to unfold naturally."
      },
      reversed: {
        current: "Resistance to necessary relationship changes or unwillingness to see things from your partner's perspective.",
        future: "Stubbornness in love may prevent growth. Be willing to compromise and see situations differently.",
        divine: "Love grows through flexibility and understanding. Release rigid expectations and embrace compassion."
      }
    },
    career: {
      upright: {
        current: "A pause in your career progress that's serving a higher purpose. This waiting period is preparing you for what's next.",
        future: "Career advancement through patience and seeing opportunities from a new angle. Temporary sacrifice leads to long-term gain.",
        divine: "Professional growth sometimes requires stepping back to see the bigger picture. Trust in divine timing."
      },
      reversed: {
        current: "Resistance to necessary career changes or feeling stuck due to your own unwillingness to adapt.",
        future: "Career progress requires releasing old patterns and embracing new perspectives. Stop fighting the flow.",
        divine: "Your career evolution requires surrendering outdated beliefs about success. Embrace new possibilities."
      }
    },
    spiritual: {
      upright: {
        current: "A profound spiritual awakening through surrender and letting go. You're learning to trust the divine plan.",
        future: "Spiritual enlightenment through releasing control and embracing divine will. Surrender leads to liberation.",
        divine: "The highest spiritual teaching is surrender. Let go and let the divine guide your path."
      },
      reversed: {
        current: "Spiritual resistance or unwillingness to surrender to higher wisdom. You may be fighting against your spiritual growth.",
        future: "Spiritual progress requires releasing ego control and embracing humility. Stop resisting your evolution.",
        divine: "Your spiritual journey requires surrendering the illusion of control. Trust in divine wisdom."
      }
    },
    general: {
      upright: {
        current: "A period of suspension and waiting that serves a higher purpose. You're gaining new perspective through this pause.",
        future: "Wisdom and enlightenment through surrender and seeing life from a different angle. Patience will be rewarded.",
        divine: "Sometimes life requires us to pause and reflect. Trust that this waiting period serves your highest good."
      },
      reversed: {
        current: "Resistance to necessary changes or unwillingness to see situations from a new perspective.",
        future: "Progress requires releasing old patterns and embracing new viewpoints. Stop fighting against necessary changes.",
        divine: "Growth requires flexibility and willingness to change. Embrace new perspectives with an open heart."
      }
    }
  },
  "Death": {
    love: {
      upright: {
        current: "A significant transformation in your love life. One phase of your romantic journey is ending to make way for something new.",
        future: "Rebirth in love after a period of ending. A deeper, more authentic relationship is emerging from the ashes of the old.",
        divine: "Love's greatest transformations come through endings. Trust that what's leaving is making space for something better."
      },
      reversed: {
        current: "Resistance to necessary changes in your relationship. Clinging to what's not working is preventing growth.",
        future: "Love transformation is being delayed by fear or resistance. Embrace the changes that need to happen.",
        divine: "Fighting against love's natural evolution creates suffering. Allow relationships to transform naturally."
      }
    },
    career: {
      upright: {
        current: "A major career transformation is occurring. The end of one professional phase is leading to a powerful new beginning.",
        future: "Professional rebirth through embracing necessary endings. A more fulfilling career path is emerging.",
        divine: "Career death and rebirth lead to authentic success. Trust the professional transformation you're experiencing."
      },
      reversed: {
        current: "Resistance to necessary career changes or fear of professional transformation. Clinging to outdated work patterns.",
        future: "Career growth requires embracing change and releasing what no longer serves. Stop fighting necessary transitions.",
        divine: "Your professional evolution requires releasing old identities. Embrace the career transformation calling you."
      }
    },
    spiritual: {
      upright: {
        current: "Profound spiritual transformation and ego death. You're experiencing a rebirth of consciousness and awareness.",
        future: "Spiritual awakening through releasing old beliefs and identities. A new spiritual self is being born.",
        divine: "Spiritual death and rebirth are part of enlightenment. Trust the transformation of your consciousness."
      },
      reversed: {
        current: "Resistance to spiritual transformation or clinging to outdated beliefs. Fear is preventing spiritual growth.",
        future: "Spiritual evolution requires releasing old patterns and embracing new understanding. Stop resisting growth.",
        divine: "Your spiritual rebirth requires releasing who you think you are. Embrace the unknown spiritual self emerging."
      }
    },
    general: {
      upright: {
        current: "Major life transformation and the end of a significant life phase. Profound change is clearing the way for renewal.",
        future: "Rebirth and renewal after a period of endings. A more authentic version of yourself is emerging.",
        divine: "Life's greatest transformations come through endings. Trust that what's dying is making space for your highest self."
      },
      reversed: {
        current: "Resistance to necessary life changes or fear of transformation. Clinging to the familiar is preventing growth.",
        future: "Life transformation requires courage to let go of what no longer serves. Embrace necessary endings.",
        divine: "Fighting against life's natural cycles creates suffering. Allow transformation to happen with grace."
      }
    }
  },
  "Temperance": {
    love: {
      upright: {
        current: "Perfect balance and harmony in your relationship. You and your partner are blending beautifully, creating something greater together.",
        future: "Healing and patience in love will create a harmonious union. Gradual, mindful love development is favored.",
        divine: "Love is the art of balance. Continue to blend your energies with patience and mutual respect."
      },
      reversed: {
        current: "Imbalance or extremes in your relationship. Lack of patience or poor communication is creating disharmony.",
        future: "Relationship healing requires more patience and balance. Avoid extremes and seek the middle path in love.",
        divine: "Love requires temperance and patience. Avoid rushing or forcing romantic outcomes."
      }
    },
    career: {
      upright: {
        current: "Perfect balance between your skills and opportunities. You're blending different aspects of your work harmoniously.",
        future: "Career success through patience, balance, and gradual progress. Collaboration and moderation lead to achievement.",
        divine: "Professional success comes through balanced effort and patient persistence. Continue your measured approach."
      },
      reversed: {
        current: "Imbalance in your work life or extremes in your professional approach. Lack of patience is hindering progress.",
        future: "Career advancement requires more balance and patience. Avoid rushing or taking extreme measures.",
        divine: "Professional growth requires temperance. Balance ambition with patience and collaboration with independence."
      }
    },
    spiritual: {
      upright: {
        current: "Perfect spiritual balance and integration. You're harmoniously blending different aspects of your spiritual practice.",
        future: "Spiritual healing and growth through patience and balance. Gradual spiritual development is bringing enlightenment.",
        divine: "Spiritual mastery comes through balance and temperance. Continue your patient, measured spiritual practice."
      },
      reversed: {
        current: "Spiritual imbalance or extremes in your practice. Lack of patience or integration is hindering growth.",
        future: "Spiritual progress requires more balance and patience. Avoid spiritual extremes and embrace moderation.",
        divine: "Spiritual growth is a gradual process requiring patience. Balance different aspects of your practice harmoniously."
      }
    },
    general: {
      upright: {
        current: "Perfect balance and moderation in all areas of life. You're successfully blending different aspects of your experience.",
        future: "Continued success through patience, balance, and gradual progress. Harmony and healing are manifesting.",
        divine: "Life's greatest achievements come through balance and temperance. Continue your patient, measured approach to growth."
      },
      reversed: {
        current: "Imbalance or extremes in your approach to life. Lack of patience or poor integration is creating challenges.",
        future: "Life improvement requires more balance and patience. Avoid extremes and seek harmony in all areas.",
        divine: "Life mastery requires temperance and balance. Embrace patience and moderation in all your endeavors."
      }
    }
  },
  "The Devil": {
    love: {
      upright: {
        current: "Passion and intensity in your relationship, but also potential for unhealthy attachments or codependency.",
        future: "Recognition of relationship patterns that may be binding you. Liberation comes through acknowledging what's not serving you.",
        divine: "True love liberates; false love binds. Examine what in your relationship serves growth versus what creates dependency."
      },
      reversed: {
        current: "Breaking free from unhealthy relationship patterns or toxic attachments. You're recognizing your own power to choose.",
        future: "Liberation from love's shadows and unhealthy patterns. Freedom and authentic love are possible.",
        divine: "You have the power to break free from any love that diminishes you. Choose relationships that honor your highest self."
      }
    },
    career: {
      upright: {
        current: "Feeling trapped in your career or bound by unhealthy work patterns. Material success may be coming at a spiritual cost.",
        future: "Recognition of professional limitations you've created. The first step to career freedom is acknowledging your chains.",
        divine: "Examine what professional success costs your soul. True career fulfillment honors both ambition and integrity."
      },
      reversed: {
        current: "Breaking free from limiting career beliefs or toxic work environments. You're reclaiming your professional power.",
        future: "Career liberation through recognizing and releasing self-imposed limitations. Professional freedom is within reach.",
        divine: "You have the power to create fulfilling work. Release any beliefs that keep you trapped in unfulfilling careers."
      }
    },
    spiritual: {
      upright: {
        current: "Confronting your shadow self and acknowledging the parts of yourself you've been denying or suppressing.",
        future: "Spiritual growth through facing your darker aspects. Integration of shadow leads to wholeness.",
        divine: "Spiritual evolution requires embracing all aspects of yourself. Your shadow contains power when consciously integrated."
      },
      reversed: {
        current: "Breaking free from spiritual illusions or toxic spiritual practices. You're reclaiming your authentic spiritual power.",
        future: "Spiritual liberation through releasing limiting beliefs and embracing your true spiritual nature.",
        divine: "You are already free. Release any spiritual beliefs that make you feel powerless or unworthy."
      }
    },
    general: {
      upright: {
        current: "Feeling bound by circumstances, addictions, or limiting beliefs. Recognition of your own participation in creating these chains.",
        future: "Liberation comes through acknowledging what binds you. The power to change lies in recognizing your choices.",
        divine: "You are more powerful than any circumstance. Your chains are often self-created and can be self-released."
      },
      reversed: {
        current: "Breaking free from limiting beliefs, addictions, or toxic patterns. You're reclaiming your personal power.",
        future: "Liberation and freedom through conscious choice and releasing what no longer serves you.",
        divine: "Freedom is your birthright. You have the power to release yourself from any limitation or negative pattern."
      }
    }
  },
  "The Tower": {
    love: {
      upright: {
        current: "Sudden upheaval or revelation in your relationship. What seemed stable is being shaken to reveal the truth underneath.",
        future: "Relationship foundations built on shaky ground will crumble, but this clearing makes space for authentic love.",
        divine: "Sometimes love's greatest gift is the destruction of what's false. Trust that what falls away was never truly yours."
      },
      reversed: {
        current: "Avoiding necessary relationship upheaval or clinging to a connection that needs to end. Resistance to obvious truth.",
        future: "Delayed but inevitable relationship changes. The tower will fall when you're ready to face the truth.",
        divine: "Fighting against necessary endings prolongs suffering. Allow love's natural destruction and renewal cycles."
      }
    },
    career: {
      upright: {
        current: "Sudden career disruption or professional revelation. Structures you thought were solid are being shaken or destroyed.",
        future: "Career upheaval that ultimately serves your highest good. What's destroyed makes space for authentic success.",
        divine: "Professional destruction often precedes professional rebirth. Trust that what's crumbling wasn't built on solid ground."
      },
      reversed: {
        current: "Avoiding necessary career changes or clinging to professional situations that need to end.",
        future: "Delayed but inevitable career upheaval. The professional tower will eventually fall for your own good.",
        divine: "Resisting necessary professional changes prolongs career stagnation. Embrace the transformation calling you."
      }
    },
    spiritual: {
      upright: {
        current: "Sudden spiritual awakening or destruction of false spiritual beliefs. Your spiritual foundations are being shaken.",
        future: "Spiritual breakthrough through the destruction of illusion. What's real will remain; what's false will crumble.",
        divine: "Spiritual awakening often comes through the destruction of false beliefs. Trust the process of spiritual rebuilding."
      },
      reversed: {
        current: "Avoiding necessary spiritual awakening or clinging to spiritual beliefs that no longer serve you.",
        future: "Delayed spiritual breakthrough. Eventually, false spiritual foundations will crumble for your highest good.",
        divine: "Spiritual evolution requires releasing outdated beliefs. Don't fear the destruction of what no longer serves your growth."
      }
    },
    general: {
      upright: {
        current: "Sudden upheaval or destruction of false foundations in your life. What seemed permanent is being shaken to its core.",
        future: "Liberation through destruction of what was built on shaky ground. Authentic rebuilding follows the collapse.",
        divine: "Life's greatest revelations come through destruction of illusion. Trust that what's crumbling was never truly stable."
      },
      reversed: {
        current: "Avoiding necessary life changes or clinging to structures that need to fall. Resistance to obvious truth.",
        future: "Delayed but inevitable life upheaval. The tower will fall when you're ready to face what needs to change.",
        divine: "Fighting against necessary life changes prolongs suffering. Allow destruction to clear space for authentic rebuilding."
      }
    }
  },
  "The Star": {
    love: {
      upright: {
        current: "Hope and healing in your love life. You're feeling optimistic about romantic possibilities and trusting in love's guidance.",
        future: "A wish fulfilled in love or the arrival of a soulmate connection. Your heart's desires are being heard by the universe.",
        divine: "Love is your guiding star. Trust in your heart's wisdom and let hope illuminate your romantic path."
      },
      reversed: {
        current: "Loss of hope in love or feeling disconnected from your romantic dreams. Self-doubt is clouding your heart's vision.",
        future: "Reconnection with hope and healing in love. Your romantic star will shine again when you rediscover self-love.",
        divine: "Your capacity for love is infinite. Reconnect with the hope and healing power within your own heart."
      }
    },
    career: {
      upright: {
        current: "Professional inspiration and clear vision for your career path. Your talents are being recognized and appreciated.",
        future: "Career wishes coming true through following your genuine inspiration. Your professional star is rising.",
        divine: "Follow your professional inspiration. Your unique gifts are needed in the world; trust your career vision."
      },
      reversed: {
        current: "Loss of professional direction or feeling uninspired in your career. Self-doubt is dimming your career vision.",
        future: "Rediscovering career inspiration and professional hope. Your talents will shine when you reconnect with your purpose.",
        divine: "Your professional gifts are valuable. Reconnect with what originally inspired you and trust your unique contribution."
      }
    },
    spiritual: {
      upright: {
        current: "Spiritual guidance and connection to higher wisdom. You're receiving clear signs and feeling divinely supported.",
        future: "Spiritual wishes and prayers being answered. Your connection to divine guidance is strengthening.",
        divine: "You are a star in the cosmic constellation. Trust your spiritual intuition and let divine guidance illuminate your path."
      },
      reversed: {
        current: "Spiritual disconnection or loss of faith. You may be feeling unworthy of divine guidance or questioning your spiritual path.",
        future: "Reconnection with spiritual hope and divine guidance. Your spiritual light will shine again through self-compassion.",
        divine: "You are always connected to divine love. Forgive yourself and allow spiritual healing to restore your inner light."
      }
    },
    general: {
      upright: {
        current: "Hope, inspiration, and divine guidance are illuminating your path. You're feeling optimistic about the future.",
        future: "Wishes being fulfilled and dreams coming true. Your highest aspirations are being supported by the universe.",
        divine: "You are guided by infinite love and wisdom. Trust your dreams and let hope be your compass."
      },
      reversed: {
        current: "Loss of hope or feeling disconnected from your dreams. Self-doubt and pessimism are clouding your vision.",
        future: "Rediscovering hope and reconnecting with your dreams. Your inner light will shine again through healing.",
        divine: "Your dreams are valid and your hopes are sacred. Heal your relationship with yourself to restore your inner star."
      }
    }
  },
  "Ace of Wands": {
    love: {
      upright: {
        current: "A spark of new romantic passion is igniting. Fresh creative energy is entering your love life with exciting potential.",
        future: "The beginning of a passionate new romance or renewed fire in your existing relationship.",
        divine: "Love's creative force is awakening within you. Allow this passionate energy to flow naturally."
      },
      reversed: {
        current: "Blocked creative energy in love or false starts in romance. Passion may be misdirected or lacking focus.",
        future: "Delayed romantic beginnings. Your passionate energy needs better direction to manifest love successfully.",
        divine: "Your heart's fire needs proper kindling. Focus your loving energy with clear intention."
      }
    },
    career: {
      upright: {
        current: "A brilliant new career idea or opportunity is presenting itself. Creative energy and inspiration are flowing strongly.",
        future: "The launch of a successful new project or career venture. Your innovative ideas will bear fruit.",
        divine: "Your creative genius is ready to manifest in the world. Trust your professional inspiration."
      },
      reversed: {
        current: "Creative blocks at work or difficulty launching new projects. Your professional energy lacks focus or direction.",
        future: "Professional delays until you clarify your vision. Raw talent needs refinement and focus.",
        divine: "Channel your creative energy with intention. Scattered inspiration needs focused direction to succeed."
      }
    },
    spiritual: {
      upright: {
        current: "A new spiritual awakening or burst of divine inspiration. Your inner fire and passion for truth are igniting.",
        future: "The beginning of an important spiritual journey or practice. Divine creativity is flowing through you.",
        divine: "Your spiritual spark is divine fire. Tend this sacred flame with devotion and watch it grow."
      },
      reversed: {
        current: "Spiritual energy feeling blocked or misdirected. Your connection to divine inspiration may be clouded.",
        future: "Spiritual breakthrough requires clearing energetic blocks. Your divine spark needs proper nurturing.",
        divine: "Remove what dims your spiritual fire. Your connection to the divine is always available when you clear the channel."
      }
    },
    general: {
      upright: {
        current: "A powerful new beginning filled with creative potential. Raw energy and inspiration are ready to be channeled.",
        future: "Successful manifestation of your creative ideas. This spark of inspiration will grow into something significant.",
        divine: "You hold the seed of creation in your hands. Plant it with intention and watch it flourish."
      },
      reversed: {
        current: "Creative energy lacking direction or false starts in new ventures. Potential exists but needs better focus.",
        future: "Success requires channeling your raw energy more effectively. Clarify your vision before moving forward.",
        divine: "Your creative power is infinite but needs conscious direction. Focus your energy with clear intention."
      }
    }
  },
  "Three of Cups": {
    love: {
      upright: {
        current: "Celebration and joy in love, possibly including friends and community. Your relationship is supported by those around you.",
        future: "A love celebration - engagement, wedding, or relationship milestone. Community support strengthens your bond.",
        divine: "Love is meant to be celebrated and shared. Your happiness in love brings joy to others as well."
      },
      reversed: {
        current: "Drama in your social circle affecting your love life or feeling excluded from romantic celebrations.",
        future: "Relationship challenges involving friends or family. You may need to protect your love from outside interference.",
        divine: "Not everyone will celebrate your love, and that's okay. Focus on those who genuinely support your happiness."
      }
    },
    career: {
      upright: {
        current: "Successful collaboration and team achievements at work. Your professional relationships are thriving.",
        future: "Career advancement through networking and collaboration. Celebrate professional achievements with colleagues.",
        divine: "Success is sweeter when shared. Your professional friendships are valuable assets to your career."
      },
      reversed: {
        current: "Office politics or team conflicts affecting your work environment. Lack of support from colleagues.",
        future: "Professional isolation or competitive workplace dynamics. Focus on individual achievements.",
        divine: "Not every workplace will appreciate your contributions. Find where your talents are truly valued."
      }
    },
    spiritual: {
      upright: {
        current: "Spiritual community and shared celebration of faith or beliefs. You're finding like-minded spiritual companions.",
        future: "Spiritual growth through community involvement and shared practices. Collective worship or study brings joy.",
        divine: "Spiritual joy multiplies when shared with others. Your spiritual community supports your growth."
      },
      reversed: {
        current: "Spiritual isolation or conflicts within your spiritual community. Feeling excluded from group practices.",
        future: "Need to find a spiritual community that truly accepts you. Some groups may not be right for your path.",
        divine: "Your spiritual path is unique, even within community. Honor your individual connection to the divine."
      }
    },
    general: {
      upright: {
        current: "Friendship, celebration, and community support. You're enjoying the company of like-minded people.",
        future: "Social success and meaningful friendships. Celebrations and gatherings will bring joy to your life.",
        divine: "Life's joys are meant to be shared. Your happiness contributes to the collective joy of those around you."
      },
      reversed: {
        current: "Social drama, feeling excluded, or superficial friendships. Your social circle may need evaluation.",
        future: "Social challenges requiring you to choose quality over quantity in relationships.",
        divine: "True friendship is rare and precious. Choose companions who celebrate your authentic self."
      }
    }
  },
  "Seven of Swords": {
    love: {
      upright: {
        current: "Deception or secretive behavior in your relationship. Someone may not be completely honest about their feelings or actions.",
        future: "The need for careful observation in love. Trust your instincts if something feels dishonest.",
        divine: "Love requires honesty to flourish. Address any deception before it undermines your relationship's foundation."
      },
      reversed: {
        current: "Coming clean about past deceptions or choosing honesty over convenience in your relationship.",
        future: "Truth emerging in love, leading to either deeper trust or necessary endings. Honesty will prevail.",
        divine: "The truth in love, though sometimes painful, always serves your highest good. Choose transparency."
      }
    },
    career: {
      upright: {
        current: "Workplace dishonesty, theft of ideas, or deceptive practices. Someone may be taking credit for your work.",
        future: "Need for vigilance in professional matters. Protect your ideas and document your contributions.",
        divine: "Professional integrity is your greatest asset. Don't compromise your values for short-term gains."
      },
      reversed: {
        current: "Confessing to professional mistakes or choosing ethical behavior over personal advancement.",
        future: "Professional honesty leading to respect and trust from colleagues. Integrity pays long-term dividends.",
        divine: "Your professional reputation is built on consistent integrity. Choose the honest path even when it's difficult."
      }
    },
    spiritual: {
      upright: {
        current: "Self-deception or avoiding spiritual truths that need to be faced. You may be stealing peace from yourself through denial.",
        future: "The need to examine your spiritual honesty. Are you living in alignment with your stated beliefs?",
        divine: "Spiritual growth requires radical honesty with yourself. Face the truths you've been avoiding."
      },
      reversed: {
        current: "Spiritual honesty and facing uncomfortable truths about yourself. Choosing authentic spiritual growth over comfortable illusions.",
        future: "Spiritual breakthrough through radical self-honesty. Truth, though challenging, leads to liberation.",
        divine: "Your spiritual evolution depends on your willingness to see yourself clearly. Embrace truth with courage."
      }
    },
    general: {
      upright: {
        current: "Deception, theft, or dishonest behavior affecting your life. You may need to be more vigilant about protecting yourself.",
        future: "The need for careful observation and protection of your interests. Not everyone has honorable intentions.",
        divine: "Wisdom includes recognizing when others are not acting in your best interest. Protect yourself appropriately."
      },
      reversed: {
        current: "Choosing honesty over convenience or confessing to past mistakes. Taking responsibility for your actions.",
        future: "Truth emerging and honest behavior being rewarded. Integrity leads to lasting success and peace.",
        divine: "Honesty is the foundation of authentic living. Choose truth even when it requires courage."
      }
    }
  },
  "Ten of Pentacles": {
    love: {
      upright: {
        current: "Long-term security and stability in your relationship. You're building something lasting and meaningful together.",
        future: "Marriage, family creation, or achieving major relationship milestones. Legacy love that spans generations.",
        divine: "True love creates lasting foundations. Your relationship is building something greater than yourselves."
      },
      reversed: {
        current: "Instability in long-term relationship plans or family conflicts affecting your love life.",
        future: "Challenges to relationship security requiring attention to foundations. Invest in what truly lasts.",
        divine: "Love's true wealth isn't material but spiritual. Focus on building unshakeable emotional and spiritual bonds."
      }
    },
    career: {
      upright: {
        current: "Career security, wealth accumulation, and professional legacy building. Your work is creating lasting value.",
        future: "Financial independence and professional establishment. Your career efforts will benefit future generations.",
        divine: "True professional success creates value beyond yourself. Build work that contributes to lasting positive change."
      },
      reversed: {
        current: "Financial instability, career insecurity, or conflicts over money and inheritance.",
        future: "Need to reassess what constitutes true professional wealth. Some forms of success don't last.",
        divine: "Your greatest professional legacy is the positive impact you have on others. Measure success by contribution, not just accumulation."
      }
    },
    spiritual: {
      upright: {
        current: "Spiritual abundance and connection to ancestral wisdom. Your spiritual practice is creating lasting value.",
        future: "Spiritual legacy and wisdom that will benefit future generations. Your spiritual growth serves others.",
        divine: "Your spiritual wealth is infinite and eternal. What you gain spiritually can never be lost."
      },
      reversed: {
        current: "Spiritual poverty despite material wealth, or disconnection from spiritual traditions and wisdom.",
        future: "Need to reconnect with spiritual values and traditions. Material success without spiritual grounding is empty.",
        divine: "True wealth includes spiritual abundance. Don't sacrifice spiritual riches for material gain."
      }
    },
    general: {
      upright: {
        current: "Security, stability, and accumulation of lasting wealth in all forms. You're building something enduring.",
        future: "Legacy creation and long-term security. Your efforts will benefit not just you but future generations.",
        divine: "True abundance encompasses all areas of life. Build wealth that enriches your soul as well as your material life."
      },
      reversed: {
        current: "Instability, poor investments, or family conflicts over resources and inheritance.",
        future: "Need to reassess what constitutes true wealth and security. Some foundations may need rebuilding.",
        divine: "The most valuable inheritance you can leave is wisdom, love, and positive impact. Invest in what truly matters."
      }
    }
  }
};
