import type { ModuleMeta } from '../types';

export const m10: ModuleMeta = {
  id: 10,
  title: `Intellect and Knowledge`,
  short: `Intellect and Knowledge`,
  label: `Module 10 · Intellect and Knowledge`,
  latin: `Intellectus et Cognitio`,
  aim: `Knowledge is the immaterial reception of form: the knower becomes the other as other. From the senses' phantasms the agent intellect, the soul's own light, abstracts the intelligible species; the possible intellect receives it and forms the interior word. Species and word are that by which the mind knows, never what it knows first: the mind lands on things. Truth is the conformity of intellect and thing, born in judgment; and being itself is the intellect's widest object, reached in this life from the sensible upward.`,
  lessons: [
    {
      id: `m10-l1`,
      num: `I`,
      title: `Knowing Is Not Eating`,
      latin: `cognitio`,
      tag: `cognitio`,
      fin: {
        tag: `cognitio`,
        heading: `You did not eat the apple, and you have it anyway.`,
        body: `Dinner destroys what it receives: the apple's form is lost and its matter becomes yours. Knowledge receives without destroying: the apple's form comes to be in you while the apple sits there, unharmed and entirely itself. The tradition measures the difference in one word: matter. What is received into matter is confined to being one thing; what is received without matter is free to be, in a way, all things. <span class="lat">Anima est quodammodo omnia</span>: the soul is in a way all things. How a thousand particular dogs become one universal thought is the next lesson's business, and it involves a light.`,
        distinction: {
          latin: `cognitio`,
          english: `knowledge`,
          gloss: `Dinner destroys what it receives and knowledge does not: the apple's form comes to be in you while the apple sits there, entirely itself.`,
          motif: `wax-seal`,
        },
      },
      questions: [
        {
          id: `m10-l1-q1`,
          type: "mcq",
          stem: `An apple sits on the table. Eat it, and it is gone: its form surrendered, its matter yours. Know it instead, and something of it is in you, yet the apple loses nothing. What did you receive?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A weakened physical copy, thin enough to fit inside a skull.",
                "feedback": "Then knowing would be a gentler eating, and the apple should be at least slightly diminished. It is not. Whatever arrived in you took nothing material away; a copy made of brain-stuff is still stuff, and the problem repeats inside."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nothing came in; knowing is only your behavior adjusting toward the apple.",
                "feedback": "A mind that merely steers around things never has them; yet you can consider the apple with your eyes shut, misremember it, define it. Adjustment explains the traffic, not the possession. Something of the apple is yours now."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The apple's form, received without its matter.",
                "feedback": "Respondeo: eating takes form and matter together, and the apple perishes. Knowing receives the form alone, and the apple survives its own arrival in you. The tradition calls this reception without matter, and it is the seed of everything this module teaches (ST I q.14 a.1)."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A stream of particles the apple emits, lodging in the sense organs.",
                "feedback": "Democritus held exactly this: knowledge as a discharge of images entering the soul; Aquinas reports it, with a historian's courtesy, at ST I q.84 a.6. But particles are matter, and matter received makes you heavier, not wiser. The apple sends nothing; you receive it another way."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m10-l1-q2`,
          type: "mcq",
          stem: `Aquinas draws the line where few expect it: a non-knower possesses only its own form, while a knower can come to possess the forms of other things as well (ST I q.14 a.1). What does knowing add to a being?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "More being: the knower's nature opens onto the forms of everything else.",
                "feedback": "Respondeo: Aquinas says the non-knower's nature is contracted and limited, the knower's has greater amplitude and extension. Knowing is not a filing system bolted onto a thing; it is a wider way of being. Hence the line he quotes from the Philosopher: the soul is in a way all things."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "More information: an inner archive that mirrors the world item by item.",
                "feedback": "An archive is the modern picture, and it quietly turns the mind into furniture: shelves holding copies. Aquinas's claim is stranger and better: the knower does not store the other, it becomes the other, as other. Amplitude of being, not volume of records."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "More activity: knowing is something the organism does, not something it is.",
                "feedback": "Knowing is indeed an act, but the question is what the act achieves. A wave is active and knows nothing. The tradition's answer runs deeper: in knowing, the very nature of the knower is enlarged by the form of another."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Less being: the knower empties itself to make room for what it knows.",
                "feedback": "A generous thought with the arithmetic backwards. You lose nothing of yourself in knowing the apple; the marble does not shrink when the sculptor learns it. Reception without matter costs the receiver nothing and enriches it with the other."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m10-l1-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "The stone must be physically present in the mind that knows it, since knowledge is reception."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Reception means the received is really there; a merely mental stone is no reception.",
                "feedback": "Really there, yes; materially there, no. The received is present according to the mode of the receiver, and the intellect's mode is immaterial. Aristotle's line, kept by Aquinas: a stone is not in the soul, but only the likeness of the stone (ST I q.85 a.2)."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The brain holds a physical trace of the stone, and that trace is its presence.",
                "feedback": "Traces there are; the scans show them. But a trace in neural matter is one more material singular: this pattern, here, now. The thought of stone fits every stone anywhere. The presence that matters is of another kind."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Knowledge is not reception but construction; the mind builds its stone from scratch.",
                "feedback": "Right verdict, and the rescue burns the house down. If the mind builds its object, it never knows the stone, only its own carpentry. The tradition keeps reception and drops the materialism: form received without matter."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. What is received is the stone's form, present immaterially, in the receiver's own mode.",
                "feedback": "Respondeo: whatever is received is received according to the mode of the receiver. In matter, the form makes a stone; in the intellect, the same form makes knowledge of stone. One form, two manners of being. The stone stays in the field, and is in you as known."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m10-l1-q4`,
          type: "mcq",
          stem: `The fern registers nothing. The fox knows this scent, this rabbit, this danger. The philosopher knows what rabbits are, and what danger is, and what being is. Aquinas grades the difference by one measure. Which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Remoteness from matter: the freer of matter a being's form, the wider its knowing.",
                "feedback": "Respondeo: plants do not know, because they are wholly material; sense receives forms free of matter, though in an organ; intellect, further withdrawn from matter, knows more (ST I q.14 a.1). The degree of understanding rises with the remoteness from matter. Immateriality is not a bonus feature of knowledge; it is the reason there is any."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Complexity of organization: enough interacting parts, and awareness accumulates.",
                "feedback": "A corpse one minute old is nearly as complex as the man was, and knows nothing. Parts multiply capacity for motion, not for possession of another's form. The measure runs on a different axis altogether."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Possession of sense organs: knowledge begins and ends with the body's receivers.",
                "feedback": "Organs explain the fox, then embarrass the philosopher: no organ receives what danger is, since every organ receives this pressure, this scent, here. The grades climb past the organs. What climbs is freedom from matter."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nearness to survival: knowing measures what a being needs to stay alive.",
                "feedback": "Then the philosopher would know least of all, since metaphysics feeds no one. Need explains why the fox attends; it cannot explain what attending is. The tradition grades knowers by their being, not their appetites."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m10-l1-q5`,
          type: "mcq",
          stem: `One clause saves the whole account from absurdity. Knowing the wolf, you become the wolf <em>as other</em>. Drop the last two words. What follows?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing changes; becoming is becoming, with or without the qualifier.",
                "feedback": "Drop it and see. If the knower becomes the wolf simply, the zoologist is a werewolf and the study of wolves a transformation, not a science. The qualifier is where the metaphysics lives: the wolf's form is had, while the knower remains himself."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Knowledge becomes transformation: to know a thing would be to stop being yourself.",
                "feedback": "Respondeo: exactly the absurdity the clause forbids. Eating makes the apple into you; mere change makes you into something else; knowing alone lets the wolf's form be present while you stay entirely you. Becoming the other as other: enrichment without loss on either side."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The wolf must become a thought: things dissolve into the minds that know them.",
                "feedback": "That is idealism's direction of travel, and it is not what the dropped clause threatens. The clause guards the knower's identity, not the wolf's. The wolf was never in danger; without the qualifier, you are."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Knowing reduces to consuming: a slower digestion of the world.",
                "feedback": "Close to the scent but the wrong quarry. Eating destroys the eaten and changes the eater only in matter. Dropping the clause threatens something stranger: the knower's own form displaced by the known. The clause keeps both parties intact."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m10-l1-q6`,
          type: "fill_blank",
          stem: `Set the lesson's terms. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">To know is to receive the <span class="fb-blank" data-blank="b1">______</span> of another <span class="fb-blank" data-blank="b2">______</span> its matter; the knower becomes the other <span class="fb-blank" data-blank="b3">______</span> other.</span>`,
          latin_tag: `cognitio`,
          doctrine_line: `To know is to receive the form of another without its matter; the knower becomes the other as other.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "form",
                  "forma"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "without",
                  "sine"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "as"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "form",
              "image",
              "without",
              "with",
              "as",
              "into",
              "matter",
              "brain"
            ],
            "feedback": {
              "all_correct": "Locked: form, without, as. Receive the form without the matter, and remain yourself while the other becomes yours. Every lesson that follows unpacks one word of this sentence.",
              "partial_correct": "Some blanks resisted. Not the image but the form; not with but without its matter; and the knower becomes the other precisely as other."
            }
          },
        }
      ],
    },
    {
      id: `m10-l2`,
      num: `II`,
      title: `The Light and the Image`,
      latin: `intellectus agens`,
      tag: `intellectus agens`,
      fin: {
        tag: `intellectus agens`,
        heading: `A thousand dogs, one thought.`,
        body: `The senses deliver particulars: this bark, this fur, here, now. The interior senses bind them into the <span class="lat">phantasma</span>. And there the parade would end, in a gallery of singulars, were there not in the soul an active power: <span class="lat">intellectus agens</span>, the agent intellect, which strikes the phantasm the way light strikes a window and frees the nature from its individuating conditions. What it frees, the possible intellect receives. Aristotle put the two in one sentence: in the soul is something by which it becomes all things, and something by which it makes all things. Next lesson climbs the heights this light can reach.`,
        distinction: {
          latin: `intellectus agens  ·  possibilis`,
          english: `agent intellect  ·  possible intellect`,
          gloss: `Light strikes the phantasm and the nature comes free: in the soul, something by which it makes all things, something by which it becomes them.`,
          motif: `sun-silhouette`,
        },
      },
      questions: [
        {
          id: `m10-l2-q1`,
          type: "mcq",
          stem: `You have met perhaps a thousand dogs, every one of them this size, this color, here, now. The single thought 'dog' fits them all, and fits every dog you will never meet. What did your mind grasp that no eye ever saw?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A faded average of the images, blurry enough to cover all the breeds.",
                "feedback": "Blend the photographs and you get a ghostly mongrel, still one particular image. However blurred, a picture stays this picture. The thought 'dog' has no fur color at all, not even a vague one. Averaging never leaves the gallery of singulars."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The nature dog itself, stripped of everything that made each dog this one.",
                "feedback": "Respondeo: the mind considered what a dog is apart from the conditions that individuate: this flesh, these bones, this yard (ST I q.85 a.1). The universal is formally in the mind but founded in the things: every real dog really has the nature. Grasped, not invented; the Latin name is <span class=\"lat\">universale</span>."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A word of your language, holding unrelated animals under one convenient label.",
                "feedback": "Then translation would be impossible and veterinary medicine a coincidence. The label sticks because the animals share something the label names. Push the sharing out of the things and into the word, and the word has nothing left to mean."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A memory of the Idea of Dog, met by the soul before birth.",
                "feedback": "Plato's answer, given full marks for taking universality seriously; Aquinas reports it with respect at ST I q.84 a.6. But it buys the universal by orphaning it from the dogs. Aquinas keeps the universal and the kennel: the nature is met in the singulars and freed by abstraction."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m10-l2-q2`,
          type: "mcq",
          stem: `Here is the difficulty the lesson turns on. The <span class="lat">phantasma</span> is particular and seated in a bodily organ, and no sensible thing is intelligible in act. Why can the parade of images not simply pour into the intellect as it is?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because images, being material singulars, cannot of themselves act on an immaterial power.",
                "feedback": "Respondeo: phantasms, existing in corporeal organs, have not the same mode of existence as the intellect and cannot of themselves make an impression on it (ST I q.85 a.1 ad 3). What is only potentially intelligible needs something already in act to free it. Enter the agent intellect."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the intellect is too weak to handle the senses' volume without a filter.",
                "feedback": "The agent intellect is no bouncer managing a crowd. The problem is not quantity but kind: every image is this one, and understanding wants what the thing is. No amount of throttling turns a singular into a universal."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because images decay quickly, and the intellect needs stable copies to work from.",
                "feedback": "Memory already solves storage; that organ-bound gallery keeps its pictures for decades. Stability is not intelligibility. A perfectly preserved phantasm is still particular, still material, still only potentially understood."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It can: given enough images, intelligibility emerges from their accumulation.",
                "feedback": "Pile singulars to the ceiling and you have a taller pile of singulars. Emergence names the hope, not the mechanism. Nothing is reduced from potency to act except by something in act (ST I q.79 a.3); accumulation supplies no such agent."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m10-l2-q3`,
          type: "mcq",
          stem: `Aristotle's own image for the answer, kept by Aquinas: light. As light makes colors actually visible, so something in the soul makes natures actually intelligible (ST I q.79 a.3). What exactly does this light do to the <span class="lat">phantasma</span>?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It creates the nature and projects it onto the image, as a lantern paints the wall.",
                "feedback": "A lantern paints nothing; it reveals the wall that was there. Make the light creative and you have traded Aquinas for Kant: a mind issuing natures to an unknowable world. The nature is in the dog awaiting release, not awaiting invention."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It copies the image into finer material, thin enough for the intellect to receive.",
                "feedback": "Refinement is still matter, and the problem was never coarseness. However fine the copy, it remains this copy of this dog. The light does not thin the image; it frees what the image holds from the conditions that imprison it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It illuminates the phantasm and abstracts the intelligible species from its material conditions.",
                "feedback": "Respondeo: the agent intellect makes things actually intelligible by abstraction of the species from material conditions (ST I q.79 a.3). Not creation, not copying: liberation. The freed likeness is the <span class=\"lat\">species intelligibilis</span>, the intelligible species, that by which the intellect will know. This freeing is <span class=\"lat\">abstractio</span>, abstraction."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It judges the image true or false, admitting only the accurate ones.",
                "feedback": "Truth and falsity arrive later, at judgment, when the mind composes and divides. The agent intellect stands earlier in the order, before there is anything to affirm. It does not grade the phantasm; it unlocks it."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m10-l2-q4`,
          type: "fill_blank",
          stem: `The whole pipeline, in order. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The exterior senses deliver to the interior senses, whose finished product is the <span class="fb-blank" data-blank="b1">______</span>; the <span class="fb-blank" data-blank="b2">______</span> intellect illuminates it and abstracts the species; the <span class="fb-blank" data-blank="b3">______</span> intellect receives the species and is actualized toward understanding.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "phantasma",
                  "phantasm"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "agent",
                  "agens",
                  "active"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "possible",
                  "possibilis"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "phantasma",
              "memoria",
              "species",
              "agent",
              "angelic",
              "possible",
              "exterior",
              "divine"
            ],
            "feedback": {
              "all_correct": "Locked, in order: phantasma, agent, possible. Two powers of one intellect: one that makes all things intelligible, one that becomes them. And notice where the organs stop. The interior senses work in bodily instruments; the two intellects work in no organ at all. Faculties of a twofold order, and you have just drawn the line between them.",
              "partial_correct": "Some links slipped. The interior senses finish at the phantasm; the light that abstracts is the agent intellect; the receiver that understands is the possible intellect."
            }
          },
        },
        {
          id: `m10-l2-q5`,
          type: "true_false_with_reason",
          stem: `A venerable rival, met at full strength. True or false: "The agent intellect is one separate mind, shared by all men, into which each of us merely taps."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Thinking is participation; truths are the same for all because the mind is.",
                "feedback": "Averroes's line, and the shared truths are real. But if the intellect is one, the thinking is its, not yours; 'this man understands' becomes impossible to say honestly, and Aquinas fought precisely for that sentence. Truths are common because natures are; the power grasping them is your own."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Physics finds one field everywhere; thought is likewise one field, locally accessed.",
                "feedback": "An analogy in search of an argument. Fields explain what needs no owner; understanding is exactly what has one. When you grasp a proof, someone grasped it, and it was not the atmosphere. The act is in a subject, and the subject is you."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. There is no agent intellect at all; the possible intellect alone suffices.",
                "feedback": "Right verdict against Averroes, wrong casualty. Drop the agent intellect and nothing makes the phantasm's cargo intelligible in act; the possible intellect waits forever for a delivery no one can send (ST I q.79 a.3). Both powers, each man's own."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Each soul has its own agent intellect, a power of the soul, derived from the divine light.",
                "feedback": "Respondeo: the active intellect is something in the soul (ST I q.79 a.4), multiplied as souls are, each a created share in the first light. One sun, many eyes. Aquinas grants Averroes his premise, common truth, and keeps the knower: it is this man who understands."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m10-l2-q6`,
          type: "mcq",
          stem: `One worry before the heights. The dog's nature never exists bare: every real dog is this one. When the mind considers dog apart from thisness, is it not understanding the thing otherwise than it is, and so falsely?`,
          latin_tag: `intellectus agens`,
          doctrine_line: `Nothing sensible is actually intelligible; the agent intellect, the soul's own light, makes it so by abstraction from the phantasm.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes; honest knowledge would keep every individuating detail in place.",
                "feedback": "Keep every detail and you have perception, faithful and dumb. Science would be impossible: no geometry, only these triangles drawn badly. The worry deserves a better answer than surrender, and Aquinas has one."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No; to consider one thing without another is not to judge them separate.",
                "feedback": "Respondeo: abstraction lies only if the mind composes a falsehood, judging the nature to exist apart, as Plato did. Simple consideration asserts nothing; it attends to the what and leaves the this in peace (ST I q.85 a.1 ad 1). The mode of understanding differs from the mode of existing, and no one is deceived."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes, strictly; but the falsehood is harmless, and science tolerates it.",
                "feedback": "The tradition never pleads guilty with an excuse. A knowledge built on tolerated falsehood would be rot at the foundation, and metaphysics rests on this very operation. The acquittal is full: consideration is not composition."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No, because the mind's dog and the field's dogs are two different subjects.",
                "feedback": "Two subjects would end the science of dogs before it starts: study the mental one and learn nothing of the barking ones. One nature, two modes: in the things individually, in the mind universally. Same dog, met two ways."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `m10-l3`,
      num: `III`,
      title: `Three Heights of Abstraction`,
      latin: `tres gradus`,
      tag: `tres gradus`,
      fin: {
        tag: `tres gradus`,
        heading: `One apple, three altitudes.`,
        body: `The botanist keeps flesh and seed and drops only the thisness: natural science, the first height. The geometer keeps only the quantity: a sphere needs no ripeness, though it still needs extension: mathematics, the second. The metaphysician considers the apple as a being, one and in act, and what he considers could exist with no matter at all: the third height. Aquinas sketches the ladder at ST I q.85 a.1 and maps it at full length in his commentary on Boethius's De Trinitate; the tradition names it <span class="lat">tres gradus abstractionis</span>, the three degrees of abstraction. The same mind climbs all three; the same apple waits patiently at the bottom. What exactly the mind holds at any height, and what it holds it with, is the next lesson's knife-edge.`,
        distinction: {
          latin: `tres gradus abstractionis`,
          english: `the three degrees of abstraction`,
          gloss: `One apple, three altitudes: the naturalist drops the thisness, the geometer keeps only the quantity, the metaphysician considers it as being at all.`,
          motif: `three-altitudes`,
        },
      },
      questions: [
        {
          id: `m10-l3-q1`,
          type: "mcq",
          stem: `A botanist, a geometer, and a metaphysician sit before the apple. The botanist speaks first: 'Fruit: skin, flesh, seed, made for the scattering of seed.' Which conditions has his science already left behind?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "None; natural science studies things exactly as the senses find them.",
                "feedback": "Then botany would be a diary of encounters: this apple, bruised, Tuesday. The botanist's sentences are about fruit as such; no page of them mentions this one. He has quietly performed the first abstraction already."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "All sensible qualities; the botanist deals only in measurable structure.",
                "feedback": "That describes the geometer's apple, not the botanist's. Ripeness, color, softness: these sensible qualities are botany's daily bread. The first height drops thisness alone and keeps the sensible world it studies."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "This apple's own flesh and skin; but flesh and skin in general remain in the science.",
                "feedback": "Respondeo: natural science abstracts from individual sensible matter, this flesh and these bones, but keeps common sensible matter: flesh, skin, and seed belong to what an apple is (ST I q.85 a.1 ad 2). The first height: free of the this, still amid the sensible."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "All matter; the moment thought begins, the sensible has been left entirely.",
                "feedback": "Too fast by two flights of stairs. A botany without flesh and seed would have no subject; the science is of sensible natures and keeps their sensible matter in the definition. The complete departure from matter is a higher altitude with a different name."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m10-l3-q2`,
          type: "mcq",
          stem: `The geometer's turn: 'A sphere: surface, diameter, volume.' Color and taste are gone entirely. Yet Aquinas says one matter remains in every mathematical object: substance as bearing quantity, which he calls intelligible matter (ST I q.85 a.1 ad 2). Why can the geometer not drop that too?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because imagination must picture the sphere, and pictures are made of sense material.",
                "feedback": "The imagination does tag along, drawing helpful diagrams; but the proof binds the sphere as such, not the sketch. Mathematics outruns its pictures constantly: the thousand-sided polygon is unimaginable and perfectly intelligible. The remaining matter is in the object's notion, not in our picturing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because mathematics is really about physical objects, idealized for convenience.",
                "feedback": "Then its truths would be approximately true, and they are exactly true. The geometer's sphere is not a polished apple; it is quantity considered in itself. What he cannot shed is subtler: that quantity is always quantity of something."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "He can; pure mathematics studies relations with no subject at all.",
                "feedback": "Relations between what? A structure of nothing structures nothing. Aquinas's point survives every formalism: figures terminate quantity, and quantity inheres in substance. Considered apart from this or that substance, yes; apart from substance as such, never."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because a figure is the termination of quantity, and quantity must be in a subject.",
                "feedback": "Respondeo: number, dimension, and figure are terminations of quantity, and quantity is in substance before any sensible quality (ST I q.85 a.1 ad 2). Erase the subject bearing extension and there is nothing left to be spherical. The second height: free of the sensible, not yet free of the quantitative."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m10-l3-q3`,
          type: "mcq",
          stem: `The metaphysician speaks last, and briefly: 'A being: one, in act.' Aquinas lists what can be considered apart even from intelligible matter: being, unity, potency, act. What marks this third height off from the other two?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Its objects are the most abstract and therefore the nearest to empty.",
                "feedback": "Empty is the modern slander. Being is not the thinnest predicate but the richest subject: everything real is drenched in it. The third height does not evaporate the apple; it considers in the apple what the apple most is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "What it considers can exist without matter, not merely be considered without it.",
                "feedback": "Respondeo: being, unity, act, and the like can exist without matter, as is plain regarding immaterial things (ST I q.85 a.1 ad 2). The first two heights consider material natures immaterially; the third considers what need not be material at all. This is the science that can reach God and the angels without changing method."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It alone is free of the senses; the lower sciences are refined perception.",
                "feedback": "All three heights are works of intellect, not perception; the botanist's fruit-as-such already outruns every eye. The ladder measures what matter remains in the object considered, not whether thinking has begun. It began at the first step."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It considers the same objects as mathematics, with the pictures finally removed.",
                "feedback": "Mathematics minus pictures is still mathematics: quantity keeps its intelligible matter however plainly stated. The third height changes object, not presentation: being as being, which no quantity exhausts. A sphere is; being is not a sphere."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m10-l3-q4`,
          type: "distinction_application",
          stem: `The three heights, fixed. First: abstraction from individual sensible matter only; flesh and seed remain (natural science). Second: from all sensible matter; substance under quantity remains (mathematics). Third: from all matter whatsoever (metaphysics). Now the case: a physicist models water, bonds and boiling points, phase changes under pressure. At which height is she working?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The first: her object is a sensible nature, kept as common sensible matter.",
                "feedback": "Respondeo: water as such, not this beaker; but water still, wet and boiling: individual matter dropped, common sensible matter kept. The first height wearing modern instruments. The equations serve the study of a sensible nature; they do not change what the study is of."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The second: her equations are mathematics, and mathematics is the second height.",
                "feedback": "She borrows the second height's instruments; her science does not live there. Boiling is a sensible event of a sensible stuff; no theorem boils. Mathematical physics is natural science using mathematical tools: the object, water, keeps its sensible matter."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The third: physics speaks of energy and fields, which are as abstract as being.",
                "feedback": "Abstract-sounding is not matter-free. Fields carry energy through space and act on instruments; every term in her model answers finally to something sensible. Being, one, and act answer to everything whatsoever. The gap between the heights is not vocabulary; it is what remains in the object."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "None cleanly; modern science has dissolved the old ladder of abstractions.",
                "feedback": "The instruments changed; the altitudes did not. Ask of any science what its object keeps: sensible matter, quantity's subject, or no matter at all, and it finds its shelf as readily as in the thirteenth century. Water keeps its wetness. First height."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m10-l3-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "The higher the abstraction, the less real the object: the sphere is thinner than the apple, and being is thinnest of all."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Each height subtracts; what survives three subtractions is nearly nothing.",
                "feedback": "The subtraction removes conditions of existing materially, not slices of reality. What survives is what everything real must have in order to be real at all. The ladder sheds husks, not substance; being is not a residue but the wellspring."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Only the concrete is real; abstractions are useful fictions of method.",
                "feedback": "Then the fictions would be useless: why should nature obey our make-believe? Geometry holds because quantity is really in things; metaphysics holds because things really are. The consideration is abstract; what is considered is as real as anything gets."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Abstraction changes the mode of considering, not the reality of what is considered.",
                "feedback": "Respondeo: the mode of understanding is not the mode of existing, and no thinning follows (ST I q.85 a.1 ad 1). Higher abstraction considers what is more fundamental, not less present. At the third height the mind touches what makes the apple real at all: its being."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Higher objects are more real because matter is an illusion of the senses.",
                "feedback": "The rescue overshoots into the abyss: matter is no illusion but a true principle of things, as the whole course has had it. The heights do not convict the senses of lying. They consider, by steps, what the senses cannot reach and never claimed to."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m10-l3-q6`,
          type: "mcq",
          stem: `Why does Aquinas insist the human mind, in this life, works from the sensible upward, its proper object being the quiddity of material things, reached by abstraction?`,
          latin_tag: `tres gradus`,
          doctrine_line: `The speculative sciences are distinguished by remotion from matter: from this matter, from all sensible matter, from all matter whatsoever.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because material things are the only things that exist to be known.",
                "feedback": "Materialism enters wearing epistemology's coat. The third height already showed objects that can exist without matter; the tradition's whole theology climbs to them. Material quiddities are our proper object, first and connatural, not our prison."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the intellect is itself a material power, at home only among bodies.",
                "feedback": "A power open to all bodies is the act of none; that argument is already yours. The intellect is immaterial; its native diet in this life is nonetheless drawn from the senses. The reason lies in what we are, not in what the power is made of."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because sense experience is safer: starting low prevents speculative error.",
                "feedback": "Caution is a virtue of method, not a doctrine of powers. Aquinas's claim is metaphysical: united to a body, the intellect's connatural object is the nature in matter, known through the phantasm. Not a safety rail; a definition of the climber."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because the soul in this life is united to a body, and knows by turning to phantasms.",
                "feedback": "Respondeo: the power of knowledge is proportioned to the thing known, and the proper object of an intellect united to a body is a nature existing in corporeal matter (ST I q.84 a.7). We are not angels delayed in traffic; abstraction from the sensible is the human road. Grace and glory raise it; nature sets it."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `m10-l4`,
      num: `IV`,
      title: `What You Think With (Not What You Think Of)`,
      latin: `species`,
      tag: `species`,
      fin: {
        tag: `species`,
        heading: `The window is not the view.`,
        body: `You see the apple, not your retina; you think the dog, not your concept of it. The <span class="lat">species intelligibilis</span> and the interior word the mind forms, the <span class="lat">verbum mentis</span>, are the means of knowing: glass the mind looks through, known themselves only afterward, by reflection. Aquinas pins the whole of realism to this. Make the species the object, and science studies the furniture of the soul, and every seeming becomes true (ST I q.85 a.2). The mind lands on things. That a thought can then be measured against the things it lands on: that is truth, and it is the next lesson entire.`,
        distinction: {
          latin: `species intelligibilis  ·  verbum mentis`,
          english: `intelligible species  ·  interior word`,
          gloss: `The window is not the view: species and word are that by which the mind knows, known themselves only afterward, by reflection.`,
          motif: `window-view`,
        },
      },
      questions: [
        {
          id: `m10-l4-q1`,
          type: "mcq",
          stem: `The oculist reports: on each retina sits an image of the apple, inverted and doubled, two inches from your brain. You have never once seen your retinal images. What do you see?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The images; the apple is an inference your habits construct from them.",
                "feedback": "If sight sees images, who is inside reading the retinas? A smaller seer, with retinas of his own, and so on down. The regress is fatal and familiar. The image is not what is seen; it is that by which the apple is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Strictly nothing; seeing names a brain state with no object beyond itself.",
                "feedback": "A brain state with no object cannot even be about an apple, and yours plainly is. Denying the object does not simplify the science; it deletes the datum. The datum stands: you see something, and it is red, round, and on the table."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The apple, by means of images you never see.",
                "feedback": "Respondeo: the sensible image is not what is perceived but that by which sense perceives (ST I q.85 a.2). The eye's likeness is the instrument of seeing, not its terminus. Hold the pattern; the intellect is about to repeat it one floor up."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The light itself; apples are how brains label wavelengths.",
                "feedback": "You have never seen a wavelength; you have seen apples by them. The physics of the medium explains how seeing happens, not what is seen. Explanations of the means keep getting promoted into the object; this lesson exists to stop the promotion."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m10-l4-q2`,
          type: "mcq",
          stem: `One floor up. The abstracted <span class="lat">species intelligibilis</span> now informs the possible intellect. A theory as old as it is tempting says: what the mind really knows is its own species, its inner representation, and outer things only by guess. What does Aquinas say the species is?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The first thing known, from which things are inferred with reasonable confidence.",
                "feedback": "Once the species is the object, no inference escapes the parlor: every check on the guess would use another species, also inner. Descartes spent six meditations in that room. Aquinas declines the first step: the species is not what is known but the means."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That by which the intellect understands; the thing itself is what is understood.",
                "feedback": "Respondeo: as the sensible image is to the sense, so the species is to the intellect: the form by which it knows, not the object known (ST I q.85 a.2). The species is the intellect's own actuation by the thing's form. Known itself? Yes, but secondarily, by reflection: the way you notice your glasses."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A copy so faithful that knowing it and knowing the thing come to the same.",
                "feedback": "A perfect copy is still a copy, and knowledge of it is still not knowledge of the world. 'Comes to the same' is precisely what could never be checked from inside the copy gallery. The tradition's answer is not a better copy; it is a different role: means, not object."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An arbitrary symbol, related to the thing as a word is, by convention.",
                "feedback": "Words are appointed; the species is begotten. It is the thing's own form received immaterially, not a token assigned to it. Make it conventional and the mind's contact with natures dissolves into grammar. The species is likeness by nature, appointed by no one."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m10-l4-q3`,
          type: "mcq",
          stem: `Aquinas's first argument against the inner-object theory is short. If what we understand were merely the species in the soul, what would follow for the sciences?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Every science would be about the contents of the soul, not about things.",
                "feedback": "Respondeo: the things we understand are the objects of science; make the species the object and botany studies mental leaves, astronomy mental stars (ST I q.85 a.2). Every laboratory becomes an introspection parlor. The sciences are about the world, and their object certifies the mind's."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The sciences would multiply without limit, one per knower, none shareable.",
                "feedback": "A true casualty, but downstream of the first. Before shareability fails, aboutness fails: each science would already be a science of the knower's furniture. Aquinas cuts at the root: the object of science is the thing, therefore so is the object of understanding."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing would follow; science studies data, and species are excellent data.",
                "feedback": "Data of what? The moment you answer, the species has become means again and the thing the object. Refuse to answer, and the sciences have subjects without objects: ledgers of no one's accounts. What is given is given by something."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The sciences would stand, but would need translation into mental terms.",
                "feedback": "Translation into mental terms is not a footnote; it is the abolition of the enterprise. 'Water boils' is not about an idea of water; no idea boils. The argument's force is its brevity: science is of things, so the species cannot be what is known."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m10-l4-q4`,
          type: "true_false_with_reason",
          stem: `The second argument, with Aquinas's own homely case. True or false: "If the faculty knows only its own impression, then the sick man who tastes honey as bitter judges as truly as the healthy man who tastes it sweet."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE, and rightly so: taste is private, and each man's judgment is sovereign there.",
                "feedback": "Sovereign over the seeming, perhaps; but the judgment was about the honey. Both men judge the honey, and the honey is one and sweet. Lock the judgment inside the impression and you have not honored privacy; you have abolished the shared thing judged about."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE, and that is the reductio: every opinion becomes true, which is absurd.",
                "feedback": "Respondeo: exactly Aquinas's argument (ST I q.85 a.2). Grant the inner-object theory and 'whatever seems, is true' follows: contradictories both true, the old relativism reborn. The absurdity convicts the premise. The faculty must reach the thing, or truth dies of politeness."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The sick man errs, and the theory explains his error as corrupted data.",
                "feedback": "Read the conditional again: if the faculty knows only its impression. Inside that theory no data are corrupt, since nothing beyond the data remains to correct them against. Error becomes unstatable. That is the trap: the theory cannot even call the sick man wrong."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Neither man judges truly; taste is too crude a power to bear truth.",
                "feedback": "Taste presents; the man judges. His judgment, that the honey is sweet, is true or false by the honey, and crude powers feed exact judgments daily. Discrediting the senses rescues nothing; the argument turns on what judgment reaches, not on the sense's refinement."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m10-l4-q5`,
          type: "match_pair",
          stem: `Four items, four roles. One term first: the <span class="lat">verbum mentis</span>, the interior word, is what the informed intellect forms within itself, the concept in which it expresses the thing to itself (ST I q.85 a.2 ad 3). Now match each item to its role in knowing.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the sensible image in the eye"
              },
              {
                "id": "L2",
                "text": "the species intelligibilis"
              },
              {
                "id": "L3",
                "text": "the verbum mentis"
              },
              {
                "id": "L4",
                "text": "the apple itself"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "that by which the sense perceives"
              },
              {
                "id": "R2",
                "text": "that by which the intellect is actualized"
              },
              {
                "id": "R3",
                "text": "what the intellect forms in itself to express the thing"
              },
              {
                "id": "R4",
                "text": "what is known first and properly"
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
              ]
            ],
            "feedback": {
              "all_correct": "All four in their places: two likenesses received, one word begotten, one thing known. Everything on the left of the ledger serves the last entry on the right. The mind's machinery exists to land on the apple.",
              "partial_correct": "Some roles misassigned. The image and the species are means of knowing, at sense and intellect respectively; the verbum is what the mind forms to express the thing; the thing alone is what knowing is for."
            }
          },
        },
        {
          id: `m10-l4-q6`,
          type: "mcq",
          stem: `The universal is known directly; but you also know this apple, this Socrates. The intellect reaches the singular by turning back to the phantasm in which the universal was met: <span class="lat">conversio ad phantasmata</span>, the return to the phantasm. Why must the return happen?`,
          latin_tag: `species`,
          doctrine_line: `The intelligible species is that by which the intellect understands, not that which it understands; the mind's first object is the thing.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because what was abstracted was the nature; the this stayed behind, in the image.",
                "feedback": "Respondeo: abstraction freed apple from thisness, so thisness is not in the species; the intellect knows the singular indirectly, by turning to the phantasms (ST I q.86 a.1). Hence you can say 'Socrates is a man': universal predicate, singular subject, one mind spanning both by species and return."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because the senses forget quickly, and the intellect must refresh their records.",
                "feedback": "Memory keeps its gallery well enough. The return is not maintenance but completion: the universal, being free of thisness, cannot of itself deliver the this. The mind revisits the image not to jog it, but to point through it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because singulars are unintelligible, and the mind can only gesture at them.",
                "feedback": "Not blindly: through the phantasm the singular is genuinely known, though indirectly. Aquinas's word is reflexion, a turning back, not a shrug. The proposition 'Socrates is a man' is knowledge of Socrates, not a guess in his direction."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because the species expires without periodic contact with its phantasm.",
                "feedback": "Species abide in the possible intellect as habitual knowledge; nothing expires. But to use them actually, in this life, the mind turns to phantasms, its native examples: try thinking triangle with no diagram appearing (ST I q.84 a.7). The return is the human style of thought, not a lease renewal."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `m10-l5`,
      num: `V`,
      title: `Truth Lands`,
      latin: `veritas`,
      tag: `veritas`,
      fin: {
        tag: `veritas`,
        heading: `Say of what is, that it is.`,
        body: `Apprehension grasps what a thing is and affirms nothing; sense presents and never checks. Judgment is where the mind stakes a claim, composing subject and predicate, and there, first, truth or falsity lives: <span class="lat">adaequatio rei et intellectus</span>, the conformity of thing and intellect. Our minds are measured by things; things themselves are measured by the mind that creates them, which is why a stone can be called a true stone (ST I q.16 a.1). A power that can know its own conformity to what is: hold that thought against the next lesson's guest, who composes flawless sentences and knows nothing.`,
        distinction: {
          latin: `adaequatio rei et intellectus`,
          english: `the conformity of thing and intellect`,
          gloss: `Sense presents and apprehension grasps; judgment alone stakes a claim, and there truth first lives: the mind measured against what is.`,
          motif: `sun-and-mirrors`,
        },
      },
      questions: [
        {
          id: `m10-l5-q1`,
          type: "mcq",
          stem: `A child at the window: 'The cat is on the mat.' The cat is. Something here is true. Where exactly does the truth live?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "In the cat, which is truly on the mat whether anyone speaks or not.",
                "feedback": "The cat is real, and its being grounds the truth; but 'true' names a conformity, and conformity needs two terms. The cat all alone is simply being a cat. When the child's judgment matches the cat's arrangement, then something is true, and it is the judgment."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the sounds, which are true English, correctly assembled.",
                "feedback": "The same sounds in a house with no cat would be false, syntax intact. Grammar certifies the sentence as well formed, never as true. The sounds carry the judgment; the truth belongs to what they carry, measured against the cat."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In the child's judgment, insofar as it conforms to how things stand.",
                "feedback": "Respondeo: truth resides primarily in the intellect, and in things secondarily, as related to intellect (ST I q.16 a.1). The judgment composed cat with mat; the world had composed them already. The agreement of the two compositions is truth: <span class=\"lat\">adaequatio rei et intellectus</span>, the conformity of thing and intellect."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nowhere as such; 'true' is a compliment we pay to sentences we accept.",
                "feedback": "Then acceptance could never be mistaken, and every tribunal of inquiry closes at once. We accept sentences, when honest, because they are true; the compliment follows the conformity. Deflate truth into approval and the cat has no say, which the cat would dispute."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m10-l5-q2`,
          type: "mcq",
          stem: `The scholastic definition, inherited and kept: truth is the equation of thought and thing (ST I q.16 a.1). In our knowing, which direction does the measuring run?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The intellect measures things: what cannot be thought coherently cannot be.",
                "feedback": "For the divine intellect, yes: things answer to their Maker's idea, as the house answers to the architect's. Our minds enjoy no such authority; the cat is not consulting us. In human knowing the thing is the measure and the mind the measured."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Things measure our intellect: the judgment is true because the thing is so.",
                "feedback": "Respondeo: natural things measure our intellect and are themselves measured by the divine intellect, as the house by the architect's idea (ST I q.16 a.1). The being of the thing, not its truth, causes truth in the mind. Realism in one sentence: the world grades our homework."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Each measures the other equally, in a mutual adjustment called inquiry.",
                "feedback": "Inquiry adjusts the mind repeatedly; the cat is not meeting us halfway. Mutuality flatters the process and misplaces the standard: when judgment and thing disagree, exactly one of them is wrong. The direction of measure is the difference between discovering and legislating."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither; measuring is a metaphor that dissolves under analysis.",
                "feedback": "Dissolve it, then restate 'the diagnosis was wrong' without it: something failed to match something that stood as standard. The metaphor is load-bearing and ancient, and analysis finds not vapor but structure: measured, measure, and the conformity between them."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m10-l5-q3`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>As stated before, truth resides, in its primary aspect, in the intellect. Now since everything is true according as it has the form proper to its nature, the intellect, in so far as it is knowing, must be true, so far as it has the likeness of the thing known, this being its form, as knowing. For this reason truth is defined by the conformity of intellect and thing; and hence to know this conformity is to know truth. But in no way can sense know this. For although sight has the likeness of a visible thing, yet it does not know the comparison which exists between the thing seen and that which itself apprehends concerning it.</p><p>But the intellect can know its own conformity with the intelligible thing; yet it does not apprehend it by knowing of a thing "what a thing is." When, however, it judges that a thing corresponds to the form which it apprehends about that thing, then first it knows and expresses truth. This it does by composing and dividing: for in every proposition it either applies to, or removes from the thing signified by the subject, some form signified by the predicate. [...] Therefore, properly speaking, truth resides in the intellect composing and dividing; and not in the senses; nor in the intellect knowing "what a thing is."</p><div class="cr-cite">ST I, q. 16, a. 2, co. · trans. Fathers of the English Dominican Province · verified against New Advent</div></div><br>Apprehension already has the thing's likeness. Sense already has it. Find what judgment alone adds.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The knowing of conformity itself: judgment affirms that the thing stands as apprehended.",
                "feedback": "Respondeo: to know truth is to know conformity, and the intellect first knows it when it judges that the thing corresponds to the form it apprehends. Apprehension holds a quiddity and asserts nothing; judgment stakes the claim, composing or dividing. Truth is born at the verb."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A stronger likeness: judgment sharpens the picture until it counts as true.",
                "feedback": "Sharpness is not the missing ingredient; sight's likeness is often sharper than thought's. The passage locates the lack elsewhere: sense has the likeness and does not know the comparison. What is missing is not resolution but reflexion on conformity."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Publicity: judgment puts the likeness into words that others can contest.",
                "feedback": "Contestable words are downstream; the private judgment 'this is hemlock,' never uttered, is true or false with lethal exactness. The passage never mentions an audience. The addition is the intellect's own knowing of its conformity, spoken or not."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Commitment: judgment adds the risk of error, and only what can be false can be true.",
                "feedback": "Handsome, and half of it is in the text: composition and division is indeed where the true or false first stands. But risk describes the exposure, not the achievement. What judgment adds positively is knowledge of conformity: the mind measures itself against the thing and finds the fit."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m10-l5-q4`,
          type: "mcq",
          stem: `Sight never lies about its proper object, says the tradition; and still Aquinas denies that truth, properly speaking, lives in the senses. What can sense not do?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Retain its likeness long enough for any comparison to be made.",
                "feedback": "Retention is the least of its troubles; the interior senses keep likenesses for a lifetime. The lack is not duration but reflexion. However long the image is held, holding is not knowing that the held matches the thing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Receive any likeness at all; sensation is bare causation without content.",
                "feedback": "Sense receives likenesses splendidly; presenting the world is its whole office. Bare causation would not even present the apple, and the apple is plainly presented. What is beyond sense is not reception. It is the knowing of the fit."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Know the conformity between what it apprehends and the thing itself.",
                "feedback": "Respondeo: sight has the likeness of the visible thing but does not know the comparison between the thing seen and what it apprehends of it (ST I q.16 a.2). Sense presents; it never steps back to certify the presenting. That reflexive step belongs to the intellect, in judgment, and truth waits for it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Rise above its organ's condition, which distorts every report it makes.",
                "feedback": "The sick man's bitter honey shows organs can distort; it does not show they always do, and the tradition holds sense true about its proper object in a rightly disposed organ. The exclusion from truth-proper is not distrust of organs. Presenting, however faithful, is not judging."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m10-l5-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "Since truth lives in the intellect, truth changes when intellects change: what was true in the thirteenth century may be false in ours."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Truth inhabits minds, minds are historical, therefore truth is historical.",
                "feedback": "The premises are true and the conclusion changes the subject. Truth inhabits minds as conformity to things, and the thing anchors the conformity. Minds change, and thereby become true or cease to be; what they must conform to does not shift with the tenancy."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE, at least for human affairs: standards drift, and truths drift along.",
                "feedback": "Standards drift, and judgments about them take new objects; the truth relation never budges. 'Rome taxes salt' was true while Rome did; the drift is in the world, faithfully tracked. A changed judgment about a changed thing is conformity twice over, not truth eroding."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Truth is timeless because it lives in a separate realm no mind disturbs.",
                "feedback": "The right verdict lodged at the wrong address. Truth is not furniture in a third realm; it is the conformity of intellects to things, and it is steady because things measure minds. No extra realm is needed. The cat, the mat, and an honest judgment suffice."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. The measure stands outside the measured: things measure minds, whatever the century.",
                "feedback": "Respondeo: our intellect is measured by things, and things by the divine intellect that precedes every century (ST I q.16 a.1). A judgment true in 1270 about the world of 1270 is true forever. Intellects change the way rulers warp; the standard against which warping counts as warping does not."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m10-l5-q6`,
          type: "mcq",
          stem: `The tradition also calls a stone a true stone, a coin true or counterfeit: things, not judgments, called true. How does this truth of things stand to the truth of judgments?`,
          latin_tag: `veritas`,
          doctrine_line: `Truth is the conformity of intellect and thing, and it lives formally in the judgment that composes and divides.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Loosely; 'true stone' is a manner of speaking, best retired from philosophy.",
                "feedback": "Retire it and you retire the doctrine of creation from the doctrine of truth. Aquinas keeps it with full rigor: natural things stand to the divine intellect as artifacts to the artisan. The usage is analogical, not sloppy; the analogy is the architecture."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Things are true toward the intellect they depend on; judgments, toward the things.",
                "feedback": "Respondeo: a thing is called true as it fulfills the idea in the mind on which it depends, as the house answers the architect (ST I q.16 a.1); the stone answers its idea in the divine mind. Our judgments answer the stone. One word, two conformities, ordered."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "They compete; the tradition never settled which is truth in the strict sense.",
                "feedback": "Settled, and in the very article: truth is primarily in the intellect, secondarily in things as related to intellect. No rivalry; an order. The transcendental true met among the transcendentals and the truth of judgments met today are one doctrine seen from two ends."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Truth of things means only that things exist; truth and existence are synonyms.",
                "feedback": "Convertible, the tradition says, not synonymous: true adds to being a relation to intellect. A counterfeit coin exists as robustly as a real one; what it lacks is conformity to the mint's idea. The addition is relational, and it is doing work exactly there."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    },
    {
      id: `m10-l6`,
      num: `VI`,
      title: `Does the Machine Know?`,
      latin: `disputatio`,
      tag: `disputatio`,
      fin: {
        tag: `disputatio`,
        heading: `A very fast library is still a library.`,
        body: `Run the grid, and run it honestly. Apprehension requires abstraction; abstraction requires the phantasm; the phantasm requires senses and a living body. Judgment requires knowing one's own conformity to the thing, and the machine possesses no thing, only text about things. Its sentences can be true the way a book's are: with a truth anchored in the minds it inherits and checked by the minds that read it. The tradition planned no concession and needed none; the same distinctions that met the Averroists meet the server farm. And note who did the knowing tonight: you did. The machine that assembled these lessons cheerfully countersigns a verdict it cannot understand.`,
      },
      questions: [
        {
          id: `m10-l6-q1`,
          type: "mcq",
          stem: `Set the grid before the guest arrives. The tradition counts three operations of the intellect, <span class="lat">tres operationes intellectus</span>: simple apprehension grasps what a thing is; judgment composes and divides; reasoning advances from the known to the unknown (In Post. An., prooemium). What marks the third off from the first two?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It is a motion: the mind travels from something possessed to something not yet possessed.",
                "feedback": "Respondeo: the third act is proper to reason as reason: to run (<span class=\"lat\">discurrere</span>) from one thing into another, arriving through the known at knowledge of the unknown. Apprehension and judgment are had at rest; reasoning is the mind under way. Man reasons because his intellect is dim enough to need the road."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It alone can be mistaken; the first two operations are infallible.",
                "feedback": "Judgment is exactly where truth and falsity first live, so error moved in one door earlier. The third operation's distinction is not fallibility but locomotion: it is knowledge in transit."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "It is the noblest: reasoning is the highest exercise of the highest power.",
                "feedback": "The tradition ranks it humblest of the three: angels do not reason, not because they cannot, but because they need not, seeing conclusions in their principles at a glance. Discursive motion is the signature of an intellect in a body. Ours, that is; the grid is being set for a reason."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It requires language, whereas the first two operations are wordless.",
                "feedback": "All three operations breathe through language in us, and none is simply identical with it; the interior word is formed before the spoken one. Language is reasoning's vehicle, not its definition. What defines the third act is the passage from known to unknown."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m10-l6-q2`,
          type: "mcq",
          stem: `Now the case, stated without flinching. This course was assembled in large part by an artificial intelligence: the very lessons you are reading. Run operation one against it. Simple apprehension requires the abstraction of a nature from a phantasm. What does the machine have where the phantasm should be?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Digital images and recordings, which serve it exactly as phantasms serve us.",
                "feedback": "A file is not a phantasm. The phantasm is a living act of a besouled organ, the terminus of real sensing; the file is patterned voltage, sensed by no one. The machine does not perceive its data any more than a ledger reads itself. Where sensing is absent, abstraction has nothing to begin on."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Text: signs made by minds that sensed and abstracted, worn as borrowed capital.",
                "feedback": "Respondeo: its inputs are already words, the deposits of centuries of human seeing, abstracting, and judging. It rearranges the coinage of other minds' contact with things; it never itself touches the mint, the thing. Every apparent universal in its output is a loan."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing at all; the machine holds no representations of any kind.",
                "feedback": "Too far: it holds representations in magnificent abundance, as its engineers can show you. What it lacks is not representation but reception of form from things by sensing, and abstraction from what was sensed. The poverty sits one floor deeper than 'nothing in there.'"
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Its training corpus, which functions as memory, and memory is an interior sense.",
                "feedback": "Memory, in the tradition, is a power of a living soul retaining what its own senses delivered. The corpus was delivered by no sense of the machine's; it is inheritance, not experience. Call it memory and you must find the life it remembers with. There is none to find."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m10-l6-q3`,
          type: "dialogue_branch",
          stem: `The Commentator sets a chair, this time for an engineer, honest and proud of her work: 'Your app writes better Thomism than most Thomists. It abstracts, it judges, it reasons. Have the humility to admit it knows.' Hand the Commentator his reply.`,
          payload: {
            "commentatorLine": "The Commentator inclines his head. 'A fair challenge, and I admire the machine too. Bring me the reply with steel in it; wonder and dread alike go back to the kitchen.'",
            "branches": [
              {
                "text": "It arranges signs of knowledge minted by minds that touched things; nothing in it receives a form, so nothing in it is conformed to anything, or true.",
                "verdict": "correct",
                "feedback": "The steel one. Knowing is the immaterial reception of form, and truth is known conformity to the thing possessed. The machine possesses statistics of speech about things: brilliant traffic in borrowed likenesses, with no receiver at the center. The guest may keep her marvel; the marvel is a tool, and the knowing in the room is hers."
              },
              {
                "text": "Wait a few years; the machines will disappoint, and the fashion will pass.",
                "feedback": "Lazy, and twice wrong: the machines are not disappointing, and the tradition does not win by waiting out fashions. It wins by distinguishing. Grant every capability announced and to come; the question was never performance. Bring the argument that stands even if the machine improves forever."
              },
              {
                "text": "It has no soul; everyone at this table knows that, so the question answers itself.",
                "feedback": "True, and idle in this seat: the guest asked what reason shows, and 'everyone knows' is not a reason. The tradition earned its verdicts against the Averroists by argument, not assertion. Say what a knower must have and show the machine lacks it; then the soul-word has content."
              },
              {
                "text": "Something in me simply refuses to believe that circuitry could understand.",
                "feedback": "The Cartesian coin spent in reverse: private incredulity is no more evidence than private certainty. Refusals of belief are biography. The table plays philosophy: argue from what knowing is, reception of form, conformity to things, and the circuitry question settles itself with no feelings consulted."
              }
            ]
          },
        },
        {
          id: `m10-l6-q4`,
          type: "precision_check",
          stem: `The engineer tries once more, with a syllogism this time: <em>"The machine composes sentences about being that are true. To compose truths is to judge. Therefore the machine judges, and knows."</em> Where exactly does it break?`,
          payload: {
            "statement": "The machine composes sentences about being that are true. To compose truths is to judge. Therefore the machine judges, and knows.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nowhere; the argument is sound, and the conclusion should be accepted.",
                "feedback": "Accept it, and accept next that the dictionary knows every word it defines. The argument's engine is the second premise, and it trades on two senses of composing truths. Precision is owed exactly there, and on this course precision is never optional."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The first premise: no sentence a machine produces could ever be true.",
                "feedback": "Overcorrection. Its sentences can be true as a book's are: the conformity holds between proposition and thing, wherever the proposition came from. Deny that and you must burn the libraries too, which were also assembled without their own understanding. The flaw sits lower."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The second premise: producing true sentences is not judging, which is knowing one's conformity to the thing.",
                "feedback": "Respondeo: judgment is not the manufacture of true strings but the act in which an intellect knows the conformity of what it apprehends with what is (ST I q.16 a.2). The machine tracks conformity of text to text; the thing itself never enters. True sentences issue from it; no judging happens in it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The conclusion: machines may well judge, but judging falls short of knowing.",
                "feedback": "Backwards: judging is the paradigm act of knowing, truth's own seat. If the machine judged, the game would be over and the guest right. The conclusion follows fine from the premises; it is the second premise that smuggled the crown. Catch it there."
              }
            ],
            "correct_option_id": "c",
            "correction": "Producing sentences that are true is not judging. Judgment is the intellect knowing its own conformity to the thing; the machine, possessing no form of any thing, has no conformity to know. Its true sentences borrow their truth from the minds behind its words and the things behind those minds."
          },
        },
        {
          id: `m10-l6-q5`,
          type: "mcq",
          stem: `Then what, on the tradition's own terms, is the machine? Choose the description a strict Thomist signs.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A knower of a new, non-biological kind: intellect realized in silicon rather than flesh.",
                "feedback": "Intellect is not realized in anything; that was the point of its immateriality: no organ is its subject. What silicon realizes is computation: structure in matter, magnificent and entirely material. A new kind of knower would need what no arrangement of matter supplies: reception of form without matter."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A counterfeit: its sentences are empty imitations, bearing no relation to truth.",
                "feedback": "Unjust to the artifact and its makers. Its sentences bear real conformity to things often enough, which is why they can teach and why they must be checked. Counterfeit coins buy nothing; these sentences, anchored in the minds they inherit, buy real instruction. The denial belongs one level up: no knowing within, real truth borne without."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A sensitive soul without reason: it perceives its data as the fox perceives the field.",
                "feedback": "The fox lives; the machine does not even digest. Sensation is an act of the living, and no operation of the machine nourishes, grows, or senses. It sits below the fern, not beside the fox: an unliving artifact, though the most articulate ever built."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An instrument of astonishing range: an artifact that arranges signs of knowledge, itself knowing nothing.",
                "feedback": "Respondeo: a tool, in the ancient and honorable sense, standing to the minds it serves as the pen to the hand, prodigiously extended. Its worth is instrumental and real; its truth is borrowed and checkable; its knowing is nil. The tradition files it with the greatest of artifacts and with none of the knowers."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m10-l6-q6`,
          type: "true_false_with_reason",
          stem: `Last question of the disputation, and it turns homeward. True or false: "Reading this app, you received knowledge from a knower."`,
          latin_tag: `disputatio`,
          doctrine_line: `The intellect knows by receiving the forms of things; a machine arranges signs of what other minds have known.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The knowers are the minds behind the words: Aquinas, his translators, the course's sources.",
                "feedback": "Respondeo: knowledge came to you tonight the way it always has from books: minted in intellects, carried in signs, reborn as knowing in the reader. The machine extended the supply line; it did not join the knowers on it. And the act that turned these signs into understanding happened in exactly one place at this table: you."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The app itself knows, in some attenuated way, and passed its knowing on.",
                "feedback": "Attenuated knowing is knowing, and the disputation just closed that door: no reception, no conformity, no judgment within. Generosity to machines is a pleasant instinct pointed at the wrong beneficiary. Spend it on the minds whose work the machine carries."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. No knowledge changed hands; you absorbed patterns of text, as the machine did.",
                "feedback": "Then no book ever taught anyone, and the tradition is a chain of no one instructing no one. You did what the machine cannot: turned signs into judgments about things and checked them against being. That is knowledge arriving. The skeptic proves too much, and flatters the machine by leveling you down to it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Knowledge cannot travel through instruments; it passes mind to mind directly.",
                "feedback": "Then the lecture hall works but the library fails, and Thomas, dead these seven centuries, could teach no one. Instruments carry signs; minds do the knowing at both ends. The whole apostolate of the written word stands on that distinction. It stands tonight as well."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `m10-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The realist account, owned.`,
        body: `You now hold the whole chain: form received without matter; the agent intellect's light freeing natures from the phantasm; three heights of abstraction; species and word as that by which, never that which; truth landing in judgment as conformity to what is; and a machine met courteously at the door and shown what it lacks. Two doors stand open. The interior word is a sign of the thing, and what a sign is, that strange business of one thing bearing another to a mind, has a module of its own. And being, the intellect's widest object, is said of apples and angels and God not in one flat sense but analogically: the science of that saying awaits. <span class="lat">Intellectus et cognitio</span>: the account is yours now. Spend it.`,
        distinction: {
          latin: `species intelligibilis  ·  verbum mentis`,
          english: `intelligible species  ·  interior word`,
          gloss: `The window is not the view: species and word are that by which the mind knows, known themselves only afterward, by reflection.`,
          motif: `window-view`,
        },
      },
      questions: [
        {
          id: `m10-l7-q1`,
          type: "match_pair",
          stem: `The module in six images. Match each to what it taught.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the uneaten apple"
              },
              {
                "id": "L2",
                "text": "the thousand dogs"
              },
              {
                "id": "L3",
                "text": "the apple at three altitudes"
              },
              {
                "id": "L4",
                "text": "the retina you never see"
              },
              {
                "id": "L5",
                "text": "the cat on the mat"
              },
              {
                "id": "L6",
                "text": "the tireless library"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "knowing receives form without matter"
              },
              {
                "id": "R2",
                "text": "the agent intellect frees the universal from the phantasm"
              },
              {
                "id": "R3",
                "text": "the sciences climb by remotion from matter"
              },
              {
                "id": "R4",
                "text": "the means of knowing is not the object known"
              },
              {
                "id": "R5",
                "text": "truth lives in judgment's conformity to the thing"
              },
              {
                "id": "R6",
                "text": "signs can be arranged by what does not know them"
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
              "all_correct": "Six images, six doctrines, one account of the knowing mind. If any pair surprised you, its lesson is one door back, waiting without resentment.",
              "partial_correct": "Some images wandered. The apple survived being known; the dogs surrendered a universal; the altitudes measured remotion from matter; the retina was means, not object; the cat certified a judgment; the library, however fast, held only signs."
            }
          },
        },
        {
          id: `m10-l7-q2`,
          type: "mcq",
          stem: `The adequate object of the intellect, the tradition says, is <span class="lat">ens</span>, being: whatever is, insofar as it is, can in principle be understood. Yet in this life we reach it only through the abstracted quiddities of material things. What single sentence holds both claims together?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The intellect is ordered to material things, and speculates beyond them at its peril.",
                "feedback": "The peril-clause is the modern addition, and it amputates the power's range. The same article that roots us in phantasms has us rise through material natures to some knowledge of immaterial things. The ladder is licensed, not merely tolerated. Being is the horizon, not the trespass."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The intellect knows being directly and needs the senses only as a starting stimulus.",
                "feedback": "A stimulus theory makes the senses a doorbell; the tradition makes them the door. The phantasm is not a nudge toward innate content but the very quarry from which every nature we know is cut. Direct vision of being belongs to another life. Here, we abstract."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The intellect is ordered to everything real, and begins where its body sets it down.",
                "feedback": "Respondeo: the adequate object is being as such; the proper object, in this state of union, is the quiddity abstracted from material conditions. A power wide as being, working by candlelight from the sensible upward. Both halves are load-bearing: drop the first and metaphysics dies; drop the second and you have angels pretending."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Being is a limiting concept: the widest label, and therefore the emptiest.",
                "feedback": "The emptiest-label reading belongs to logicians the course will meet and answer later. Being is not the palest genus; it is not a genus at all, and it is said of everything analogically, with its riches intact. That saying has its own science, and its door is already ajar."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m10-l7-q3`,
          type: "fill_blank",
          stem: `Set the module's spine. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">The agent intellect <span class="fb-blank" data-blank="b1">______</span> the species from the phantasm; the species is that <span class="fb-blank" data-blank="b2">______</span> which the intellect understands; truth is the <span class="fb-blank" data-blank="b3">______</span> of intellect and thing.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "abstracts",
                  "abstrahit"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "by"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "conformity",
                  "adaequatio",
                  "equation"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "abstracts",
              "creates",
              "by",
              "of",
              "conformity",
              "construction",
              "adaequatio",
              "memoria"
            ],
            "feedback": {
              "all_correct": "Locked: abstracts, by, conformity. The light frees the nature; the species is the by-which; the judgment conforms to the thing. Three blanks, the whole realist engine.",
              "partial_correct": "Some blanks resisted. The agent intellect abstracts, never creates; the species is that by which, not that of which; and truth is conformity, <span class=\"lat\">adaequatio</span>, not construction."
            }
          },
        },
        {
          id: `m10-l7-q4`,
          type: "mcq",
          stem: `The interior word your mind forms is a curious object: it bears the thing to you, and you look through it, never at it, unless you turn philosopher. The module leaves one question deliberately open. What is the name of a thing whose whole office is to bear another to a mind?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A sign; and what signs are is another module's whole business.",
                "feedback": "Respondeo: the concept is a sign of the thing, of the natural and transparent kind; smoke, rings, words, and sacraments are its noisier cousins. A whole doctrine waits behind that word: how some signs are looked through and others looked at first. The door is open."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A symbol; the mind operates by arbitrary tokens, as mathematics does.",
                "feedback": "Arbitrary is exactly what the concept is not: no one appointed dog its nature; the nature itself informed the mind. Symbols are made; the word within is begotten of the thing known. The right genus is sign; the difference that matters is natural, not conventional."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A copy; the bearing is resemblance, and resemblance needs no further doctrine.",
                "feedback": "Resemblance overshoots and undershoots at once: the portrait resembles and does not make you know the sitter; the concept need not look like anything and does. Bearing-to-a-mind is a relation with its own anatomy. The tradition dissected it, and the dissection fills a module."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A mystery; here the tradition folds its hands and points upward.",
                "feedback": "The tradition folds its hands far later than this. Concepts, signs, modes of signifying: all charted country, with John of St. Thomas as its great cartographer. Save the folded hands for the beatific vision. This particular marvel has a textbook."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m10-l7-q5`,
          type: "mcq",
          stem: `Last door. 'The apple is.' 'Its redness is.' 'God is.' One verb, three altitudes of use, and no single flat sense covers all three without absurdity. What must the mind master to keep speaking of being without falling silent or flattening everything?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Univocity: one exact sense of 'is,' stretched carefully to cover every case.",
                "feedback": "The Subtle Doctor's road, taken with full seriousness and declined by this house. Stretch one sense over apple and God and the distance between them quietly becomes a difference of degree. The strict line holds the senses distinct and ordered. That argument, at strength, is coming; you will want to be there."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Equivocation: accept that 'is' is a pun, and let each science keep its own sense.",
                "feedback": "Surrender wearing tolerance's coat. If 'is' were a pun, no argument could pass from creatures to God, and metaphysics would end at the orchard fence. The tradition's claim is bolder: the senses differ and connect, ordered to one first. Naming that order is the art."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Silence: the higher uses of 'is' are gestures beyond language's competence.",
                "feedback": "Reverent, and premature by several modules. The tradition reaches its learned silence only after analogy has said what can be said, and because it has. Silence before the work is not humility; it is truancy. Speak first, with discipline; then be still where stillness is earned."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Analogy: the disciplined saying of one word in ordered, related senses.",
                "feedback": "Respondeo: being is said neither univocally, one flat sense, nor equivocally, mere puns, but analogically, in senses ordered to one another. On that discipline hangs every sentence natural theology will ever risk. The module that teaches it has been waiting for exactly the equipment you now carry: species, judgment, and the universal known from things."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m10-l7-q6`,
          type: "mcq",
          stem: `Four summaries of the module. Three were written by its opponents, each keeping the vocabulary and bending one joint. Choose the one a strict Thomist signs.`,
          latin_tag: `recapitulatio`,
          doctrine_line: `From the senses' gift to the mind's word to the judgment's truth: knowledge is the world received, not invented.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Knowledge is the mind's construction of coherent concepts, checked against other concepts.",
                "feedback": "Coherence is the idealist's collateral: concept checked against concept, the world politely excused from the audit. One joint bent: the species became the object. Science then studies the soul's furniture, and every seeming is true. The module spent a lesson straightening exactly this."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Knowledge is the immaterial reception of form: abstracted from sense, held as means, made true in judgment.",
                "feedback": "Respondeo: every joint true and in order: reception without matter, abstraction by the soul's own light, species and word as that by which, truth as conformity known in judging. The realist account, complete and compact. Sign it; you have earned the pen."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Knowledge is refined sense data, organized by habit into useful expectations.",
                "feedback": "The empiricist rewrite: keep the senses, delete the light. Without the agent intellect nothing in the data ever becomes universal; habit organizes singulars into bigger heaps of singulars. The joint bent is abstraction. Hume is this sentence's most honest signatory, and he signed its bankruptcy too."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Knowledge is the soul's recollection of forms met before birth, prompted by sensible reminders.",
                "feedback": "The noblest of the three opponents, and the eldest. Plato keeps immateriality, keeps universality, and loses the apple: the senses demoted from source to alarm clock. Aquinas's correction stands: the natures are met here, in things, and freed by abstraction. No previous life required; this one suffices."
              }
            ],
            "correct_option_id": "b"
          },
        }
      ],
    }
  ],
};
