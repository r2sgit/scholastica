import type { ModuleMeta } from '../types';

export const m9: ModuleMeta = {
  id: 9,
  title: `The Soul and Its Faculties`,
  short: `The Soul and Its Faculties`,
  label: `Module 9 · The Soul and Its Faculties`,
  latin: `Anima et Potentiae`,
  aim: `The soul is the substantial form of a living body, its first principle of life; not a ghost in a machine. Life stands in three grades, vegetative, sensitive, rational, and in man one rational soul, the only substantial form, does the work of all three and communicates one act of existence to the whole. Because the intellect can know all bodies, no organ is its subject: the soul subsists. The brain is the organ of thinking's materials; the man, by his subsistent soul, is the subject that understands.`,
  lessons: [
    {
      id: `m9-l1`,
      num: `I`,
      title: `What the Corpse Is Missing`,
      latin: `anima`,
      tag: `anima`,
      fin: {
        tag: `anima`,
        heading: `The corpse is missing nothing you could weigh.`,
        body: `Same atoms at 3:06 and 3:08, and everything is different: nourishing, sensing, breathing have stopped, because the principle that made this matter one living man has ceased to inform it. The tradition names that first principle of life <span class="lat">anima</span>, the soul. Not a component, not a vapor, not chemistry's finest layer: the act of the body, as heat is not a body but the act of a body. What exactly such a principle is, and where Descartes politely went wrong, is the next lesson's business.`,
        distinction: {
          latin: `anima`,
          english: `soul`,
          gloss: `Same atoms at 3:06 and 3:08, everything different: the soul is not a part you could weigh but the first act of the living body.`,
          motif: `candle-flame`,
        },
      },
      questions: [
        {
          id: `m9-l1-q1`,
          type: "mcq",
          stem: `A man dies at 3:07. At 3:06 and at 3:08 the body on the bed holds the same atoms, the same shape, the same weight. What changed?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A very fine material part slipped out, too subtle for the scales.",
                "feedback": "Then the scales would catch it in principle, and death would be a subtraction problem. Weigh the body all you like; nothing measurable departed. Whatever changed is not on the parts list."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nothing real changed; 'alive' is a label observers stop applying.",
                "feedback": "At 3:06 something nourished itself, sensed, and breathed; at 3:08 nothing did. A change that ends every operation of the thing is the most real change there is. Labels follow it; they do not make it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing was subtracted; the matter ceased to be organized as one living whole.",
                "feedback": "Respondeo: the corpse is missing nothing you could weigh. What departed is the principle by which these atoms were one living man rather than a heap arranged like one. The tradition has a name for that principle, and it is not 'ghost.'"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The atoms themselves died; death reaches the smallest parts first.",
                "feedback": "Carbon does not die; it never lived. If dying belonged to atoms, chemistry would be a tragedy. Death happens to the whole living thing, which is exactly the clue worth keeping."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m9-l1-q2`,
          type: "mcq",
          stem: `The tradition reserves the name <span class="lat">anima</span>, soul, for the FIRST principle of life. The eye is a true principle of vision; the heart, of circulation. Why is neither first?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "An organ is too small a part to govern the whole body.",
                "feedback": "Size is not the issue; a small first principle would do fine if being first were a matter of geography. The eye fails for a better reason: its very seeing presupposes something already alive."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Each organ works only as part of something already alive; its power is borrowed.",
                "feedback": "Respondeo: the eye is a principle, not the first one. It sees because the animal lives, never the reverse. Whatever makes the whole alive in the first place, that is <span class=\"lat\">anima</span>; every organ works on its credit."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Vision matters less to survival than circulation or digestion does.",
                "feedback": "Ranking organs by usefulness misses the question. Every organ, vital or humble, presupposes the same thing: a living whole whose organ it is. First means presupposed by all, not most useful."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Matter is passive, and a passive thing can be the principle of nothing.",
                "feedback": "The tradition never taught that matter does nothing; the heart truly pumps. The point is subtler: whatever a living part does, it does as part of a living whole. What makes the whole alive?"
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m9-l1-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "Life is just very complicated chemistry; a living body differs from a corpse by degree of complexity."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Complexity is the difference; enough chemical organization simply is life.",
                "feedback": "Then the corpse wins the argument. One minute after death the chemistry is nearly identical in complexity, and the man is entirely gone. Whatever life is, the difference is not a matter of more."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Science has measured aliveness as information density in the cell.",
                "feedback": "No such measurement exists, and none could. Information density describes arrangement; the corpse keeps the arrangement briefly and lives not at all. Arrangement is what the question is about, not its answer."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Life is a spiritual substance poured into the chemistry from outside.",
                "feedback": "Right verdict, wrong rescue. Making life an added spiritual ingredient repeats the materialist's mistake in reverse: both treat life as a component. The next lesson declines this picture by name."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The corpse keeps the complexity awhile; what departed is the principle of the whole.",
                "feedback": "Respondeo: complexity survives death by several minutes; the man does not. Life is not an amount of anything. It is the act of the body, the way this matter is one living thing at all."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m9-l1-q4`,
          type: "mcq",
          stem: `The river runs, the fire spreads, the fern grows toward the window. One of these acts on its own behalf. Which mark separates the living?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The living thing acts from within, and its action lands on its own perfection.",
                "feedback": "Respondeo: the fern feeds itself, grows itself, repairs itself. Its action begins within and lands within, on its own flourishing. The river is moved from without, and the fire only spends itself outward; neither owns its act."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Motion is the mark; whatever moves is in some degree alive.",
                "feedback": "Then the avalanche lives and the oyster, sitting still, does not. Motion is too cheap a mark. Watch instead where the action comes from and where it lands."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Complexity of behavior; enough moving parts and the motion counts as living.",
                "feedback": "A modern car outclasses a fern in moving parts and lives not at all. Complexity multiplies the machinery; it never turns outward arrangement into an inner principle."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Unpredictability is the mark; living motion is what no equation captures.",
                "feedback": "Turbulence defeats equations and is only weather. Unpredictability measures our knowledge, not the thing's life. The fern's growth is quite orderly and quite alive."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m9-l1-q5`,
          type: "fill_blank",
          stem: `Set the lesson's terms. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The soul is the <span class="fb-blank" data-blank="b1">______</span> principle of <span class="fb-blank" data-blank="b2">______</span> in those things which live; the tradition names it <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "first",
                  "prima"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "life",
                  "vita"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "anima",
                  "soul"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "first",
              "strongest",
              "life",
              "motion",
              "anima",
              "spiritus",
              "complexity",
              "corpus"
            ],
            "feedback": {
              "all_correct": "Locked: the first principle of life, <span class=\"lat\">anima</span>. Aquinas premises exactly this before anything else is argued: living things we call animate, and what makes them so is the soul.",
              "partial_correct": "Some blanks resisted. Not a principle but the first principle; not of motion, of life; and the tradition's name for it opened this lesson."
            }
          },
        },
        {
          id: `m9-l1-q6`,
          type: "mcq",
          stem: `A robot vacuum senses walls, seeks its charger, and feeds on electricity. A colleague concludes it is, in a modest way, alive. Test the claim.`,
          latin_tag: `anima`,
          doctrine_line: `Life is not an ingredient added to matter but a manner of being; its first principle is the soul.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It lives; self-maintenance and self-charging are exactly what the fern does.",
                "feedback": "The fern's feeding lands on the fern, which grows, heals, and reproduces itself. The vacuum's charging lands on its makers' convenience. Where the action terminates tells you whose action it is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It cannot live, because it is built of metal rather than carbon.",
                "feedback": "Carbon chauvinism is not the tradition's argument, and it would be a weak one. The failure is not the material; it is that no intrinsic principle orders these operations to the machine's own flourishing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It does not live; its operations serve an order its makers imposed, perfecting nothing of its own.",
                "feedback": "Respondeo: every act of the machine begins in its designers and returns to their purposes. It maintains itself the way a thermostat minds a house, on borrowed intention. Art arranges from without; life acts from within."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It half-lives; life admits of degrees and machines are climbing them.",
                "feedback": "Degrees of life are real; the fern, the fox, and you hold them in order. But they are degrees of inner principle, not of engineering. A cleverer vacuum is further from a fern, not closer: more of its order lives in its makers."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
    {
      id: `m9-l2`,
      num: `II`,
      title: `Not a Ghost in a Machine`,
      latin: `forma corporis`,
      tag: `forma corporis`,
      fin: {
        tag: `forma corporis`,
        heading: `No one is riding in you.`,
        body: `Descartes made the soul a thinking substance and the body its machine, and honest people have felt like haunted hardware ever since. Aquinas declines the whole picture: the soul is <span class="lat">forma corporis</span>, the substantial form of the body. You are not a ghost operating a machine or a spirit wearing a garment; you are one living composite, so united that your burns are yours without messaging. Death, then, is not the pilot leaving the cockpit. It is the ceasing-to-be, simply, of the composite. What survives that, and how honestly, waits for Lesson 6.`,
        distinction: {
          latin: `forma corporis`,
          english: `the form of the body`,
          gloss: `No ghost rides the machine: the soul is the body's substantial form, one living composite so united that your burns are yours without messaging.`,
          motif: `clay-form`,
        },
      },
      questions: [
        {
          id: `m9-l2-q1`,
          type: "mcq",
          stem: `Burn your hand on a pan and YOU hurt, everywhere you are. A pilot notices damage to his plane; he does not feel it as his own. What does the difference show?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Pain signals travel faster in bodies than damage reports travel in aircraft.",
                "feedback": "Speed is not the difference. Wire the plane's sensors straight into the pilot's nerves and he still feels his own pain about the plane, never the plane's pain. No latency upgrade closes a gap in being."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "You are not related to your body as pilot to vehicle; you and it are one being.",
                "feedback": "Respondeo: the pilot has a vehicle; you are a living body. Damage to it is not reported to you across a gap; it is suffered by you, because there is no gap. Whatever the soul is, it is united to the body more intimately than any operator to any machine."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Given better instruments, the pilot would feel the plane too.",
                "feedback": "Better instruments give better reports, and a report is exactly what your pain is not. You do not learn of the burn as news from a province; you undergo it as the one burned."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Pain is a construction of the brain, so the comparison misleads.",
                "feedback": "If pain is the brain's construction, the construction hurts, and the question returns: who is hurt? Eliminating the datum is not answering it. The burn is the argument's most reliable premise."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m9-l2-q2`,
          type: "mcq",
          stem: `Descartes, giant enough to be met by name, made the soul a thinking substance operating the body's machinery. Aquinas had declined that picture centuries in advance. What is the soul instead?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A subtle body threaded through the coarse one, as heat runs through iron.",
                "feedback": "Subtle matter is still matter, and the regress begins: what makes THAT body alive? A finer ingredient postpones the question exactly one layer. The soul is not a thing inside; it is the actuality of the whole."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The body's own activity, which an older vocabulary personified.",
                "feedback": "Then the vocabulary that says the man understands and the man was wronged personifies nothing; it names the agent. Activity presupposes something in act. What makes the body the kind of thing whose activity this is?"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A complete spirit that uses the body as its instrument.",
                "feedback": "Plato's picture, and nobler-sounding than it is. If the body is the soul's instrument, the burned hand is equipment damage, and strictly no one hurts. The picture breaks where you are most certain: your own pain."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The substantial form of the body: what makes this matter one living human being.",
                "feedback": "Respondeo: <span class=\"lat\">forma corporis</span>, the form of the body. Not a resident, not an operator, not a tenant with a lease on the skull. As form, it is that by which this matter is a living human body at all: one being, alive from within. Descartes made two things of you; Aquinas insists you are one."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m9-l2-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "You have a body the way a driver has a car."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The will commands the limbs as a driver commands the wheel.",
                "feedback": "Command is real, but the driver commands from outside the car, and you are not outside your limbs. When the leg obeys, it is you moving, not you operating a vehicle from a cockpit behind the eyes."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The soul survives the body's wreck, which is what ownership means.",
                "feedback": "Survival is Lesson 6's business, and it will not rescue this picture. What survives is not the whole you, and the tradition says so bluntly. Ownership language gets the union wrong now, whatever death brings later."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The body is not equipment; the living composite of body and soul is you.",
                "feedback": "Respondeo: a driver can step out of the car and remain complete. Step you out of the body and no complete man remains anywhere. The composite is not what you use; it is what you are."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. You are really the soul alone, and the body a garment it wears.",
                "feedback": "Right verdict, Platonist rescue. A garment-wearer is complete undressed; a man without his body is not. The tradition denies the car picture without promoting you to a spirit in clothing."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m9-l2-q4`,
          type: "mcq",
          stem: `Maria watches the sunrise. Strictly speaking, what sees it: her eyes, her soul, her brain, or Maria?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Maria, the one living whole, sees through her powers.",
                "feedback": "Respondeo: Aquinas says it plainly: it is more correct to say that the man understands through the soul than that the soul understands. The same holds for seeing. Powers belong to the composite; acts belong to the one who lives them."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Her eyes see, and the rest of her is informed afterward.",
                "feedback": "The eye is a principle of vision, not a viewer. Nothing is informed afterward, because no one was watching a feed. Maria's seeing is one act of one being, exercised through the eye."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Her soul sees, using the eyes as its windows.",
                "feedback": "Windows are for looking out of, and there is no little watcher at them. The soul is not the seer behind the eyes; it is that by which the whole woman is alive and able to see."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Her brain sees; the eyes are its cameras, Maria its user interface.",
                "feedback": "The interface picture rebuilds Descartes with silicon vocabulary: a user behind the screen. But no one rides in Maria. The brain serves her seeing; it does not do it and hand her the result."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m9-l2-q5`,
          type: "mcq",
          stem: `Socrates loses his tan over a winter. Socrates dies. The tradition refuses to rank these as two changes of the same order. Why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Death is sadder, and the order of changes follows their gravity.",
                "feedback": "Gravity of feeling tracks the metaphysics but does not ground it. The tradition's reason is structural: one change presupposes a persisting subject, the other removes the subject. Sadness follows from that; it does not explain it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Both are losses of form; death simply loses a more important one.",
                "feedback": "Leveling the two makes death a very bad haircut. After the tan fades, Socrates persists to complain; after death nothing of the composite persists to have lost anything. Not a bigger loss: a different kind."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The tan is real change; death only labels the chemistry dispersing.",
                "feedback": "The chemistry disperses because the man has died, not the reverse. At 3:08 the chemistry was still there and the man was not. Calling death a label leaves every operation's stopping unexplained."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The tan alters how Socrates is; death ends that Socrates is at all.",
                "feedback": "Respondeo: an accidental form comes and goes while the man remains; the substantial form does not lose him a feature but the being itself, simply. That is why the soul must be a substantial form: while it informs this matter, a man exists; when it ceases to, no man does."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m9-l2-q6`,
          type: "mcq",
          stem: `A slogan: "You are not your body; you are a soul that has a body." The tradition's verdict?`,
          latin_tag: `forma corporis`,
          doctrine_line: `The soul is the substantial form of the body: not a resident within you but that by which you are one living man.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "True as written; the soul is the self and the body its possession.",
                "feedback": "Then the burn, the sunrise, and the tan all happened to your property rather than to you. Possession language cannot survive one stubbed toe. The soul is yours as form, not as owner."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Imprecise; you are neither soul alone nor body alone but one living composite.",
                "feedback": "Respondeo: the slogan means to defeat materialism and overshoots into Plato. You are not a soul with luggage. You are the one being this soul and this body compose: a man. The tradition's anthropology refuses both amputations."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "False as written; you are your body, and nothing besides.",
                "feedback": "Half right about union, wrong about the whole. A corpse is your body's matter and is not you; something more than matter was always in the account. The composite view keeps the body without stopping there."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It becomes true at death, when the soul carries on alone.",
                "feedback": "Even then, the tradition is stricter than the slogan: the separated soul is not the man. Aquinas holds that the person is the whole composite, which is one reason the Creed bets everything on resurrection rather than on escape."
              }
            ],
            "correct_option_id": "b"
          },
        },
      ],
    },
    {
      id: `m9-l3`,
      num: `III`,
      title: `Three Grades of Life`,
      latin: `anima vegetativa · sensitiva · rationalis`,
      tag: `anima vegetativa · sensitiva · rationalis`,
      fin: {
        tag: `anima vegetativa · sensitiva · rationalis`,
        heading: `The fern, the fox, the philosopher.`,
        body: `Three ways of being alive, in order: nourishing without noticing; perceiving and pursuing the particular; grasping the universal and willing the good as known. The grades are <span class="lat">anima vegetativa</span>, <span class="lat">anima sensitiva</span>, <span class="lat">anima rationalis</span>, and they differ in kind, by their objects, not in degree of cleverness. The oyster senses without traveling, the sunflower aims without seeing, and no dolphin has ever asked what a puzzle is. How the higher grades stand to the lower inside one man is Lesson 5's argument; first, the sensitive grade deserves a closer look indoors.`,
        distinction: {
          latin: `anima vegetativa  ·  sensitiva  ·  rationalis`,
          english: `vegetative  ·  sensitive  ·  rational soul`,
          gloss: `The fern, the fox, the philosopher: three grades of life divided by their objects, differing in kind and not in cleverness.`,
          motif: `grades-of-life`,
        },
      },
      questions: [
        {
          id: `m9-l3-q1`,
          type: "mcq",
          stem: `A fern, a fox, a philosopher: all three alive by the last lesson's test. What does the fox do that the fern cannot?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It perceives the world and moves itself toward what it perceives.",
                "feedback": "Respondeo: the fern nourishes, grows, reproduces, and knows nothing of any of it. The fox receives the world through sense and answers it with pursuit and flight. A new kind of openness has appeared, not a faster metabolism."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It runs warm-blooded, and warmth is the higher grade of life.",
                "feedback": "Reptiles run cold and sense the world as keenly as they need. Temperature is housekeeping, not hierarchy. The dividing line is perception: the world shows up for the fox."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It wants things, and wanting is the beginning of reason.",
                "feedback": "The fox does want, and wanting follows perceiving. But sensitive desire is not reason's seedling; the fox wants this rabbit, now, and never asks whether rabbits as such are worth wanting. Keep the wanting; it belongs to this grade."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing different in kind; the fox is a faster, hungrier fern.",
                "feedback": "The fern never noticed anything in its life. However far you accelerate photosynthesis, no perceiving arrives. Between growing-toward and seeing, the difference is a threshold, not a speed."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m9-l3-q2`,
          type: "mcq",
          stem: `And the philosopher: what does she do that the fox cannot?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "She plans further ahead; the fox lives on a shorter horizon.",
                "feedback": "Squirrels bury for winter; horizon length is a sensory achievement with a memory attached. The new thing is not further planning but another object altogether: the universal, which no distance of foresight reaches."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "She uses tools and language, the fox only teeth and signals.",
                "feedback": "Tools and words are the visible wake of the difference, not the difference. A parrot handles signals; no parrot has ever asked what a signal is. Look for what the words carry: natures, grasped as such."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "She grasps what things ARE; the fox meets this rabbit, never rabbitness.",
                "feedback": "Respondeo: the fox's world is particulars: this scent, this rabbit, this danger. The philosopher asks what a rabbit IS, what life IS, and means every rabbit, every life, everywhere. The universal has entered the room, and no sense power delivered it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "She suppresses instinct; reason is appetite under better management.",
                "feedback": "Management of appetite happens in the fox too; training does it. Reason is not a better bridle. It is a different rider, one that knows the good as good and not merely as bait."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m9-l3-q3`,
          type: "distinction_application",
          stem: `Three grades, fixed: vegetative life nourishes, grows, reproduces; sensitive life adds perception, appetite, and self-movement; rational life adds intellect and will. Now the case: a sunflower turns its face to follow the sun across the sky. Which grade is at work?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Sensitive: the flower perceives the light and answers it with motion.",
                "feedback": "The conclusion outruns the evidence. Following can be done blind: growth on the shaded side bends the stem sunward. Before crediting perception, ask whether nourishment and growth suffice. Here they do."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Vegetative: a growth response aimed at light, with no perception anywhere in it.",
                "feedback": "Respondeo: the stem grows unevenly and the face swings; the mechanism is nutrition and growth doing their patient work. Nothing is perceived, nothing pursued. The turning is real, aimed, and entirely vegetative: order without awareness."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Sensitive but dim: plants perceive, only more slowly than animals.",
                "feedback": "Slow perception is still perception and would need sense organs; the sunflower has tissues, not eyes. What looks like dim awareness is bright order of another kind. The grades do not blur; our glances do."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A fourth grade between plant and animal, which the list forgot.",
                "feedback": "The list survives the sunflower easily, once growing-toward is distinguished from sensing. Multiply grades for every clever plant and the taxonomy dies of hospitality. Precision first; new categories only at necessity."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m9-l3-q4`,
          type: "match_pair",
          stem: `Sort the operations into their grades. Match each act to the life it manifests.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the oak's roots reach the water table"
              },
              {
                "id": "L2",
                "text": "the cat's ears swivel toward the rustle"
              },
              {
                "id": "L3",
                "text": "a student sees WHY the proof holds"
              },
              {
                "id": "L4",
                "text": "the vine heals around the cut"
              },
              {
                "id": "L5",
                "text": "the sheep bolts from the wolf"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "growth without perception (vegetative)"
              },
              {
                "id": "R2",
                "text": "perception of the particular (sensitive)"
              },
              {
                "id": "R3",
                "text": "grasp of the universal (rational)"
              },
              {
                "id": "R4",
                "text": "self-repair through nutrition (vegetative)"
              },
              {
                "id": "R5",
                "text": "appetite moving the body (sensitive)"
              }
            ],
            "correct_pairs": [
              [
                "L1",
                "R1"
              ],
              [
                "L2",
                "R2"
              ],
              [
                "L3",
                "R3"
              ],
              [
                "L4",
                "R4"
              ],
              [
                "L5",
                "R5"
              ]
            ],
            "feedback": {
              "all_correct": "All five in their places. Two vegetative acts, unconscious and unerring; two sensitive, the world perceived and answered; one rational, a WHY grasped that no eye ever saw. Three grades, one ladder.",
              "partial_correct": "Some slipped. The test is always the object: what does the act reach? Matter fed and formed: vegetative. A particular perceived or pursued: sensitive. A nature or a reason as such: rational."
            }
          },
        },
        {
          id: `m9-l3-q5`,
          type: "mcq",
          stem: `The oyster senses and never travels; the fern does neither; the falcon does both. What does the oyster's case establish?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The oyster is a defective falcon, sensing without the payoff.",
                "feedback": "Nature does not build defectives as a kingdom; oysters flourish at being oysters. The absence of travel is not a failure of falconhood but the shape of another life. Powers are given by kind, not rationed by ambition."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Locomotion, not sensation, is the true mark of the sensitive grade.",
                "feedback": "Then the oyster drops to the fern's grade while perceiving the water it lives in, which is absurd. Perception is the watershed. Locomotion serves the perceiving life where it is given, and the oyster does without."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Grades of life blur at the edges, and the oyster proves it.",
                "feedback": "The edges are exactly where the tradition sharpens its pencil. The oyster does not blur two grades; it exhibits one of them minus a power the falcon adds. Distinctions multiply here, and blur retreats."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The powers are distinct: sensation can be present where self-movement is not.",
                "feedback": "Respondeo: Aquinas keeps a place for immovable animals, sensing where they are fixed. The grades are not a smooth slope from moss to man but an ordered set of distinct powers. What a thing has, and lacks, can be counted."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m9-l3-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "A dolphin that solves puzzles is partway to rationality; the grades differ by degree of cleverness."`,
          latin_tag: `anima vegetativa · sensitiva · rationalis`,
          doctrine_line: `Life climbs in three grades, vegetative, sensitive, rational, distinguished by their objects and not by their speed.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Intelligence is one scale, and the species mark distances along it.",
                "feedback": "One scale would mean the dolphin's puzzle-solving and the philosopher's WHY differ in quantity. But no accumulation of solved particulars becomes a grasped universal. The scale picture flatters evolution and misreads the summit."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE. Cleverness perfects the sensitive grade; the universal is another kind of object entirely.",
                "feedback": "Respondeo: let the dolphin be brilliant; brilliance at particulars is the sensitive soul at full stretch. Rationality begins where the object changes: natures grasped as such. A difference of object is a difference of power, not of polish."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE. Man is simply the cleverest animal, as his brain size suggests.",
                "feedback": "Brain size tracks many things and settles none of this. The claim founders where the last question did: no heap of particular cleverness contains one universal. Man is an animal indeed, and something no animal measure captures."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Animals are machines without inner life, so the comparison is meaningless.",
                "feedback": "Descartes again, harder-hearted this time. The tradition gives beasts real perception, real appetite, real sensitive joy. Their souls are real too, and wholly bound to matter: they perish with the animal, having no operation apart from it. The comparison is meaningful; it just terminates at a threshold cleverness never crosses."
              }
            ],
            "correct_option_id": "b"
          },
        },
      ],
    },
    {
      id: `m9-l4`,
      num: `IV`,
      title: `The Inner Senses`,
      latin: `sensus interni · phantasma`,
      tag: `sensus interni · phantasma`,
      fin: {
        tag: `sensus interni · phantasma`,
        heading: `Close your eyes; the kitchen is still there.`,
        body: `Traffic moves inward: the five exterior senses deliver to the <span class="lat">sensus communis</span>, where yellow is told from sour; the imagination shelves the looks of things as <span class="lat">phantasmata</span>; the cogitative reads enemy and friend off faces that carry no such color; memory files it all as past. The lamb flees, the dog dreams, and you walk dark kitchens with confidence: sensitive life at its interior richest, shared with the beasts. And at the top shelf, a boundary: the phantasm stays particular while your understanding does not. Something is working on those images that no image explains.`,
        distinction: {
          latin: `sensus interni  ·  phantasma`,
          english: `the interior senses  ·  the phantasm`,
          gloss: `The five senses deliver and the interior four sort, shelve, size up, and file: the phantasm is the image kept, particular to the end.`,
          motif: `inner-gallery`,
        },
      },
      questions: [
        {
          id: `m9-l4-q1`,
          type: "mcq",
          stem: `Close your eyes and walk your kitchen: the window over the sink, the chipped mug, the drawer that sticks. No light strikes the eye. What are you consulting?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The intellect, which stores everything the senses ever gathered.",
                "feedback": "Storage is not the intellect's office, and what you are walking is stubbornly particular: this mug, this drawer, this sticking. Particular images are sense's business. The power that grasps kitchens as such will meet you later."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A retained sense image, held by a power that keeps what the senses received.",
                "feedback": "Respondeo: receiving and keeping are different work; Aquinas notes that what receives well and what retains well differ even among bodies. The senses received your kitchen; something else is holding it for you now, in image."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing real; the kitchen is being invented fresh each time.",
                "feedback": "Invented kitchens would surprise you more often. The drawer sticks in your image because it sticks in your kitchen; the image is answerable to mornings of experience. Retention, not invention, explains the fidelity."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The eyes themselves, running in reverse at low power.",
                "feedback": "Eyes have no reverse gear; shut, they deliver darkness, and the kitchen appears anyway. The organ that received the light is resting. What holds the image is interior to you and posterior to seeing."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m9-l4-q2`,
          type: "mcq",
          stem: `The tradition names that holding power the imagination, and its kept image the <span class="lat">phantasma</span>: the sense-level representation of what was perceived. Aquinas calls the imagination a storehouse. A storehouse of what, exactly?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Of forms received through the senses, kept available when the things are absent.",
                "feedback": "Respondeo: a storehouse of forms received through the senses, in Aquinas's own phrase. The wolf gone, its look remains available; the kitchen dark, its layout stands by. Animals hold this power too: the dog's dream is the storehouse at night work."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Of concepts, filed under the words that name them.",
                "feedback": "Concepts are the intellect's coin and words their tokens; the storehouse below trades in images. You can picture the chipped mug without a single word. Keep the levels distinct; a later lesson depends on it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Of past experiences, replayed exactly as they happened.",
                "feedback": "Memory of the past comes two shelves later, and even it is no recording. The imagination is freer: it holds the mug's look, and can set that mug on a mountain it never saw. Storage of forms, not playback of events."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Of neural traces, which the word phantasma poetically anticipated.",
                "feedback": "Whatever the brain's traces are, <span class=\"lat\">phantasma</span> does not name them; it names what you consult: the sensed look of things, held in image. Physiology may serve the storehouse; the storehouse is described at its own level."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m9-l4-q3`,
          type: "mcq",
          stem: `You see the lemon's yellow and taste its sour. Sight knows nothing of sour; taste, nothing of yellow. Yet you meet ONE lemon and can tell the yellow from the sour. Which power does that?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The intellect, which alone can compare two different things.",
                "feedback": "The intellect compares universals; this discrimination happens in the fox too, who knows the rabbit's look from its rustle without a syllogism. The meeting point needed here is sensory, below reason and shared with the beasts."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Whichever sense is stronger at the moment absorbs the weaker's report.",
                "feedback": "Senses do not absorb one another's proper objects; sight stays blind to sour forever. However loud the yellow, it carries no acidity. Convergence needs a third station, not a shouting match."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No power; the brain's wiring merges the streams automatically.",
                "feedback": "Automatic it may be; no power it cannot be. Merging is an operation, and operations have principles. Naming the wiring only relocates the question: by what power is the merged report sensed as one lemon?"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A common root of the senses, where their reports meet and are told apart.",
                "feedback": "Respondeo: the tradition calls it <span class=\"lat\">sensus communis</span>, the common sense: not folk wisdom but the interior power at which the five exterior senses converge. What discerns white from sweet must know both, and no single outer sense does. It is also how you sense THAT you are seeing."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m9-l4-q4`,
          type: "mcq",
          stem: `A lamb that has never met a wolf bolts at its first sight of one. Aquinas is precise: it flees the wolf not as ugly to the eye but as enemy. What did the lamb perceive that no exterior sense delivers?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Its mother's remembered warnings, retrieved from the storehouse.",
                "feedback": "This lamb has no such deposits; first sight, full flight. The storehouse holds looks previously received, and this look is new. Something read danger off a stranger, and reading of that kind is its own power."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Fear itself, which is a sixth exterior sense in animals.",
                "feedback": "Fear is the appetite's answer, not a report from a sixth window. The exterior senses number five, and none of them delivers 'enemy.' What is perceived here is an intention, and intentions enter by an interior door."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The intention of harm: a significance carried by no color or shape.",
                "feedback": "Respondeo: harmfulness is not a color; enmity has no shape. The tradition names the receiving power the estimative, and its object an intention: the useful, the harmful, the friend, the foe. In man this power is the <span class=\"lat\">vis cogitativa</span>, the cogitative, working so closely under reason that Aquinas calls it particular reason."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing; it computes threat from movement patterns alone.",
                "feedback": "The computation story restates the mystery in confident vocabulary. Patterns of movement are shapes in time, and 'threatening' is still not among their sensible qualities. Whatever weighs patterns AS danger is exactly the power being named."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m9-l4-q5`,
          type: "fill_blank",
          stem: `Shelve the interior senses. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The exterior senses deliver to the <span class="fb-blank" data-blank="b1">______</span> sense, where their reports meet; the <span class="fb-blank" data-blank="b2">______</span> retains the forms as images; the cogitative reads intentions the eyes cannot see; and <span class="fb-blank" data-blank="b3">______</span> stores those intentions as the past.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "common",
                  "communis"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "imagination",
                  "imaginatio",
                  "phantasia"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "memory",
                  "memoria"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "common",
              "imagination",
              "memory",
              "intellect",
              "proper",
              "estimative",
              "will",
              "phantasma"
            ],
            "feedback": {
              "all_correct": "Shelved in order: common sense, imagination, cogitative, memory. Four interior powers, one traffic of the sensed world moving inward. On the imagination's top shelf sits the <span class=\"lat\">phantasma</span>, and everything the intellect will ever do begins by lamplight there.",
              "partial_correct": "Some shelves mislabeled. Trace the traffic: five windows, one meeting room, one storehouse of looks, one reader of intentions, one archive of them. The order is the doctrine."
            }
          },
        },
        {
          id: `m9-l4-q6`,
          type: "mcq",
          stem: `Now picture a thousand-sided figure. The image fails: a blur, a roundish mess. Yet you know EXACTLY what a chiliagon is and could reason about its corners all day. What does the failure teach?`,
          latin_tag: `sensus interni · phantasma`,
          doctrine_line: `Between the five windows and the intellect stand the interior senses; their finest product is the phantasma.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The phantasm stays particular and sensory; understanding does what imaging cannot.",
                "feedback": "Respondeo: the storehouse serves images, and images are of the seen kind: particular, extended, blurry at a thousand sides. Your definition is not blurry at all. Something in you outruns the phantasm while working from it, and that doorway leads out of this module."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nothing of importance; trained geometers eventually picture chiliagons clearly.",
                "feedback": "No training sharpens the image past sense's resolution; the geometer's advantage is precisely that he stops needing the picture. His clarity lives in the definition. That is the lesson wearing a lab coat."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Large numbers are illusions of language, corners beyond sight being meaningless.",
                "feedback": "The chiliagon's corners are as real as the triangle's and answer arithmetic exactly. Meaning does not fade at the imagination's limit; only imagery does. The two powers part company here, which is the point."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The imagination is defective in fallen man, though Adam's was exact.",
                "feedback": "The tradition does hold our knowing wounded, but not like this; no unfallen imagination pictures the thousandth corner distinctly either. Finitude of sense is nature, not punishment. The phantasm was never meant to do the intellect's work."
              }
            ],
            "correct_option_id": "a"
          },
        },
      ],
    },
    {
      id: `m9-l5`,
      num: `V`,
      title: `One Soul, Not Three`,
      latin: `unica forma substantialis`,
      tag: `unica forma substantialis`,
      fin: {
        tag: `unica forma substantialis`,
        heading: `You are not a committee.`,
        body: `Plato staffed you with three souls; the moderns keep proposing two. Aquinas's arithmetic is stricter: one substantial form, the rational soul, containing virtually the sensitive and the vegetative as the pentagon contains the tetragon, doing everything from digestion to demonstration, and communicating to the body the very act of existence by which it exists. This is Thesis XVI of the twenty-four, and it is why your stomach's growl and your syllogism belong to the same one being. That one form gone, no man remains: the corpse is matter under new management. What the one form's own destiny is, a neuroscientist is waiting to dispute.`,
        distinction: {
          latin: `unica forma substantialis`,
          english: `one substantial form`,
          gloss: `You are not a committee: one rational soul does the fern's work and the fox's and its own, from digestion to demonstration.`,
          motif: `nested-figures`,
        },
      },
      questions: [
        {
          id: `m9-l5-q1`,
          type: "mcq",
          stem: `While you weigh this sentence, your stomach digests lunch and your eyes track the line. Three operations, three grades. How many operators?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Three, cooperating: a committee of vegetable, animal, and thinker.",
                "feedback": "Plato ran that committee: nutrition in the liver, desire in the heart, knowledge in the brain. Aristotle's question stands at the door: what contains them? If three agents share you, someone must make them one man, and none of the three can."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Two: a body handling digestion, a mind handling the rest.",
                "feedback": "Descartes's economy drive: two agents instead of three. The datum still objects: the ONE who follows the argument is the one whose stomach growls at it. Halving the committee does not answer the unity; it only shortens the minutes."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "One, plus autonomous subsystems that run themselves below the self.",
                "feedback": "Subsystems below the self still act in the self's one life; your digestion is yours, not a tenant's. Autonomy of function never adds up to another agent. One being, many powers, is where this is heading."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "One: the same man digests, sees, and thinks.",
                "feedback": "Respondeo: Aquinas rests the case on a datum you cannot escape: it is one and the same man who is conscious that he understands and that he senses. No handoff is ever experienced, because no handoff occurs. The committee has one member."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m9-l5-q2`,
          type: "mcq",
          stem: `Plato housed the powers in organs: nutrition in the liver, desire in the heart, knowledge in the brain. Aristotle asked one question Aquinas thought fatal: what contains them? Why fatal?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "If the souls are many, nothing remains to make them one man.",
                "feedback": "Respondeo: unity is the casualty. A man is not a parliament that votes; he is one being who lives, senses, and reasons. Whatever glued three souls together would be doing exactly what one soul does, so the three were never needed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Ancient anatomy misplaced the organs; the functions are all cerebral.",
                "feedback": "Move all three functions to the brain and the question survives the move: what makes the brain's tenants one man? Better anatomy redistributes the committee; it does not dissolve it. The problem is metaphysical, not geographic."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It is not fatal; the body itself contains and unifies the three.",
                "feedback": "Aquinas closes that exit by reversal: the soul contains the body and makes it one, rather than the reverse. Matter cannot unify its own informers. A bag does not make its contents one thing, and the body is not even a bag without its form."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Souls, being immaterial, cannot be located in organs at all.",
                "feedback": "Location is the picture's least error; Aquinas himself assigns organs to powers cheerfully. The fatal wound is unity: many substantial forms, no one being. Keep the organs; drop the extra souls."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m9-l5-q3`,
          type: "mcq",
          stem: `Aquinas borrows a figure from geometry: the pentagon contains the tetragon and exceeds it; no second shape is needed inside. Applied to the soul, what does the figure show?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The soul's structure mirrors geometry, five powers to five sides.",
                "feedback": "The sides are not the moral. Aquinas picked shapes for their containment, not their count; a hexagon would preach the same sermon. What matters is that the greater includes the lesser's capacity without housing the lesser."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The lower souls persist inside the higher as smaller working shapes.",
                "feedback": "Exactly the reading the figure forbids. The tetragon inside the pentagon would be, in Aquinas's dry verdict, superfluous. Nothing lower persists as a second form; the higher does the lower's work by its own single actuality."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The higher form does all the lower would do, so extra forms are superfluous.",
                "feedback": "Respondeo: draw a pentagon and you have not also drawn a hidden tetragon on duty inside it; the greater figure simply covers the lesser's ground. So the rational soul contains virtually the sensitive and vegetative: one form doing three grades of work."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Comparisons from mathematics prove nothing about living things.",
                "feedback": "Aquinas uses the figure as illustration, not proof; the proof came from unity. But a good figure earns its keep: this one shows HOW one form can hold three grades without crowding. Dismiss the picture and the doctrine stands anyway."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m9-l5-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "In a human being, the rational soul itself is the principle even of digestion."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. One substantial form gives every degree of a man's being, the lowly included.",
                "feedback": "Respondeo: the pentagon again, now in the stomach. Your one rational soul contains virtually the vegetative and does its work: by it, Thesis XVI says, man is man, and animal, and living, and body, and substance, and being. Nothing about you is beneath your soul's office."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Digestion in man is secretly deliberate, guided by reasons we forget.",
                "feedback": "Nothing secret or deliberate about it; you cannot will your lunch digested. The rational soul is digestion's principle as substantial form, not as planner. Its lowest work is done naturally, not thoughtfully."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The vegetative soul handles digestion, as in the fern, alongside the rational.",
                "feedback": "The committee returns through the kitchen door. In the fern the vegetative soul is the only form; in you there is no second form to handle anything. One soul, exercising vegetative power: yours."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Digestion is plain chemistry and needs no soul as its principle.",
                "feedback": "Plain chemistry in a corpse digests nothing; the enzymes disperse. The same reactions, inside the living whole, serve nutrition. Chemistry is the instrument; the living substance whose act it is has one form."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m9-l5-q5`,
          type: "mcq",
          stem: `At death the one substantial form ceases to inform this matter. Strictly, then, what lies on the bed?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The same body as before, in a powered-down state.",
                "feedback": "Powered-down implies the machine persists awaiting power. But the man was never a powered machine; he was a composite whose form was his being's principle. Nothing persists to be switched back on; resurrection is not a reboot but a miracle."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Not the same substance: matter under new forms, called his body only by reference.",
                "feedback": "Respondeo: the strict line does not flinch here. One form gave the whole its being; that form gone, this is not the same thing at all. We say 'his body' as we say 'his portrait': honoring reference, not identity. The Church's care for relics honors what these remains were, and what they await."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The man himself, persisting with his highest power extinguished.",
                "feedback": "No man persists there; losing the substantial form is not losing a feature. The corpse cannot be Socrates minus thinking, because without the form there is no Socrates to be minus anything."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The vegetative and sensitive remainder of the man.",
                "feedback": "Those grades were powers of the one form, not detachable layers; they went with it. The corpse neither digests nor senses. What remains runs on new, lesser forms: the chemistry of dispersal."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m9-l5-q6`,
          type: "mcq",
          stem: `Count the acts of existence in one living man: his body's, his life's, his mind's. The tradition's arithmetic?`,
          latin_tag: `unica forma substantialis`,
          doctrine_line: `The rational soul is the only substantial form of a man; by one form and one act of existence he is one being.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Three, hierarchically stacked, the higher lending dignity to the lower.",
                "feedback": "Stacked existences would restack the committee at a deeper level: three beings in a trench coat. Dignity flows through the one form to the whole, not down a ladder of existences. One man, one act of being."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Two: a bodily existence and a spiritual existence, joined at the person.",
                "feedback": "Two existences make the person a seam, and seams split. The union of body and soul is closer than any joining of two beings could be: they are one being. That oneness is the deepest thing this module says."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "One: the soul communicates to the body the very existence by which it exists.",
                "feedback": "Respondeo: Thesis XVI at its boldest: the soul communicates to the body the act of existence whereby itself exists. One <span class=\"lat\">esse</span> for the whole man. You do not exist twice over; body and soul share a single act of being, which is why you are one being."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The count is meaningless; existence is not the sort of thing counted.",
                "feedback": "Being is said in many ways, and still the question lands: is this man one being or several? Aquinas counts carefully precisely because existence is no ordinary predicate. The answer is one, and it is load-bearing."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
    {
      id: `m9-l6`,
      num: `VI`,
      title: `The Brain Does the Thinking?`,
      latin: `anima subsistens`,
      tag: `anima subsistens`,
      fin: {
        tag: `anima subsistens`,
        heading: `Grant the findings; keep the distinction.`,
        body: `The tradition meets the laboratory the way Aquinas met the Averroists: no flinch, one distinction. Everything the scans show is granted, for the phantasm is bodily and human thought never proceeds without it. But the intellect's range, all being, forbids any determinate organ to be its subject: the sick tongue and the tinted vase stand guard over that inference still. So the soul subsists, <span class="lat">anima subsistens</span>, with an operation <span class="lat">per se</span>; and it subsists as a form made for matter, so that death is survival into privation, not promotion. No ghost, no machine, no flinch: the strict line, holding.`,
        distinction: {
          latin: `anima subsistens`,
          english: `the subsistent soul`,
          gloss: `What can know all bodies cannot be one of them: the soul subsists past every organ, and death is survival into privation, not promotion.`,
          motif: `candle-flame`,
        },
      },
      questions: [
        {
          id: `m9-l6-q1`,
          type: "mcq",
          stem: `The findings are real: damage Broca's area and speech fails; stimulate the cortex and memories surface; a glass of wine blurs judgment. A neuroscientist concludes: the brain does the thinking. What, precisely, do the findings show?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That thinking is brain activity, as the conclusion says.",
                "feedback": "The conclusion outruns the data by exactly one inference. Every finding shows thought disturbed when its bodily conditions are disturbed; none shows the brain to be the SUBJECT that thinks. That gap is the whole question, and more wattage will not close it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Very little; correlation studies cannot establish anything of importance.",
                "feedback": "The flinch, and the tradition refuses it. The findings are excellent and welcome; Aquinas built dependence on the body into his account seven centuries early. A Thomist who fears the laboratory has misplaced his own doctrine."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That thinking depends on the brain; the KIND of dependence is the open question.",
                "feedback": "Respondeo: grant every finding; the tradition grants more cheerfully than the dualist. Dependence is proven. But 'depends on' is where thinking begins, not ends: the eye depends on light, yet light does not see. The needed word is <span class=\"lat\">distinguo</span>: I distinguish."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That the soul transmits thought through the brain, as a broadcast through a receiver.",
                "feedback": "The receiver picture concedes the ghost: a signal-soul beamed at meat. It saves immateriality by abandoning the union, and the pilot was already declined at this module's door. The soul is the body's form, not its distant station."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m9-l6-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>It must necessarily be allowed that the principle of intellectual operation which we call the soul, is a principle both incorporeal and subsistent. For it is clear that by means of the intellect man can have knowledge of all corporeal things. Now whatever knows certain things cannot have any of them in its own nature; because that which is in it naturally would impede the knowledge of anything else. Thus we observe that a sick man's tongue being vitiated by a feverish and bitter humor, is insensible to anything sweet, and everything seems bitter to it. Therefore, if the intellectual principle contained the nature of a body it would be unable to know all bodies. Now every body has its own determinate nature. Therefore it is impossible for the intellectual principle to be a body. It is likewise impossible for it to understand by means of a bodily organ; since the determinate nature of that organ would impede knowledge of all bodies; as when a certain determinate color is not only in the pupil of the eye, but also in a glass vase, the liquid in the vase seems to be of that same color.</p><p>Therefore the intellectual principle which we call the mind or the intellect has an operation per se apart from the body. Now only that which subsists can have an operation per se. For nothing can operate but what is actual: for which reason we do not say that heat imparts heat, but that what is hot gives heat. We must conclude, therefore, that the human soul, which is called the intellect or the mind, is something incorporeal and subsistent.</p><div class="cr-cite">ST I, q. 75, a. 2, co. · trans. Fathers of the English Dominican Province · verified against New Advent</div></div><br>The conclusion is famous: the soul subsists. Find the engine of the argument.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Thinking feels immaterial from the inside, and the feeling is evidence.",
                "feedback": "Not a word of the passage appeals to how thinking feels; Aquinas argues from the intellect's OBJECT, all bodies, to its nature. Introspection is Descartes's instrument. The tradition's engine runs on what is known, not on the sensation of knowing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The soul must subsist, because otherwise it could not be immortal.",
                "feedback": "Backwards: immortality is drawn later FROM subsistence, in this same Question. Run it your way and the argument begs. The passage earns subsistence first, from the range of what the intellect can know."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "What is sacred cannot be bodily, and the intellect touches sacred things.",
                "feedback": "Pious, and idle. Nothing here trades on sacredness; a pagan could sign every premise. The bitter tongue and the tinted glass are kitchen equipment. That is the argument's strength: it needs no altar, only an honest look at knowing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A power open to ALL bodies cannot be a body or work through one as its subject.",
                "feedback": "Respondeo: the sick tongue tastes everything bitter; the tinted vase colors everything in it. A determinate nature admitted into the knower blocks whatever contradicts it. Since the intellect is open to every corporeal nature, no organ can be its subject. And an operation without an organ belongs to what subsists."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m9-l6-q3`,
          type: "mcq",
          stem: `Aquinas grants the objector's strongest fact: no human thinking without phantasms, and no phantasms without the body. His reply draws one line: the body serves the intellect's act on the side of its OBJECT, not as its origin. His figure: the phantasm is to the intellect what color is to sight. Unpack the figure.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Color is what sight sees, not what sees; the brain supplies thought's material, not its subject.",
                "feedback": "Respondeo: the organ is OF thinking the way the palette is of painting: indispensable, and not the painter. Destroy the phantasm-organs and thought fails for want of objects, exactly as sight fails at midnight for want of color. Dependence on the object side, subsistence on the agent side: the <span class=\"lat\">distinguo</span> that meets every scan."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Color causes vision, so phantasms cause thought; the brain thinks after all.",
                "feedback": "Color moves sight as its object, not as its agent; nothing about the wall does the seeing. Likewise the phantasm specifies thought without performing it. Objects are required for acts; they are never the actors."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Sight and color are both bodily, so the figure quietly concedes materialism.",
                "feedback": "Sight IS bodily; that is why Aquinas chose it: even in a bodily power, the object is not the subject. How much more where the power's range, all bodies, forbids a bodily subject. The figure walks toward immateriality, not away."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The figure is decorative; the real work is done by faith.",
                "feedback": "Not one premise here is revealed; Aristotle owned them all. The tradition keeps faith and argument in different pockets and spends each where it belongs. This purse is philosophy's, and it pays in full."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m9-l6-q4`,
          type: "dialogue_branch",
          stem: `The Commentator sets a chair for a neuroscientist, who is honest and sharp: 'Your soul adds nothing. Name one act of thought my instruments leave unexplained.' Hand the Commentator his reply.`,
          payload: {
            "commentatorLine": "The Commentator bows to the guest. 'A fair challenge, fairly put. Bring me the reply with steel in it; sentiment goes back to the kitchen.'",
            "branches": [
              {
                "text": "Your instruments read this sentence's ink, never its meaning: the universal grasped in it is stripped of every material condition, and no determinate organ receives what is stripped of all matter.",
                "verdict": "correct",
                "feedback": "The steel one. Every scan shows particulars: this activation, this pattern, here, now. The grasped universal, triangle as such, good as such, carries no such address. What receives forms free of matter cannot be a material receiver. The honest guest checks his instruments and finds nothing built for that."
              },
              {
                "text": "Science revises itself every decade; tomorrow's journals will retract today's confidence.",
                "feedback": "Lazy, and the Commentator slides it back. The tradition does not win by waiting for retractions; it grants the findings and distinguishes. Bring the argument that stands even if every study replicates forever."
              },
              {
                "text": "I feel my soul directly, an inner light no electrode registers.",
                "feedback": "The Cartesian coin, and it buys nothing at this table. Private glow is exactly what the guest's discipline explains away by breakfast. The tradition argues from thought's object, not its feeling. Again, with steel."
              },
              {
                "text": "Scripture settles it: God breathed a soul into man.",
                "feedback": "True, and out of place. The guest asked what natural reason shows, and Aquinas met the Averroists on reason's own ground and won there. Keep revelation's coin for revelation's questions; this table plays philosophy."
              }
            ]
          },
        },
        {
          id: `m9-l6-q5`,
          type: "mcq",
          stem: `A new study maps concepts to distributed activation patterns and announces that memory and imagery are functions of the brain. The strict Thomist's reaction?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Alarm; each such study makes the soul harder to defend.",
                "feedback": "Alarm mistakes the doctrine for its Cartesian cousin. The soul defended here was never a spare organ hiding from anatomy; it is the form of a body whose senses are gloriously bodily. Nothing in the atlas trespasses on it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Expected; wherever man thinks there are phantasms, and phantasms are bodily through and through.",
                "feedback": "Respondeo: the tradition PREDICTS neural correlates. Imagination, memory, the cogitative: bodily powers with organs, mapped by Aquinas in principle and by the laboratory in detail. Let the atlas grow. The intellect's own act will keep failing to appear on it, and that absence is not a gap in the map but the edge of its province."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Indifference; empirical work has no bearing on metaphysical truths.",
                "feedback": "Too proud by half. The findings bear happily: they detail the instruments and confirm the dependence Aquinas taught. Metaphysics that ignores the laboratory earns the world's suspicion and deserves some of it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Delight at a loophole: quantum indeterminacy leaves room for the soul.",
                "feedback": "The tradition needs no physics loophole and should decline the gift. Souls hiding in indeterminacy are souls of the gaps, evicted at the next equation. The argument from the universal stands in broad daylight, whatever physics settles."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m9-l6-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "Since the soul is subsistent, losing the brain costs the soul nothing; its knowing continues as before."`,
          latin_tag: `anima subsistens`,
          doctrine_line: `The brain is the organ of thought's materials; the man, by his subsisting soul, is the subject that understands.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. What subsists is complete in itself and needs no instrument.",
                "feedback": "Complete enough to exist; not complete in nature. The separated soul is a part awaiting its whole, and Aquinas says the man, not the soul alone, is the person. Subsistence is survival, not sufficiency."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Knowledge is stored in the soul and travels with it intact.",
                "feedback": "Some of what was acquired remains, but the mode changes entirely: no phantasms, no bodily storehouse, another way of knowing suited to separation. Aquinas is candid that it is not the natural way for a human soul. Traveling intact is exactly what knowing does not do."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The soul's knowing ends when the brain does, subsistence or no.",
                "feedback": "Materialism conceding one word and keeping its whole doctrine. Subsistence means precisely that the intellect's act, needing no organ as its subject, does not perish with the organs. The mode of knowing changes at death; the knower does not stop being."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Its natural knowing runs through phantasms; separation is real loss, not liberation.",
                "feedback": "Respondeo: honesty is the house style. The soul subsists and does not die; and its natural mode, understanding by turning to phantasms, is suspended with the body. Aquinas calls separated knowing another mode, not a better one. Which is why the tradition never preached escape from the body, but awaited its return."
              }
            ],
            "correct_option_id": "d"
          },
        },
      ],
    },
    {
      id: `m9-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `anima et potentiae`,
      tag: `anima et potentiae`,
      fin: {
        tag: `anima et potentiae`,
        heading: `One substance, from stomach to syllogism.`,
        body: `The module closes where the man begins: one living substance, informed by one rational soul that does the fern's work and the fox's and its own, keeps a storehouse of images, and subsists where no organ can follow. Two doors stand open. Through one, the phantasm waits in lamplight for a power that can strip it of matter: how the intellect works is the next question. Through the other, the lamb is still running: appetite, passion, and will have a module of their own. The soul has been mapped; its powers now ask to be met one by one.`,
        distinction: {
          latin: `unica forma substantialis`,
          english: `one substantial form`,
          gloss: `You are not a committee: one rational soul does the fern's work and the fox's and its own, from digestion to demonstration.`,
          motif: `nested-figures`,
        },
      },
      questions: [
        {
          id: `m9-l7-q1`,
          type: "match_pair",
          stem: `The module in six images. Match each to what it taught.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the corpse at 3:08"
              },
              {
                "id": "L2",
                "text": "the pilot who feels no pain"
              },
              {
                "id": "L3",
                "text": "the fern, the fox, the philosopher"
              },
              {
                "id": "L4",
                "text": "the kitchen behind closed eyes"
              },
              {
                "id": "L5",
                "text": "the pentagon over the tetragon"
              },
              {
                "id": "L6",
                "text": "the sick man's bitter tongue"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "life is a manner of being, not an ingredient"
              },
              {
                "id": "R2",
                "text": "the soul is the body's form, not its operator"
              },
              {
                "id": "R3",
                "text": "three grades of life, divided by their objects"
              },
              {
                "id": "R4",
                "text": "the interior senses and their phantasmata"
              },
              {
                "id": "R5",
                "text": "one form does all the lower forms' work"
              },
              {
                "id": "R6",
                "text": "what can know all bodies cannot be one"
              }
            ],
            "correct_pairs": [
              [
                "L1",
                "R1"
              ],
              [
                "L2",
                "R2"
              ],
              [
                "L3",
                "R3"
              ],
              [
                "L4",
                "R4"
              ],
              [
                "L5",
                "R5"
              ],
              [
                "L6",
                "R6"
              ]
            ],
            "feedback": {
              "all_correct": "Six images, one doctrine standing: the human being is a single living substance, informed by one rational soul from stomach to syllogism, subsistent at its summit. Recapitulation is not repetition; it is the whole seen at once.",
              "partial_correct": "Some pairs strayed. Walk the module backward from the tongue to the corpse and each image gives up its lesson; they were chosen to be unforgettable, not decorative."
            }
          },
        },
        {
          id: `m9-l7-q2`,
          type: "mcq",
          stem: `One claim must carry the whole module. Choose it.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Man is a spirit graciously tolerating a body's company.",
                "feedback": "The tolerance runs the other way, if anywhere: the soul is MADE for this matter, its form and not its guest. Grace perfects the union rather than apologizing for it. The body is not company; it is constitution."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Man is one living substance: matter informed by a rational soul, subsistent, the single form of the whole.",
                "feedback": "Respondeo: every lesson folds in: the corpse's missing principle, the declined pilot, the grades gathered under one form, the storehouse serving a power beyond it, the subsistence no scan disturbs. Say the sentence slowly; it is the module."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Man is the cleverest animal, his soul a name for his behavior.",
                "feedback": "Cleverest he may be, and the description true as far as it runs; it stops exactly at the universal. Behavior never grasped a nature as such. The name 'soul' was doing real work, and the module showed which work."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Man is two substances, thinking and extended, mysteriously conjoined.",
                "feedback": "Descartes's epitaph: 'mysteriously conjoined' is the confession that the picture failed. One substance with one form needs no mystery glue. The union is not a puzzle to explain away; it is the man to begin from."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m9-l7-q3`,
          type: "fill_blank",
          stem: `Draw the module's finest line. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The brain is the <span class="fb-blank" data-blank="b1">______</span> of thinking's materials; the <span class="fb-blank" data-blank="b2">______</span>, subsisting as the body's one form, is that by which the man himself is the <span class="fb-blank" data-blank="b3">______</span> that understands.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "organ"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "soul",
                  "anima"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "subject"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "organ",
              "subject",
              "soul",
              "brain",
              "object",
              "phantasma",
              "spirit",
              "matter"
            ],
            "feedback": {
              "all_correct": "Drawn clean: organ, soul, subject. The distinction that lets the tradition welcome every scan and concede nothing. Say it kindly when it is needed; it exists for clarity, not for winning rooms.",
              "partial_correct": "The line smudged. Recover it from the figure: the phantasm is to the intellect what color is to sight. Serving an act is one thing; performing it is another."
            }
          },
        },
        {
          id: `m9-l7-q4`,
          type: "mcq",
          stem: `A man in deep coma digests, heals, breathes. Run the module through him: how many souls at work, and which powers?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "One vegetative soul; the rational soul departed with consciousness.",
                "feedback": "Souls do not depart by grades; there is no vegetative soul in a man to inherit the estate. One form makes him living at all. If the rational soul were gone, what lay there would not digest; it would disperse."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Two: the vegetative laboring, the rational hovering disengaged.",
                "feedback": "The hovering picture is the pilot's ghost returned in a hospital gown. Nothing hovers; the one soul informs every cell, doing its lowest work while the highest waits on instruments. Presence is not measured by performance."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "One rational soul, exercising its vegetative powers while its higher acts are impeded.",
                "feedback": "Respondeo: the one form is there entire, or the man is not there at all. His rational soul does what the moment's matter permits: nutrition, growth, repair. The higher powers are not gone but blocked at the instrument, as a musician is silenced, not abolished, by a broken organ. He remains a man, whole in dignity."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "None demonstrably; a soulless body can run these functions.",
                "feedback": "A soulless body running functions is a corpse that heals, which no one has met. The functions ARE the evidence: nutrition and repair are immanent acts, and immanent acts have a living subject. The man is there."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m9-l7-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "Thomism secures the soul's dignity by holding it apart from the body."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "FALSE. Its dignity includes being the body's form; the union is glory, not compromise.",
                "feedback": "Respondeo: the tradition out-unifies the materialist and out-elevates the dualist in one doctrine. The soul is noblest of forms precisely as form: making matter live, sense, and serve understanding. Distance was never the compliment; the Word did not take distance."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE. The soul has no dignity to secure; it is the body's arrangement.",
                "feedback": "Right verdict, wrong economics: the soul demoted to a filing system. Arrangement is accident; the soul is substantial form, subsistent at that. The verdict was correct because union honors the soul, not because there is nothing to honor."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE. The less bodily a thing, the holier; matter is the soul's embarrassment.",
                "feedback": "The angelist's error, and the tradition condemned its stronger forms by name. Matter is God's good creature and the soul's proper partner. A man is not a failed angel; he is a man, and his soul is a body's form on purpose."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE. Plato was right that the body imprisons; Aquinas merely softened the sentence.",
                "feedback": "Aquinas overturned the sentence: the soul is united to the body naturally and for its own good, since all its natural knowing begins in sense. A dwelling you are built for is called a home. Separation, when it comes, is the exile."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m9-l7-q6`,
          type: "mcq",
          stem: `The lamb estimated danger and RAN; perceiving became pursuing. The power that answers perception with motion toward or away has a name, and a module of its own ahead. Define it now.`,
          latin_tag: `anima et potentiae`,
          doctrine_line: `One living substance, one rational soul, many powers: the human being entire, from digestion to demonstration.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The locomotive power, which is the whole story of animal motion.",
                "feedback": "Locomotion executes; it does not incline. The limbs obey something that already leaned away from the wolf. Name the leaning and you have the deeper power; the legs are its instruments."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The imagination, supplying the pictures that pull the animal along.",
                "feedback": "Images present; they do not pull. A phantasm of the wolf terrifies no one until something in the lamb answers it as evil-for-me. The answering is the power in question, and it is not a picture."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The cogitative, which both reads the danger and executes the flight.",
                "feedback": "The cogitative reads; it does not run. Perception of harm, even interior perception, is still on knowing's side of the ledger. The flight needed a second kind of act: inclination. Distinct acts, distinct powers."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Appetite: the inclination that follows apprehension, toward the good and away from harm.",
                "feedback": "Respondeo: <span class=\"lat\">appetitus</span>, appetite, the tendency that answers knowing. The lamb apprehends enemy and inclines to flight; you apprehend good and incline toward it. Between what you know and what you do stands this power, and where it becomes rational it is called will. That door stays open."
              }
            ],
            "correct_option_id": "d"
          },
        },
      ],
    },
  ],
};
