import type { ModuleMeta } from '../types';

export const m11: ModuleMeta = {
  id: 11,
  title: `Semiotics: Signs and Meaning`,
  short: `Semiotics`,
  label: `Module 11 · Semiotics: Signs and Meaning`,
  latin: `De Signis`,
  aim: `A sign is what represents something other than itself to a knowing power. Most signs take the stage before pointing beyond it: smoke, words, portraits, all known first as things. One kind never appears at all: the concept, the formal sign, that by which the mind knows and never what it knows first. Signs bind by nature or by appointment; a word signifies the intellect's conception immediately and the thing by its means; and in every name the thing signified must be held apart from the mode of signifying. Supposition closes the kit: what a term stands for in this use. The whole art guards one realist truth: the mind's instruments carry it to things, and never wall it in.`,
  lessons: [
    {
      id: `m11-l1`,
      num: `I`,
      title: `A World Full of Signs`,
      latin: `signum`,
      tag: `signum`,
      fin: {
        tag: `signum`,
        heading: `The world has been talking the whole time.`,
        body: `Smoke, rings, octagons, words: creation is thick with things that hand you other things. The tradition's word is <span class="lat">signum</span>: what represents something other than itself to a knowing power. And <span class="lat">significatio</span> names the relation a sign bears to what it signifies. The Church herself builds on this ground; a sacrament, Aquinas says, is the sign of a holy thing so far as it makes men holy (ST III q.60 a.2). That door is named here with reverence and left for another course. Ours opens onto a stranger fact: you have spent your whole life using one kind of sign you have never once seen. Next lesson finds it.`,
        distinction: {
          latin: `signum`,
          english: `sign`,
          gloss: `Smoke, rings, octagons, words: a sign is what represents something other than itself to a knowing power, and creation is thick with them.`,
          motif: `smoke-fire`,
        },
      },
      questions: [
        {
          id: `m11-l1-q1`,
          type: "mcq",
          stem: `Smoke over the ridge. A wedding ring. A red octagon at the corner. The word <em>fire</em>. Four strangers, one family. What do they all do?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Each stands in for something absent, substituting for what it signifies.",
                "feedback": "Substitution is the wrong office. The octagon does not do your braking, and the ring does not stand in for a marriage that is entirely present. Nothing here replaces its object; each hands you on to it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Each brings something other than itself into your knowing.",
                "feedback": "Respondeo: smoke hands you the fire, the ring the marriage, the octagon the command, the word the thing named. Each is itself, and each delivers another. The tradition calls such a servant a signum: what represents something other than itself to a knowing power."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Each resembles what it points to, more or less faithfully.",
                "feedback": "The portrait resembles; the rest of the family shames the theory. Smoke looks nothing like fire, the octagon nothing like a halted car, and the word fire is not even slightly hot. Likeness is one road among several. The common office lies elsewhere."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Each is a human contrivance for steering attention.",
                "feedback": "Three of the four took human appointing, but the smoke asked no one's permission. It signified fire before there were councils to vote on it, and it would signify fire after. Whatever a sign is, it is bigger than our inventions."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m11-l1-q2`,
          type: "mcq",
          stem: `Suppose every driver, every walker, every mind vanished tonight. What is left standing at the corner where the octagon was?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A sign, exactly as before: red, eight-sided, and commanding.",
                "feedback": "Commanding whom? Representation is representation to someone; a knowing power belongs to the definition, not to the audience's convenience. With every reader gone, the commanding is over, however long the metal stands."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nothing at all: signs and their metal go out with the minds.",
                "feedback": "The metal is in no danger; realism never was. The octagon stays red and eight-sided in the emptiest of worlds. What lapses is not the thing but an office the thing was holding. Distinguish the post from the postman."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A red object apt to signify, with no one left to signify to.",
                "feedback": "Respondeo: a sign represents to a knowing power, so the signifying idles when the last knower leaves; the aptitude remains, waiting. The thing survives entire. Its office resumes with the first mind through the intersection."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A symbol whose meaning passes quietly to the animals.",
                "feedback": "The deer reads the growl and the smoke; nature's signs address any knower equipped for them. But an appointed sign leans on the appointing community, and the deer never ratified the traffic code. The octagon's meaning is not transferable to parties outside the agreement."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m11-l1-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "To be a sign, a thing must resemble what it signifies."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Signs work by likeness; the portrait is the proof.",
                "feedback": "The portrait proves that some signs work by likeness. The smoke was not consulted: it announces fire while resembling a cloud. One good example does not make a definition; it makes a species."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Without resemblance, a mind could never travel from sign to signified.",
                "feedback": "Minds travel several roads. Likeness is one; causation carries you from smoke to fire, and appointment from octagon to brake. The claim mistakes the most picturesque route for the only bridge."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Signs never resemble their objects; likeness would confuse sign with signified.",
                "feedback": "Right verdict, overzealous reason. Portraits, maps, and mirror images resemble their objects and signify splendidly; no one worships the portrait by accident. Likeness is permitted to signs. It is just not required of them."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Resemblance is one road among several; causes and appointments also carry a mind beyond the sign.",
                "feedback": "Respondeo: the family of signs is bound by office, not by likeness. Some resemble (the portrait), some are caused (the smoke), some are appointed (the octagon, the word). What they share is the errand: making another thing known."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m11-l1-q4`,
          type: "mcq",
          stem: `Smoke is an effect of fire, and a sign of fire. Are those two names for the same relation?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes; to be an effect and to be a sign are one office under two names.",
                "feedback": "Then the word fire would need to be an effect of fire, and it is an effect of your lungs. Effects can serve as signs, and often do. But the word points without being caused by what it points to. The two relations part company."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No; a sign must be chosen by someone, and effects are never chosen.",
                "feedback": "Nature's signs were never chosen; the smoke signifies without a single vote cast. Choice marks off one species of sign, not the genus. The real difference between effect and sign lies in what each relation is toward."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No; being caused relates smoke to the fire, being a sign relates it to a knower it can teach.",
                "feedback": "Respondeo: the causal bond runs between two things and would hold in an unwatched world. The sign relation adds a third party: a knowing power the smoke can carry beyond itself. Aristotle noted that every effect can serve as a sign of its cause; the serving still waits on a reader."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Yes, provided the effect is perceptible; hidden effects are not signs.",
                "feedback": "Perceptibility decides whether a sign can be read easily, not whether the relations are one. A buried stratum signifies an ancient flood to the geologist who digs it up; its centuries of obscurity subtracted nothing. The cut between effect and sign is not visibility."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m11-l1-q5`,
          type: "mcq",
          stem: `The tradition kept Augustine's definition close: a sign "is that which conveys something else to the mind, besides the species which it impresses on the senses" (quoted at ST III q.60 a.4 ad 1). <em>Besides</em> is the working word. What is it guarding?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That a sign gives two gifts: itself to the senses, another thing to the mind.",
                "feedback": "Respondeo: the smoke is genuinely seen, gray and drifting, and something else arrives with it: fire, unseen. Cancel either gift and the sign dies; a thing that delivered only itself would be mere presence, and a message with no bearer would be a miracle, not a sign."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That signs should efface themselves, lest they distract from the message.",
                "feedback": "A courtesy, not a definition. Illuminated capitals distract magnificently and signify all the same. Augustine's besides does not ask the bearer to vanish; it only insists the delivery outrun the bearer."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That the senses stop at the surface while only the mind is ever taught.",
                "feedback": "The senses are not left out of the teaching; the dog learns from the leash in your hand. The definition honors the senses as the doorway: the species impressed on them is the first gift. What besides guards is that a second arrives through it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That what a sign conveys must itself be a sensible thing.",
                "feedback": "Backwards from the definition's own career: Augustine built it for sacraments, where sensible water conveys invisible grace. The bearer must meet the senses; the cargo is under no such orders. Besides marks the doorway, not the destination."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m11-l1-q6`,
          type: "fill_blank",
          stem: `Set the lesson's definition. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">A sign is what represents something <span class="fb-blank" data-blank="b1">______</span> than itself to a <span class="fb-blank" data-blank="b2">______</span> <span class="fb-blank" data-blank="b3">______</span>.</span>`,
          latin_tag: `signum`,
          doctrine_line: `A sign is what represents something other than itself to a knowing power.`,
          lesson_complete: true,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "other"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "knowing"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "power"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "other",
              "greater",
              "knowing",
              "sensing",
              "power",
              "organ",
              "likeness",
              "cause"
            ],
            "feedback": {
              "all_correct": "Locked: other, knowing, power. Three words, three walls. Other keeps the sign a servant rather than a destination; knowing power keeps signification an affair of minds, not of mere physics. The rest of the module unpacks this one sentence.",
              "partial_correct": "Some blanks resisted. A sign represents something other than itself, else it would only be present, not representative; and it represents to a knowing power, for where nothing knows, nothing is signified."
            }
          },
        }
      ],
    },
    {
      id: `m11-l2`,
      num: `II`,
      title: `The Sign You Look Through`,
      latin: `signum formale`,
      tag: `signum formale`,
      fin: {
        tag: `signum formale`,
        heading: `The glass you have never seen.`,
        body: `Every other sign takes its turn on stage before pointing beyond itself. The concept never does. It is pure servant, a <span class="lat">signum formale</span>, a formal sign: that by which the mind knows and not what it knows first. Its opposite number, the <span class="lat">signum instrumentale</span>, must be known first as a thing, like ink, smoke, and octagons. Make the concept one more object and the mind becomes a sealed gallery, guessing at a world it never meets; keep it a formal sign and knowing lands on things. The strict masters, above all John of St. Thomas in his treatise on signs, guarded this door for the whole tradition. Next lesson asks where signs get their authority: from nature, or from us.`,
        distinction: {
          latin: `signum formale  ·  instrumentale`,
          english: `formal sign  ·  instrumental sign`,
          gloss: `Every other sign takes the stage before it points; the concept never does: pure servant, that by which and never what is known first.`,
          motif: `window-view`,
        },
      },
      questions: [
        {
          id: `m11-l2-q1`,
          type: "mcq",
          stem: `A letter arrives from your closest friend. Ink first: you see the strokes, then through them the news. Now the stranger case: your concept of that friend. Did you ever meet the concept first, inspect it, and then infer the friend?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes; each thought begins with a glance at an inner image, checked against the world.",
                "feedback": "Describe the checking. To compare inner image with outer friend you would need to reach the friend some way other than the image, and the theory just forbade that. The glance-first picture cannot even state its own test."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No; the concept did its work unseen: you thought of her, not of it.",
                "feedback": "Respondeo: the concept is like the glass of a window, looked through and not at. You have never once caught it standing between you and your friend, because standing between is not its manner of serving. What serves without first being seen is a new kind of sign, and this lesson is named for it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes, but the inspection happens too quickly for notice.",
                "feedback": "Then slow it down: hold the thought of your friend for a full minute. What you get is more of her, not a first glimpse of the concept. No speed of introspection ever surfaces a concept posing as the prior object; the order never inverts because it was never there."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No, because there is no concept; there is only the friend and the brain that reacts to her.",
                "feedback": "An overcorrection that burns the granary. Something in you holds her when she is absent, misremembers her birthday, and means her rather than her twin; a bare reaction does none of that. The concept exists. The discovery is about its office, not its existence."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m11-l2-q2`,
          type: "mcq",
          stem: `Two offices, then. An instrumental sign is first known as a thing, and then leads beyond itself: ink, smoke, octagons. A formal sign represents without first being known itself. Which item on this table is formal?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The photograph of the lake.",
                "feedback": "Glossy, rectangular, slightly overexposed: you know the photograph as a thing before it hands you the lake. Whatever is inspectable first is instrumental. The formal sign on this table is the one you cannot put on the table."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The word lake, spoken aloud.",
                "feedback": "A sound heard first, one syllable, rhymes with ache: known as a thing, then through to the water. The spoken word is the classic instrumental sign. Look for the one that never takes its turn as an object."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Your concept of the lake.",
                "feedback": "Respondeo: the concept represents the lake without ever first presenting itself; you think water, shore, and stillness, and the concept is precisely the thinking's own form. That is the signum formale, the formal sign, and the intellect's concept is its paradigm."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The map's blue patch marked LAKE.",
                "feedback": "The patch is known first with unusual thoroughness: you check its shade, its border, its little label. Cartography is the art of the instrumental sign at its most self-aware. The formal sign keeps no such office hours."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m11-l2-q3`,
          type: "true_false_with_reason",
          stem: `True or false: "You know your own concept of fire first, and from it infer the fire."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "FALSE. The concept is that by which fire is known, never the first thing known.",
                "feedback": "Respondeo: the concept serves as a formal sign, the medium of knowing and never the starting object. Invert that order and every mind inherits a locked room and a lifetime of guessing. The tradition declines the room. The mind's first object is the thing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Introspection meets ideas before things; the moderns built squarely on this.",
                "feedback": "They built on it, and the building leans. What introspection meets is always fire-being-thought-of, never a naked idea ahead of its object. The moderns mistook the window for the first landscape, and three centuries of epistemology paid the glazier."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE. The concept is nearer to the mind than the fire, and what is nearer is known first.",
                "feedback": "Nearness of being is not priority of knowing. The eye's own lens is nearest of all and is never seen; the concept is near precisely as transparency, not as a first exhibit. The axiom smuggles a spatial picture into an immaterial act."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. There are no concepts; fire simply acts on the brain, and behavior follows.",
                "feedback": "Right verdict, and the rescue demolishes the rescuer. Without a concept nothing in you means fire as such, absent, universal, or defined; reactions track stimuli and mean nothing. Keep the concept and correct its job description."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m11-l2-q4`,
          type: "mcq",
          stem: `Suppose the concept really were an instrumental sign: known first, then leading outward. The moderns supposed exactly this. What follows?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing much, provided the concept resembles the world accurately.",
                "feedback": "Provided by whom? To certify the resemblance you would need to see the world apart from the concept, which the theory has just made impossible. Accuracy becomes an article of faith about the wallpaper. The trouble is structural, not a matter of better copies."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The mind meets only its own furniture, and the world becomes a lifelong inference.",
                "feedback": "Respondeo: make the concept the first object and every knower is sealed in a gallery of private exhibits, arguing toward an outside never once visited. The tradition never enters the gallery: the concept is a formal sign, that by which the thing is known and never the first thing known. John of St. Thomas, the tradition's great mapmaker of signs, drew this line with final clarity."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Knowing gets faster, since the mind starts closer to home.",
                "feedback": "It starts at home and stays there; that is the difficulty. Speed was never the issue: the question is whether the journey to things happens at all. A racing mind in a sealed room sets records in no known sport."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The regress ends harmlessly in sensation, which needs no signs at all.",
                "feedback": "Sensation is no refuge; the sense too knows by a received likeness, and if every likeness must be known first, the gallery reopens one floor down. The escape is not a sign-free basement. It is the formal sign's office: serving unseen, at every level."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m11-l2-q5`,
          type: "mcq",
          stem: `Four candidates: a mirror's image of the dog, the dog's bark, the word dog, the intelligible species of dog in your intellect. Which one belongs to the class that is never first known?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The mirror's image, since you look straight through it to the dog.",
                "feedback": "Usually through, yes; but tilt the glass, catch the smudge, and the image itself takes the stage in an instant. Whatever can be made the first exhibit is instrumental, however discreetly it usually serves. The formal sign cannot be caught posing at all."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The bark, since it is over before you can attend to it.",
                "feedback": "Brevity is not invisibility. The bark is heard as a sound, sharp and close, and through it the dog; a thing can be known-first in half a second. The class we want is not the quick but the unstageable."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The word dog, once fluency has made the reading effortless.",
                "feedback": "Effortless is not objectless; hand the fluent reader bad handwriting and the word instantly becomes a specimen. Habit hides the first step without abolishing it. Look for the sign that has no first step to hide."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The intelligible species, which serves the act of knowing without ever being its first object.",
                "feedback": "Respondeo: the species is that by which the intellect knows the dog, never the exhibit it starts from. You can reflect on it afterward, but even then it is reached through its own service, never caught standing in front. That is the formal sign's whole manner of life."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m11-l2-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "For a fluent reader, the printed word has become a formal sign, since she never notices the ink."`,
          latin_tag: `signum formale`,
          doctrine_line: `The concept is a formal sign: that by which the mind knows, never what it knows first.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Habit has erased the first step, and what is erased is gone.",
                "feedback": "Erased from attention, not from the order of knowing. The ink is still doing its instrumental work under the fluency; a bout of eyestrain restores it to notice without promotion or demotion. Habits change readers. They do not transmute signs."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Signs are classed by how they are used, and she uses the page like a pane of glass.",
                "feedback": "Classed by their manner of being, not by our dexterity with them. If use decided, every sign would change species with every user's skill, and the taxonomy would be a diary. The page serves like glass; it remains a thing seen through a thing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The word stays instrumental: a foreign tongue makes it an object again; the concept never can.",
                "feedback": "Respondeo: fluency hides the word's first step; a page of Hungarian brings it back. What can return to the stage never left the theater. The concept alone has no stage entrance anywhere in its nature, and that, not smoothness of use, is what formal means."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Print is instrumental because publishers appointed it so, and appointment cannot be outgrown.",
                "feedback": "Right verdict, borrowed reason. Appointment makes the word conventional, not instrumental; those are two different cuts, and the next lesson crosses them properly. The word is instrumental because it is known first, whoever appointed it."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `m11-l3`,
      num: `III`,
      title: `Born or Appointed`,
      latin: `ad placitum`,
      tag: `ad placitum`,
      fin: {
        tag: `ad placitum`,
        heading: `Nature signs in ink; we sign in pencil.`,
        body: `Smoke would preach fire in a world that never invented an alphabet: the <span class="lat">signum naturale</span> binds by what things are, the same for all. The word smoke holds by appointment, <span class="lat">ad placitum</span>, at pleasure: erase it and another sound takes the shift. Long custom mints a humbler third kind, the customary sign, the napkin that announces dinner; custom's children still are not nature's. And the two cuts cross: formal or instrumental says how a sign meets the knower, natural or appointed says where its bond comes from. One realist nail holds it all down: appointment fixes which sound carries a nature, never what the nature is. Next lesson opens the word itself and finds two things riding in every name.`,
        distinction: {
          latin: `signum naturale  ·  ad placitum`,
          english: `natural sign  ·  appointed sign`,
          gloss: `Nature signs in ink and we sign in pencil: smoke binds by what things are, the word holds by appointment and can be erased.`,
          motif: `diverging-lines`,
        },
      },
      questions: [
        {
          id: `m11-l3-q1`,
          type: "mcq",
          stem: `Smoke means fire in Los Angeles, in Madrid, and in the last unmapped valley on earth. The word smoke means smoke only where English is spoken. What differs between the two bonds?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Strength: nature ties tighter knots than agreement ever manages.",
                "feedback": "Some of nature's knots are loose: one gray wisp might be dust or distance. And some agreements are iron; try repealing the minus sign. The difference between the bonds is not their grip. Ask instead who tied them."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Source: one bond holds by what things are, the other by what speakers appointed.",
                "feedback": "Respondeo: smoke signifies fire by nature, the same for every knower everywhere; no one decreed it and no one can repeal it. The word signifies ad placitum, at pleasure, by appointment: a bond speakers set and speakers could reset. The tradition's names: signum naturale, signum ad placitum."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Age: signs begin as agreements and harden into nature over centuries.",
                "feedback": "Centuries make conventions feel natural; feeling is not ontology. Long custom does mint a third and humbler kind, the customary sign, the napkin on the lap announcing dinner. But custom's children remain custom's. No amount of time promotes a treaty into a law of nature."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Reach: natural signs address animals, conventional signs address minds.",
                "feedback": "Both address whatever can read them. The dog reads your reach for the leash, and the scholar reads the smoke. Reach follows the reader's equipment, not the sign's species. The cut between the two bonds is cut elsewhere."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m11-l3-q2`,
          type: "distinction_application",
          stem: `The cut, fixed. A natural sign (<span class="lat">signum naturale</span>) signifies by what it is: the bond needs no consent and is the same for all. A conventional sign (<span class="lat">signum ad placitum</span>) signifies by appointment: the bond holds because it was set. The case: a fever of 104, read by the nurse as infection. Which is the fever?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Natural: its bond to infection runs through causes, not committees.",
                "feedback": "Respondeo: the burning would betray the infection in any century, under any medicine. Note the layers, though: the number 104, the degree, the threshold for alarm, all appointed. One reading, two signs: nature supplies the bond, convention the ruler laid against it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Conventional: medicine appointed the threshold that defines a fever.",
                "feedback": "Medicine appointed the ruler, not the heat. Move the threshold to 103 and the body goes on burning exactly as before, announcing exactly what it announced. The scale is ours; the bond it measures never was."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Conventional: only the trained can read it, and training is a human institution.",
                "feedback": "The cost of reading does not decide the source of the bond. Trackers train for years to read hoofprints, astronomers to read redshift; nature's signs charge tuition too. Ask who tied the bond, not who paid to learn it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither: the fever is an effect of infection, and effects are not signs.",
                "feedback": "The first lesson closed this door: an effect apt to teach a knower is a sign in full standing, wearing its causal bond as credentials. The fever is effect and sign at once, which is precisely why the nurse can read it."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m11-l3-q3`,
          type: "distinction_application",
          stem: `Same cut, harder case. A baby cries in the next room, and you know something is wrong. Her older brother would have said the word hurt. Classify the cry.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Conventional: the baby absorbed crying from the household around her.",
                "feedback": "She cried on arrival, before the household had taught her anything, as every delivery room attests. What is in place before any possible appointment was not appointed. The household will teach her words later; the cry came with the child."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Customary: repetition has settled what each cry of hers means.",
                "feedback": "Repetition helps the parents refine their reading; it did not create the bond. A stranger from another country hears distress in the first second, no acquaintance required. Custom sharpens ears. Nature supplied the signal."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Natural: the cry breaks from nature's own grammar, the same in every country.",
                "feedback": "Respondeo: the tradition classes the cry with the groan and the growl: signs nature itself utters, needing no appointment and honored on every shore. Her brother's word hurt rides on an appointment; her cry rides on what she is. Two signs of the same distress, two sources of the bond."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Natural for her mother, conventional for everyone else.",
                "feedback": "Readers differ; bonds do not. The mother reads faster and finer, but the stranger and the nurse read the same nature-made sign with clumsier instruments. A bond that changed species per listener would be no bond at all."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m11-l3-q4`,
          type: "match_pair",
          stem: `Two cuts now stand. Formal against instrumental says how a sign meets the knower; natural against appointed says where its bond comes from. The cuts cross. Match each sign to its full address.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "smoke over the ridge"
              },
              {
                "id": "L2",
                "text": "the word smoke"
              },
              {
                "id": "L3",
                "text": "your concept of smoke"
              },
              {
                "id": "L4",
                "text": "the photograph of smoke"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "instrumental, natural: known first, bonded by causation"
              },
              {
                "id": "R2",
                "text": "instrumental, appointed: known first, bonded by consent"
              },
              {
                "id": "R3",
                "text": "formal, natural to the mind: never known first"
              },
              {
                "id": "R4",
                "text": "instrumental, natural by likeness: known first, bonded by resemblance"
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
              "all_correct": "Four addresses, no vacancies. The two cuts cross without quarrel: how the sign meets the knower is one question, where its bond comes from is another. Note the photograph: made by art, yet signifying by likeness, which is nature's own road.",
              "partial_correct": "Some letters went to the wrong houses. Ask two questions of each sign. Is it known first (instrumental), or only known-through (formal)? And is its bond from causes, from likeness, or from appointment?"
            }
          },
        },
        {
          id: `m11-l3-q5`,
          type: "mcq",
          stem: `Parliament, in a fit of reform, renames smoke: henceforth the word shall mean gratitude. What obeys the statute, and what ignores it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Everything obeys; meaning is whatever the appointing power decrees.",
                "feedback": "Half the empire secedes at once. Speakers may learn to say gratitude where they said smoke; the gray column over the ridge goes on announcing fire to every eye, uninstructed. Decrees reach appointed bonds. Nature holds no seat in that house."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nothing obeys; words resist parliaments as stubbornly as smoke does.",
                "feedback": "Words are more biddable than that; usage shifts by decree, fashion, and dictionary in every generation. The word could carry gratitude by next spring if speakers ratified it. What no spring will bring is smoke unbound from fire."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The smoke obeys eventually, once no one expects fire beneath it.",
                "feedback": "Expectation reads the bond; it does not forge it. Teach a whole nation to expect gratitude under smoke and their houses will burn down punctually, on nature's schedule. A bond made of causes outlasts any curriculum set against it."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The word obeys; the smoke over the ridge goes on preaching fire, unlegislated.",
                "feedback": "Respondeo: the appointed bond answers to the appointing power, so the word can be reassigned. The natural bond answers to what things are, and fire will not attend the hearing. One vote moves a sound; no vote moves a cause."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m11-l3-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "Because words are conventional, what they signify is conventional too."`,
          latin_tag: `ad placitum`,
          doctrine_line: `A natural sign binds by what it is; a conventional sign binds by appointment; the nature signified obeys neither vote nor drift.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Name and nature travel together; rename the thing and you remake it.",
                "feedback": "Renaming has been tried on everything from wolves to taxes, and the things persisted under new management. The name is a label appointed to a nature; peel it off and the nature sits there, unlabeled and unbothered."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Since usage drifts, the realities named must drift along with it.",
                "feedback": "Usage drifts; that is the pencil in which we sign. But the drift reassigns sounds to natures; it does not renovate the natures. When meat once meant food in general, dinner did not change substance. The cargo never boards the drifting ship."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Some words are natural signs after all, so the rule fails at the edges.",
                "feedback": "Right verdict, wrong rescue. A groan or a cry signifies naturally, but a word as such, a nomen, holds by appointment; the edge cases are not words in the appointed sense. The real error in the claim lies in what appointment governs: the vehicle, never the cargo."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Appointment fixes which sound carries the nature; the nature carried was never on the ballot.",
                "feedback": "Respondeo: convention picks the porter, not the luggage. English says smoke, Spanish says humo, and one identical nature rides in both. The realist nail of the module: what words mean is appointed; what the meanings are of is not."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `m11-l4`,
      num: `IV`,
      title: `How a Word Carries Its Meaning`,
      latin: `modus significandi`,
      tag: `modus significandi`,
      fin: {
        tag: `modus significandi`,
        heading: `The cargo and the packaging.`,
        body: `Every name, every <span class="lat">nomen</span>, ships a perfection inside a creaturely crate. The <span class="lat">res significata</span> is the cargo: the thing or perfection the name signifies. The <span class="lat">modus significandi</span> is the packaging: the manner of signifying, cut to the shape of the creatures we learned our words among. Said of God, the cargo can hold properly, and more properly than it holds of creatures; the packaging never does (ST I q.13 a.3). This is the hinge on which the whole doctrine of naming God will turn when the course reaches analogy; oil it now. Next lesson: the same word, sent on different errands.`,
        distinction: {
          latin: `res significata  ·  modus significandi`,
          english: `the thing signified  ·  the mode of signifying`,
          gloss: `Every name ships a perfection in a creaturely crate: said of God, the cargo can hold properly, the packaging never does.`,
          motif: `cup-water`,
        },
      },
      questions: [
        {
          id: `m11-l4-q1`,
          type: "mcq",
          stem: `Say dog, and your friend thinks of dogs. No dog entered the room, and none was needed. What did the word touch first?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The thing itself, directly: words hook the world without intermediaries.",
                "feedback": "Then the hook returned empty: the room stayed dogless while the meaning arrived anyway. A word that reached things directly would fail wherever the thing was absent, and words do their best work precisely in absence. Something nearer received the call."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Her memory of particular dogs, reviewed one by one until a match surfaced.",
                "feedback": "No parade occurred; ask her. The word landed on dog as such before any particular trotted forward, and it would have landed the same for a listener who never owned one. What received the word was one universal grasp, not a kennel of memories."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Her conception of dog, immediately; the thing itself by means of it.",
                "feedback": "Respondeo: vocal sounds signify the conceptions of the intellect immediately, and things by means of them; so Aquinas, reading Aristotle (In Periherm. I, lect. 2). The word is a nomen, a name: a sound appointed to a conception, and the conception, formal sign that it is, hands on the thing. The triangle stands: word, concept, thing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing; the sound merely triggered a trained habit of imagining.",
                "feedback": "A habit of imagining what? The answer smuggles back the very conception it hoped to fire. Triggers explain that a response occurred, never that it was about dogs. Aboutness is the whole cargo, and habits carry it only on a conception's behalf."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m11-l4-q2`,
          type: "mcq",
          stem: `Every name carries two things: the <span class="lat">res significata</span>, the perfection it signifies, and the <span class="lat">modus significandi</span>, the manner in which it signifies, borrowed from the creatures we learned it among. Now the test. When the Psalmist calls God good, what belongs to God, and what smells of creatures?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The perfection signified belongs to God properly; the creaturely manner of signifying does not.",
                "feedback": "Respondeo, with the Summa's own words: as regards what is signified by these names, they belong properly to God, and more properly than they belong to creatures; but as regards their mode of signification, they do not properly and strictly apply to God (ST I q.13 a.3). The cargo is His. The crate is ours."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Both belong to God; Scripture would not hand God a fingerprinted word.",
                "feedback": "Scripture hands God the words we have, and all our words are fingerprinted; we learned good on cakes and dogs and mothers, and the manner keeps the receipts. Inspiration guarantees the cargo, not a creatureless packaging. Even the Psalmist ships in crates."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither belongs; good is said of God only as a courteous fiction.",
                "feedback": "Courtesy would be a strange foundation for the praise of the Church at every altar. The tradition claims more: goodness belongs to God more properly than to any creature we learned the word from. What limps is only the manner of the saying, and a limp is not a lie."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The manner belongs to God; the perfection stays below with us.",
                "feedback": "Inverted at both ends. The manner is precisely the creaturely part, finite, received, composed; the perfection is precisely what ascends. Keep the hinge straight: res to God, modus to us, and every hymn becomes sayable without blushing."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m11-l4-q3`,
          type: "fill_blank",
          stem: `Set the hinge. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">A name carries the thing <span class="fb-blank" data-blank="b1">______</span> and the mode of <span class="fb-blank" data-blank="b2">______</span>; of God, the first may hold <span class="fb-blank" data-blank="b3">______</span>, the second never does.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "signified"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "signifying"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "properly"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "signified",
              "imagined",
              "signifying",
              "sounding",
              "properly",
              "loudly",
              "natively",
              "poetically"
            ],
            "feedback": {
              "all_correct": "Locked: signified, signifying, properly. The cargo can be divine; the packaging is always ours. Keep this hinge oiled: the analogy of being will hang its whole weight on it.",
              "partial_correct": "Some blanks resisted. The res significata and the modus significandi part company exactly where naming gets serious: the perfection may belong to God properly; the manner never sheds its creaturely cut."
            }
          },
        },
        {
          id: `m11-l4-q4`,
          type: "mcq",
          stem: `Scripture calls God a rock, and calls God good. The tradition reads the two words differently. Why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Rock is pagan inheritance, while good arrived by revelation.",
                "feedback": "Both arrived in the same Psalter, often in the same verse. Pedigree is not the principle here; the tradition sorts the two by what each name signifies, not by which shelf it came from. Look inside the words."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Rock is poetry and asserts nothing; good is prose and asserts everything.",
                "feedback": "The metaphor asserts plenty: a faithfulness you can build on, tested and load-bearing. Poetry is not exempt from truth; it signifies by likeness of effect, and signifies truly. The difference the tradition marks is in the names' own cargo, not in their literary manners."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No difference; both fail equally before God, and equally succeed.",
                "feedback": "Flat democracy among names sells the good ones short. The tradition ranks them: some names never shed the creature; some carry a perfection fit to ascend. A grammar that cannot tell rock from good will not survive its first hymn."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Rock includes its creaturely mode in the very thing it signifies; good does not.",
                "feedback": "Respondeo: rock signifies a perfection, steadfastness, only as embodied in mineral: matter is written into the cargo itself, so the name applies to God metaphorically and no further. Good signifies its perfection absolutely, so it can be said of God properly while its manner still limps (ST I q.13 a.3). Some crates can be opened; some names are all crate."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m11-l4-q5`,
          type: "true_false_with_reason",
          stem: `True or false: "Since our mode of signifying always limps before God, the reverent course is silence."`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. What cannot be said cleanly should not be said at all.",
                "feedback": "Then the Psalter closes, and every altar goes quiet, on a scruple about packaging. The tradition heard this counsel and declined it: the perfections really belong to God, and what really belongs may really be said, limp and all."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "FALSE. The thing signified holds where the mode fails: affirm the perfection, deny the manner.",
                "feedback": "Respondeo: the tradition's grammar in one motion: say God is good, unsay the creaturely manner, and intend the perfection beyond both saying and unsaying. Silence would surrender the cargo to spare the crate. Speech, disciplined by this hinge, delivers it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "TRUE. Silence at least commits no errors of mode.",
                "feedback": "It commits the larger error: dropping cargo that belongs to God more properly than to any creature. A porter who abandons the luggage to keep the crates unscuffed has misunderstood his employment. The mode is corrigible in speech; the loss is not corrigible in silence."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Careful definition can scrub the creaturely mode from our words entirely.",
                "feedback": "Right verdict, impossible remedy. No creature speaks modelessly; definitions are made of the same fingerprinted words they polish. The cure is not pure speech but honest grammar: affirm the res, deny the modus, and know which is which."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m11-l4-q6`,
          type: "mcq",
          stem: `A child prays: God listens to me. A philosopher mutters: God has no ears. Referee the exchange.`,
          latin_tag: `modus significandi`,
          doctrine_line: `In every name, the thing signified and the mode of signifying must be judged apart.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The child errs; prayer goes out to a being beyond all listening.",
                "feedback": "Beyond the organs of listening, not beyond the perfection of receiving her. Strip the child's sentence to its cargo and it is sound doctrine: her prayer is heard, more surely than any hearer on earth hears anything. Correct her mode when she is older; her res is in order."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The philosopher errs; to deny the ears is to deny the attention.",
                "feedback": "Only if attention were made of ears, which would be hard news for the angels. His denial strikes the packaging: organs, sequence, a head that turns. The perfection the child banks on passes his checkpoint untouched."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No quarrel: she affirms the thing signified, he denies the mode; both are right where they aim.",
                "feedback": "Respondeo: the child's cargo is true, God receives her prayer; the philosopher's denial strikes only the crate, ears and organs and turning heads. Res significata affirmed, modus significandi denied: the tradition's grammar lets both speak, and neither blush."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Both err; of God nothing true can be said either way.",
                "feedback": "The counsel of despair again, now refereeing. If nothing true were sayable, the philosopher's own sentence about the ears goes down with the child's prayer, and the referee's whistle with both. The hinge exists precisely so that speech about God can be true without being crude."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `m11-l5`,
      num: `V`,
      title: `What Words Stand For`,
      latin: `suppositio`,
      tag: `suppositio`,
      fin: {
        tag: `suppositio`,
        heading: `One word, many errands.`,
        body: `A man is at the door. Man is a species. Man has three letters. One appointed meaning, three errands: for the individual, for the nature as conceived, for the very word. The manuals call the errand <span class="lat">suppositio</span>, supposition: what a term stands for in a given use. The masters of the manual tradition, Peter of Spain and after him John of St. Thomas, sharpened this tool until arguments could be x-rayed with it; half the sophisms ever minted are supposition shifts wearing a syllogism's clothes. The creeds themselves lean on such care, for what a term stands for in God is the difference between confession and confusion; that door is named here with reverence and left shut. Next lesson gathers the whole kit.`,
        distinction: {
          latin: `suppositio`,
          english: `supposition`,
          gloss: `A man is at the door, man is a species, man has three letters: one meaning, three errands, and half of all sophisms are errand shifts.`,
          motif: `three-errands`,
        },
      },
      questions: [
        {
          id: `m11-l5-q1`,
          type: "mcq",
          stem: `Three sentences. A man is at the door. Man is a species. Man has three letters. One word, one dictionary entry, three different errands. What changed between them?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The word's meaning: three sentences, three senses, one spelling.",
                "feedback": "Three meanings would make the word equivocal, like bank and bank, and it is not; the dictionary entry never flickered. Something lighter than meaning changed hands. Watch what the word is standing for in each sentence, not what it means."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "What the word stands for in use: this man, the common nature, the word itself.",
                "feedback": "Respondeo: the manuals call it suppositio, supposition: the errand a term runs in a given sentence. At the door it stands for an individual; as a species it stands for the nature conceived; with three letters it stands for its own inky self. One meaning, three errands, no confusion, provided the reader is awake."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Only the grammar: subject in one, predicate structure in the others.",
                "feedback": "All three park the word in the subject's seat, so grammar draws no line here. Parsing tells you where the word sits, never whom it is working for. The difference lives in the standing-for, which grammar leaves unmarked."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nothing changed; all three say something about human beings.",
                "feedback": "The third says something about a word: count its letters and you are doing orthography, not anthropology. No human being has three letters, though several have three names. If nothing changed, that sentence would be a strange compliment to the race."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m11-l5-q2`,
          type: "distinction_application",
          stem: `Three standings, fixed. Personal supposition: the term stands for individuals under the nature (a man is at the door). Simple supposition: it stands for the nature itself as conceived (man is a species). Material supposition: it stands for the very word (man has three letters). Classify man in: Man has walked on the moon.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Simple: the achievement belongs to humanity as such.",
                "feedback": "Rhetoric loves that reading; logic checks the boots. Natures leave no boot prints, and humanity as conceived never left the library. The sentence is true because certain men made the trip, which is a different standing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Material: the word man rode along on the mission patch.",
                "feedback": "Whatever the patch said, the sentence is not about embroidery. Read materially it would mean a three-letter word walked on the moon, which would be news to philology. The standing here reaches through the word to walkers."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Personal, but for the nature rather than for anyone in particular.",
                "feedback": "A standing cannot be personal and for-the-nature at once; that is exactly the fence between personal and simple. The sentence needs walkers with names and heart rates. Choose the standing that supplies them, cleanly."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Personal: it stands for certain individuals, Armstrong leading.",
                "feedback": "Respondeo: the term runs a personal errand, standing for the men who made the trip; the nature stayed home and the word never left the page. Note the reach of the tool: one glance at the standing, and a sentence sorts itself before any dispute begins."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m11-l5-q3`,
          type: "distinction_application",
          stem: `Same three standings. Classify dodo in: The dodo is extinct.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Simple: extinction belongs to the kind; no individual bird was ever extinct.",
                "feedback": "Respondeo: each dodo was merely dead; only the nature ran out of bearers. Extinct is a predicate no individual can wear, so the term stands for the kind as conceived: simple supposition. The sentence mourns a species, not a specimen."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Personal: it stands for the last dodo, who took extinction with it.",
                "feedback": "The last dodo died, as its parents did; nothing about that bird was more extinct than its grandmother. Extinction dates from the death but predicates of the kind. A standing that lands on one bird cannot carry a predicate built for natures."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Material: the word dodo has fallen out of use.",
                "feedback": "The word is thriving; you have read it four times this minute. Materially the sentence would report a vocabulary loss, and English has suffered none. The loss was ontological: a nature with no remaining holders. That is the simple standing's territory."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Personal, distributed over all dodos past and present.",
                "feedback": "Distribute it and the sentence says each dodo is extinct, which was false of every one of them while it lived and confuses death afterward. Predicates like extinct, rare, and widespread refuse distribution; they are said of the kind. The manuals built the simple standing precisely for them."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m11-l5-q4`,
          type: "spot_the_fallacy",
          stem: `A confident syllogism: "Man is a species. Socrates is a man. Therefore Socrates is a species." Something slid between the premises. Find it.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The first premise is false: man is an animal, not a species.",
                "feedback": "In its own standing the premise is sound: man, taken for the nature as conceived, is indeed a species, as the logicians have said since Porphyry. Convict a premise only after checking what its term stands for. The crime scene is elsewhere."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The middle term changed its standing: the nature in the first premise, a man's predicate in the second.",
                "feedback": "Respondeo: caught at the border. In premise one, man supposits simply, for the nature; in premise two, personally, of an individual. One spelling, two errands, and a syllogism needs its middle term to run one errand twice. The slide is invisible to grammar and fatal to the argument."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nothing slid; logicians may call Socrates a species of one.",
                "feedback": "A species of one member is still a nature, and Socrates is not a nature; he is a bearer of one, with a snub nose. Charity toward conclusions is a virtue in friendship and a vice in logic. Audit the middle term instead."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The argument has four terms, because Socrates was never defined.",
                "feedback": "Closer than it looks, but the count goes wrong at the wrong term. The smuggled fourth term is man twice over, once for the nature and once for the individual; Socrates is innocent and needs no definition to stand trial. Name the shift where it happened."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m11-l5-q5`,
          type: "mcq",
          stem: `The average American family has 2.3 children. The Smiths are an American family. A visitor concludes: the Smiths have 2.3 children, one of them fractional. Diagnose.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The average family stands for a mathematical construction, not for any household; the standing shifted mid-argument.",
                "feedback": "Respondeo: in the first sentence the term supposits for a statistical entity, a nature of the number-cruncher's making; in the second, personally, for the household at number 12. The visitor marched a construct's predicate onto real children. Modern data-talk mints such entities daily, the average user, the typical voter; the manuals' old tool reads them cleanly."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The premises are false: no family has 2.3 children, so the average lies.",
                "feedback": "The average tells the truth about what it stands for, which was never a household. Averages are honest constructions; the dishonesty entered with the reader who re-addressed the predicate. Save the indictment for the inference."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The Smiths are simply not average enough for the inference to hold.",
                "feedback": "No family could be average enough; the average family has no address to deliver the children to. The failure is not a shortfall in the Smiths but a change of standing between premises. More typical Smiths would rescue nothing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Sound, if morbid: statistics has always permitted fractional children.",
                "feedback": "Statistics permits fractional means, which live in the construction; children live in households and come in whole numbers only. Granting the conclusion mistakes the ledger for the nursery. The tool for saying why, precisely, is supposition."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m11-l5-q6`,
          type: "true_false_with_reason",
          stem: `True or false: "When a term's supposition shifts, its signification has changed too."`,
          latin_tag: `suppositio`,
          doctrine_line: `Signification is the term's appointed meaning; supposition is what it stands for in this use.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Standing and meaning are one; a new errand is a new word.",
                "feedback": "Then man in this lesson has been four words, and the dictionary a massive undercount. The errands multiplied while the entry sat still. Whatever shifted, it was lighter than meaning; it was the standing the sentence assigned."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Dictionaries list the suppositions as separate senses, which settles the identity.",
                "feedback": "Dictionaries list significations; no entry for man reads: 2. the word man itself. Errands do not get entries, because any term can run any of them without notifying the editors. The listing habit proves the opposite of the claim."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Signification changes daily while supposition never changes; the claim inverts the truth.",
                "feedback": "Right verdict, scrambled reason. Supposition changes sentence by sentence; that is its whole charm and danger. Signification is the slower partner, drifting by decades. The claim's error was marrying the two, not misassigning their tempos in reverse."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Signification is the appointed meaning; supposition is the errand this use sends it on. One meaning, many errands.",
                "feedback": "Respondeo: the appointment stands while the errands vary, which is exactly why the shifts are easy to miss and profitable to catch. A term keeps its signification the way a servant keeps his name, whatever house he is sent to today."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `m11-l6`,
      num: `VI`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `Ite ad res: go to the things.`,
        body: `The kit, assembled. A <span class="lat">signum</span> represents something other than itself to a knowing power. The concept is the <span class="lat">signum formale</span>, never known first; every other sign is instrumental, a thing before it is a message. Bonds come from nature or by appointment, <span class="lat">ad placitum</span>; words signify conceptions immediately and things by their means; every name parts into <span class="lat">res significata</span> and <span class="lat">modus significandi</span>; and <span class="lat">suppositio</span> names the errand a term runs in this sentence. All of it guards one truth: signs serve knowing, and knowing lands on things. The course now turns from knowing to wanting, for the good, once apprehended, moves. Next module: appetite, will, and the eleven passions.`,
        distinction: {
          latin: `signum formale  ·  instrumentale`,
          english: `formal sign  ·  instrumental sign`,
          gloss: `Every other sign takes the stage before it points; the concept never does: pure servant, that by which and never what is known first.`,
          motif: `window-view`,
        },
      },
      questions: [
        {
          id: `m11-l6-q1`,
          type: "match_pair",
          stem: `The module in four exhibits. Match each to its title.`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "smoke over the ridge"
              },
              {
                "id": "L2",
                "text": "the word smoke"
              },
              {
                "id": "L3",
                "text": "your concept of smoke"
              },
              {
                "id": "L4",
                "text": "smoke in: smoke is one syllable"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "natural sign, known first, bonded by causes"
              },
              {
                "id": "R2",
                "text": "conventional sign, known first, bonded by appointment"
              },
              {
                "id": "R3",
                "text": "formal sign, never known first"
              },
              {
                "id": "R4",
                "text": "a term in material supposition, standing for itself"
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
              "all_correct": "Four exhibits, four titles, one museum of the module. The same wisp of smoke has now served as cause's herald, convention's cargo, the mind's own glass, and a specimen in a jar. Mastery of signs is knowing which service is on duty.",
              "partial_correct": "Some exhibits mislabeled. Run the two questions from Lesson 3, then the standing question from Lesson 5: known first or known-through? Bonded by nature or appointment? And what is the term standing for in this use?"
            }
          },
        },
        {
          id: `m11-l6-q2`,
          type: "mcq",
          stem: `Of the module's whole inventory, which sign never once takes the stage before pointing beyond itself?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The natural sign, since nature never performs for an audience.",
                "feedback": "Nature performs constantly; the smoke is seen, gray and drifting, before the fire is known. Natural describes the bond's source, not a talent for invisibility. The unstaged sign is sorted by the other cut."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The concept: pure servant, that by which the mind knows, never its first object.",
                "feedback": "Respondeo: the signum formale, the module's summit. Every other sign is a thing before it is a message; the concept is message all the way through, the glass never seen, the servant never met. Lose this and the mind seals itself into a gallery; keep it and knowing lands on things."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The sacrament, whose sacred cargo no sense could stage.",
                "feedback": "Reverently wrong: the sacramental sign is sensible by requirement, water you can feel and bread you can see, precisely so the invisible cargo has a visible bearer. It is a most noble instrumental sign. The unstageable one is nearer than the altar: it is in the knower."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The spoken word, which vanishes as it is uttered.",
                "feedback": "Vanishing is not the same as never appearing; the word is heard as a sound in the very act of vanishing. Brief tenure on stage is still tenure. Only one sign in the inventory holds no ticket to the theater at all."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m11-l6-q3`,
          type: "fill_blank",
          stem: `The module's two hinges, restored. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">Vocal sounds signify the <span class="fb-blank" data-blank="b1">______</span> of the intellect immediately, and <span class="fb-blank" data-blank="b2">______</span> by means of them; and in every name, the thing <span class="fb-blank" data-blank="b3">______</span> parts from the mode of signifying.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "conceptions"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "things"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "signified"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "conceptions",
              "images",
              "things",
              "sounds",
              "signified",
              "imagined",
              "spoken",
              "desired"
            ],
            "feedback": {
              "all_correct": "Locked: conceptions, things, signified. The triangle stands, word to conception to thing, and the hinge holds, cargo apart from crate. Between them they keep speech honest about the world and about God.",
              "partial_correct": "Some blanks resisted. The word touches the conception first and the thing through it (In Periherm. I, lect. 2); and the res significata parts from the modus significandi wherever naming gets serious (ST I q.13 a.3)."
            }
          },
        },
        {
          id: `m11-l6-q4`,
          type: "mcq",
          stem: `An astronomer objects to the hymn that calls God high above the heavens: there is no above in space, she says. What has she caught, and what has she missed?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Caught nothing; hymns are licensed poetry and immune to astronomy.",
                "feedback": "Licensing poetry to say false things cheapens the hymnal faster than any telescope. The hymn means something true and the astronomer has genuinely noticed something about how it says it. Give her the half she has earned; then name the half she dropped."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Caught the mode of signifying; missed the perfection it carries, an excellence no altitude measures.",
                "feedback": "Respondeo: high ships eminence inside a spatial crate, and she has x-rayed the crate: no above, granted. The cargo, an excellence surpassing every creature, passes her instruments untouched, being no more spatial than truth is. Res affirmed, modus denied: the hymn survives with its grammar showing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Caught the hymn in an error the tradition should quietly correct.",
                "feedback": "The tradition wrote the hymn knowing exactly this, and kept it; the Psalms had said higher things less spatially defensible for three thousand years. What needs correcting is not the line but the reading that takes packaging for cargo. The grammar for that correction is this module's fourth lesson."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Caught the perfection itself; divine excellence was always a spatial idea.",
                "feedback": "If excellence were spatial, orbit would improve character and pilots would outrank saints. The perfection was never altitude; altitude was the borrowed manner. Her objection reaches the manner and stops, which is precisely as far as it should go."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m11-l6-q5`,
          type: "mcq",
          stem: `One more visitor: "Dinosaurs are extinct. Rex here is a dinosaur, the museum's finest. Therefore Rex is extinct." Where did the argument die?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Between the premises: dinosaurs stood for the kind, then the predicate marched onto an individual skeleton.",
                "feedback": "Respondeo: extinct is a kind-sized predicate; in the first sentence the term supposits simply, for the nature, and Rex holds a personal standing no such predicate fits. The standing shifted and the inference stepped into the gap. Lesson five's whole art, in one museum visit."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In the first premise: extinction is a fiction of paleontology.",
                "feedback": "Tell it to the dodo. Extinction is as real as absence gets: a nature with no living bearers. The premise is sound in its own standing; the crime was committed downstream, when the predicate changed addresses."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "In the second premise: a skeleton is not truly a dinosaur.",
                "feedback": "A defensible scruple, and not the fatal wound; grant Rex full citizenship among dinosaurs and the conclusion still collapses. Even a living Rex would not be extinct while his kind was. The slide is in the standing of the middle term, not in the taxidermy."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Nowhere; the conclusion is odd but the logic is clean.",
                "feedback": "Clean logic requires the middle term to run the same errand twice, and this one changed employers between sentences. Odd conclusions from true premises are the alarm bell for exactly that. When the bell rings, audit the supposition."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m11-l6-q6`,
          type: "mcq",
          stem: `Last question of the module. What does the doctrine of signs hand the course going forward?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `Signs serve knowledge, and knowledge lands on things.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Proof that meaning is convention all the way down.",
                "feedback": "The module taught nearly the opposite: convention picks porters, nature owns the luggage, and the concept signifies by no one's appointment at all. A course that ended in convention-all-the-way-down would have sawed off the branch every lesson sat on."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Permission to treat concepts as the first objects of thought.",
                "feedback": "Permission expressly revoked in Lesson 2, on pain of the sealed gallery. The concept serves unseen or the world goes behind glass. Whatever the course carries forward, it will not be the moderns' wallpaper."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A grammar that keeps knowing landed on things, and the name's hinge ready for analogy.",
                "feedback": "Respondeo: the formal sign keeps the mind's instruments transparent to the world; the res and modus hinge keeps names honest about God; supposition keeps arguments honest about everything. Tools, all of it, and the deepest tool waits: when the course reaches the analogy of being, this module's fourth lesson does its real work."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A method for replacing things with their signs wherever things are scarce.",
                "feedback": "Signs that replaced things would be usurpers, and the first lesson demoted them to servants on day one. The whole art exists so that the mind, riding its signs, arrives at what is. Scarcity of things is a problem for economics; semiotics delivers you to the world, not from it."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    }
  ],
};
