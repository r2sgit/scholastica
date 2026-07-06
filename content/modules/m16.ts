import type { ModuleMeta } from '../types';

export const m16: ModuleMeta = {
  id: 16,
  title: `Analogy of Being`,
  short: `Analogy of Being`,
  label: `Module 16 · Analogy of Being`,
  latin: `Analogia Entis`,
  aim: `Being is predicated of God and creatures neither univocally nor equivocally but analogically. Attribution names many things from their real relations to one prime analogate; proportionality holds a likeness of relations in which every analogate owns its act. The divine names ride both: remotion strips the creaturely mode, eminence affirms the perfection at its source, and the res significata / modus significandi cut keeps the sentence honest. Cajetan's proportionality framework stands as the school's map, with the school's own correction: attribution to the First runs intrinsic, not merely extrinsic. The path between idolatry and silence runs through analogy.`,
  lessons: [
    {
      id: `m16-l1`,
      num: `I`,
      title: `One Word, Three Ways`,
      latin: `univocum · aequivocum · analogum`,
      tag: `univocum · aequivocum · analogum`,
      fin: {
        tag: `univocum · aequivocum · analogum`,
        heading: `Three lanes, and the middle one carries everything.`,
        body: `Univocal speech is calm: one sense, one definition, no weather. Equivocal speech is noise wearing a uniform. Between them runs the narrow lane where a word keeps many senses in order, each leaning on a first: <span class="lat">analogum</span>, the analogical word. Health taught it to you at breakfast; being will ask it to hold the weight of God. Next: the anatomy of the first kind of analogy, where one owner holds the perfection and everyone else borrows the name.`,
        distinction: {
          latin: `univocum  ·  analogum`,
          english: `univocal  ·  analogical`,
          gloss: `One sense exactly the same in every use, or many senses ordered to one first. The difference decides whether God can be named.`,
          motif: `three-lanes`,
        },
      },
      questions: [
        {
          id: `m16-l1-q1`,
          type: "mcq",
          stem: `Breakfast. The oatmeal is healthy, your grandmother is healthy, and the walk she takes after eating is healthy. One word, three subjects. Is it doing the same work each time?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: one sense, stretched across three subjects.",
                "feedback": "Then the oatmeal would be healthy the way your grandmother is: sound sleep, good digestion, a steady heart. No porridge is that accomplished. The senses differ; the interesting question is how they still hold together."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: three unrelated senses that happen to share a spelling.",
                "feedback": "That is how 'bat' works: the animal and the club met by accident of language. These three did not meet by accident; every one of them points at the same health, hers. Deny the order and the word falls apart into coincidence, and it plainly is not one."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No: three different senses, each leaning on one and the same health.",
                "feedback": "Respondeo: the walk causes it, the oatmeal preserves it, and your grandmother has it. Three senses, one center of gravity. The tradition has a name for words that behave like this, and a whole doctrine of how much they can carry. You have just watched one work."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Yes, though a stricter language would use three separate words.",
                "feedback": "Latin kept one word too: sanum for the food, the walk, and the woman. The pattern is not a defect any vocabulary could cure; it is a discipline inside language itself, and every tongue that names health uses it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m16-l1-q2`,
          type: "mcq",
          stem: `Take 'animal' said of a dog and of a cat. The tradition calls a word used this way univocal, from the Latin <span class="lat">univocum</span>: one voice. What exactly earns the name?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The word keeps exactly one sense, the same definition, in every use.",
                "feedback": "Respondeo: one voice, one sense, one definition. Dog and cat are animals in precisely the same sense of the word. Inside a genus, speech is calm like this. The interesting weather begins when a word has to travel beyond any genus."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The word names things that closely resemble one another.",
                "feedback": "Resemblance is looser than univocity. A statue resembles a man and is no animal at all. The test is not likeness between the things; it is sameness of the sense: one definition covering every use without remainder."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The word applies to many individuals rather than one.",
                "feedback": "Applying to many is what every common noun does, equivocal ones included: 'bank' applies generously to both kinds of bank. Counting subjects settles nothing; the question is whether the sense stays one while the subjects multiply."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The speakers agree by convention to use it consistently.",
                "feedback": "Convention picks which sound carries which sense; the order underneath is not up for vote. Even an invented word, used with one definition throughout, would be univocal by structure. Treaties make vocabulary; they do not make sameness of sense."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m16-l1-q3`,
          type: "mcq",
          stem: `A bat flies out of the cave; a bat leans in the dugout. The tradition calls this <span class="lat">aequivocum</span>: equal voice, wholly different senses. What makes a word equivocal rather than merely flexible?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Its senses drifted apart over centuries of use.",
                "feedback": "History explains how the accident happened, not what it is. However the two senses arrived, what matters is their present relation: none. Etymology is biography; equivocation is structure."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It carries more senses than a dictionary can track.",
                "feedback": "Counting misses the cut. Two senses are enough for equivocation if nothing joins them, and fifty ordered senses would still not equivocate. The number is irrelevant; the relation among the senses is everything."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Its senses keep only a faint family resemblance.",
                "feedback": "A faint resemblance would already be a thread, and a thread is exactly what equivocation lacks. The flying bat and the wooden one share spelling and nothing else. Where the senses are genuinely kin, the tradition reaches for a third name; it arrives one question from now."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Its senses share the sound and nothing else; the identity is an accident.",
                "feedback": "Respondeo: equal voice, unrelated senses: the entire identity lives in the spelling. Argue across the two senses and you do not argue, you pun. Logic posts a guard at this door; the fallacy of equivocation is the oldest trespass on its books."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m16-l1-q4`,
          type: "distinction_application",
          stem: `The full cut, then a case. Univocal: one sense, same definition throughout. Equivocal: same sound, senses unrelated. Analogical, <span class="lat">analogum</span>: senses partly the same, partly different, ordered to one. The case: 'healthy' said of your grandmother and of her oatmeal. Classify it.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Univocal: both uses are true, so the sense must be one.",
                "feedback": "Both uses are true; truth was never the test. The oatmeal has no pulse to be steady, no sleep to be sound. It is called healthy for what it does for her, not for what it has. One definition does not cover both, however true both sentences are."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Analogical: the food is named from its ordered relation to her health.",
                "feedback": "Respondeo: partly the same, partly different, and the difference is ordered: her health is the center, and the oatmeal is named from its service to it. This is the middle lane between one voice and mere noise, and everything ahead of you lives in it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Equivocal: a body and a breakfast have nothing in common.",
                "feedback": "They have her in common: the oatmeal is called healthy precisely for what it does for the woman who eats it. An equivocal pair has no such bridge. Cut the relation and you have overcorrected a pun that was never being made."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "None of the three: this is loose metaphor, not predication.",
                "feedback": "Metaphor is a real fourth road, and a later lesson walks it. But nothing here is figurative: the oatmeal really does serve her health, and the sentence says so literally. Ordered literal senses are analogy's home ground, not metaphor's."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m16-l1-q5`,
          type: "mcq",
          stem: `An older case returns: 'good' said of wine, of an argument, and of God. And beneath it, the deepest word of all: the apple is, its redness is, God is. Suppose 'being' had to be either univocal or equivocal. What follows on each horn?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Univocal being is harmless; God simply is, the way apples are.",
                "feedback": "That is the harm. If 'is' says of God exactly what it says of apples, God becomes the largest item on the shelf: one more being among beings, under the same measure. The infinite does not sit inside a genus. A brilliant mind took this road anyway; you will meet him again before the end."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Equivocal being is safer; God's 'is' can mean something private.",
                "feedback": "Private meanings end the conversation. If 'is' shares no sense at all, then from creatures nothing could be known or demonstrated about God; every proof would die of equivocation. Aquinas names that price in so many words, and declines to pay it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Either can serve, provided we speak with sufficient care.",
                "feedback": "Care cannot rescue a broken instrument. Univocal being shrinks God into the world's inventory; equivocal being silences every proof and every psalm. Politeness toward two errors is not a third position; it is both errors on alternate days."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Univocity shrinks God to a creature's measure; equivocity forbids knowing Him at all.",
                "feedback": "Respondeo: the two cliffs, named. One flat sense makes God an item in the world; no shared sense leaves Him unreachable by any road that starts from creatures. The whole pressure of this lesson pushes toward a narrow third way, and the tradition built that way to bear weight."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m16-l1-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "Since 'being' does not mean the same thing for substance and accident, or for God and creatures, the word is equivocal, and metaphysics is organized punning."`,
          latin_tag: `univocum · aequivocum · analogum`,
          doctrine_line: `Being is said in many ways, and the ways are ordered: neither one flat sense nor a scattering of accidents.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Senses either match exactly or not at all; there is no third state.",
                "feedback": "The all-or-nothing premise is what breakfast refuted. The oatmeal's sense of 'healthy' neither matches your grandmother's exactly nor floats free of it. Ordered difference is a third state, and you have already watched it work."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE. The senses differ but stand ordered to a first; that order is analogy, not accident.",
                "feedback": "Respondeo: being is said in many ways, and the ways lean on a first. Substance is; the accident is of substance; God is as source of all. Ordered senses can argue; only unordered ones pun. Aristotle saw the pattern; Aquinas made it bear the weight of theology."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Being is univocal after all; one widest sense covers everything.",
                "feedback": "Right verdict, ruinous route. Rescue metaphysics with univocal being and the rescue costs you the difference between God and the world. The cure is not one flat sense but ordered senses. Keep the verdict; change the reason."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE. Metaphysics deals in likenesses, and likeness is not logic.",
                "feedback": "Analogy is not a mood; it is a disciplined structure of senses that sustains demonstration, and the tradition proved things about God across analogical terms for centuries. Mistake the discipline for a vibe and the whole science dissolves into poetry."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `m16-l2`,
      num: `II`,
      title: `Analogy of Attribution`,
      latin: `analogia attributionis`,
      tag: `analogia attributionis`,
      fin: {
        tag: `analogia attributionis`,
        heading: `One owner, many honest borrowers.`,
        body: `Attribution is the analogy of the borrowed name: one prime analogate holds the perfection <span class="lat">per prius</span>, first, and the rest are named <span class="lat">per posterius</span>, derivatively, from real relations to it. Cause, preserver, sign: each borrows honestly and returns the word intact. But notice what breakfast quietly assumed: the borrowers own nothing of the health. Keep that assumption in view. The next kind of analogy exists because sometimes every analogate owns its perfection outright, and one word must honor them all.`,
        distinction: {
          latin: `per prius  ·  per posterius`,
          english: `first  ·  derivatively`,
          gloss: `One subject holds the perfection outright; the rest take the name from real relations to it. The order inside a borrowed word.`,
          motif: `sun-and-mirrors`,
        },
      },
      questions: [
        {
          id: `m16-l2-q1`,
          type: "mcq",
          stem: `Stay at the table. Healthy grandmother, healthy oatmeal, healthy walk, healthy glow in the mirror. Take an honest census: where does health itself actually live?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Distributed evenly: each subject owns its share of it.",
                "feedback": "Shares would make the oatmeal a little bit vigorous, which no spoon has ever confirmed. The food serves health; it does not enjoy it. Even distribution is exactly what the census refutes."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the woman alone; the rest are named from relations to hers.",
                "feedback": "Respondeo: one owner, three tenants of the name. The walk causes her health, the oatmeal preserves it, the glow signals it. The tradition calls the owner the prime analogate: the case that holds the perfection in itself, from which every other case borrows the word."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In none of them; health is a concept, not a resident.",
                "feedback": "Tell that to the woman with the steady heart. Her health is as resident as her pulse: a real condition of a real body. The flight into concept is the nominalist exit, and it abandons the one case where the word was earned outright."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "In the relations themselves, floating between the subjects.",
                "feedback": "Relations need anchors. The walk causes something, the glow signals something, and that something is her condition, not a free-floating between. Make the relation the owner and nothing remains at either end worth relating."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m16-l2-q2`,
          type: "mcq",
          stem: `Try to define 'healthy' as said of the oatmeal without ever mentioning the health of the one who eats it. The tradition says it cannot be done. Why not?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Dictionaries list the body's sense first, and definitions follow them.",
                "feedback": "Custom follows the order; it does not create it. Reverse every dictionary tomorrow and the oatmeal would still be healthy only by reference to a body. The priority sits in the meaning, not in the typography."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Food and eater belong to a single biological system.",
                "feedback": "True, and beside the point. The claim is about meaning before metabolism: the very sense of 'healthy food' carries 'health of the body' inside it. The definition, not the digestion, is where the dependence shows itself."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It can be done, with care: 'nourishing' does the job alone.",
                "feedback": "Nourishing toward what? Follow 'nourish' one step and the body's health walks back in through the definition's side door. Synonyms relocate the dependence; they cannot dissolve it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The primary sense enters the definition of every secondary use.",
                "feedback": "Respondeo: Aquinas states the rule exactly: the name applies first to what enters the definition of the rest (ST I, q. 13, a. 6). Healthy body sits inside healthy food, healthy walk, healthy glow. Attribution is not a mood; it is definitional order you can check."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m16-l2-q3`,
          type: "fill_blank",
          stem: `The anatomy, assembled. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">In analogy of attribution one subject, the <span class="fb-blank" data-blank="b1">______</span> analogate, possesses the perfection in itself; the others receive the <span class="fb-blank" data-blank="b2">______</span> from their several <span class="fb-blank" data-blank="b3">______</span> to it: causing, preserving, or <span class="fb-blank" data-blank="b4">______</span> it.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "prime"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "name"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "relations"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "signifying"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "prime",
              "name",
              "relations",
              "signifying",
              "average",
              "essence",
              "distances",
              "possessing"
            ],
            "feedback": {
              "all_correct": "Locked: one prime analogate, many borrowed names, each riding a real relation. You can now anatomize half the compliments in the language.",
              "partial_correct": "Some joints misplaced. One owner holds the perfection in itself; the rest take the name by real relation: cause, preserver, sign."
            }
          },
        },
        {
          id: `m16-l2-q4`,
          type: "distinction_application",
          stem: `The kinds in hand: univocal, equivocal, analogical by attribution. The case: a safe driver, a safe road, a safe car. Anatomize the word: where does safety itself live, and how do the three earn the name?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "In the traveler kept unharmed; driver, road, and car are named from securing that.",
                "feedback": "Respondeo: safety lives in the one who arrives whole. The driver causes it, the road conditions it, the car instruments it; each is called safe from its relation to a harm that never reaches the traveler. Attribution, anatomized in traffic."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the driver: skill is where safety really resides.",
                "feedback": "Skill is a cause of safety, and causes wear the name proudly; but the perfection itself is the traveler's unharmed state, not the technique producing it. The best driver on a doomed road secures nothing. Name the owner first, then rank the causes."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nowhere in particular: 'safe' is univocal across all three.",
                "feedback": "One definition covering a person, an asphalt surface, and a machine? State it and watch it fail: the road is not cautious, the car is not prudent. The senses differ and lean on one. That is attribution's signature, not univocity's."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nowhere: the uses are equivocal, held together by habit.",
                "feedback": "Habit does not build bridges this sturdy. Every use points at the same unharmed traveler; an equivocal family points at nothing in common at all. Call it habit and you have mistaken an order for a coincidence."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m16-l2-q5`,
          type: "mcq",
          stem: `Look closer at the oatmeal. Called healthy, it possesses no health whatsoever: no pulse, no vigor, nothing of the perfection in itself. Being named from another's possession the tradition calls <span class="lat">denominatio extrinseca</span>, extrinsic denomination. What follows?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The compliment is false: only real owners should be named.",
                "feedback": "The compliment is true; extrinsic names are honest names. The oatmeal really does preserve her health, and 'healthy' says exactly that. Truth does not require ownership; it requires the relation the name rides on to be real, and it is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The oatmeal owns a faint, diluted degree of health.",
                "feedback": "Dilution is still possession, and there is none: no organ, no function, no vigor to possess in any degree. The food's entire claim to the word lies outside it, in her. That outsideness is the very thing the term names."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In this analogy the secondary cases carry the name without the perfection.",
                "feedback": "Respondeo: extrinsic denomination: the name lands where the perfection does not live. Healthy food, healthy climate, healthy glow: all true, all borrowed. Hold this tight. A great commentator will build his whole map on it, and whether he built one border too narrow is a question already on its way."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Extrinsic names are metaphors, strictly speaking.",
                "feedback": "Metaphor asserts a likeness; extrinsic attribution asserts a real relation: causing, preserving, signifying. 'Healthy oatmeal' claims no resemblance between porridge and vigor. Literal borrowed names are their own kind, and keeping them apart from figures will matter very soon."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m16-l2-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "The oatmeal on the plate possesses health the way the woman eating it does."`,
          latin_tag: `analogia attributionis`,
          doctrine_line: `In analogy of attribution one analogate holds the perfection first, and the rest are named from real relations to it.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "FALSE. The food's claim to the name lies wholly in its relation to her health.",
                "feedback": "Respondeo: possession and denomination split cleanly here: she has it, the food is named from it. In the breakfast analogy the perfection lives in the prime analogate alone. Whether every attribution must behave like breakfast is a question with a famous argument attached, two lessons from now."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE. Neither possesses health; both merely participate in the concept.",
                "feedback": "Half right about the food, wrong about the woman, and fatally so: if the prime analogate does not own the perfection, nobody does, and the name is never earned anywhere. Participation-talk cannot float with no owner beneath it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE. Whatever truly bears a name possesses what the name signifies.",
                "feedback": "That premise would make medicine vigorous and urine robust, which the clinic has yet to observe. Names ride relations as truly as they ride possessions. The premise confuses being named from health with having it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE. Health in the food is real, only smaller in scale.",
                "feedback": "Scale is the wrong axis; the difference is in kind, not size. A crumb of vigor would still be vigor, and the oatmeal has none. What it has is service: cause and preserver of a perfection lodged entirely in her."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `m16-l3`,
      num: `III`,
      title: `Analogy of Proportionality`,
      latin: `analogia proportionalitatis`,
      tag: `analogia proportionalitatis`,
      fin: {
        tag: `analogia proportionalitatis`,
        heading: `The likeness that never measures the gap.`,
        body: `Attribution lends a name out from one owner; proportionality honors many owners at once: each thing to its own act of being, each relation alike, no yardstick laid across the abyss. The great commentator Cajetan judged this second kind the analogy properly so called, the only one fit to carry 'being' from creatures to God, and his map has governed the school for five centuries. Whether he drew one border too tightly is a real question, and this course will put it to him directly, two lessons from now. First: the naming of God itself.`,
        distinction: {
          latin: `proportio  ·  proportionalitas`,
          english: `proportion  ·  proportionality`,
          gloss: `A ratio between two terms, or a likeness between two ratios. Only the second survives an infinite distance.`,
          motif: `ladder-of-ratios`,
        },
      },
      questions: [
        {
          id: `m16-l3-q1`,
          type: "mcq",
          stem: `A new pattern. Sight is to the eye what understanding is to the mind. No one borrowed anyone's name; there is no single owner from whom the others rent. What is carrying the comparison?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A hidden prime analogate: bodily sight owns 'seeing' first.",
                "feedback": "Hunt for the owner and the case dissolves: the mind does not rent its understanding from the eyeball. Understanding is not a dimmer sight; it is the mind's own act, fully possessed. The breakfast pattern simply does not fit, and forcing it flattens the mind into a sense organ."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A metaphor: minds are poetically like eyes.",
                "feedback": "Poetry borrows freely, but this comparison survives cross-examination, which metaphors do not. Each side holds literally: sight really is the eye's act, understanding really is the mind's. A likeness between two literal truths is not a figure of speech; it is a structure."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A shared genus: seeing and understanding are two species of perception.",
                "feedback": "Put them in one genus and you have decided that understanding is sense perception writ fine, which the corpse and the chiliagon already refuted. The kinship is real, but it runs between the relations, not between the acts as members of one class."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A likeness of relations: as the first is to its subject, so the second is to its own.",
                "feedback": "Respondeo: four terms, two relations, one likeness between them. As sight is to the eye, so understanding is to the mind: each act to its own power, each fully owned. The tradition calls it proportionality, and it is about to do the heaviest lifting in the course."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m16-l3-q2`,
          type: "mcq",
          stem: `Name the machinery. A proportion, in the old usage, is a ratio between two terms: four to two. A proportionality, <span class="lat">proportionalitas</span>, is a likeness of two such ratios: as six is to three, so eight is to four. Between the finite and the infinite, which of the two can survive?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Proportion: any two things stand in some ratio.",
                "feedback": "Between finite terms, always. But a ratio states a definite excess of one over the other, and no definite excess separates the infinite from the finite; the distance itself outruns measure. Aquinas rules the direct route out in so many words (De Veritate, q. 2, a. 3, ad 4)."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Proportionality: it never measures the two sides against each other at all.",
                "feedback": "Respondeo: the likeness holds between the relations, not between the terms, so the abyss between the terms never enters the account. As the creature stands to its own act of being, so God stands to His: each side keeps its own scale. Aquinas states the rule exactly (De Veritate, q. 2, a. 3, ad 4), and it is the key that unlocks the naming of God."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Both, since mathematics now handles infinities routinely.",
                "feedback": "Set theory tames its own infinities; it does not close the gap between Creator and creature, which is a difference of order, not of size. The old rule stands: no definite ratio spans it. Only a likeness of relations crosses without measuring."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither: the infinite escapes every comparison whatsoever.",
                "feedback": "Total escape would be equivocity back again, and its price was already refused: nothing knowable, nothing sayable. The tradition's finding is narrower and better: direct ratio fails, likeness of relations survives. Despair is one cliff; this is the bridge."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m16-l3-q3`,
          type: "match_pair",
          stem: `The map so far, in five kinds. Univocal: one sense throughout. Equivocal: senses unrelated. Attribution: one owner lends the name. Proper proportionality: each analogate owns its act; the relations are alike. Metaphorical proportionality: the likeness is borrowed for effect. Match each case to its kind.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "'animal' said of dogs and cats"
              },
              {
                "id": "L2",
                "text": "'bat': the mammal and the lumber"
              },
              {
                "id": "L3",
                "text": "'healthy' said of breakfast and its eater"
              },
              {
                "id": "L4",
                "text": "sight to the eye as understanding to the mind"
              },
              {
                "id": "L5",
                "text": "'the meadow smiles'"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "univocal: one sense, one definition"
              },
              {
                "id": "R2",
                "text": "equivocal: spelling shared, senses strangers"
              },
              {
                "id": "R3",
                "text": "attribution: named from relation to one owner"
              },
              {
                "id": "R4",
                "text": "proper proportionality: likeness of owned relations"
              },
              {
                "id": "R5",
                "text": "metaphorical proportionality: likeness without possession"
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
              "all_correct": "Five kinds, five verdicts, no survivors misfiled. The map is drawn; what remains is to see how much weight the fourth road can bear.",
              "partial_correct": "Some cases misfiled. Ask in order: is the sense one? If not, is there any order among the senses? If there is, does each subject own its perfection, or borrow the name, or merely resemble the owner?"
            }
          },
        },
        {
          id: `m16-l3-q4`,
          type: "mcq",
          stem: `Aquinas's own instances: a smiling meadow, and God called a lion. Both have the four-term shape: as flowering is to the field, so a smile is to a face; as a lion in his works, so God in His. Why does the tradition file both as improper, mere metaphor?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because they are false: fields cannot smile, and God is no beast.",
                "feedback": "As claims of fact they would be false; as figures they are true, and Scripture uses them freely. 'Improper' is not a conviction for perjury. The filing marks how the perfection relates to the subject, not whether the sentence should be arrested."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because feeling, not structure, is what carries them.",
                "feedback": "The structure is genuinely there: four terms, two relations, a real likeness; that is why metaphor works at all. What is missing is ownership: no smile exists in the meadow to be structured. The defect sits in the possession, not the pattern."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The named perfection never exists in the subject; only the likeness of relations does.",
                "feedback": "Respondeo: the meadow owns no smile, God owns no mane; each owns something whose relation resembles the other's. Proper proportionality differs exactly here: sight is really the eye's, understanding really the mind's, being really God's and really the apple's. Aquinas draws the line at ST I, q. 13, a. 6: metaphors apply to creatures first, and to God only by similitude."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "They compare across categories, which logic forbids.",
                "feedback": "Logic forbids equivocating, not comparing; every analogy in the course crosses categories, and the proper ones cross legally. If crossing were the crime, proportionality itself would stand in the dock, and with it every true word ever said of God."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m16-l3-q5`,
          type: "mcq",
          stem: `Now the word that matters. As the apple stands to its act of being, so its redness stands to its lesser, dependent act; and so God stands to His, except that God does not have His being: He is it. What does proportionality entitle the metaphysician to say?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "'Is' holds of each proportionally: every being to its own act, in its own mode.",
                "feedback": "Respondeo: substance is in its way, the accident in a dependent way, God as identical with His act. No flat common sense, no scattering of puns: a likeness of relations running through every 'is' ever truly said. The doctrine has carried the course since the first apple; now it carries the saying of it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "'Is' belongs first to substance; God borrows it from creatures.",
                "feedback": "Borrowing runs the other way if it runs at all: every perfection flows from God to creatures, and creation never lends upward. Making God the borrower inverts the order of being to flatter the order of our learning. Keeping those two orders apart is the next lesson's precise business."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "'Is' proves univocal after all, once analyzed deeply enough.",
                "feedback": "Analysis sharpens the difference instead of dissolving it: the deeper you go, the clearer it becomes that the apple has being and God is His. A univocal core would lay one measure across God and apple, and that flattening was refused at this module's first table."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing: 'is' remains beyond analysis.",
                "feedback": "Mysterianism forfeits what was just won. Proportionality is analysis: four terms, two relations, a checkable likeness. Being is deep, not opaque; the instrument exists precisely so that depth never has to become silence."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m16-l3-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "Proportionality means God's goodness is like ours, only infinitely scaled up."`,
          latin_tag: `analogia proportionalitatis`,
          doctrine_line: `Proportionality carries a likeness of relations across a distance no direct proportion could survive.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Eminence means more of the same, without limit.",
                "feedback": "More-of-the-same without limit is univocity in a cassock: one sense, stretched to infinity, still one measure for God and creatures. Scale preserves kind, and the doctrine denies precisely the common kind. The ladder does not reach heaven by getting longer."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Otherwise 'good' would tell us nothing about God.",
                "feedback": "A reasonable fear, already answered: the word tells truly through the likeness of relations, not through a shared scale. As our goodness perfects us, so His goodness is His essence. Informative without being commensurate: that is the whole invention."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The likeness holds between relations; the modes differ beyond any scale.",
                "feedback": "Respondeo: not a bigger goodness but goodness otherwise had: ours possessed, partial, and given; His identical with Himself. The proportion of each to its own act is alike; the two sides share no yardstick. Analogy is the discipline of saying both at once."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Nothing about God resembles creatures in any respect.",
                "feedback": "Total dissimilarity is the equivocal cliff again, and the Apostle stands against it: the invisible things of God are clearly seen, being understood by the things that are made. Every effect resembles its cause somehow. Deny all likeness and the psalms become noise."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `m16-l4`,
      num: `IV`,
      title: `Naming God Without Lying`,
      latin: `via negativa · via eminentiae`,
      tag: `via negativa · via eminentiae`,
      fin: {
        tag: `via negativa · via eminentiae`,
        heading: `Denial, affirmation, and the excess confessed.`,
        body: `Three motions, one discipline. Remotion carves away every creaturely mode: not a body, not finite, not composite. Eminence affirms the perfection at its source: not bigger goodness, Goodness itself. And underneath both, the semantics you earned among the signs holds the seam: the thing signified reaches God; the mode of signifying stays home with creatures. This is how God is named without lying and without going silent. One question remains: which analogy carries the naming, the borrowed name or the likeness of relations? The school's great mapmaker gave his answer four centuries ago. A modern critic says the map misread the master. The referee's chair is yours next.`,
        distinction: {
          latin: `via negativa  ·  via eminentiae`,
          english: `way of denial  ·  way of eminence`,
          gloss: `Deny the creaturely mode, then affirm the perfection beyond measure: two motions of the one act that names God truly.`,
          motif: `carved-light`,
        },
      },
      questions: [
        {
          id: `m16-l4-q1`,
          type: "mcq",
          stem: `Three sentences from one pew: 'God is not a body.' 'God is good.' 'God is a rock.' Grammar renders them identical. Start with the first. What is that sentence actually doing?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Removing a creaturely mode from God; the denial is its whole content.",
                "feedback": "Respondeo: the way of remotion, <span class=\"lat\">via negativa</span>: carving off what cannot belong to the source of all. Not a body, not composite, not bounded. Each denial is exact knowledge, the way a sculptor knows the figure by what he cuts away. What the sentence does not do is leave you with nothing. Watch."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Confessing that nothing true can be said of God.",
                "feedback": "One true thing was just said: He is not a body. That is knowledge, not surrender. The negative way is a method, not a resignation; it clears ground precisely so affirmation can be built without idolatry. Despair reads the tool as if it were the verdict."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Defining God's essence by listing His non-features.",
                "feedback": "No pile of denials adds up to a definition; strip away every creaturely mode and you still have not said what God is. Aquinas is blunt that in this life we know rather what He is not. Remotion maps the coastline of the mystery; it never claims the interior."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Speaking metaphorically: 'body' stands in for weakness.",
                "feedback": "The sentence is desperately literal: no extension, no parts, no place. Make it a figure and divine simplicity becomes a mood. Some sentences about God are metaphors; the denials are not. Telling those apart is this lesson's whole business."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m16-l4-q2`,
          type: "mcq",
          stem: `The denials multiply: not material, not finite, not composite, not mutable. A patient objector: 'Your map is all coastline and no country. Why does the tradition begin with what God is not?'`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Reverence: affirming things of God would be presumptuous.",
                "feedback": "Then 'God is good' would be presumption, and Scripture presumes it on every page. The tradition affirms, loudly; it refuses only the creaturely packaging. Mistake the order of the method for a ban on affirmation and discipline turns into paralysis."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "History: the Fathers wrote first against pagan anthropomorphism.",
                "feedback": "The occasion is real; the reason runs deeper than the occasion. Anthropomorphism is not a pagan relic but a permanent gravity in every mind that learned its words among bodies. The method answers a structural danger, not a dated one."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Our concepts are creature-shaped; denial clears the mode before affirmation speaks.",
                "feedback": "Respondeo: every concept we own was cut to a creature's measure, and applied raw to God it would circumscribe Him. Aquinas says the name, rightly used, leaves the thing signified incomprehended, exceeding the signification (ST I, q. 13, a. 5). Denial first is not pessimism; it is the fitting of the instrument."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Negative claims are simply easier to establish than positive ones.",
                "feedback": "Ease is not the criterion, and some denials cost entire treatises. The order is metaphysical: remove the creaturely mode or the affirmation lands on an idol. The difficulty of a proof has nothing to do with the direction of the method."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m16-l4-q3`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Therefore the aforesaid names signify the divine substance, but in an imperfect manner, even as creatures represent it imperfectly. So when we say, "God is good," the meaning is not, "God is the cause of goodness," or "God is not evil"; but the meaning is, "Whatever good we attribute to creatures, pre-exists in God," and in a more excellent and higher way. Hence it does not follow that God is good, because He causes goodness; but rather, on the contrary, He causes goodness in things because He is good; according to what Augustine says, "Because He is good, we are."</p><div class="cr-cite">ST I, q. 13, a. 2, co. · trans. Fathers of the English Dominican Province · verified against New Advent</div></div>Aquinas hands down three verdicts in one paragraph. Which reading of 'God is good' does he keep?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The causal reading: it means God causes goodness in things.",
                "feedback": "He names that reading and rules against it: God is not called good because He causes goodness; He causes goodness because He is good. A cause-only reading would leave the word saying nothing of God Himself, and the passage exists to refuse exactly that economy."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The substantial reading: goodness pre-exists in God more eminently, and the name reaches Him.",
                "feedback": "Respondeo: the names signify the divine substance and are predicated substantially, though they fall short of full representation. Whatever good we attribute to creatures pre-exists in Him in a more excellent and higher way. The affirmation lands; the mode limps; both truths stand in a single sentence."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The negative reading: it means only that God is not evil.",
                "feedback": "Named and declined. If 'God is good' meant only 'not evil,' then calling Him living would mean only 'not dead,' and praise would collapse into polite denial. Remotion prepares the affirmation; Aquinas will not let it replace the affirmation."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The pious reading: the sentence is reverent sound without content.",
                "feedback": "The one reading the passage does not even dignify with a refutation. Augustine's line closes the door: because He is good, we are. A sentence that grounds the existence of its own speaker is not empty; it is the fullest sentence the speaker will ever say."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m16-l4-q4`,
          type: "mcq",
          stem: `Now the machinery underneath. Every name carries the perfection it signifies, <span class="lat">res significata</span>, and the manner in which it signifies, <span class="lat">modus significandi</span>. 'Good' names something God truly is; its creaturely wrapping fits only creatures. What, then, does the way of eminence do?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Increases the creaturely sense to its maximum degree.",
                "feedback": "Maximum degree is still degree: the largest creaturely goodness would remain creaturely, one more entry on the same scale. Eminence changes the mode of having, not the volume. Goodness itself is not the loudest goodness."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Transfers the name to God metaphorically, with reverence.",
                "feedback": "The lion is transferred with reverence; 'good' is not transferred at all but affirmed properly: as regards what is signified, it belongs to God first. File eminence under metaphor and the divine names sink to figures, which is the agnostic cliff with flowers planted on it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Continues the denials, refined to a higher polish.",
                "feedback": "That is remotion carrying on its own work, and remotion alone never yields 'Goodness itself.' Eminence is the affirmative turn: the perfection held not partially but as identical with the holder. Two motions make the one act; collapse them and the act loses its second half."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Affirms the perfection of God beyond every creaturely mode: Goodness itself.",
                "feedback": "Respondeo: <span class=\"lat\">via eminentiae</span>: affirm the thing signified, deny the mode, confess the excess. The perfections flow from God to creatures, so the name belongs to Him first in reality and to creatures first only in our learning of it (ST I, q. 13, a. 6). The grammar limps behind; the reference arrives."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m16-l4-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "Since our mode of signifying always fits creatures, every sentence about God fails, and theology should end in silence."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. A limping instrument should not be trusted with the infinite.",
                "feedback": "The limp is in the mode, and the tradition names it openly; the reference still arrives, as the paragraph you just read insists. An instrument whose defect is known and corrected for is precisely a trustworthy instrument. Silence would throw away the correction along with the defect."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE. The names signify God truly as to the perfection, imperfectly as to the mode.",
                "feedback": "Respondeo: distinguish, and both truths survive: true reference, limping manner. 'God is good' is not a failed creaturely sentence but a successful analogical one. The silence option was weighed and refused long ago: equivocation would cut theology's tongue out, and Aquinas declines the surgery."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Grace lifts believers above the limits of language.",
                "feedback": "Grace perfects nature; it does not abolish grammar. The blessed see; the pilgrims speak analogically or not at all, and the Church has never stopped speaking. Solving a semantic problem by miracle leaves the problem intact for everyone still holding a catechism."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "TRUE. The mystics prove it: the highest word is none.",
                "feedback": "The mystics' silence crowns speech; it does not refute it. The same Dionysius who taught the negations wrote volumes of divine names, and the tradition kept both. A silence that follows true saying differs entirely from a silence that despairs of it."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m16-l4-q6`,
          type: "precision_check",
          stem: `At the coffee hour, kindly meant: <em>"When you call God good, you only mean He causes good things, the way you call a climate healthy."</em> The precise reply?`,
          latin_tag: `via negativa · via eminentiae`,
          doctrine_line: `Deny the creaturely mode, affirm the perfection, confess the excess: remotion and eminence are one discipline.`,
          lesson_complete: true,
          payload: {
            "statement": "Calling God good only means He causes good things, as a climate is called healthy.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Distinguish: named only from causing, deny; named for what He is, affirm.",
                "feedback": "Respondeo: the clean cut. The climate is healthy by pure extrinsic denomination: it owns nothing of health. But the divine names land on what God is: goodness pre-exists in Him substantially, more eminently than in anything He causes. Aquinas weighed the cause-only reading and expressly refused it (ST I, q. 13, a. 2 and a. 6)."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Concede: honest speech admits we know God only by His effects.",
                "feedback": "From effects, yes; of effects only, no. The road to the knowledge runs through creatures; the reference of the name lands on the Creator Himself. This surrender confuses the route with the destination and hands over the destination."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Deny outright: we know God's goodness directly, without borrowing.",
                "feedback": "Overcorrection into a knowledge no wayfarer has. Every divine name is learned among creatures and carries their fingerprints in its mode. The tradition's claim is more modest and more durable: true naming through analogy, not sight before the vision."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Reframe: 'good' expresses our gratitude rather than God's nature.",
                "feedback": "The expressivist exit: the sentence stops describing and starts emoting. But because He is good, we are; the gratitude is grounded in the nature or it is addressed to no one. A compliment with no referent is not piety. It is soliloquy."
              }
            ],
            "correct_option_id": "a",
            "correction": "That God is named good from causing goodness alone, nego; that He is named good from the goodness He is, our mode confessed inadequate, concedo."
          },
        }
      ],
    },
    {
      id: `m16-l5`,
      num: `V`,
      title: `The Cajetan Question`,
      latin: `attributio · proportionalitas`,
      tag: `attributio · proportionalitas`,
      fin: {
        tag: `attributio · proportionalitas`,
        heading: `The map stands; a border moves.`,
        body: `You watched the school referee its own referee. Cajetan's proportionality remains the framework; his account of attribution as merely extrinsic was too narrow, and the school's own practice corrected it: the divine names ride a real relation to the First, and every analogate of being owns its act. The critic was met at full strength, his text honored, his flag not planted. The charter closed what the texts had earned. This is how the strict line fights, and you will watch it fight this way once more, at full scale, before the course ends.`,
        distinction: {
          latin: `denominatio extrinseca  ·  intrinseca`,
          english: `extrinsic  ·  intrinsic denomination`,
          gloss: `Named from another's possession, or named for what the subject itself really holds. The hinge of the Cajetan question.`,
          motif: `borrowed-crown`,
        },
      },
      questions: [
        {
          id: `m16-l5-q1`,
          type: "mcq",
          stem: `Thomas de Vio, called Cajetan, drew the school's map of analogy in 1498. His verdict: attribution, as in 'healthy,' denominates extrinsically; only proportionality is analogy properly so called, fit to carry being and God. First honor the strength of it: why did attribution strike him as too weak for that cargo?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Attribution starts from creatures, and creatures cannot speak of God.",
                "feedback": "Creatures are the only dictionary we have, and Aquinas uses it on every page; nobody in this dispute doubts that we name God from creatures. The question is the structure of the naming, never the propriety of the source."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Attribution is informal, while proportionality has mathematical rigor.",
                "feedback": "The four-term structure is not prized for its arithmetic costume; in divine matters proportionality is no more computable than its rival. Cajetan's motive is metaphysical: where does the perfection really exist? Rigor of notation never decided that."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "On his account attribution leaves one owner; said of being, creatures would exist by courtesy.",
                "feedback": "Respondeo: run the breakfast structure on 'being' and the creature's existence becomes a borrowed name: real in God, extrinsic everywhere else. But the apple exists intrinsically, and so does its goodness. Cajetan reached for proportionality because every analogate of being owns its act. The motive is honorable and the worry is real."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Attribution was Aristotle's tool, and the school wanted a Christian one.",
                "feedback": "The school baptized Aristotle's tools daily, and proportionality is as Greek as its rival. Nothing here divides along pagan and Christian lines; it divides along extrinsic and intrinsic possession. Genealogy is the one argument nobody in this fight ever made."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m16-l5-q2`,
          type: "mcq",
          stem: `Enter the critic. Ralph McInerny, reading the texts against the map, charges: analogy in Aquinas is a doctrine about names, and Cajetan canonized one early disputation into a system. State his case at full strength.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The mature text runs on relation to one first, owned intrinsically; proportionality was an early answer enthroned.",
                "feedback": "Respondeo: stated at strength. In the Summa's own account, whatever is said of God and creatures rides the creature's relation to God as principle and cause, and the perfections are possessed essentially, not by courtesy. The four-term formula answered one early question about knowledge across the infinite gap. The charge is textual, and the texts are real."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Cajetan invented proportionality; Aquinas never used the notion.",
                "feedback": "An overreach the critic does not commit. The proportionality analysis is genuinely in Aquinas, stated with care in the disputations on truth. The charge is not fabrication but promotion: a real instrument elevated into the only proper one. Refute the caricature and the critic is still standing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Analogy concerns names, so metaphysics should drop the subject.",
                "feedback": "His point is subtler: the doctrine is logical in idiom and load-bearing in metaphysics, because names follow concepts and concepts follow being. He relocates the doctrine; he does not dissolve it. Reading him as a deflationist wastes the strongest objection the map ever faced."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The school followed Cajetan out of loyalty rather than argument.",
                "feedback": "Five centuries of Thomists argued this on texts and principles; loyalty explains none of it. Sociology is the weakest form of any charge, and the strong form stands on the texts. It is the strong form the chair will have to answer."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m16-l5-q3`,
          type: "dialogue_branch",
          stem: `The disputation, live. A courteous McInernian takes the floor: 'Read your own master. Whatever is said of God and creatures is said according to the relation of the creature to God as its principle and cause. One term related to another: that is attribution's shape, and the perfections are possessed intrinsically. Where in the mature text is your four-term proportionality?' The chair is yours.`,
          payload: {
            "commentatorLine": "The Commentator leans forward, visibly delighted. 'He has quoted the article accurately, which is the most dangerous kind of opponent. Answer the text with the text.'",
            "branches": [
              {
                "text": "Concede the text, distinguish the structure: that relation carries intrinsic possession, which merely extrinsic attribution never gave; proportionality states how each analogate owns its act. The accounts complete each other.",
                "verdict": "correct",
                "feedback": "Respondeo: the chair holds. The mature text is one-to-another in form and intrinsic in content: exactly what Cajetan's narrow attribution could not say, and what his proportionality was built to say. Read the school whole and the two kinds converge on one doctrine: every analogate of being possesses its own act, and all of it stands in real relation to the First. The critic's text is honored; the map survives with a corrected border."
              },
              {
                "text": "The Summa simplifies for beginners; the disputed questions carry the real doctrine.",
                "feedback": "The chair just demoted the Summa to rescue a commentator, which inverts every loyalty the school professes. The master's mature ordering of his own teaching outranks the disputation it refined. Win by that route and the victory discredits the winner."
              },
              {
                "text": "Concede everything: Cajetan misread Aquinas, and the school should retire his map.",
                "feedback": "The full surrender, and it hands over more than the text demands. The critic proved a border drawn too tight, not a map drawn wrong. Proportionality remains Aquinas's own instrument and the school's working account of how each analogate owns its act. Distinguish the flaw from the framework; the form exists for exactly this."
              },
              {
                "text": "Deny the premise: the relation in that text is already proportionality in disguise.",
                "feedback": "The one move honesty forbids. The text says what it says: one term related to another as to its principle and cause. Rewrite the opponent's accurate quotation and the disputation is lost even if the audience applauds. The fair fight is the method; without it the verdict is worth nothing."
              }
            ]
          },
        },
        {
          id: `m16-l5-q4`,
          type: "mcq",
          stem: `The chair must now publish its verdict, and the school's honest sentence carries exactly one clause of concession. Which sentence is the honest one?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Cajetan was simply wrong; Aquinas taught attribution and nothing else.",
                "feedback": "The critic's flag planted on the whole field, past what his own texts claim. The proportionality of the disputations is real Aquinas, and the intrinsic ownership of being still needs stating, which bare attribution never managed. Total reversal is not honesty; it is fashion with a bibliography."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "McInerny misread; the mature text is proportionality wearing attribution's grammar.",
                "feedback": "The disguise theory: it saves the map by amending the master. A school that must rewrite its founder's clearest article to protect a commentator has inverted its own order of authority. The border must move; the text must not."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Both frameworks are optional idioms; nothing here needs adjudicating.",
                "feedback": "The shrug in academic dress. Whether creatures possess their being intrinsically is not an idiom preference; accounts that contradict on it cannot both govern. A school that refuses to adjudicate its own instruments soon has none. The disputation exists because the difference matters."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Cajetan's merely-extrinsic attribution was too narrow; the school corrected it, and proportionality stands.",
                "feedback": "Respondeo: the verdict, costs named. Proportionality remains the framework; attribution to the First runs intrinsic, as the school's own masters hand it on: Garrigou-Lagrange teaches proportionality together with intrinsic attribution, both in one doctrine. One border redrawn, no wall breached. The strict line holds best when it names what a critic saw truly."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m16-l5-q5`,
          type: "mcq",
          stem: `One piece remains on the table. Leo XIII, chartering the revival this whole course descends from, commended Aquinas read whole and through his great commentators, citing Cajetan by name. What work does that do in this verdict?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It settles the dispute by authority; the critic should have read the encyclical.",
                "feedback": "Authority as a club: the move the disputation form exists to prevent. If a citation could refute a textual charge by itself, the school would never need to reopen a text again, and it reopens them constantly. The turn of authority marks the verdict; it does not replace the arguing of it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It seals a verdict the texts earned: whose reading governs when serious readers divide.",
                "feedback": "Respondeo: the charter closes; it does not carry. The doctrinal case stood on the articles themselves. What the charter settles is jurisdiction: when learned men divide over the master, the school reads him whole, through the commentators the charter names. The critic keeps his textual point; the school keeps its governing reading; the house survives its best argument."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing; papal charters have no place in a philosophical dispute.",
                "feedback": "This is a school as well as an argument, and schools have constitutions. The charter cannot make an exegesis correct, but it can and does make a line of reading the school's standing rule. Excluding it mistakes the disputation for the whole institution."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It embarrasses the verdict, since the charter also blesses Cajetan's critics.",
                "feedback": "The charter commends the master whole and the commentators as the road in; it nowhere licenses reading the master against the school's line. The embarrassment evaporates on reading the actual document, which is the fate of most embarrassments in this field."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m16-l5-q6`,
          type: "true_false_with_reason",
          stem: `The school's own spine, the fourth of its twenty-four theses: being 'is not predicated univocally of God and creatures; nor yet merely equivocally, but analogically, by the analogy both of attribution and of proportionality.' True or false: "The official thesis vindicates Cajetan's map completely."`,
          latin_tag: `attributio · proportionalitas`,
          doctrine_line: `Cajetan's map stands, its cost named: proportionality, with intrinsic attribution to the First.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Proportionality's presence in the thesis is the whole victory.",
                "feedback": "Half the thesis is a strange whole victory. Cajetan admitted proportionality as the proper analogy and demoted attribution to extrinsic courtesy; the thesis enthrones both, side by side, of the same divine predication. Presence is not primacy. Read the conjunction."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Attribution appears there only as a concession to weaker minds.",
                "feedback": "Nothing in the decree grades its clauses by audience, and the school's expositors take both in earnest: attribution to the First, intrinsic and real; proportionality across every analogate. Inventing a patronizing subtext is easier than absorbing a corrective conjunction, and less honest."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The thesis teaches both kinds: the framework stands, the merely-extrinsic border does not.",
                "feedback": "Respondeo: the conjunction is the verdict written into the spine itself: <em>analogia tum attributionis tum proportionalitatis</em>. Proportionality holds as framework; attribution to the First holds as intrinsic, not courtesy. The school corrected its greatest commentator while keeping his map, which is precisely how a living tradition honors its dead."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The thesis quietly sides with the critic against the school.",
                "feedback": "The critic argued that proportionality was enthroned wrongly; the thesis enthrones it beside attribution. That is not his victory but the school's synthesis, older than the quarrel and calmer than either party. Reading one's own flag into a balanced clause is the oldest exegetical temptation there is."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `m16-l6`,
      num: `VI`,
      title: `Recapitulatio`,
      latin: `analogia entis`,
      tag: `analogia entis`,
      fin: {
        tag: `analogia entis`,
        heading: `The last tool is in your hand.`,
        body: `Univocal, equivocal, analogical; attribution and proportionality; remotion, eminence, and the mode confessed; a mapmaker honored and corrected. You can now weigh any word said of God: which lane it runs in, what it owns, what it borrows, where its mode limps, and why the reference still lands. The toolbox is complete. What remains is the machine that wields every tool at once, the article with its objections and replies, and after it the great disputation the whole tradition has been waiting to hold in front of you. Walk on.`,
        distinction: {
          latin: `univocum  ·  analogum`,
          english: `univocal  ·  analogical`,
          gloss: `One sense exactly the same in every use, or many senses ordered to one first. The difference decides whether God can be named.`,
          motif: `three-lanes`,
        },
      },
      questions: [
        {
          id: `m16-l6-q1`,
          type: "match_pair",
          stem: `The module walks past you once more. Match each image to what it taught.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "one word at breakfast: food, walk, grandmother"
              },
              {
                "id": "L2",
                "text": "the bat: cave and dugout"
              },
              {
                "id": "L3",
                "text": "'animal': dogs and cats"
              },
              {
                "id": "L4",
                "text": "sight to the eye, understanding to the mind"
              },
              {
                "id": "L5",
                "text": "the meadow smiles"
              },
              {
                "id": "L6",
                "text": "the chair's verdict on the mapmaker"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "attribution: named from one owner's health"
              },
              {
                "id": "R2",
                "text": "equivocation: spelling shared, senses strangers"
              },
              {
                "id": "R3",
                "text": "univocity: one sense, one definition"
              },
              {
                "id": "R4",
                "text": "proper proportionality: each act its own"
              },
              {
                "id": "R5",
                "text": "metaphor: likeness without possession"
              },
              {
                "id": "R6",
                "text": "the map kept, its narrow border corrected"
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
              "all_correct": "Six images, six verdicts, the whole module in one pass. Every case sits where the doctrine put it, and you did the placing.",
              "partial_correct": "Some images misfiled. Walk the table again: one sense; no kinship of senses; one owner lending; every owner keeping; likeness without owning; and the border that moved while the map stood."
            }
          },
        },
        {
          id: `m16-l6-q2`,
          type: "mcq",
          stem: `The whole doctrine in one breath. Between the two ancient failures of speech about God, what exactly does analogy secure?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A compromise: partially true sentences, humbly meant.",
                "feedback": "Compromise splits differences; analogy refuses both errors outright. 'God is good' is not partly true and apologized for; it is wholly true, with its mode confessed. Humility lives in the confession of the mode, not in a discount on the truth."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "True predication without a common measure: knowledge between idolatry and silence.",
                "feedback": "Respondeo: univocity would make God measurable, a creature enlarged: the idol. Equivocity would make Him unreachable: the silence. Analogy is the narrow road between: perfection affirmed, relation real, measure refused. Not a lesser knowing, but the kind of knowing a creature has of its source."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A pious vocabulary insulated from philosophical audit.",
                "feedback": "The opposite: analogy is the most audited vocabulary in the tradition, and you have just spent five lessons running the audit. Every divine name passes through remotion, eminence, and the semantics of mode. Insulation is what the doctrine makes impossible."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Proof that all religious language is symbolic.",
                "feedback": "Symbols gesture; analogical names predicate. 'God is good' asserts, is true, and grounds argument, none of which mere symbol does. The doctrine exists to tell the lion apart from the goodness. Keep that distinction or lose both words."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m16-l6-q3`,
          type: "fill_blank",
          stem: `The spine, assembled one last time. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Being is said of God and creatures neither <span class="fb-blank" data-blank="b1">______</span> nor <span class="fb-blank" data-blank="b2">______</span> but <span class="fb-blank" data-blank="b3">______</span>; and the perfection each analogate has is truly <span class="fb-blank" data-blank="b4">______</span>, all of it flowing from the First.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "univocally"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "equivocally"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "analogically"
                ],
                "case_sensitive": false
              },
              {
                "id": "b4",
                "correct_answers": [
                  "owned"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "univocally",
              "equivocally",
              "analogically",
              "owned",
              "borrowed",
              "metaphorically",
              "measured",
              "imagined"
            ],
            "feedback": {
              "all_correct": "Locked, and notice what you just wrote from memory: the fourth thesis of the school's own charter. Being, analogously common, intrinsically owned, wholly derived: the sentence metaphysics needs in order to speak at all.",
              "partial_correct": "Some joints slipped. Two refusals, one road, one ownership: neither one flat sense nor none, but ordered senses; and what each thing has of being is its own, and given."
            }
          },
        },
        {
          id: `m16-l6-q4`,
          type: "mcq",
          stem: `A last worthy opponent, met once before over the formal distinction. Scotus argues: demonstration requires one concept; unless 'being' is univocal between God and creatures, no proof can travel from world to God. The strict line's answer?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Analogical community suffices: every univocal chain hangs from one non-univocal first.",
                "feedback": "Respondeo: Aquinas says it outright: all univocal predications are reduced to one first, non-univocal, analogical predication, which is being (ST I, q. 13, a. 5, ad 1). Demonstration rides ordered senses all the way up; the five ways did exactly that without a flat concept in sight. Honor the motive: he wanted a science of God, and so does the school. The school just refuses to pay a creature-shaped God for it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Concepts are beside the point; faith carries what proof cannot.",
                "feedback": "The fideist exit from a philosophical dispute, and the school declines it: the preambles are demonstrable, the Apostle stands by the road from creatures, and Scotus deserves an argument, not a hymn. Faith crowns the proof; it was never hired to replace it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Univocity is harmless if confined to logic textbooks.",
                "feedback": "Nothing that touches 'being' stays confined. A univocal concept of being quietly issues one measure for God and creatures, and every later immanentism cashes that check. The school fights the small print precisely because it has read the contract."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Scotus misunderstood demonstration; proofs need no shared terms.",
                "feedback": "Proofs with no shared terms commit the very fallacy this module exists to avoid; four unrelated terms sink a syllogism. The answer is not no community but analogical community: senses ordered enough to carry inference, distinct enough to spare God a genus."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m16-l6-q5`,
          type: "mcq",
          stem: `The apple is. Its redness is. God is. The little sentence that once posed a riddle now takes its answer. What masters the three altitudes of that one small verb?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Context: usage decides what 'is' means on each occasion.",
                "feedback": "Usage reports; it cannot ground. Context tells you a different sense is in play, never why the senses form one family or what orders them. The riddle was never about detecting difference. It was about holding difference and unity at once, and only a doctrine does that."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A hierarchy of vagueness: 'is' blurs as it climbs.",
                "feedback": "Precisely backwards: the higher the altitude, the more determinate the reality. God's 'is' is not the vaguest but the fullest: identity of essence and act. What thins on the climb is our mode of grasping, and analogy is the discipline that admits it without surrendering the reference."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Univocity at last: one existential sense beneath all three.",
                "feedback": "The flattening, one final time: one sense beneath all three puts accident, substance, and God on a single shelf. The redness is of the apple; the apple is in itself, receiving; God is His own act. No single sense survives those prepositions. The order does."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The analogy of being: each 'is' proportioned to its own act, all ordered to the First.",
                "feedback": "Respondeo: <span class=\"lat\">analogia entis</span>, said plainly at last: the accident in the substance, the substance in its own received act, God identical with His. A likeness of relations spanning every altitude, and the whole order hanging from its source. The small verb was carrying the doctrine all along; now you know what it carried."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m16-l6-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "Analogy is a half-measure: the theology of a mind too timid for univocity and too talkative for silence."`,
          latin_tag: `analogia entis`,
          doctrine_line: `Ens analogice dicitur: the path between idolatry and silence runs through analogy.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. A bold metaphysics would pick one clean extreme.",
                "feedback": "The extremes are the timid options: each buys comfort by deleting half the data. Univocity deletes transcendence; silence deletes the road from creatures and every psalm sung on it. Holding both truths under tension is the demanding position. The cliffs are where thinking stops."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Precision that ends in qualified sentences is defeat.",
                "feedback": "Then all precision is defeat, for every exact science speaks in qualified sentences. The qualification is not an apology; it is the finding itself: creatures speak truly of their source, in a creature's mode. Stating the mode is the accuracy, not the retreat."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. It is the precise doctrine of how a finite mind truly names the infinite.",
                "feedback": "Respondeo: nothing timid survives five lessons of this. Analogy required the semantics of signs, the grammar of distinctions, and a five-century referee's dispute to state exactly. It is the narrow road between idolatry and silence, and narrow roads are not for the timid. The method that wields every tool you now own stands one door away."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. It is a provisional theory awaiting scientific replacement.",
                "feedback": "Replacement by what? No instrument of measure can adjudicate what exceeds measure by nature; the doctrine's subject matter is the reason its method exists. The sciences refine their own registers; none can inherit this office. Some findings are permanent because their ground is."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    }
  ],
};
