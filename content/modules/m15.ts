import type { ModuleMeta } from '../types';

export const m15: ModuleMeta = {
  id: 15,
  title: `The Grammar of Distinctions`,
  short: `The Grammar of Distinctions`,
  label: `Module 15 · The Grammar of Distinctions`,
  latin: `Grammatica Distinctionum`,
  aim: `Every distinction is of a kind, and naming the kind is half the argument. Real distinctions hold in things, mind or no mind, and divide into major (thing from thing) and minor (principle from principle within one thing). Rational distinctions hold in the mind's consideration and divide by their roots: with a foundation in the thing (ratiocinatae) or without one (ratiocinantis). The modal distinction stands between a thing and its mode; Scotus's formal distinction is the famous middle the strict line declines, because foundation-in-the-thing already does its work. The art of distinguo puts the grammar to use: concede in one named sense, deny in another, and take a stand on both.`,
  lessons: [
    {
      id: `m15-l1`,
      num: `I`,
      title: `Real Things Return`,
      latin: `distinctio realis · rationis`,
      tag: `distinctio realis · rationis`,
      fin: {
        tag: `distinctio realis · rationis`,
        heading: `The tree outside the window has been waiting since the beginning.`,
        body: `The oldest door in the course finally opens. The tree that stands unwatched, the flame giving heat and light, the rational animal who is the human being: the cases return bearing their full names. <span class="lat">Distinctio realis</span>: a difference in the thing itself, holding whether or not any mind attends. <span class="lat">Distinctio rationis</span>: a difference the mind draws while the thing stays one. The annihilation test tells them apart: silence every mind, and the flame's heat and light still differ; the definitions do not. The heaviest real distinction in the course, essence and esse, now shows what it always was: not one example among many but the case the whole grammar was built to guard.`,
        distinction: {
          latin: `distinctio realis  ·  rationis`,
          english: `real distinction  ·  distinction of reason`,
          gloss: `The annihilation test: silence every mind, and the flame's heat and light still differ; the definitions do not.`,
          motif: `minds-line`,
        },
      },
      questions: [
        {
          id: `m15-l1-q1`,
          type: "mcq",
          stem: `The tree outside the window stands whether or not anyone looks. The idea of it lives only while someone thinks it. Does the difference between the two depend on any mind?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes; both tree and idea are contents of consciousness in the end.",
                "feedback": "The tree was growing before consciousness arrived in the county and will drop leaves after the last observer moves away. One relatum here is mind-dependent; the difference between them is not."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes; a difference is a comparison, and comparisons need a comparer.",
                "feedback": "Noticing the difference needs a mind; the difference does not. The moon and its craters differed before Galileo compared anything. Do not confuse the discovery of a divide with its construction."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No; the tree's independence and the idea's dependence hold with every mind asleep.",
                "feedback": "Respondeo: put every mind to sleep and the tree persists while the idea vanishes. A difference that survives universal inattention owes nothing to attention. The tradition has a name for differences of that rank, and it arrives in the next question."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is undecidable, since no mind can check a mindless world.",
                "feedback": "You cannot stand outside all minds, but you can reason from inside one: the tree's growth never waited on being noticed, and dependence is not established by our inability to take a vacation from thinking."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m15-l1-q2`,
          type: "mcq",
          stem: `A difference that holds in the thing itself, independently of any mind, is a <span class="lat">distinctio realis</span>, a real distinction. The flame gives heat and gives light. Real distinction or not?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Real: heat and light differ in the flame itself, unwatched.",
                "feedback": "Respondeo: shade the light and the heat still crosses the room; block the heat and the light still lands. Two effects, two powers, differing in the one flame with every observer gone. The distinction is in the thing: realis."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Not real: one flame, so one reality under two descriptions.",
                "feedback": "One flame, yes; but a glass wall passes its light while stopping its heat, and the wall is not reading descriptions. What can be physically separated in effect was never one reality wearing two names."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Not real: heat and light are only two ways the flame affects us.",
                "feedback": "The flame heated the kettle before anyone was affected by anything. Effects on us reveal the powers; they do not constitute them. The difference sits in the fire, not in the audience."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Real, but only when both are being measured at once.",
                "feedback": "Measurement finds distinctions the way a lamp finds furniture. Nothing about the heat's difference from the light waits on instrumentation; the thermometer is late to a divide already there."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m15-l1-q3`,
          type: "mcq",
          stem: `A difference the mind draws while the thing stays one is a <span class="lat">distinctio rationis</span>, a distinction of reason. 'Rational animal' and 'human being' name the same nature. What divides them?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A real distinction: definitions are things too, in their own way.",
                "feedback": "The definition unfolds the very nature the name states; there are not two natures in the man, one folded and one unfolded. Whatever reality definitions have, the man on the ground is stubbornly one."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Only the mind's consideration: one nature, stated whole or unfolded into parts.",
                "feedback": "Respondeo: the man is one; 'human being' says him in a word and 'rational animal' says him in an analysis. The divide lives in our two ways of saying, not in him. Distinctio rationis: the mind at work on one reality."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A physical difference too small for the senses to register.",
                "feedback": "There is no micro-gap between a man and himself for instruments to miss. Not every distinction is a faint real one; some are a different kind altogether, and this lesson exists to keep the kinds apart."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing at all; the two expressions are indistinguishable.",
                "feedback": "Then defining would be stuttering. 'Rational animal' teaches something 'human being' leaves compressed: genus and difference laid open. The expressions differ genuinely; the thing they name does not."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m15-l1-q4`,
          type: "fill_blank",
          stem: `Lock the pair. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">A distinction holding in the thing itself, independent of every mind, is <span class="fb-blank" data-blank="b1">______</span>; a distinction the mind draws while the thing stays one is <span class="fb-blank" data-blank="b2">______</span>; the test between them is whether the difference survives the removal of every <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "realis",
                  "real"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "rationis",
                  "rational"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "mind",
                  "mens"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "realis",
              "rationis",
              "mind",
              "modalis",
              "formalis",
              "observer",
              "res",
              "thing"
            ],
            "feedback": {
              "all_correct": "Locked: realis in the thing, rationis in the mind, and the annihilation of minds as the referee's test. Everything else in this module is refinement of these two.",
              "partial_correct": "Some blanks resisted. Run the tree and its idea through the sentence: which difference survives the great sleep of every mind, and which goes out like a lamp?"
            }
          },
        },
        {
          id: `m15-l1-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "If a distinction is drawn by the mind, then the mind made it up."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Drawing and inventing are the same act under two names.",
                "feedback": "The surveyor draws the border of the lake and invents nothing; the lake's edge was there to be traced. Some of the mind's lines follow the land. Whether a given line does is exactly the next lesson's question."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Reality comes seamless; every joint is our projection.",
                "feedback": "The flame's heat and light were never a seam we projected; the glass wall sorts them without consulting us. A world wholly seamless could not even mislead us differently in different places, and it does."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Even invented distinctions are real, since inventing is real.",
                "feedback": "Right verdict, wrong coin. The act of inventing is real; what it invents need not divide the thing. By this logic the unicorn is real because dreaming is. Keep the act and its content apart."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Many mind-drawn distinctions trace a difference the thing supplies.",
                "feedback": "Respondeo: the mind draws every distinction it entertains, real ones included; drawing is how minds meet divides. The question that matters is what grounds the line: the thing, or only the drawing. That question gets its own lesson next."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m15-l1-q6`,
          type: "mcq",
          stem: `One real distinction has carried more weight in this course than any other: essence and esse, what a thing is and that it is. Why does its KIND matter so much?`,
          latin_tag: `distinctio realis · rationis`,
          doctrine_line: `A real distinction holds in the thing, mind or no mind; a rational distinction holds in the mind's consideration of one thing.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It does not much; the vocabulary is traditional courtesy.",
                "feedback": "The Twenty-Four Theses open with composition of potency and act in every creature, and composition requires real distinction. Courtesy does not hold up doctrine; this line is load-bearing masonry."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "If the distinction were only rational, creatures would differ from God merely in our thinking.",
                "feedback": "Respondeo: a creature really composed of essence and esse is really not its own existence; that is what being a creature means. Make the distinction mind-drawn and the divide between the Simple One and everything else goes soft exactly where it must be hardest."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because essence and esse are separable things, like two stones.",
                "feedback": "No one ever found an essence in one drawer and its esse in another. The distinction is real without the relata being separable things; that refinement gets its own name in Lesson 4. Overstating the doctrine is the second way to lose it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because older philosophers enjoyed multiplying distinctions.",
                "feedback": "The tradition multiplied distinctions the way surgeons multiply instruments: reluctantly, under necessity, each for a cut that ruins the patient if made with the wrong blade. This one was forged for the doctrine of creation."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `m15-l2`,
      num: `II`,
      title: `Distinctions With and Without Roots`,
      latin: `ratiocinatae · ratiocinantis`,
      tag: `ratiocinatae · ratiocinantis`,
      fin: {
        tag: `ratiocinatae · ratiocinantis`,
        heading: `Some of the mind's lines follow the land.`,
        body: `The rational distinctions split by their roots. <span class="lat">Distinctio rationis ratiocinatae</span>: the thing is one, but its richness founds two true concepts, as one Venus really appears at dawn and at dusk, and one simple God really is what mercy and what justice each imperfectly say. <span class="lat">Distinctio rationis ratiocinantis</span>: no root at all, the mind hearing its own echo, sofa and couch, Tully and Cicero. Aquinas holds the divine case with both hands: God is one in reality and multiple in idea, and the many names are not empty and vain, because one simple reality answers to them all in a manifold and imperfect manner. The mind that knows this stops apologizing for its distinctions and starts auditing their roots.`,
        distinction: {
          latin: `ratiocinatae  ·  ratiocinantis`,
          english: `rooted in the thing  ·  the mind's echo`,
          gloss: `One Venus really appears at dawn and at dusk; sofa and couch differ by nothing: the mind's lines split by their roots.`,
          motif: `sun-and-mirrors`,
        },
      },
      questions: [
        {
          id: `m15-l2-q1`,
          type: "mcq",
          stem: `Shepherds hailed the morning star and the evening star as two. Astronomers found one Venus. The distinction turned out rational: one thing, two concepts. But were the two concepts groundless?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Groundless: one planet means the two names were sheer error.",
                "feedback": "The shepherds were wrong about the census and right about the sky: something really shines at dawn and really shines at dusk. Their two concepts each caught a truth. An error about number is not an error about everything."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Grounded: one planet really appears twice over, and each concept tracks a real apparition.",
                "feedback": "Respondeo: Venus really stands in the dawn sky and really stands in the dusk sky; the two concepts differ because those apparitions differ, and the apparitions are the world's doing. One res, two founded considerations: a distinction of reason with roots."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither: the case shows all distinctions are provisional.",
                "feedback": "One case of merged stars retires nothing. The flame's heat and light await your skepticism unmoved. What the case shows is subtler: rational distinctions come in two strengths, and this lesson is for telling them apart."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is idle once the astronomy is settled.",
                "feedback": "Settle the astronomy and the philosophical question stands up fresh: two concepts, one thing, and a difference between them that nobody invented. Idle questions do not run a lesson; this one is about to run a theology."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m15-l2-q2`,
          type: "mcq",
          stem: `Now 'sofa' and 'couch.' Two words, one thing again. Is this the Venus case over again?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: every pair of names for one thing works the same way.",
                "feedback": "Venus's two names caught two real apparitions; the sofa's two names catch nothing twice. One pair is rooted in the thing's own showing, the other in a furniture catalog's vocabulary. Same surface, different soil."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: here the thing grounds one concept under two labels for real comfort reasons.",
                "feedback": "Comfort is real and grounds nothing here; both words mean the whole upholstered thing, comfort included. No aspect answers to 'sofa' that does not equally answer to 'couch.' The doubling is entirely verbal."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes, but more weakly: the two words carry faint regional aspects.",
                "feedback": "Regional habits distinguish the speakers, not the furniture. A distinction founded in Milwaukee usage is founded in Milwaukee, not in the thing. The tradition's question is always where the root runs."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: two synonyms, one concept, no aspect of the thing dividing them.",
                "feedback": "Respondeo: this is the mind's echo, not the world's structure: distinctio rationis ratiocinantis, a distinction of naming with no foundation in the thing. Venus's pair had roots; this pair has spelling. The grammar's first audit is complete."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m15-l2-q3`,
          type: "mcq",
          stem: `The payoff case. God is utterly simple, yet 'God is merciful' and 'God is just' are not the same sentence twice. Aquinas holds both. How?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "One simple perfection founds many true concepts; the names differ with roots in Him.",
                "feedback": "Respondeo: Aquinas says God is 'one in reality, and yet multiple in idea,' and the ideas are 'not empty and vain, for there corresponds to all of them one simple reality represented by them in a manifold and imperfect manner' (ST I q.13 a.4). Ratiocinatae, at the summit: the richest thing founding the most concepts."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Mercy and justice are really distinct parts of God.",
                "feedback": "Really distinct parts make a composite, and the simple God has no parts to distinguish. The whole puzzle exists because the real distinction is barred here. Some other kind must carry the weight, or the names collapse."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The names are synonyms; piety just enjoys repetition.",
                "feedback": "Aquinas answers this in so many words: synonyms united are redundant, and Scripture is not stammering. He forgives the sinner AS merciful and repays AS just; the names do different work because our concepts catch His one perfection differently."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The distinction is ours without foundation, like sofa and couch.",
                "feedback": "Then theology would be furniture-talk, and 'merciful' would teach nothing 'just' had not already said. The concepts differ because creatures receive His one perfection 'divided and multiplied' (ST I q.13 a.4); the root runs into God's own eminence."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m15-l2-q4`,
          type: "distinction_application",
          stem: `The kinds so far: real (in the thing); rational with foundation (one thing, concepts rooted in its aspects); rational without foundation (naming only). The case: 'Tully' and 'Cicero,' two names one Roman answered to. Classify the distinction.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Real: two names require two nameable realities.",
                "feedback": "Then every alias would split a man, and witness protection would be metaphysics. One Roman, however addressed, remains one. Count the realities, not the mail."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Rational with foundation: the two names track his two careers.",
                "feedback": "Tempting, and worth the audit: if Romans had used 'Tully' for the orator and 'Cicero' for the consul, aspects would ground the pair. They did not; both names named the whole man indifferently. The root you propose is not in the usage."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Rational without foundation: two labels, one man, no aspect dividing them.",
                "feedback": "Respondeo: ratiocinantis, the naming echo. The audit ran honestly: no real divide, no founded aspects, just two handles on one Roman. Note what you did: you tested the root before filing the case. That habit is the module."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No distinction of any kind: the names are one word.",
                "feedback": "The names differ as names; scribes spell them differently and misquote accordingly. A distinction between labels is still a distinction, just one whose whole being is in the labeling. That is precisely what ratiocinantis names."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m15-l2-q5`,
          type: "fill_blank",
          stem: `Root the vocabulary. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">A rational distinction with a real <span class="fb-blank" data-blank="b1">______</span> in the thing is called <span class="fb-blank" data-blank="b2">______</span>; one that is only the mind's doubled naming is called <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "foundation",
                  "fundamentum"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "ratiocinatae"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "ratiocinantis"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "foundation",
              "ratiocinatae",
              "ratiocinantis",
              "realis",
              "formalis",
              "apparition",
              "modalis",
              "essence"
            ],
            "feedback": {
              "all_correct": "Rooted: fundamentum in re makes the difference between theology and word-play. Venus and the divine names on one side; the couch on the other. The Latin is a mouthful and the audit is worth it.",
              "partial_correct": "Some roots misplaced. The mnemonic the manuals loved: ratiocinaTAE has a foundation it is graTEful for; ratiocinANTIS is the mind chANTIng to itself."
            }
          },
        },
        {
          id: `m15-l2-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "A merely rational distinction is not worth making."`,
          latin_tag: `ratiocinatae · ratiocinantis`,
          doctrine_line: `A rational distinction with a foundation in the thing is ratiocinatae; without one, ratiocinantis: the mind hearing its own echo.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Only differences in things deserve the mind's attention.",
                "feedback": "The divine names are rationally distinct, and on your rule theology closes by lunch. The mind attends to founded aspects because the thing's richness exceeds any single concept. That excess deserves everything."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. What the mind draws, the mind can just as well erase.",
                "feedback": "Erase the distinction between God's mercy and His justice and see what happens to your prayers by Friday. Founded distinctions are drawn by the mind and dictated by the thing; erasing them loses truth, which is the one expense the tradition refuses."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Every distinction is equally valuable once someone bothers to draw it.",
                "feedback": "Right verdict, bankrupt reason. Sofa-versus-couch is not the peer of mercy-versus-justice, and a grammar that cannot rank them is bookkeeping without an auditor. Distinctions are worth their roots."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Founded rational distinctions carry real knowledge of one rich thing.",
                "feedback": "Respondeo: where the thing outruns our concepts, the founded distinction is how finite minds take in what one glance cannot hold. Aquinas builds the doctrine of the divine names on exactly this. The audit is not busywork; it is reverence with a method."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `m15-l3`,
      num: `III`,
      title: `The Scotist Middle`,
      latin: `distinctio formalis`,
      tag: `distinctio formalis`,
      fin: {
        tag: `distinctio formalis`,
        heading: `The Subtle Doctor gets his chair and his due.`,
        body: `Scotus saw the problem exactly: the difference between God's wisdom and His goodness is not our invention, and God is simple. His answer was a third rank: the <span class="lat">distinctio formalis</span>, formalities non-identical from the side of the thing yet inseparable within it. The strict line honors the motive and declines the machinery. Prior to every mind is what 'real' means, so the middle either hardens into real distinction, and composition enters the Simple One, or it softens into a founded rational distinction, which was on offer all along. The Thomist commentators, Cajetan chief among them, call the offer by its own name: the <span class="lat">distinctio virtualis</span>, one eminent reality virtually containing what the mind truly divides. The fight was fair; the grammar held at two kinds and their roots.`,
        distinction: {
          latin: `distinctio formalis`,
          english: `the formal distinction`,
          gloss: `Scotus's middle rank, heard at strength and declined: before any mind it hardens into composition or softens into the founded distinction on offer all along.`,
          motif: `diverging-lines`,
        },
      },
      questions: [
        {
          id: `m15-l3-q1`,
          type: "mcq",
          stem: `Duns Scotus, the Subtle Doctor, deserves his title and a fair hearing. His worry: God's wisdom and goodness differ, and NOT by our doing; yet God is simple. State his motive at full strength.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "He wants the difference anchored in God prior to any mind, without cutting God into parts.",
                "feedback": "Respondeo: that is the pull, felt honestly. If the difference is only in our concepts, it seems we drew it; if it is real, God is composite. Scotus refuses both, and his refusal is not stupidity but seriousness about the divine names. Feel the strength before the answer comes."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "He wants to embarrass the Thomists with a puzzle they cannot answer.",
                "feedback": "The wall keeps polemics out and lets opponents in at full strength; Scotus argued for the doctrine of God, not against Dominicans. Read his motive as he owned it, or the fight is not fair and the win is not worth having."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "He denies divine simplicity and needs cover for the denial.",
                "feedback": "Scotus affirms simplicity as firmly as any doctor; the formal distinction is his attempt to KEEP it while honoring the difference of the perfections. Convict a man of his own position: he wants both, and says so."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "He believes every distinction the mind draws must be real.",
                "feedback": "That crude rule belongs to no scholastic; Scotus wields rational distinctions happily elsewhere. His claim is narrower: THIS difference, in God, is not the mind's work. Precision about the opponent is the first act of a fair fight."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m15-l3-q2`,
          type: "mcq",
          stem: `His proposal: the <span class="lat">distinctio formalis</span>, a formal distinction 'from the side of the thing.' What exactly does it claim?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That wisdom and goodness are separable things joined in God.",
                "feedback": "That would be the real distinction at full strength, and Scotus explicitly refuses it; separability in God is exactly what he will not say. His middle is defined by being LESS than that. Undershooting the opponent is as unfair as overshooting."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the difference is our concept-work, though respectably grounded.",
                "feedback": "That is the Thomist offer, the founded rational distinction, and Scotus rejects it as too weak: he insists the non-identity precedes every act of any mind. The whole dispute lives in that word 'precedes.'"
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That formalities in one thing are non-identical prior to any mind, yet inseparable from it.",
                "feedback": "Respondeo: stated at strength: wisdom-in-God and goodness-in-God are not formally the same, and this non-identity is in God, not in us; yet they can never be pulled apart, so no composition of things follows. A third rank of distinction, between real and rational. Whether the middle can hold is the next question."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That distinctions in God are unknowable, so a technical term must stand in.",
                "feedback": "Scotus is the opposite of an agnostic here: subtle, affirmative, precise. The formal distinction is a claim about how God is, not a shrug about our limits. He would resent the compliment of your caution."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m15-l3-q3`,
          type: "dialogue_branch",
          stem: `The Commentator seats a Scotist advocate, courteous and formidable: 'The non-identity of wisdom and goodness in God precedes your mind and mine. Deny it, and you made God's attributes up. Your move.' Hand the Commentator the strict reply.`,
          payload: {
            "commentatorLine": "The Commentator returns the bow. 'The Subtle Doctor is owed a subtle answer. Flat denials and pious fog go back to the kitchen; bring me the blade.'",
            "branches": [
              {
                "text": "'Prior to every mind' is what REAL means. Your middle either is real, and composition enters the Simple One, or it is founded in His eminence, which we already grant. Name a third meaning of 'prior,' or the middle is a name.",
                "verdict": "correct",
                "feedback": "The blade. Tertium non datur: mind-independent or mind-dependent exhausts the field, since 'formality' must have its non-identity in one column or the other. And the second column was never a concession: one infinite perfection, 'multiple in idea' with every idea rooted in Him, honors the difference without installing it in God. The advocate's own coin, paid in full."
              },
              {
                "text": "Scotus multiplies entities without necessity; the razor retires him.",
                "feedback": "Wrong instrument and wrong century; parsimony is an accountant's virtue, and the advocate is arguing necessity, not extravagance. He claims the middle is REQUIRED by the divine names. Show it is not required; do not bill him for it."
              },
              {
                "text": "God is beyond our logic; both schools overreach in speaking at all.",
                "feedback": "The fog, and the Commentator opens a window. The tradition speaks of God with negations, eminence, and analogy, but it speaks; Scripture names Him just and merciful and means it. A reverence that silences theology is not humility, it is resignation wearing its hat."
              },
              {
                "text": "Grant the formal distinction for God alone; nothing follows for creatures.",
                "feedback": "The concession that unravels: a distinction admitted at the summit is admitted, and the grammar now has three ranks everywhere on appeal. Special pleading is not a category. Either the middle is coherent or it is not; geography does not save it."
              }
            ]
          },
        },
        {
          id: `m15-l3-q4`,
          type: "true_false_with_reason",
          stem: `True or false: "The Thomist answer leaves the non-synonymy of the divine names unexplained."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Simplicity flattens every difference; the names differ only by our habit.",
                "feedback": "That is Scotus's charge, and Aquinas's text answers it: the names signify one reality 'under many and different aspects,' each aspect rooted in the one perfection creatures receive 'divided and multiplied.' Habit does not write theology; foundations do."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE. The eminent foundation explains it: one perfection, truly said in many ways.",
                "feedback": "Respondeo: the explanation is positive, not evasive: God's one perfection so exceeds any creature-borrowed concept that many concepts are needed, each true, none exhaustive, all rooted in Him. The non-synonymy is founded precisely on His fullness. Nothing is left over for a middle to explain."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE. Only revelation explains the names; philosophy should not try.",
                "feedback": "Revelation gives the names; the metaphysics of how one simple God bears many true names is exactly what ST I q.13 argues on reason's ground. The tradition does not divide the labor by surrendering half of it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The names differ by human convention, as all words do.",
                "feedback": "Right verdict, nominalist reason. Convention picks the syllables; it does not make 'just' and 'merciful' non-synonymous in truth-value. If convention did all the work, renaming could collapse the difference, and no council could accept that."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m15-l3-q5`,
          type: "mcq",
          stem: `The strict commentators have a name for their answer, with Cajetan its great voice: the <span class="lat">distinctio virtualis</span>. What does 'virtual' add to what Lesson 2 taught?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A fourth kind of distinction, rivaling Scotus's third.",
                "feedback": "No new rank enters; that would concede the game while renaming it. The virtual distinction is the founded rational distinction regarded from the thing's side. Same doctrine, second vantage, zero new metaphysics."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That the distinction is almost real, a shade below Scotus's claim.",
                "feedback": "'Virtual' does not mean 'nearly'; the tradition is not haggling over percentages. It means the thing has the POWER, the virtus, to found many true concepts. The distinction stays rational; the power is entirely real."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That computers would one day simulate the debate.",
                "feedback": "An anachronism with a good punchline, and the Latin is innocent of it. Virtus: power, capacity, eminence. Though it is fair to say this course is the joke arriving seven centuries late."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It names the thing's side: one eminent reality with the power to found many true concepts.",
                "feedback": "Respondeo: from the mind's side, ratiocinatae: a founded rational distinction. From the thing's side, virtualis: one reality virtually containing what our concepts divide. Two vantage points on one doctrine, and the second explains WHY the first has roots. Cajetan sharpened the vocabulary; the doctrine is Aquinas's own q.13."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m15-l3-q6`,
          type: "mcq",
          stem: `Fair fights end with honest ledgers. What does the strict line give up by declining the formal distinction, and what does it keep?`,
          latin_tag: `distinctio formalis`,
          doctrine_line: `Scotus's formal distinction is the famous middle between real and rational; the strict line declines it, because foundation already does its work.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It gives up a picturesque middle; it keeps a two-kind grammar where every difference has an auditable root.",
                "feedback": "Respondeo: the honest ledger. Lost: a machinery some find truer to the felt objectivity of the difference; Scotists say we flatten it, and that charge deserves respect, not scorn. Kept: clean books. Real or rational, and if rational, audited by its foundation. The strict line holds that eminence-as-root IS the objectivity Scotus wanted, purchased without composition."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It gives up nothing and loses nothing; the Scotists simply erred.",
                "feedback": "Triumphalism is bad bookkeeping. A position held by subtle doctors for seven centuries exacts a real price from its opponents, and pretending otherwise teaches the learner to swagger instead of argue. Name the cost; then pay it gladly."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It gives up the doctrine of divine simplicity in practice.",
                "feedback": "Precisely backwards: declining the middle is how simplicity is kept without discount. It is the formal distinction that bills simplicity for non-identities lodged in God. The strict line's whole motive is to keep that invoice unpaid."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It keeps the vocabulary and gives up the argument.",
                "feedback": "The argument was made, not abandoned: tertium non datur, plus a positive account of foundation. One may judge it insufficient; Scotists do. But an answer given and disputed is not an argument surrendered. You watched it happen two questions ago."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `m15-l4`,
      num: `IV`,
      title: `Modal and Minor`,
      latin: `distinctio modalis`,
      tag: `distinctio modalis`,
      fin: {
        tag: `distinctio modalis`,
        heading: `The crease is not the cloth, and not another cloth either.`,
        body: `Refinements, each earning its keep. The real distinction divides: <span class="lat">maior</span> between thing and thing, the fox and the fern; <span class="lat">minor</span> between principles within one thing, essence and esse, matter and form, the soul and its powers, really distinct and never separable as things. Between a thing and its mode stands the <span class="lat">distinctio modalis</span>: the crease really creases the cloth and cannot be taken home without it. And beneath them all, the course's working pairs, per se and per accidens, in se and in alio, first act and second act, turn out to be grammar too: each names the respect in which a comparison holds, because no distinction holds except in a named respect. The toolbox is now complete; what remains is the art of using it in the open street.`,
        distinction: {
          latin: `distinctio modalis`,
          english: `the modal distinction`,
          gloss: `The crease is not the cloth and not another cloth: between a thing and its mode, less than real, more than the mind's.`,
          motif: `cup-water`,
        },
      },
      questions: [
        {
          id: `m15-l4-q1`,
          type: "mcq",
          stem: `The real distinction subdivides: <span class="lat">maior</span>, between thing and thing, separable, like the fox and the fern; <span class="lat">minor</span>, between principles within one thing, like matter and form. Essence and esse are really distinct, yet no one ever found an essence in one drawer and its esse in another. Which kind?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Maior: real distinction always means separable in principle.",
                "feedback": "Then the tradition's central distinction would be its central embarrassment, since no essence was ever stored apart. Separability marks the MAJOR kind only. The grammar subdivides precisely so this treasure does not get audited with the wrong rule."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Neither: inseparables can only be rationally distinct.",
                "feedback": "The heat and light of one flame already broke that rule in Lesson 1: distinct in the thing, housed in one thing. Inseparability tells you which real kind you hold, not that you hold none. The couch is not the only alternative to the fox."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It depends on the observer's frame of analysis.",
                "feedback": "Frames decide what we attend to, never what composes the thing. The creature is composed of essence and esse before any analyst clocks in; that is Thesis territory, not methodology. The grammar audits the world, not the seminar."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Minor: really distinct principles of one being, never two separable things.",
                "feedback": "Respondeo: distinctio realis minor: the composition is real, the components are principles, not residents. Matter and form, essence and esse, the soul and its powers: one being each time, really composed. The refinement guards the course's deepest doctrine from both flattening and cartoon."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m15-l4-q2`,
          type: "mcq",
          stem: `Now the tablecloth and its crease. The cloth really is creased; yet you cannot take the crease home and leave the cloth. The manuals give this its own entry: the <span class="lat">distinctio modalis</span>. What is the crease?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Another thing, folded very close to the first.",
                "feedback": "Unfold the cloth and count the casualties: nothing has left the room. A thing that cannot even in principle exist apart is not a lodger; the crease has no address of its own. Reification is the first ditch."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A mode: a real way the cloth is, distinct from the cloth without being another thing.",
                "feedback": "Respondeo: the crease is really there, your iron testifies to it, yet its whole being is the cloth's being-creased. A mode: less than a thing, more than a thought. The lopsidedness is the signature: cloth without crease, easily; crease without cloth, never."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A rational distinction: 'creased' is our description of the cloth.",
                "feedback": "The iron flattens something, and it is not a description. The crease scatters light, catches crumbs, annoys hostesses, all unwatched. Flattening the mode into talk is the second ditch, opposite the first and just as deep."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An illusion of perception, like the bent oar in water.",
                "feedback": "The bent oar deceives; the crease performs. It holds its line in the dark and is still there at breakfast. What does causal work in the world while no one errs about anything is not an illusion; it is furniture, of a modest kind."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m15-l4-q3`,
          type: "distinction_application",
          stem: `The kinds now standing: real major, real minor, modal, rational with foundation, rational without. The case: your soul and its power of sight. One being, and the power is really the soul's, yet the tradition holds soul and powers really distinct. Classify.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Real minor: really distinct principles within one being, inseparable as things.",
                "feedback": "Respondeo: the soul is not its own sight, or losing sight would be losing soul, and the blind would be the dead. Yet no power ever walked out and rented rooms. Really distinct, never separable things: the minor kind, exactly where the grammar files essence and esse. The module's refinements are already working."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Real major: the soul is one thing and its sight another.",
                "feedback": "Two THINGS make the man a partnership, and that committee was dissolved with prejudice: one soul, from stomach to syllogism. The power is the soul's own, flowing from it, not a colleague of it. Major overstates; the grammar has a gentler shelf."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Rational with foundation: one soul considered as seeing.",
                "feedback": "Then a soul that lost its sight would have lost a consideration, and the newly blind would be victims of vocabulary. The loss is real, so the distinction was. Foundations ground concepts; here something more than a concept went dark."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Modal: sight is just a way the soul happens to sit.",
                "feedback": "Closer than the others that fail, and still short: a mode is HOW a thing is, while a power is something the soul HAS for operating, a principle with its own act and object. The manuals debated this border for centuries, which tells you the grammar is fine-grained enough to have borders worth patrolling."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m15-l4-q4`,
          type: "match_pair",
          stem: `The course's own past distinctions, sorted at last. Match each pair to its kind.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the fox and the fern"
              },
              {
                "id": "L2",
                "text": "essence and esse"
              },
              {
                "id": "L3",
                "text": "God's mercy and His justice"
              },
              {
                "id": "L4",
                "text": "sofa and couch"
              },
              {
                "id": "L5",
                "text": "the cloth and its crease"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "real major (thing from thing)"
              },
              {
                "id": "R2",
                "text": "real minor (principles of one being)"
              },
              {
                "id": "R3",
                "text": "rational with foundation (one reality, rooted concepts)"
              },
              {
                "id": "R4",
                "text": "rational without foundation (naming only)"
              },
              {
                "id": "R5",
                "text": "modal (a thing and its mode)"
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
              "all_correct": "Five kinds, five cases, one working grammar. You have just done in a minute what half the bad arguments in print cannot do at all: said WHICH distinction you meant.",
              "partial_correct": "Some cases misfiled. Run the audits in order: in the thing or in the mind? If in the thing: separable things, principles of one being, or a thing and its mode? If in the mind: rooted or echo?"
            }
          },
        },
        {
          id: `m15-l4-q5`,
          type: "mcq",
          stem: `The course has leaned on working pairs all along: substance in se, accident in alio; the chance find per accidens; the soul first act, its seeing second act. What are these pairs, in the grammar's terms?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Extra categories of thing, awaiting their own modules.",
                "feedback": "They add no inhabitants to the world; the man on the bench is not accompanied by his per-se-ness. They are not new beings at all, which is the clue to what they are. Look at what they DO in a sentence."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Loose synonyms for the real and rational distinction.",
                "feedback": "Synonyms would be redundant, and each pair earns separate wages: in se/in alio divides manners of existing; per se/per accidens divides manners of belonging; the acts divide constitution from operation. Different respects, not repeated labels."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Named respects of comparison: each fixes the exact regard in which a claim holds.",
                "feedback": "Respondeo: this is the deep rule under the whole module: no distinction, and no claim, holds except in a named respect. The pairs are the respects, pre-named by the tradition. 'The same man in the same respect' is what contradiction means; the pairs exist so the respect never goes unnamed."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Historical relics kept for the beauty of the Latin.",
                "feedback": "The Latin is beautiful and the relics are load-bearing: remove per se/per accidens and the lucky spade's whole account of chance collapses by dinnertime. The tradition keeps no ornaments in the toolbox; everything in there cuts."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m15-l4-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "The modal distinction is a minor refinement; nothing important turns on it."`,
          latin_tag: `distinctio modalis`,
          doctrine_line: `Real distinctions divide into major and minor; the modal distinction stands between a thing and its mode; and every distinction holds in a named respect.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Creases and postures are trivia; doctrine lives elsewhere.",
                "feedback": "The examples are humble on purpose; the kind is not. Whether subsistence is a mode, whether inherence is, these are load-bearing questions in the treatises this course feeds into. The tradition trains on tablecloths to operate on dogma."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Anything modal can be restated as real or rational without loss.",
                "feedback": "Restate the crease as a thing and you have a lodger; as a thought and you have unemployed irons. The middle shelf exists because both restatements lose something: the reality of the mode, or the unity of the thing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Without it, everything real becomes a thing, or modes become mere talk.",
                "feedback": "Respondeo: the modal distinction guards against two ditches at once: reification, where every wrinkle gets a soul, and flattening, where nothing is real but lumps. A grammar that cannot say 'really so, but only as a mode' will say something worse in its place."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. It matters because modes are secretly substances.",
                "feedback": "Right verdict, ruinous reason: a mode promoted to substance is exactly the reification the distinction exists to forbid. The crease is real AS the cloth's; grant it independence and you have doubled the linen and lost the point."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `m15-l5`,
      num: `V`,
      title: `The Art of Distinguo`,
      latin: `distinguo`,
      tag: `distinguo`,
      fin: {
        tag: `distinguo`,
        heading: `Never flat denial; never surrender; name the senses.`,
        body: `The grammar goes to the street. The scholastic answers a claim three ways: <span class="lat">concedo</span>, I concede; <span class="lat">nego</span>, I deny; <span class="lat">distinguo</span>, I distinguish, granting the claim in one named sense and denying it in another, with a stand taken on each. 'Humans are just animals': that man is an animal, concedo, the tradition said it before the biologists; that he is nothing more, nego, one power in him takes the universal, and no animal measure captures it. The counterfeits are named too: the flat denial that concedes nothing and learns nothing, the shrug that never names its senses, and the fallacy that trades on an unnamed kind, making a founded rational distinction do a real distinction's work. The heron waits; the strike is one clean motion. Watch the equivocation on 'distinct,' and you can referee anything, including the last module of this course.`,
        distinction: {
          latin: `concedo  ·  nego  ·  distinguo`,
          english: `I concede  ·  I deny  ·  I distinguish`,
          gloss: `Never flat denial, never surrender: grant in one named sense, deny in another, and take a stand on each.`,
          motif: `three-lanes`,
        },
      },
      questions: [
        {
          id: `m15-l5-q1`,
          type: "precision_check",
          stem: `At a dinner, with perfect confidence: <em>"Humans are just animals."</em> Four replies are on offer. The Thomist one?`,
          payload: {
            "statement": "Humans are just animals.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Deny it whole: humans are not animals but spirits in flesh.",
                "feedback": "The flat denial loses a truth to win a mood. The tradition itself defines man as rational ANIMAL and means the noun; by one form a man is man and animal and living and body. Piety that denies the genus hands the reducer his victory and the biology department besides."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Distinguish: an animal, yes; ONLY an animal, no; and name what the 'just' erases.",
                "feedback": "Respondeo: concedo the genus, nego the reduction. The word doing the smuggling is 'just': it converts a true classification into a false exhaustion. What it erases has a name, the rational grade, the power whose object is the universal, and no accumulation of animal cleverness reaches it. One clean strike."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Concede it whole: honesty requires following the science.",
                "feedback": "The science classifies the body and is welcome; it has no instrument for the claim's second half, since 'just' is not an empirical finding but a metaphysical verdict smuggled in a lab coat. Total surrender concedes what no laboratory measured."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Ask what they mean by 'human' and let the definitions wander.",
                "feedback": "The shrug in Socratic costume. Asking for senses without ever naming and judging them is distinction-mongering, fog instead of precision. The distinguo differs from the dodge exactly here: it names both senses and takes a stand on each."
              }
            ],
            "correct_option_id": "b",
            "correction": "That man is an animal, concedo; that he is ONLY an animal, nego: the word 'just' turns a true genus into a false exhaustion, and what it erases is the rational grade."
          },
        },
        {
          id: `m15-l5-q2`,
          type: "mcq",
          stem: `The move you just made has a form, older than the coffee it was performed over. The disputation's three answers: <span class="lat">concedo</span>, I concede; <span class="lat">nego</span>, I deny; <span class="lat">distinguo</span>, I distinguish. What must a real distinguo always contain?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A counter-question that shifts the burden to the claimant.",
                "feedback": "Burden-shifting is chess; the disputation is surgery. The respondent's job is not to escape the claim but to open it: show what in it is true, what false, and where the seam runs. A distinguo that only interrogates has not yet answered."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A citation of authority for each sense distinguished.",
                "feedback": "Authorities steady the hand but the move stands on its own feet: senses named, stands taken. Aquinas distinguishes against authorities when the matter demands. The form is logical before it is bibliographical."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Enough qualifications that the original claim dissolves.",
                "feedback": "Dissolution is the counterfeit. A claim distinguished into vapor answers nothing; the claimant said something and deserves to learn which part survives. The move is a blade, not a fog machine; two named senses usually suffice."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both senses named, and a concedo or nego attached to each.",
                "feedback": "Respondeo: name the sense in which the claim is true and grant it; name the sense in which it is false and refuse it. Two names, two verdicts. Anything less is either a shrug wearing Latin or a denial afraid of what the claim got right."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m15-l5-q3`,
          type: "spot_the_fallacy",
          stem: `An argument arrives wearing a gown: 'God's mercy and justice are distinct. Whatever has distinct attributes has parts. Therefore God has parts.' Where is the cheat?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Premise one is false: mercy and justice in God are not distinct at all.",
                "feedback": "Deny premise one flat and the divine names collapse into stammering; Lesson 2 built their non-synonymy on Aquinas's own text. The premise is true IN A SENSE, which is precisely the handle the cheat needs you to grab wrongly."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The conclusion is impious, so a premise must fail somewhere.",
                "feedback": "Working backward from the offense finds the crime but not the weapon, and the tradition wants the weapon. Fideism grades conclusions; philosophy audits inferences. Find the trade before filing the complaint."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Equivocation on 'distinct': true of the names as founded-rational, needed as REAL for parts to follow.",
                "feedback": "Respondeo: the weapon found. Premise one is true where the distinction is rational-with-foundation; premise two is true only where it is real. The syllogism walks in on one sense and cashes out on the other. Name the kind, and the gown falls off the argument. This is the referee's whistle you will carry into the last module."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Premise two is false: even really distinct attributes never compose.",
                "feedback": "Overcorrection: really distinct constituents DO compose; that is what composition is, and creatures are the proof. Break premise two universally and Thesis territory breaks with it. The premise is fine; the traffic between premises is the crime."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m15-l5-q4`,
          type: "mcq",
          stem: `Another dinner, another confidence: 'Love is just chemistry.' Before answering, run the audit: which distinction is the claim blurring?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Between what an act depends on and what an act is.",
                "feedback": "Respondeo: the substrate is conceded cheerfully, the tradition never blushed at the body; passions have their chemistry as thought has its phantasms. The cheat is the 'just': dependence-on promoted to identity-with. Concedo the chemistry; nego the 'nothing besides'; the seam is dependence versus constitution."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Between the vegetative and sensitive grades of life.",
                "feedback": "Both grades are in play when anyone is in love, but the claim's error is not a misfiled grade. It would survive relocating love anywhere in the soul, because its trick is about 'just,' not about which shelf. Audit the reduction, not the address."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Between rational distinctions with and without foundation.",
                "feedback": "A fine blade brought to the wrong table. The claim does not confuse two kinds of concept-drawing; it confuses a condition with an essence. The Lesson 2 audit is not the only one in the kit, which is why Lesson 4 happened."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "None: the claim is honest reduction, to be met with flat denial.",
                "feedback": "Flat denial hands back the truth in the claim, and there is one: the chemistry is real and really involved. Deny it whole and the chemist wins the room by producing data you just called irrelevant. The distinguo keeps the data and takes the verdict."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m15-l5-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "A good distinguo always names its senses and takes a stand on each."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Unnamed senses and withheld verdicts are fog, not precision.",
                "feedback": "Respondeo: the move's two duties: name the senses, judge the senses. Drop the first and you equivocate; drop the second and you dodge. The scholastic 'it depends' is always followed by ON WHAT, and then by the verdicts. That spine is what separates the disputation from the seminar."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Naming senses is how you win arguments and audiences.",
                "feedback": "Right verdict, sophist's reason. The distinguo serves truth, not scoreboards; sometimes it costs the argument by conceding what your side wished were false. If winning is the aim, the tool will bend, and bent tools cut the surgeon."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Taking stands on each sense is dogmatism in Latin.",
                "feedback": "The stand-taking is the honesty: the claimant learns exactly what is granted and what refused, and can attack either. Nothing is less dogmatic than showing your seams. The refusal to judge, dressed as humility, just keeps every option warm."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Some mysteries forbid distinction, so the rule cannot be universal.",
                "feedback": "Mystery bounds what we can SAY, and the distinguo is how the boundary is drawn precisely: this much is affirmed, this much exceeds us, and the senses of each are named. Even apophatic theology is distinctions all the way to the threshold. The rule holds hardest exactly there."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m15-l5-q6`,
          type: "precision_check",
          stem: `Last claim of the evening, delivered kindly: <em>"You can't prove the soul exists; science has looked."</em> The precise reply?`,
          latin_tag: `distinguo`,
          doctrine_line: `Distinguo is precision with a spine: concede in one named sense, deny in another, and take a stand on both.`,
          lesson_complete: true,
          payload: {
            "statement": "You can't prove the soul exists; science has looked.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Concede: proof belongs to laboratories, and the soul is a matter of faith.",
                "feedback": "A double surrender dressed as peace: it gives the laboratory a monopoly on proof it never claimed, and demotes to mere faith what the corpse and the grades argued on Aristotle's premises. The tradition holds the soul by demonstration first; grace crowns nature, it does not replace her arguments."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Deny: science has proven the soul, in studies the speaker has not read.",
                "feedback": "No such studies exist, and inventing allies is the fastest way to lose an honest room. The instruments detect bodies; the soul is not a body to detect. Do not defend the doctrine with the very confusion it exists to correct."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Object that science changes constantly, so its silence proves nothing.",
                "feedback": "The lazy skeptic's coin, already sent back once at the neuroscientist's table. Instability is not the issue; jurisdiction is. A perfectly finished physics would still have detected no soul, for the same reason a perfect metal detector finds no Wednesday."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Distinguish 'looked': detection of bodies found none; demonstration from operations is the looking that succeeded.",
                "feedback": "Respondeo: the seam named: to LOOK with instruments is to seek a body, and the soul was never a candidate; to LOOK by demonstration is to reason from operations to their principle, and that search already concluded, with the corpse, the grades, and the subsisting soul. Science has not looked and failed; it has, quite properly, never looked."
              }
            ],
            "correct_option_id": "d",
            "correction": "Two senses of 'looked': empirical detection seeks bodies, and rightly found none, since the soul is no body; demonstration from operations is the looking that applies, and it succeeded."
          },
        }
      ],
    },
    {
      id: `m15-l6`,
      num: `VI`,
      title: `Recapitulatio`,
      latin: `grammatica distinctionum`,
      tag: `grammatica distinctionum`,
      fin: {
        tag: `grammatica distinctionum`,
        heading: `The referee's eyes, earned.`,
        body: `The grammar entire: real distinctions, major and minor, holding in things; rational distinctions, rooted or echoing, holding in the mind; the modal shelf between; the Scotist middle heard at strength and declined; and the distinguo that puts it all to work with named senses and verdicts attached. Two doors stand open. Through one, a single word said of God, of wine, and of an argument without stammering: the ordering of senses is analogy, and it has a module of its own. Through the other, the course's final room, where Thomists dispute Thomists over what kind of distinction divides essence from esse, and where you now arrive not as a spectator but as the referee the fight has been waiting for.`,
        distinction: {
          latin: `distinctio realis  ·  rationis`,
          english: `real distinction  ·  distinction of reason`,
          gloss: `The annihilation test: silence every mind, and the flame's heat and light still differ; the definitions do not.`,
          motif: `minds-line`,
        },
      },
      questions: [
        {
          id: `m15-l6-q1`,
          type: "match_pair",
          stem: `The module in six images. Match each to what it taught.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the tree and the idea of it"
              },
              {
                "id": "L2",
                "text": "Venus at dawn and at dusk"
              },
              {
                "id": "L3",
                "text": "the sofa that is a couch"
              },
              {
                "id": "L4",
                "text": "the Subtle Doctor's middle"
              },
              {
                "id": "L5",
                "text": "the crease in the tablecloth"
              },
              {
                "id": "L6",
                "text": "the heron's one clean strike"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "real versus rational, formalized at last"
              },
              {
                "id": "R2",
                "text": "a rational distinction with roots in the thing"
              },
              {
                "id": "R3",
                "text": "the mind's echo: naming without foundation"
              },
              {
                "id": "R4",
                "text": "heard at strength, declined: no third rank"
              },
              {
                "id": "R5",
                "text": "a mode: real, and not another thing"
              },
              {
                "id": "R6",
                "text": "distinguo: senses named, verdicts attached"
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
              "all_correct": "Six images, one toolkit. The grammar of distinctions is the least glamorous module in the course and the one the last module cannot begin without. The referee dresses plainly.",
              "partial_correct": "Some pairs strayed. Walk them in course order: the tree, the star, the couch, the middle, the crease, the strike. Each image was chosen to hold one tool."
            }
          },
        },
        {
          id: `m15-l6-q2`,
          type: "mcq",
          stem: `One claim must carry the whole module. Choose it.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Distinctions are the mind's furniture, arranged for its comfort.",
                "feedback": "Half the inventory is not furniture at all: the flame's two powers and the creature's two principles divide unwatched. And even the mind's own drawings are audited by their roots. Comfort has nothing to do with it; the arrangement answers to the world."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Every distinction is of a kind, and naming the kind is half the argument.",
                "feedback": "Respondeo: real or rational; if real, major, minor, or modal; if rational, rooted or echo. Then the respect named, and the verdicts attached. Half the bad arguments in the world trade on an unnamed kind; you are now the person at the table who asks."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The fewer distinctions one draws, the closer one stands to reality.",
                "feedback": "Reality is composed, founded, and moded; a mind that refuses the grammar does not touch the seamless, it just blurs the seams. Simplicity belongs to God alone, and even His names come to us distinguished."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "All distinctions finally collapse into the real ones.",
                "feedback": "Collapse the divine names into real distinctions and God has parts by Tuesday. The rational-with-foundation kind is not a lesser real; it is its own kind with its own audit. The grammar exists because the collapses, in both directions, are the classic errors."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m15-l6-q3`,
          type: "fill_blank",
          stem: `The skeleton, from memory. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">In the thing: real distinctions, <span class="fb-blank" data-blank="b1">______</span> between things, minor between principles, and <span class="fb-blank" data-blank="b2">______</span> between a thing and its mode. In the mind: ratiocinatae with a <span class="fb-blank" data-blank="b3">______</span>, ratiocinantis without.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "maior",
                  "major"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "modalis",
                  "modal"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "foundation",
                  "fundamentum"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "maior",
              "modalis",
              "foundation",
              "formalis",
              "minor",
              "virtualis",
              "echo",
              "respect"
            ],
            "feedback": {
              "all_correct": "The skeleton stands: two realms, five kinds, one audit. Notice what is NOT in it: no third rank between the realms. The Subtle Doctor knocks; the grammar holds.",
              "partial_correct": "A bone or two misplaced. Rebuild from the top: where does the difference live, the thing or the mind? Everything else is refinement inside that first fork."
            }
          },
        },
        {
          id: `m15-l6-q4`,
          type: "mcq",
          stem: `A fresh case for the full kit: your intellect and your brain. The doctrine is owned already; now give the grammar. What kind of distinction?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Rational with foundation: one thinking thing, two considerations.",
                "feedback": "Then losing the distinction would be losing a way of talking, and the coma ward proves otherwise: organ damaged, power intact but silenced. When one relatum can be wounded while the other is merely impeded, the divide outruns consideration."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Modal: the brain is how the intellect happens to sit.",
                "feedback": "Backwards lopsidedness: modes cannot exist without their things, yet the brain sits in the skull whatever the intellect does, and the intellect's act, the sick tongue and tinted vase argued, has no organ at all. Neither is the other's crease."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Real: the brain is a body, the intellect a power whose subject is no organ.",
                "feedback": "Respondeo: two really distinct items: an organ among bodies, and a power the soul holds without any organ as its subject; the brain serves the intellect's objects, the phantasms, without ever being what understands. The grammar and the doctrine lock: this real distinction is why the scans were welcome and the reduction was refused."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Ratiocinantis: 'mind' and 'brain' are two names, like Tully and Cicero.",
                "feedback": "Two names for one thing leave nothing to argue about, and the entire mind-brain literature would be a spelling dispute. The neuroscientist and the Thomist disagree about something; the grammar's first job was to say WHAT. Naming-echoes generate no laboratories."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m15-l6-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "The grammar of distinctions is bookkeeping; the real philosophy happens elsewhere."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "FALSE. The course's final debate turns on which KIND divides essence from esse.",
                "feedback": "Respondeo: the last room of this course is Thomists disputing Thomists about the rank and reading of one distinction, and every blow lands or misses by this module's grammar. Bookkeeping is what philosophy looks like when it intends to be checked. The ledger IS the discipline."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE. Bookkeeping is beneath philosophy, but this is not bookkeeping.",
                "feedback": "Right verdict, wrong sneer: it is exactly bookkeeping, and bookkeeping is not beneath anything; unaudited thought is how errors compound interest. The tradition's glory is that its poetry survives its audits. Keep both halves."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE. Insight comes first; sorting it into kinds is clerical afterthought.",
                "feedback": "The equivocation on 'distinct' in Lesson 5 was not an afterthought; it was an argument for God's composition, defeated only by the sorting. Insight unsorted is indistinguishable from confusion at exactly the moments that matter most."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE. The great questions, God, the soul, being, ignore these small tools.",
                "feedback": "Each named guest was handled with precisely these tools in this very course: the divine names by foundation, the soul by the real distinction of powers, being by minor composition. The great questions do not ignore the small tools; they are decided by them."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m15-l6-q6`,
          type: "mcq",
          stem: `One door before the last. 'Good' is said of God, of wine, and of an argument. Not one sense; yet no stammer of unrelated homonyms either, as 'bat' for the animal and the club. What is the difference?`,
          latin_tag: `grammatica distinctionum`,
          doctrine_line: `Every distinction is of a kind, the kind has a root, and the referee who can name both is ready for the tradition's own arguments.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "None worth pursuing; multiple senses are equivocation, full stop.",
                "feedback": "Then 'God is good' equivocates on the word that anchors it, and theology stammers after all. The tradition refuses the full stop: between one sense and unrelated senses lies ordered plurality, and an entire module is waiting to map it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "'Good' is univocal: one sense, stretched thin across the cases.",
                "feedback": "Stretch one sense from wine to God and either the wine is deified or God is domesticated; univocity flattens the very heights the word must reach. The senses genuinely differ. The question is whether they differ ORDEREDLY."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The wine case is sensory, so it does not count as a sense.",
                "feedback": "The palate's good is a real good, and the tradition never disqualified pleasure from being; it ranked it. Dropping cases is not ordering them. The word's range is the datum; the ordering is the doctrine to come."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The senses of 'good' are diverse but ordered to one another; 'bat' is a coin toss.",
                "feedback": "Respondeo: wine, argument, and God are not good by one flat sense nor by accident of spelling; the senses lean on one another in an order, and ordering senses is a discipline of its own. The grammar divides senses; the next art relates them. Its name is analogy, and its module is next."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    }
  ],
};
