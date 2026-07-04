import type { ModuleMeta } from '../types';

export const m5: ModuleMeta = {
  id: 5,
  title: `Substance, Suppositum, Person`,
  short: `Substance, Suppositum, Person`,
  label: `Module 5 · Substance, Suppositum, Person`,
  latin: `Substantia, Suppositum, Persona`,
  aim: `Substance exists in itself; accidents exist in another. The complete individual that bears the nature and acts is the suppositum; a suppositum of a rational nature is a person.`,
  lessons: [
    {
      id: `m5-l1`,
      num: `I`,
      title: `In Itself or In Another`,
      latin: `substantia  ·  accidens`,
      tag: `substantia  ·  accidens`,
      fin: {
        tag: `substantia  ·  accidens`,
        heading: `Two ways to be: in yourself, or in another.`,
        body: `<span class="lat">Substantia</span> exists in itself; <span class="lat">accidens</span> exists in another, as the tan in Socrates and the grin in the cat. The substance is no hidden peg under its features: it is the knowable thing itself, showing itself through them. Next: among substances, the one who owns the deeds.`,
      },
      questions: [
        {
          id: `m5-l1-q1`,
          type: "mcq",
          stem: `Socrates comes back from Corinth with a tan. Something new is in the room. Is it a second thing, alongside Socrates?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: the tan is a thing, just a thin one that clings to a host.",
                "feedback": "A thing that cannot exist except in a host is not a roommate; it is a feature. The tan has no career of its own to pursue. Its whole way of being is to be of Socrates."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: one thing, newly modified; the tan exists in him, not beside him.",
                "feedback": "Respondeo: one thing, modified. The tan is real, but its whole way of being is to be in another. Socrates' way of being is to be in himself. Two modes of being, and that distinction is this module's floor."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes: strictly, every feature is a thing, so Socrates is a well-organized crowd.",
                "feedback": "Then nothing would own the features, and 'Socrates is tanned' would have no subject. A crowd needs someone to be a crowd of. The features are real; their mode of being is borrowed."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: the tan is nothing real, only a way of describing light on skin.",
                "feedback": "Too far the other way. The tan is a real determination of real skin; deny accidents reality and every change becomes a change in observers. The middle path: real, but real-in-another."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l1-q2`,
          type: "mcq",
          stem: `In <em>Alice in Wonderland</em>, the cat fades away and leaves its grin hanging in the air. Everyone smiles at the trick. What rule must break for the joke to work?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Animals cannot fade by degrees; a substance is there or it is not.",
                "feedback": "A fair instinct, and a real question about substances. But the laugh does not come from the fading; it comes from what gets left behind, hanging there with nothing to hang on."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A whole cannot lose all its parts and remain a whole.",
                "feedback": "The grin is not a part the way a paw is; you cannot bury a grin. It is a determination of the cat's face, which is why its solo career is the joke."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Grins are private mental events and cannot hang anywhere.",
                "feedback": "The grin is as public as the cat; Alice sees both. What it cannot do is outlive its bearer, and that impossibility is the engine of the scene."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A modification cannot outlast the thing it modifies.",
                "feedback": "Respondeo: the grin's whole being is to be of the cat, in the cat. Carroll lets it stay after its bearer goes, and the absurdity is a metaphysical rule made funny: what exists in another cannot be left behind by it."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m5-l1-q3`,
          type: "mcq",
          stem: `A modern philosopher pictures substance as a bare pincushion: an unknowable something underneath, with all the features pinned on. Is that the doctrine you just learned?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: beneath every feature sits a featureless carrier we never meet.",
                "feedback": "That picture makes substance unknowable by construction and then complains it cannot be known. The accidents are how the substance shows itself, not a screen pulled in front of it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Yes, except the pincushion could in principle be found by instruments.",
                "feedback": "No instrument finds a featureless carrier, because detection runs on features. The repair fails for the same reason the picture does: substance is not an extra item under the thing. It is the thing."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "No: substance is the knowable thing itself, the cat, not a hidden peg in it.",
                "feedback": "Respondeo: the cat itself. Substance is not a mystery layer beneath the thing; it is the thing, in its mode of existing in itself. You meet substances all day long. What you never meet is a free-floating tan."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: there is no substance at all, only the pins.",
                "feedback": "Pins with no cushion are a heap in the air. Features without a bearer is the grin without the cat, and you have already laughed at that."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m5-l1-q4`,
          type: "distinction_application",
          stem: `Four items from one morning: the dog, the dog's bark, the dog's brown, the dog's place on the rug. Which one exists in itself?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The dog.",
                "feedback": "Respondeo: the dog. Bark, brown, and being-on-the-rug are all of the dog, in the dog as their subject. Each is real; none stands alone. One substance, variously dressed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The bark: the sound carries on after the dog falls silent.",
                "feedback": "The echo is air doing things; the bark was the dog doing things. An action is of its agent through and through. Nothing here stood on its own except the one barking."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The brown: the color stays constant even while the dog sleeps.",
                "feedback": "Constant, but never freestanding. There is no brown loose in the room; there is a brown dog. Constancy is not independence."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The place: the spot on the rug remains when the dog leaves it.",
                "feedback": "The rug remains; the dog's being-there does not. The spot was never a thing the dog had alongside itself; it was the dog's own where, and it left with him."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l1-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>Since we only ever perceive a thing's accidents, its substance must remain unknowable.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `substantia  ·  accidens`,
          doctrine_line: `Substance exists in itself; accidents exist in it.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Knowledge stops at the surface the senses touch.",
                "feedback": "If knowledge stopped at surfaces, you could never tell a dog from a convincing dog-shaped arrangement. You can. The surface is where knowing starts, not where it stops."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Only what is directly sensed is ever known at all.",
                "feedback": "That principle would also delete numbers, natures, and the principle itself, which no one has ever sensed. The senses feed the intellect; they do not fence it in."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Accidents are effects of the substance and make it known, as smoke makes fire known.",
                "feedback": "Respondeo: the accidents are not a curtain; they are the substance showing itself. Aquinas says it plainly: proper accidents are effects of the substantial form and make it known. You know the dog through the bark and the brown, and it is truly the dog you know."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. We perceive substances directly and merely infer the accidents.",
                "feedback": "It happens in one act, not two: in seeing the brown you see the dog. But the accidents are not inferred afterthoughts; they are the very showing through which the substance is given."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
    {
      id: `m5-l2`,
      num: `II`,
      title: `The One Who Has the Nature`,
      latin: `suppositum`,
      tag: `suppositum`,
      fin: {
        tag: `suppositum`,
        heading: `Deeds need a doer, and the doer is the whole.`,
        body: `The <span class="lat">suppositum</span>: the complete individual that has the nature, bears the accidents, and does the deeds. <span class="lat">Actiones sunt suppositorum</span>: actions belong to supposits, never to natures and never to parts. The nature answers what; the suppositum is the which-one. Next: the supposits that earn a higher name.`,
      },
      questions: [
        {
          id: `m5-l2-q1`,
          type: "mcq",
          stem: `April 15. Human nature owes nothing; John owes a painful sum. Yet John is human through and through. Who exactly pays the tax?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "John, the complete individual; natures do not write checks.",
                "feedback": "Respondeo: John pays. The nature is what he is, and it answers a different question than who he is. Deeds, debts, and signatures attach to the concrete individual. The tradition has a name for him, and it is the next step."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "His human nature, since whatever John does, it does.",
                "feedback": "Run it the other way and the trouble shows: if the nature paid, every human would be paying John's taxes, since the nature is common. The payer is the individual, not the what."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Neither: paying is a legal fiction with no metaphysical subject.",
                "feedback": "The IRS is untroubled by this theory, because the money arrives from someone. However legal the framework, the act has a real agent, and it is the individual man."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Humanity in general, apportioned to John for the occasion.",
                "feedback": "Humanity holds no accounts and signs nothing. What is common cannot do the deeds of one; only the one can. The grammar of doing points at an individual every time."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l2-q2`,
          type: "mcq",
          stem: `The complete individual that has the nature, bears the accidents, and does the deeds: the <span class="lat">suppositum</span>. The tradition's axiom: <span class="lat">actiones sunt suppositorum</span>, actions belong to supposits. When the dog bites the postman, what bit him?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The dog's canine nature, expressing itself.",
                "feedback": "Natures bite no one; biters bite. The nature explains why biting was in the repertoire. It does not hold the leash on any particular deed."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The dog's teeth, strictly speaking.",
                "feedback": "The teeth are the instrument. If teeth bit on their own account, the dog could plead innocence. Parts act in virtue of the whole; the whole is what acts."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The dog, the whole individual.",
                "feedback": "Respondeo: the dog. Not its nature (natures act in no court), not its teeth (parts are instruments of the whole), not an event hovering between them. The suppositum acts. This is why the postman is angry at the dog and not at caninity."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The biting event itself, in which the dog merely participates.",
                "feedback": "Events do not act; agents act, and events are their acting. Subtract the dog from the event and nothing is left to participate in anything."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m5-l2-q3`,
          type: "mcq",
          stem: `Two questions about the same scene: 'What is that?' and 'Which one is that, the one that did it?' Which question does the nature answer?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The second: nature is what picks out the individual.",
                "feedback": "Nature is exactly what cannot pick out the individual, because it is common to all of them. Point at the culprit with 'human' and every human is indicted."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The first: nature says what a thing is.",
                "feedback": "Respondeo: nature answers what; the suppositum is the who, the which-one. Keep the two questions apart and half the grammar of classical theology comes free. Collapse them and neither question can be asked cleanly."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Both equally: the two questions are one question, twice phrased.",
                "feedback": "Ask them about the twins and watch the answers split: one what, two which-ones. Questions that can receive different answers are different questions."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Neither: only proper names answer questions like these.",
                "feedback": "Names are labels for answers, not the answers themselves. Before John was named, there was already a what (human) and a which-one (this child). The metaphysics precedes the christening."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l2-q4`,
          type: "distinction_application",
          stem: `Four sentences. Three keep the grammar straight; one quietly treats a nature as if it could act. Which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "John signed the contract.",
                "feedback": "Perfectly ordered: a suppositum, doing a deed that is his. Nothing to repair here; look for the sentence whose subject could never hold a pen."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The dog buried the bone.",
                "feedback": "A suppositum at work, all grammar intact. The doer is a complete individual, the deed is his. The faulty sentence has a subject no leash could hold."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The twins boarded different trains.",
                "feedback": "Two supposits, two deeds, one nature nowhere acting: exactly right. The sentence you want gives the deed to something that cannot do deeds."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Human nature rebelled against the new law.",
                "feedback": "Respondeo: natures rebel against nothing; rebels do. The sentence works as a figure of speech, and figures are fine while you can cash them: it means many humans rebelled. Forget the cashing and you start expecting natures to act, which is how grammar becomes bad metaphysics."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m5-l2-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>When John walks, it is strictly his legs that walk.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `suppositum`,
          doctrine_line: `Actions belong to the suppositum: the complete individual that has the nature.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The legs do the work, so the legs perform the act.",
                "feedback": "Doing the work and owning the act are different offices. The pen does the writing's work; no one congratulates the pen. Instruments serve acts that belong to another."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The whole is nothing over and above its working parts.",
                "feedback": "A serious position, and the module's standing opponent. If the whole were nothing extra, no one would walk: legs would move, severally. Someone walks. The whole is back on duty."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. John walks with his legs; actions belong to the whole suppositum, not to parts.",
                "feedback": "Respondeo: John walks, with his legs as instruments. A part keeps no ledger of deeds; the hand does not sign, the signer signs by hand. <span class=\"lat\">Actiones sunt suppositorum</span>, and the suppositum is the whole man."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Walking belongs to human nature, which walks in John.",
                "feedback": "Then the nature would be out walking in every human at once, which is a lot of exercise for a what. The nature explains that John can walk; the walking is John's own."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
    {
      id: `m5-l3`,
      num: `III`,
      title: `Person`,
      latin: `persona`,
      tag: `persona`,
      fin: {
        tag: `persona`,
        heading: `An individual substance of a rational nature. You have been one all along.`,
        body: `Boethius's definition, kept by the whole tradition: <span class="lat">naturae rationalis individua substantia</span>. Among supposits, those with dominion over their own acts hold a rank of their own, and the rank is not a score: no degrees, no performances, no borrowed titles. Next: the distinction between nature and person, held apart where it matters most.`,
      },
      questions: [
        {
          id: `m5-l3-q1`,
          type: "mcq",
          stem: `A rock rolls because the hillside pushed it. A dog bites because instinct moved it. John apologizes because he weighed his evening and chose. Which doer holds dominion over its own act?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "All three equally: each was caused to move.",
                "feedback": "Caused, yes, but not alike. The rock receives its motion, the dog supplies its own, and John commands his. Flattening the three into 'caused' hides the most interesting staircase in nature."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "John and the dog, since both act from within.",
                "feedback": "The dog acts from within, which already ranks it above the rock. But it does not weigh its act and choose; it follows the strongest pull. Self-movement is not yet self-dominion."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "None: dominion is an illusion bred by ignorance of causes.",
                "feedback": "The course will meet this argument properly at the will, in a later module. For now, notice the datum it must explain away: John deliberating over his evening is not the hillside pushing."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "John alone: he could have done otherwise, and knew it.",
                "feedback": "Respondeo: John. The rock is moved; the dog moves itself but holds no court over its options; John deliberates and commands his own act. Aquinas marks this as the special perfection of rational substances: dominion over their own actions. Such beings get a name of their own."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m5-l3-q2`,
          type: "mcq",
          stem: `Boethius set the definition the whole tradition kept: <span class="lat">naturae rationalis individua substantia</span>, an individual substance of a rational nature. A person. Which words in the definition carry the dignity?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "'Individual': the dignity is in being one of a kind.",
                "feedback": "Every pebble on the beach is an individual, and the beach is not a hall of dignitaries. Individuality is the precondition; the elevation comes from elsewhere in the definition."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "'Rational nature': a nature open to truth and master of its acts sets the rank.",
                "feedback": "Respondeo: rational nature. Every pebble is an individual substance; nothing follows for its dignity. What elevates is the kind of nature subsisting: one open to truth, with dominion over its own acts. Hence Aquinas can say that person signifies what is most perfect in all of nature."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "'Substance': existing in itself is the whole of the honor.",
                "feedback": "Existing in itself is the entry fee, paid by every dog and every stone. Substance gets you into the genus; it does not get you the name."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No single words: the definition lists conditions without ranking them.",
                "feedback": "The conditions are not peers. Subtract 'rational' and a complete individual substance remains, namely the dog, and no one issues it rights. The definition has a load-bearing wall."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l3-q3`,
          type: "mcq",
          stem: `Modern charters speak of human dignity as something every person has equally, never by degrees. On Boethius's definition, why can 'person' not come in percentages?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because one either subsists in a rational nature or does not; there is no sixty percent.",
                "feedback": "Respondeo: personhood is a mode of being, not a performance score. A substance either subsists in a rational nature or it does not. Sleep, infancy, and injury change what a person can currently do, never whether one is there. The charters are borrowing metaphysics, whether they know it or not."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because law requires equality, and metaphysics politely obliges.",
                "feedback": "The borrowing runs the other way. Law can decree equal treatment; it cannot decree what persons are. The equality holds because the underlying fact does not come in amounts."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because degrees belong to quantities, and dignity is a quality.",
                "feedback": "Qualities take degrees famously well: water gets hotter, skill gets sharper. The reason personhood cannot is not its category but its kind: it is a mode of subsisting, not a feature that varies."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because every nature is exactly equal to every other nature.",
                "feedback": "The tradition cheerfully ranks natures: rational above sensitive, sensitive above vegetative. The equality of persons holds within the rational kind, because subsisting in it is all or nothing."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l3-q4`,
          type: "mcq",
          stem: `The law calls a corporation a person: it owns, sues, and is sued. Boethius would say the title is borrowed. Why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A corporation is too large to be an individual substance.",
                "feedback": "Size is no objection; whales are individual substances of considerable tonnage. The trouble is not how big the corporation is but what kind of unity it has, and it has the unity of an arrangement."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "A corporation has no rational nature of its own; it acts only through real persons.",
                "feedback": "Respondeo: personhood by analogy. The corporation is an office built from the deeds of real persons: useful fiction, honestly labeled. When the label drifts into metaphysics, remember which direction the borrowing ran."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Corporations are temporary, and persons must be permanent.",
                "feedback": "Persons are not defined by duration; a person of one day is a person entire. The defect lies elsewhere: in what kind of thing, if any, the corporation is."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The law may define person however it likes, so nothing is borrowed.",
                "feedback": "Law can stipulate for its purposes; that is the fiction's legitimate use. But stipulation does not mint new rational substances. The map borrowed from the territory."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l3-q5`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>'Person' names a bundle of performances: memory, self-awareness, plans for the future.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `persona`,
          doctrine_line: `A person is an individual substance of a rational nature.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Where those activities run, there is a person; where they stop, none.",
                "feedback": "A serious position with a famous pedigree, and it prices personhood by output. Its cost: you ceased to exist last night in dreamless sleep, and a stranger woke in your bed. The simpler account: the substance persisted, its acts paused."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. A person just is a continuity of consciousness over time.",
                "feedback": "Then every interruption is a death and every awakening a birth, and the man who forgets is no one. Consciousness is the person's act, not the person. Acts need an actor."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Person names the substance that can perform them, awake or asleep.",
                "feedback": "Respondeo: the substance, not the show. The performances come and go: dreamless sleep, anesthesia, the first year of life. The one who resumes them in the morning was there all night. A person is who you are, not what you are currently managing to do."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Memory and planning belong to the brain, not the person.",
                "feedback": "Assigning the acts to an organ repeats the mistake one level down: now the brain is the little person. Organs are instruments. The rememberer is the whole man, who remembers by his brain."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
    {
      id: `m5-l4`,
      num: `IV`,
      title: `You Are Not Your Nature`,
      latin: `natura  ·  persona`,
      tag: `natura  ·  persona`,
      fin: {
        tag: `natura  ·  persona`,
        heading: `What you are is shared. Who you are is not.`,
        body: `Nature and person held apart: the distinction Aquinas polished and the creeds require. Theology's doors are named: three persons, one nature; one person, two natures. The course does not enter; it makes the entrances sayable. One lesson remains in the formation block, and it looks back over everything.`,
      },
      questions: [
        {
          id: `m5-l4-q1`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Although the universal and particular exist in every genus, nevertheless, in a certain special way, the individual belongs to the genus of substance. For substance is individualized by itself; whereas the accidents are individualized by the subject, which is the substance; since this particular whiteness is called "this," because it exists in this particular subject. And so it is reasonable that the individuals of the genus substance should have a special name of their own; for they are called "hypostases," or first substances.</p><p>Further still, in a more special and perfect way, the particular and the individual are found in the rational substances which have dominion over their own actions; and which are not only made to act, like others; but which can act of themselves; for actions belong to singulars. Therefore also the individuals of the rational nature have a special name even among other substances; and this name is "person."</p><div class="cr-cite">Summa Theologiae I, q. 29, a. 1, co.  ·  trans. Fathers of the English Dominican Province  ·  verified against the New Advent text</div></div><br>Two steps build the ladder. What earns rational substances the second, higher name?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Dominion over their own actions: they can act of themselves.",
                "feedback": "Respondeo: dominion. Every substance is individual; only some command their own acts. The passage climbs in two steps: substances earn 'hypostasis' by subsisting in themselves; rational substances earn 'person' by self-command. Dignity, in this grammar, is a mode of agency."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Being individualized by themselves rather than by a subject.",
                "feedback": "That is true of every substance in the passage: substance is individualized by itself, accidents by their subject. It buys the first name, hypostasis. The second name needs more, and the more is dominion."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Having accidents nobler than the accidents of other substances.",
                "feedback": "The passage never weighs accidents against accidents. The elevation comes from how rational substances act, not from what they wear. Reread the second paragraph's hinge: made to act, versus acting of themselves."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Being particular at all, where other substances are universal.",
                "feedback": "The passage opens by granting particularity to every genus, and individuality to every substance. Particularity is the shared floor, not the higher rung. The rung is what rational substances do with their acts."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l4-q2`,
          type: "mcq",
          stem: `Your humanity is what you are. Are you your humanity?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: strip away the accidents and only the nature remains, which is you.",
                "feedback": "Strip away the accidents and what remains is still this individual, not humanity at large. You were never the what alone; you were always the one having it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: you are the one who has it; the nature is what you are, not who.",
                "feedback": "Respondeo: you have your nature; you are not identical with it. In material things the suppositum adds what the definition leaves out: this matter, these bones, this history. John is more than humanity; he is humanity received, here, once."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes, otherwise there would be two of you: a haver and a had.",
                "feedback": "No second you is needed. The haver is not a part standing beside the had; the suppositum is the whole, the nature its formal content. One being, two answers to two questions."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The question is about grammar, not about anything real.",
                "feedback": "The twins settled this: one nature really common, two bearers really distinct. Where the answers differ, the questions differ, and both are about the world."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l4-q3`,
          type: "mcq",
          stem: `The Church confesses one God in three persons, and Christ as one person in two natures. Whatever else those mysteries are, what must the words 'person' and 'nature' be, for the sentences even to be sayable?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Synonyms, used poetically for liturgical effect.",
                "feedback": "Make them synonyms and both confessions collapse into counting errors: three equals one, one equals two. The councils fought for these words across centuries precisely because they are not interchangeable."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Legal terms, defined by councils the way statutes define corporations.",
                "feedback": "The councils clarified usage; they did not invent the reality. The corporation borrows personhood from persons. The creeds were not borrowing; they were protecting a distinction already real."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Mysteries themselves, with no meaning philosophy can reach.",
                "feedback": "The mysteries exceed reason; the words do not. Aquinas's whole craft was keeping the sayable precise so that the unsayable could be confessed without contradiction."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Really distinct in meaning: what-something-is cannot be the same question as who-has-it.",
                "feedback": "Respondeo: the creeds lean their full weight on the distinction you just learned. Count natures and you answer what; count persons and you answer who. Three who, one what; one who, two whats. The mysteries are not proved by the metaphysics, and this course will not try. But without the grammar they could not even be said. This is the door, named with reverence and left for theology to enter."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m5-l4-q4`,
          type: "true_false_with_reason",
          stem: `The tradition calls the person <em>incommunicable</em>: not transferable, not shareable, not repeatable in another.<br><br>TRUE or FALSE: <em>Since all humans share one nature, what is deepest in you is interchangeable with everyone else.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `natura  ·  persona`,
          doctrine_line: `The nature is common; the person is incommunicable.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. The nature is the deep part, and the nature is common property.",
                "feedback": "The nature is deep and common, but it is not the deepest fact. The deepest fact is who has it, and that has no duplicates. Depth bottoms out in the person, not the kind."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Only accidents distinguish persons, and accidents are shallow.",
                "feedback": "The accidents do distinguish, and more than accidents: the suppositum itself is distinct. Calling everything beneath the surface common stock erases the who, and the who is the deepest fact about you."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The person is incommunicable: this who can never be another's.",
                "feedback": "Respondeo: incommunicable. The nature is common; the person is not a sample of it but its unrepeatable bearer. You are not an instance of humanity the way this penny instances copper. You are someone, and someone has no duplicates."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Each person owns a private nature that no one else shares.",
                "feedback": "Privatize the nature and the twins are no longer two of one kind, and 'we are all human' becomes false. The truth needs both halves: the what genuinely common, the who genuinely unrepeatable."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
    {
      id: `m5-l5`,
      num: `V`,
      title: `Recapitulatio Formationis`,
      latin: `recapitulatio formationis`,
      tag: `recapitulatio formationis`,
      fin: {
        tag: `recapitulatio formationis`,
        heading: `You now hold the whole frame: being, becoming, body, and the one who bears them.`,
        body: `Foundations gave the distinctions; four modules made them principles. Act and potency, essence and <span class="lat">esse</span>, matter and form, substance and accident, nature and person: not five facts but one grid, and you can now run it on anything that is. Everything after this is the frame put to work: the tools, the world, and the long argument at the end. <em>Proficiens</em>.`,
      },
      questions: [
        {
          id: `m5-l5-q1`,
          type: "match_pair",
          stem: `The formation block through its images. Match each to the distinction it taught. <em>Tap an image, then tap its principle. Tap a paired item to release it.</em>`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the apple on the table"
              },
              {
                "id": "L2",
                "text": "the sculptor's untouched marble"
              },
              {
                "id": "L3",
                "text": "the paper burned to ash"
              },
              {
                "id": "L4",
                "text": "the identical twins"
              },
              {
                "id": "L5",
                "text": "Socrates' tan"
              },
              {
                "id": "L6",
                "text": "John and his taxes"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "what it is and that it is: two distinct principles"
              },
              {
                "id": "R2",
                "text": "real capacity awaiting its act"
              },
              {
                "id": "R3",
                "text": "matter persisting under a new substantial form"
              },
              {
                "id": "R4",
                "text": "one nature, twice received in marked-out matter"
              },
              {
                "id": "R5",
                "text": "an accident: real, but only in another"
              },
              {
                "id": "R6",
                "text": "the suppositum: deeds belong to the whole individual"
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
              "all_correct": "All six. The apple split what from that; the marble waited for its act; the paper taught deep change; the twins parceled one nature; the tan lived in another; and John owned his deeds. Five modules, one grid.",
              "partial_correct": "Some images found their principles. Watch the two easiest swaps: the marble is about capacity and act, not about matter under new form; and the tan is about existing-in-another, not about what John does.",
              "per_pair_corrections": [
                {
                  "left_id": "L2",
                  "wrong_right_id": "R3",
                  "feedback": "The marble never changed substance; it waited, capable of the statue. Its lesson is potency before act. The new-substantial-form lesson belongs to the burned paper."
                },
                {
                  "left_id": "L3",
                  "wrong_right_id": "R2",
                  "feedback": "The paper did not wait for anything; it ceased, and matter carried through into ash. Capacity-awaiting-act is the marble's lesson."
                },
                {
                  "left_id": "L4",
                  "wrong_right_id": "R1",
                  "feedback": "The twins do not split what from that; they split one common what into two bearers by parceled matter. What-versus-that belongs to the apple."
                },
                {
                  "left_id": "L5",
                  "wrong_right_id": "R6",
                  "feedback": "The tan does no deeds; it sits in its subject. The deeds-belong-to-the-whole lesson is John's. The tan teaches the mode of being-in-another."
                },
                {
                  "left_id": "L6",
                  "wrong_right_id": "R5",
                  "feedback": "John is no accident; he is the suppositum, the one who has the nature and pays the bill. Being-in-another is the tan's lesson."
                }
              ]
            }
          },
        },
        {
          id: `m5-l5-q2`,
          type: "mcq",
          stem: `Take John whole. Matter and form compose his body; essence and existence compose his being; substance and accidents structure his day. Which composition did the course call the deepest, found in everything that is not God?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Matter and form.",
                "feedback": "Deep, but not deepest: it reaches only as far as bodies. The angels escape it entirely and are still composed beings. One composition reaches further down."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Substance and accident.",
                "feedback": "The shallowest of the three: the structure of a thing's day, not of its being. The tan comes and goes above a substance that itself rests on something deeper."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Essence and existence.",
                "feedback": "Respondeo: essence and existence, really distinct in every creature. Bodies have matter; angels have none; everything that is not God has an essence that is not its act of being. The deepest composition is the one nothing finite escapes."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Part and whole.",
                "feedback": "Parts and wholes organize quantity, not being as such. The compositions this course built run deeper: each pairs a receiving principle with a determining act, and one of those pairs reaches everything finite."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m5-l5-q3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>Death, for John, would be one more alteration: a larger tan.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Changes differ only in size, and this is the largest.",
                "feedback": "Size never crosses the line between depths. A thousand alterations do not add up to one corruption, because the difference is not amount but whether the subject survives."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. His matter would persist, so he would persist.",
                "feedback": "The matter persists in every corruption; that is what matter does. The paper's matter survived the fire, and the paper did not. Persistence of matter is not persistence of the man."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Death is an alteration of the soul rather than the body.",
                "feedback": "The soul is the body's form, not a separate substance taking the hit. Whether the form subsists is a later module's question, and a famous one. Even then, Aquinas says soberly: the separated soul is not the person."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. It would be a corruption: the loss of his substantial form, not a modification.",
                "feedback": "Respondeo: <span class=\"lat\">corruptio</span>, not <span class=\"lat\">alteratio</span>. The two depths of change, applied where they matter most. The tan came and went while John remained; death is not survived by its subject. What faith says next about John is another course; what reason says is already sober enough."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m5-l5-q4`,
          type: "mcq",
          stem: `Is John's soul John?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Yes: the body is luggage; the soul is the traveler.",
                "feedback": "The oldest rival picture, and the most comfortable. But a traveler with luggage is two things, and John is not two things. The body is not what he has; it is part of what he is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "No: John is the whole composite; the soul is its substantial form, part of what he is.",
                "feedback": "Respondeo: John is the composite. Aquinas drew the hard consequence himself: the separated soul is not the person; neither the definition nor the name belongs to it. Your soul is not the real you hiding in the flesh. You are the one, whole, standing creature. A later module opens this door wide."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Yes, at least after death, when nothing else of him remains.",
                "feedback": "Even then, Aquinas refuses the identification: what survives is a part of John, not John. The pull of this answer is strong and pious, and the tradition still says no."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No: John is his body; soul is an old word for its organization.",
                "feedback": "Organization is an arrangement, and arrangements are accidental forms: the corpse keeps the arrangement for a while and is not John. The soul names something deeper: the act by which this matter lives."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m5-l5-q5`,
          type: "mcq",
          stem: `After five modules, the sentence 'every person has a dignity nothing can revoke' is no longer a slogan. What grounds it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Subsistence in a rational nature: a who with dominion over its acts, never a what only.",
                "feedback": "Respondeo: the metaphysics carries the ethics. A person is an incommunicable subsistent of a rational nature; that is a fact about being, not a grade for output, a vote, or a feeling. Slogans borrow; you now own the collateral."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Consensus: enough signatures on enough charters make it so.",
                "feedback": "What signatures grant, signatures can withdraw, and revocable dignity is the thing the sentence denies. The charters are right; their ground lies deeper than their ink."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Performance: dignity tracks what a mind can currently do.",
                "feedback": "Then the sleeping, the infant, and the injured slide down the scale, which every sound conscience refuses. The refusal has a reason, and the reason is a mode of being, not a level of function."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Sentiment: we extend it because withholding it feels monstrous.",
                "feedback": "The feeling is evidence, not foundation. It feels monstrous because something real is being violated. Sentiment detects the dignity; subsistence in a rational nature is what it detects."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m5-l5-q6`,
          type: "mcq",
          stem: `The formation block in one sentence. Choose the one that says it right.`,
          latin_tag: `recapitulatio formationis`,
          doctrine_line: `Being, becoming, body, and the bearer: the formation is complete.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Everything is matter arranged in ever more complicated ways, and names mark our interests.",
                "feedback": "The arrangement story cannot tell the burned paper from the bent clip, or John from his corpse. You spent three modules learning exactly where it fails."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Being is one undivided whole; all distinctions are the mind's conveniences.",
                "feedback": "A venerable position, as old as Parmenides, and the apple already refused it: what it is and that it is are distinct in the thing, not in our heads. Real distinctions were the course's first discovery."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "What a thing is, that it is, what it can become, what underlies it, and who bears it: distinct principles, one world.",
                "feedback": "Respondeo: and notice that you understood it. Five modules ago this sentence would have been noise. Essence and esse, act and potency, matter and form, substance and accident, nature and person: the frame is yours now. Everything after this is the frame put to work."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Each thing is its own kind of being, sharing nothing with any other.",
                "feedback": "Then the twins share nothing, and the word 'human' names a coincidence. The world is neither one blur nor a scatter of strangers: common natures, distinct bearers, one order of being."
              }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
  ],
};
