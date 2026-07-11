import type { ModuleMeta } from '../types';

/** T5 · Creation. Authored 2026-07-11 (Fable) under wall doc 2.4.3 FINAL:
    gate cleared wing-wide 2026-07-09 (R2), no DRAFT marking, ships live like
    Part I. Two-source rule verified at authoring (ST I qq.44-49, 65-74 selections,
    q.104 a.1, De Potentia q.3 aa.1/3 verbatim; Lateran IV DS 800 + Dei Filius
    DS 3001-3003/3021-3025 verbatim). Carries the wing's first classify (l4-q3)
    and first spot_the_fallacy (l5-q2) per the sprint diversity targets. */
export const t5: ModuleMeta = {
  id: 5,
  title: `Creation`,
  short: `Creatio`,
  label: `Theologia V · Creation`,
  latin: `De Creatione`,
  aim: `Creation is the free and total gift of being: not a change in anything, for nothing was there to change, but the production of the whole substance of every creature from nothing, standing in a real relation of dependence on God and held in being at every moment by the same timeless act. God creates neither from need nor by necessity but with absolute freedom of counsel, from goodness, to manifest His perfection: the world gains everything and God gains nothing, which is what makes it a gift. The gift comes in grades, body to spirit, unequal by wisdom so the whole can represent what no single creature could; its holes are privations with no maker, for God authors no fault and permits nothing He will not turn to greater good; and it truly began, a fact defined by the Church and demonstrable by no argument. The going forth loses the Giver nothing.`,
  lessons: [
    {
      id: `t5-l1`,
      num: `I`,
      title: `From Nothing`,
      latin: `creatio ex nihilo`,
      tag: `creatio ex nihilo`,
      fin: {
        tag: `creatio ex nihilo`,
        heading: `The loan, countersigned.`,
        body: `Philosophy followed the borrowed light back to a Lender who borrows from no one; theology has now countersigned the loan. Creation is not a change the world underwent, for there was no world to undergo it: it is the total gift of being, the whole substance of every lamp, given from nothing and standing in a real relation of dependence on the Giver. The Father gives it through His Word and His Love, the fountain's own flowing repeated outward, one principle, nothing lost. What the doctrine says next is stranger and better: the giving has not stopped.`,
        distinction: {
          latin: `creatio ex nihilo`,
          english: `creation from nothing`,
          gloss: `Not a change in anything, for there was no thing: the production of the whole being of every creature, nothing presupposed.`,
          motif: `lamps-one-sun`,
        },
      },
      questions: [
        {
          id: `t5-l1-q1`,
          type: "mcq",
          stem: `The lamps again, every one of them lit from one sun. Philosophy proved the borrowing: no creature owns its being. Theology now names the lending. What is creation?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "God's shaping of a formless stuff that was already there, waiting for order.",
                                    "feedback": "The craftsman picture, and it has a distinguished pedigree: Plato's demiurge worked exactly this way, ordering a matter he did not make. But stuff waiting for order is already being, and being is precisely what needed the lender. A God who only shapes leaves the deepest question untouched: where the workbench came from."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The total gift of being: the whole of a thing, from nothing, nothing presupposed.",
                                    "feedback": "Respondeo: creation is the emanation of all being from the universal cause (ST I q.45 a.1). Not a rearrangement, not a repair, not an improvement on prior materials: the whole substance of the thing, given. The tradition's name for it is <em>creatio ex nihilo</em>, creation from nothing. The lamps do not merely get their shine from the sun; on this doctrine, they get their glass."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The first event in the world's long history, finished as soon as it happened.",
                                    "feedback": "You have put creation on the timeline as its opening entry and stamped it complete. But an event needs a stage, and creation is the giving of the stage. Whether the gift was ever finished is a question worth holding onto; the next lesson pays it in full."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "A picture-language for dependence, teaching reverence rather than reporting a fact.",
                                    "feedback": "That move turns the doctrine into a mood with a vocabulary. The Church has met it and refused it: Vatican I anathematizes whoever will not confess that the world was really produced by God in its whole substance (Dei Filius, canon on creation, DS 3025), and the habit of dissolving dogmas into symbols of religious sentiment was condemned with the Modernists (Pascendi, 1907). Creation reports a fact; reverence follows from it."
                        }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t5-l1-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>We must consider not only the emanation of a particular being from a particular agent, but also the emanation of all being from the universal cause, which is God; and this emanation we designate by the name of creation. Now what proceeds by particular emanation, is not presupposed to that emanation; as when a man is generated, he was not before, but man is made from "not-man," and white from "not-white." Hence if the emanation of the whole universal being from the first principle be considered, it is impossible that any being should be presupposed before this emanation. For nothing is the same as no being. Therefore as the generation of a man is from the "not-being" which is "not-man," so creation, which is the emanation of all being, is from the "not-being" which is "nothing."</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae I q.45 a.1 &middot; Dominican Fathers translation</div></div>Every making starts from a "not": the man from not-man, the white from not-white. What fixes the size of the "not" that creation starts from?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Divine preference: God works from nothing so that no material shares the credit.",
                                    "feedback": "A pious motive pinned on a metaphysical necessity. Thomas's argument runs on the effect's scope, not on the Maker's taste for sole billing. Watch the passage's own machinery: what proceeds is what cannot be presupposed."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Historical accident: as it happened, nothing was available when God began.",
                                    "feedback": "This makes nothing a circumstance, an empty warehouse God found and worked around. But the passage argues necessity, not luck: when the whole of being is what proceeds, there cannot be leftover being underneath, in any warehouse whatever."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The scope of the effect: when all being is produced, no being can be presupposed.",
                                    "feedback": "Respondeo: the \"from\" is measured by the \"what.\" Make a man and you start from not-man; make everything and you start from nothing, because any leftover something would already be among the everything. The argument is a ruler laid against the effect: total production, total absence of presupposition."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "The likeness rule: an immaterial God must work on an immaterial absence.",
                                    "feedback": "The axiom that agents produce their like is real, but it governs the effect's perfection, not the raw material's spirituality. Nothing is not an immaterial ingredient; it is no ingredient. The passage's own scale settles the size of the \"not\": the whole of being, therefore no being presupposed."
                        }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t5-l1-q3`,
          type: "mcq",
          stem: `A physicist on television: "The universe came from nothing, because the quantum vacuum is unstable." A vacuum with laws, fields, and instability. Has he reached the doctrine's nothing?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "No: a vacuum that obeys laws is a something, and the question starts over.",
                                    "feedback": "Respondeo: <em>nihil</em> means no being at all: no fields, no laws, nothing to be unstable. A vacuum with physics is a low-rent something, and asking where IT came from re-opens the case intact. No scorn is owed the physicist; his science describes transformations, and it may describe them brilliantly. Creation is not a transformation, so the two claims pass without touching."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Yes: physics has finally confirmed what Genesis asserted all along.",
                                    "feedback": "Too eager, and the eagerness costs. If the doctrine leans on this decade's cosmology, it falls with next decade's revision. The vacuum is a something with properties; Genesis's nothing is not a thin something but no thing. Keep the alliance honest by keeping the claims distinct."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Near enough: what counts as nothing is a matter of definition anyway.",
                                    "feedback": "The shrug concedes the store. \"Nothing\" is not a term of art awaiting stipulation; it is the negation of being as such, and no definition can put laws inside it without smuggling being back in. Where words go soft, the doctrine goes with them."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "No: the vacuum is material, and the doctrine's nothing is a spiritual substance.",
                                    "feedback": "You have corrected him by out-doing his mistake: a spiritual substance called nothing is still a substance, and the oldest slip in this territory is exactly that, treating nothing as an exotic stuff. Nothing has no inventory, material or spiritual. That is the whole of its charm."
                        }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t5-l1-q4`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "Creation is the first and greatest change: nothing turned into everything."`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "True: the distance from nothing to being is infinite, and only omnipotence crosses it.",
                                    "feedback": "The rhetoric of infinite distance is traditional and earns its keep, but it has smuggled in the picture it decorates: a crossing needs a traveler, and there was nothing to travel. The grandeur is real; the word \"change\" is still the wrong word."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "True: Genesis describes movement from formless to formed, and movement is change.",
                                    "feedback": "Genesis narrates the furnishing of the world in the idiom of work across days; the metaphysics of the first verse is not settled by the grammar of the sixth. What the doctrine asserts is the production of the whole substance, and that, as the correct answer shows, has nowhere to put a change."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "False: creation is instantaneous, and what happens in an instant is not a change.",
                                    "feedback": "Right verdict, wrong disqualifier. Instantaneity does not banish change: the substantial changes of the old physics arrive in an instant too. The reason creation is no change lies elsewhere, in what every change requires and creation lacks."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "False: change needs a subject that persists through it, and creation has no subject at all.",
                                    "feedback": "Respondeo: \"Creation is not change, except according to a mode of understanding\" (ST I q.45 a.2 ad 2): change means the same something is different now than before, and here there is no same something. Taken on the creature's side, creation is a real relation of total dependence on the Creator (De Potentia q.3 a.3). Nothing was turned into the world. The world was given, whole."
                        }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t5-l1-q5`,
          type: "mcq",
          stem: `The fountain of the processions: the Word spoken, Love breathed, and the fountain lost nothing by flowing. Now a world stands outside it. Who creates?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "The Father alone: to originate is His personal property, and creating is originating.",
                                    "feedback": "You have promoted a true personal note into a monopoly. The Father is indeed principle without principle, but creation proceeds from the divine essence and power, which the Three possess undivided. Confuse the processions inside God with the production outside Him and the doctrine of both suffers."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The whole Trinity, one principle: the Father creating through His Word and His Love.",
                                    "feedback": "Respondeo: to create belongs to God according to His essence, common to the Three; and the Father made the creature through His Word, which is His Son, and through His Love, which is the Holy Ghost (ST I q.45 a.6). The processions are the type of the production: the fountain's own flowing is the pattern of the pouring-out. One principle of the universe, as the definition says; and the going forth costs the fountain nothing."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The Word alone: all things were made through Him, and Scripture means what it says.",
                                    "feedback": "Scripture does mean it, and \"through\" is the word doing the work: it names the Word's place inside the one undivided act, not a subcontract issued to Him. Read John's preposition with the tradition and the sentence sings; read it as a job assignment and the Trinity becomes a firm with departments."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "A first created intelligence, delegated so the Godhead need not handle matter.",
                                    "feedback": "Avicenna's ladder: God creates one intelligence, which creates the next, down to the world. Thomas closes it flatly: to produce being absolutely is the proper act of God alone, and no creature can create even ministerially, as an instrument (ST I q.45 a.5). Being is not a job that can be outsourced; only the one whose essence is being gives it."
                        }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t5-l1-q6`,
          type: "precision_check",
          stem: `A catechist, meaning well: judge the sentence with a jeweler's eye.`,
          latin_tag: `creatio ex nihilo`,
          doctrine_line: `Creation is the production of the whole being of things from nothing: no material presupposed, no change undergone, a real relation of total dependence on God.`,
          lesson_complete: true,
          payload: {
            "statement": "God took nothing and made it into the world.",
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "At \"took nothing and made it into\": nothing is not a material to be worked.",
                                    "feedback": "Respondeo: the sentence handles nothing like clay, and nothing has no handles. \"From nothing\" tells you what creation did not start with, not what it was made of: the \"from\" marks order, not ingredients. After nothing, the world; not out of nothing-stuff, a world."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "At \"God\": the sentence should name the three Persons to be fully orthodox.",
                                    "feedback": "Over-scrupled. \"God\" names the one principle truly, and the Church's own definitions speak this way constantly. The Trinity creates as one; naming the Persons is devout, not obligatory. The sentence's real flaw sits in its verbs, where nothing gets treated as a workable stuff."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "At \"the world\": creation properly concerns spirits, and matter merely follows.",
                                    "feedback": "A spiritualist thumb on the scale. The definition is explicit that both creations, spiritual and corporeal, were produced from nothing together. Matter is not an afterthought or a fall; it is half the gift. The sentence's flaw is elsewhere: in treating nothing as raw material."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "Nothing to correct: this is the plain doctrine in plain speech.",
                                    "feedback": "Almost, and \"almost\" is this exercise's whole subject. The sentence quietly gives nothing a job in the supply chain: something taken, something worked. One preposition later the oldest confusion is back in business. The doctrine needs the \"from\" read as order, not as ingredient."
                        }
            ],
            "correct_option_id": "a",
            "correction": "Say rather: God produced the world in its whole substance, from nothing (Dei Filius, DS 3025). The \"from\" marks what came before (nothing) and what was presupposed (nothing), never what was used. Creation has no ingredients; it has only a Giver and a gift."
          },
        },
      ],
    },
    {
      id: `t5-l2`,
      num: `II`,
      title: `Held in Being`,
      latin: `conservatio`,
      tag: `conservatio`,
      fin: {
        tag: `conservatio`,
        heading: `The note, sustained.`,
        body: `The house was the wrong picture; the song was right. The world is not a finished work standing on its footings but a note held on the Singer's breath, and the holding is not a second labor added to creation but creation itself, refusing to stop. Nothing coasts. Nothing is owed continuance by its own metal. And yet nothing falls, because the act that gives being does not waver, and the God who needs no world has not for one instant stopped giving this one. The old fear gets it backwards: the doctrine of total dependence is the doctrine of total attendance. What is held every moment is safe every moment the Holder wills, and He wills.`,
        distinction: {
          latin: `conservatio`,
          english: `conservation in being`,
          gloss: `Creation continuing: creatures are held in existence by the same timeless act that gave it, and would fall to nothing if it ceased.`,
          motif: `singer-note`,
        },
      },
      questions: [
        {
          id: `t5-l2-q1`,
          type: "mcq",
          stem: `A song exists only while the singer sings: stop the voice and the song is not wounded, it is gone. A house outlives its builder by centuries. Which is the world?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "The house: God finished the work and rested, and the work stands on its own footings.",
                                    "feedback": "The seventh day misread. The rest of Genesis is a rest from producing new kinds of things, not a retirement from holding the old ones (Thomas takes it exactly so, ST I q.73). A world standing on its own footings would be a world owning its own being, and the whole course has been one long demonstration that it does not."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Both in turn: dependent while young, self-standing once mature.",
                                    "feedback": "Creatures do grow up; being does not. What was received as a gift on the first day is received as a gift on the ten-billionth, because at no point does the loan convert to ownership. Maturity is a fact about natures, not a promotion out of dependence."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The song: being is received continuously, and the world would end if the giving stopped.",
                                    "feedback": "Respondeo: the being of every creature so depends on God \"that not for a moment could it subsist, but would fall into nothingness were it not kept in being by the operation of the Divine power\" (ST I q.104 a.1, citing Gregory). The tradition calls this <em>conservatio</em>, conservation: the world is not a finished house but a song mid-breath. That you are, right now, is something being done for you, right now."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "The house, with a caretaker: God intervenes at need, otherwise it runs itself.",
                                    "feedback": "A janitor-God, called in for leaks. This keeps dependence for emergencies and independence for Tuesdays, and gets both wrong: existence is not an emergency, and no creature holds it alone for a single Tuesday. The dependence is total, ordinary, and continuous, which is far stranger than occasional repairs."
                        }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t5-l2-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>Every effect depends on its cause, so far as it is its cause. But we must observe that an agent may be the cause of the "becoming" of its effect, but not directly of its "being." [Thus] the builder causes the house in its "becoming," but he is not the direct cause of its "being." For it is clear that the "being" of the house is a result of its form. [But when the cause is the cause of the being itself,] as the becoming of a thing cannot continue when that action of the agent ceases which causes the "becoming" of the effect, so neither can the "being" of a thing continue after that action of the agent has ceased. [This is why] the air does not continue to be lit up, even for a moment, when the sun ceases to act upon it.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae I q.104 a.1, selections &middot; Dominican Fathers translation</div></div>The house survives its builder; the light does not survive the sun. Why the difference?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Stone is sturdier than air: the durability of the material decides survival.",
                                    "feedback": "Materials science where metaphysics is wanted. Swap the stone for oak or the air for glass and the analysis stands untouched, because the difference lies in what each cause was a cause OF, not in what each effect was made of."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The house rests on its own form once built; the light never becomes the air's own.",
                                    "feedback": "Respondeo: the builder caused a becoming, and the house's being then rests on its form, which is why he may die and the house stand. The sun causes the light's very being in the air, so the dependence is as continuous as the effect. Now raise the case: God is the cause not of the world's becoming only but of its being as such. The world stands to God as light to the sun, never as house to builder."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The sun is the nobler cause, and nobler causes keep closer possession of their effects.",
                                    "feedback": "Nobility is not the hinge; causal role is. A very humble cause of being would still hold its effect continuously, and a very noble cause of mere becoming would still be survivable. The passage turns on becoming versus being, not on rank."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "Neither survives anything: dependence talk is a habit of speech, not a report.",
                                    "feedback": "The skeptic's broom sweeps both cases away and leaves the difference between them unexplained: builders demonstrably die while houses stand, and shuttered suns demonstrably take their light with them. A habit of speech that tracks the world this well has earned a better name: knowledge."
                        }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t5-l2-q3`,
          type: "mcq",
          stem: `The watchmaker God: wind the world, set it down, walk away; it keeps time without Him. Where exactly does the picture break?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "At walking away: He stays close, returning whenever the mechanism fails.",
                                    "feedback": "This fixes deism with visits, a God of the gaps with a service route. But the flaw was never His distance from repairs; it is the watch's pretended distance from Him. A world that only needed God for malfunctions would not need Him for existing, and existing is the standing need."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "It does not break: Scripture's rest on the seventh day is exactly this.",
                                    "feedback": "The seventh day again, pressed too far. God rests from making new kinds, never from sustaining what is made; Thomas reads it so, and the doctrine of conservation is why. A God who truly walked away would leave, not a self-running world, but no world."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "At the winding: the world had no beginning at which to be wound.",
                                    "feedback": "The wrong repair, and a false one besides: that the world began is the faith's own teaching, defined at Lateran IV. But even granting the deist his first morning, the picture still fails at the far end, where the watch is left owning what no creature owns."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "At runs without Him: the watch owns its metal; the world never owns its being.",
                                    "feedback": "Respondeo: a watch borrows only its shape from the maker and keeps the brass regardless; the world borrows everything it is. The eighteenth century's tidy picture dies on that difference, and the Council states the standing fact it missed: \"God protects and governs by His Providence all things which He has made\" (Dei Filius, DS 3003). No hour of the world is unattended, because no hour of the world is unheld."
                        }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t5-l2-q4`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "Once a thing exists, existence belongs to it; God could withdraw, and the thing would coast."`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "False: being stays received; what is held on loan never becomes owned, and withdrawal is nothingness.",
                                    "feedback": "Respondeo: the received act of being never converts to property, so there is nothing to coast on: unhold the world and it does not wind down, it is not (ST I q.104 a.1). Note the mercy hidden in the metaphysics: annihilation would take no act, only a ceasing, and God in fact never ceases (q.104 a.3-4, by Thomas's own answer). The world's fragility and the world's safety are the same fact, held from two ends."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "False: God re-creates each thing at every instant, so there is never an existence to keep.",
                                    "feedback": "Right verdict, ruinous reason. If the world were re-created fresh at every tick, nothing would endure through any two of them, and you with your memories would be a serial impostor. Conservation is one continuous holding of things that really endure, not a flicker of replacements: the same act, without motion or time, continuing."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "True: existence has inertia, as motion does; what is, tends to stay in being.",
                                    "feedback": "A physical law promoted to a metaphysical one, and the promotion fails. Inertia describes how a body already in being behaves; it has no purchase on being itself, which is not a state a thing maintains but an act a thing receives. A very modern position, this existential inertia, and the old sun-and-air case already answers it: no influence, no light."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "True: God has promised to sustain the world, and His fidelity, not metaphysics, keeps it.",
                                    "feedback": "Devout, and misplaced. His fidelity is real, but it rides on the deeper fact rather than replacing it: creatures need holding by what they are, not merely by what He pledged. Make conservation a covenant and you imply a world that could, in principle, manage alone; no world can."
                        }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t5-l2-q5`,
          type: "distinction_application",
          stem: `Two dependencies, two names. A thing may depend on a cause for its becoming, in <em>fieri</em>: the cause brings it about, then bows out. Or for its very being, in <em>esse</em>: it exists only while the cause acts. Four claims; which names a dependence in being?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "The oak depends on the acorn it grew from.",
                                    "feedback": "In fieri, and long since discharged: the acorn is gone and the oak is magnificently here. Ancestry is the classic case of a becoming-cause, honored and survivable."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The statue depends on the sculptor who carved it.",
                                    "feedback": "In fieri. The sculptor's hands made the becoming; the marble's own form carries the being. Museums are full of statues whose sculptors are dust, which settles the question empirically."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The daylight in the room depends on the sun this minute.",
                                    "feedback": "Respondeo: shutter the sun and the room is dark in the same instant; the light is only ever the sun's present act arriving. This is dependence in esse, and it is the tradition's own scale model of creation: the world stands to God as daylight to the sun, except that the sun merely brightens a room that was already there, and God gives there being a room at all."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "The child depends on the mother who bore him.",
                                    "feedback": "In fieri, with love added. She gave the becoming, and the child's being now runs on its own received act: he will outlive her, please God, and that is the natural order of becoming-causes. Only one cause holds anyone in esse, and it is not any creature."
                        }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t5-l2-q6`,
          type: "mcq",
          stem: `Then is conservation a second work after creation, a maintenance contract added to the sale?`,
          latin_tag: `conservatio`,
          doctrine_line: `Conservation is not a second act after creation but the same act continuing: God holds all things in being now, as the sun holds daylight in the air.`,
          lesson_complete: true,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Yes: creating and conserving are two acts, as building and repairing are two trades.",
                                    "feedback": "Two trades because a house sits between them, needing different services. Nothing sits between creating and conserving: there is no moment at which the world, already given being, awaits a fresh act to keep it. One gift, still being given, needs no rider on the contract."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "No: one and the same act continuing. Conservation is creation refusing to stop.",
                                    "feedback": "Respondeo: \"the preservation of things by God is a continuation of that action whereby He gives existence, which action is without either motion or time\" (ST I q.104 a.1 ad 4). The sun does not light the air twice. How the King then administers the estate through His creatures, causes working under causes, ministers bearing real charges: that is the government of the world, and it has its own module, next door."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Yes, and a third besides: governing, which replaces conserving once things run.",
                                    "feedback": "Government does not replace conservation; it rides on it. A creature must be held in being before it can be steered in action, and neither holding nor steering ever lapses. You have the right inventory and the wrong verbs: nothing replaces anything in the divine economy."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "No, because after the first moment there is nothing further to conserve.",
                                    "feedback": "This dissolves the world to save the paperwork. There is everything to conserve: the whole of creation, at every moment, really enduring and really held. Deny the continuing need and you are back at the watchmaker's bench with a self-running watch no metaphysics can wind."
                        }
            ],
            "correct_option_id": "b"
          },
        },
      ],
    },
    {
      id: `t5-l3`,
      num: `III`,
      title: `Why Anything At All`,
      latin: `liberrimo consilio`,
      tag: `liberrimo consilio`,
      fin: {
        tag: `liberrimo consilio`,
        heading: `The fountain was never thirsty.`,
        body: `Why anything? Not loneliness: the processions are company beyond all company. Not compulsion: the sun must shine, but God freely creates, and the Council put an anathema on the difference. Not gain: no increase, no acquirement, nothing retrieved. The answer the Church confesses is almost too simple to see: Goodness gives because it is good, with absolute freedom of counsel, <em>liberrimo consilio</em>, and the whole world is what being generous looks like when the giver is God. The gift gains Him nothing. It was meant to: a gift that profited the giver would be a transaction, and the universe is not a transaction. It is glory, which is perfection shining, and the shine falls on us.`,
        distinction: {
          latin: `liberrimo consilio`,
          english: `by a counsel supremely free`,
          gloss: `Creation from fullness, not need: God gains nothing and forfeits nothing, and wills a world as sheer gift, for His glory.`,
          motif: `fountain-cups`,
        },
      },
      questions: [
        {
          id: `t5-l3-q1`,
          type: "mcq",
          stem: `A child's question with a long career in philosophy: why did God make anything? The answer on half the greeting cards: He was lonely. What has the card gotten wrong?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Nothing: love seeks company, and creation is love's remedy for solitude.",
                                    "feedback": "Tender, and backwards. A remedy presupposes an ailment, and there was none: the doctrine of the processions already showed God's life to be company itself, Word and Love, complete. Love did create; love did not need to. The whole difference between a gift and a purchase lives in that distinction."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Only the tone: lonely is too casual a word for a real absence in God.",
                                    "feedback": "This edits the vocabulary and keeps the mistake: a politer word for lack is still lack. The trouble with \"lonely\" is not its manners; it is that it reports a gap where the previous modules found none. Fix the metaphysics and the tone fixes itself."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The tense: God was lonely before creation, though He is not now.",
                                    "feedback": "Now the card has a timeline too: a before in which God wanted, an after in which creatures supplied. Both halves fail: nothing precedes in the eternal present, and no creature supplies anything to the Complete. The lesson's task is to say why He created anyway, and the answer is better than company."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "The direction: creation fills no gap in God. It pours from fullness, not from need.",
                                    "feedback": "Respondeo: the First Agent does not act to acquire an end, \"He intends only to communicate His perfection, which is His goodness\" (ST I q.44 a.4). The fountain was never thirsty. Every creature drinks; the Source only gives, and the giving costs Him nothing and gains Him nothing. Keep this and every other question in the lesson comes out straight."
                        }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t5-l3-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>This one only true God, of His own goodness and almighty power, not for the increase or acquirement of His own happiness, but to manifest His perfection by the blessings which He bestows on creatures, and with absolute freedom of Counsel, created out of nothing, from the very first beginning of time, both the spiritual and the corporeal creature, to wit, the angelical and the mundane, and afterwards the human creature, as partaking, in a sense, of both, consisting of spirit and of body.</p><div class="cr-cite">Vatican I, Dei Filius, cap. 1 (DS 3002) &middot; Manning translation</div></div>The Council writes two denials into one clause: "not for the increase or acquirement of His own happiness." What door do those two words bolt shut?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Any account where creating gains God something: no new happiness, none retrieved.",
                                    "feedback": "Respondeo: \"increase\" bars fresh gain, \"acquirement\" bars gain recovered, and between them every needy-Creator theology loses its door. What remains standing is the clause's own positive: He creates \"to manifest His perfection by the blessings which He bestows.\" The direction of every arrow is outward. That is what gratuitous means, and the word will matter again when the course reaches grace."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The claim that God delights in the world: delight would be an increase.",
                                    "feedback": "Too far in the right direction. God delights in creatures with the delight that is His own unchanging beatitude, not with a happiness they top up. The Council bars gain, not joy: the denial protects the very delight it seems to you to threaten, by making it free."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Emanation: the world leaking out of the divine substance by nature.",
                                    "feedback": "Right wall, wrong brick. The leak is bolted three words later, at \"absolute freedom of Counsel,\" and bolted again in the canons with an anathema. This clause guards a different door: the one where creating profits the Creator. Two errors, two locks; the Council wastes nothing."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "The world's worth: what adds nothing to God must be worth nothing at all.",
                                    "feedback": "The inversion reads the ledger upside down. The world adds nothing to God and is worth everything to us precisely because its existence is pure liberality: unpurchased, unowed, unforced. A gift's worth is not measured by the giver's need of it; rather the opposite, as every child with a generous father knows."
                        }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t5-l3-q3`,
          type: "mcq",
          stem: `Yesterday used the sun freely: the world depends on God as daylight on the sun. An old and noble doctrine goes further: the world FLOWS from God as light from the sun, by nature, necessarily. Where is the line?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "There is no line: the tradition's own image concedes the flowing.",
                                    "feedback": "Plotinus would be pleased, and he is owed the respect of being the greatest pagan to miss narrowly: the One overflowing in goodness is a guess at something true. But the image was borrowed for one leg only, and the doctrine keeps accounts. Dependence was the loan; necessity was never included."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The line is dependence itself: the daylight image overreached and should be retired.",
                                    "feedback": "Retiring the image forfeits what it carried: the moment-by-moment holding that the last lesson established from Thomas's own text. An analogy that walks on one leg is not lame; it is an analogy. Keep the leg it walks on and refuse the leg it lacks."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The line is necessity: the sun cannot help shining; God can help creating.",
                                    "feedback": "Respondeo: the image carries the manner of the world's dependence, never the manner of its origin. The sun shines by nature; God creates by will, and the Council's anathema names the difference: whoever says finite things \"have emanated from the Divine substance,\" or that God created by \"a necessity equal to the necessity whereby He loves Himself,\" let him be anathema (Dei Filius, canons on creation, DS 3024-3025). <span class=\"condemned\">Emanationism &middot; condemned, Vatican I, 1870</span>. Dependence borrowed; compulsion refused."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "The line is matter: light may flow necessarily, but solid bodies must be chosen.",
                                    "feedback": "An arbitrary customs post. If anything flowed from God by necessity, the necessity would not check for density on the way out; and nothing does flow so, thin or thick. The line runs between nature and will, not between fog and granite."
                        }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t5-l3-q4`,
          type: "true_false_with_reason",
          stem: `The axiom is venerable: <em>bonum diffusivum sui</em>, good pours itself out. Judge the sentence: "Therefore God, supreme Goodness, had to create."`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "False: the axiom is pagan contraband, and the tradition should never have signed for it.",
                                    "feedback": "Right verdict, ungrateful reason. The tradition signed for the axiom with its eyes open, because rightly read it is true: goodness does pour itself out. Dionysius carried it in; Thomas kept it. The correction needed is not customs confiscation but a question the axiom itself invites: where does the pouring pour first?"
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "False: the diffusion was already infinite, Word and Love; creation echoes it freely.",
                                    "feedback": "Respondeo: the axiom is satisfied before any world exists: the Father pours the whole Godhead into the Word, and Father and Word breathe the whole into Love. Infinite goodness, infinitely diffused, eternally. Creation is not the axiom's fulfillment but its free echo outward, and the canon holds the grammar: not \"by a necessity equal to the necessity whereby He loves Himself\" (DS 3025). The fountain filled its own basin from eternity; the cups are extra, and gratis."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "True: Dionysius teaches the axiom and Thomas receives it, so the conclusion stands.",
                                    "feedback": "Two true premises about pedigree, and a conclusion that does not follow from either: an authority's axiom binds as the authority means it, and neither Dionysius read by Thomas nor Thomas himself ever meant compulsion. Citing masters against their own meaning is not reverence; it is ventriloquism."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "True: otherwise creation is arbitrary, a coin toss in eternity.",
                                    "feedback": "The false dilemma that haunts this doctrine: either necessity or whim. Free choice between goods, made in infinite wisdom, is neither. God's will has reasons without having compulsions, as the wise always do; a world can be unowed without being random. Refuse both horns and the doctrine stands up straight."
                        }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t5-l3-q5`,
          type: "fill_blank",
          stem: `Vatican I's canon on creation, the wall in its own words. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;">If anyone does not confess that the world, and all things that are contained in it, both spiritual and material, have been, in their whole <span class="fb-blank" data-blank="b1">______</span>, produced by God out of <span class="fb-blank" data-blank="b2">______</span>; or shall say that God created, not by His <span class="fb-blank" data-blank="b3">______</span>, <span class="fb-blank" data-blank="b4">______</span> from all necessity, but by a necessity equal to the necessity whereby He loves Himself; or shall deny that the world was made for the glory of God; let him be anathema.</span>`,
          payload: {
            "blanks": [
                        {
                                    "id": "b1",
                                    "correct_answers": [
                                                "substance"
                                    ],
                                    "case_sensitive": false
                        },
                        {
                                    "id": "b2",
                                    "correct_answers": [
                                                "nothing"
                                    ],
                                    "case_sensitive": false
                        },
                        {
                                    "id": "b3",
                                    "correct_answers": [
                                                "will"
                                    ],
                                    "case_sensitive": false
                        },
                        {
                                    "id": "b4",
                                    "correct_answers": [
                                                "free"
                                    ],
                                    "case_sensitive": false
                        }
            ],
            "word_bank": [
                        "substance",
                        "nothing",
                        "will",
                        "free",
                        "matter",
                        "essence",
                        "wisdom",
                        "bound"
            ],
            "feedback": {
                        "all_correct": "Locked: substance, nothing, will, free (Dei Filius, canon 5 on God the Creator, DS 3025). Read the joinery: \"whole substance\" leaves no eternal matter underneath the gift; \"out of nothing\" makes the gift total; \"by His will, free from all necessity\" refuses the leak and the compulsion in one clause, conceding that one necessity is real, the necessity by which God loves Himself, and denying creation shares it. And the glory clause seals the direction: made for His glory, which is His perfection shining, not applause collected. Four words, and every counterfeit doctrine in the lesson is outside the wall.",
                        "partial_correct": "Check the joints. What was produced whole, with nothing beneath it? What did the production start from? By what did He create, and in what state from all necessity? The canon's words are load-bearing; the bank's decoys are the exact errors it was built against."
            }
          },
        },
        {
          id: `t5-l3-q6`,
          type: "mcq",
          stem: `So gather it. Why is there something rather than nothing? The finished answer.`,
          latin_tag: `liberrimo consilio`,
          doctrine_line: `God created neither from need nor by necessity but freely, from goodness, to manifest His perfection: the world is gift, and it is for His glory.`,
          lesson_complete: true,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Because nothing is unstable, and being follows from it given time.",
                                    "feedback": "The television physicist returns, and the first lesson's answer holds: an unstable nothing with laws and a clock is a something in a trench coat. Whence the something? The question is not embarrassed by the maneuver; it just waits."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Because the question is malformed: why applies inside the world, never to it.",
                                    "feedback": "The positivist's exit, executed with more confidence than argument. Declaring the oldest question unaskable is not answering it; it is a decision to stop, dressed as a discovery. The mind that followed borrowed being back to its Lender has already asked the question and gotten somewhere; no ruling can un-ask it."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Because God needed the world to be Creator, Lord, and Father in fact.",
                                    "feedback": "A modern school holds nearly this: a God completed by His world, growing with it. The Council's clause was written before the school and answers it anyway: not for the increase or acquirement of His own happiness (DS 3002). Titles like Creator and Lord are true of God from creation's side, adding nothing on His; the relation is real in the creature, logical in Him. The old lesson about the moon holds at the summit: the borrower's whole reality is borrowed, the Lender's untouched."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "Because Goodness freely willed to share what it is: sheer gift, made for His glory.",
                                    "feedback": "Respondeo: the whole answer in three clauses: from goodness, freely, for glory (ST I q.44 a.4; DS 3002, 3025). And glory, rightly read, is not applause harvested but perfection manifested: the Council's own phrase is \"to manifest His perfection by the blessings which He bestows.\" The universe exists because Goodness is generous, and it exists for the showing-forth of that generosity. Wisdom's line fits here and the Council quotes it nearby: reaching from end to end mightily, ordering all things sweetly."
                        }
            ],
            "correct_option_id": "d"
          },
        },
      ],
    },
    {
      id: `t5-l4`,
      num: `IV`,
      title: `The Shape of the Gift`,
      latin: `gradus entium`,
      tag: `gradus entium`,
      fin: {
        tag: `gradus entium`,
        heading: `The gift comes in sizes.`,
        body: `Why many? Because one creature could not say it. Why unequal? Because a plain, however high, holds less than a country with valleys. The five rungs stand assembled: being, life, sense, reason, spirit, and man on the seam of the last two, the border country in person. Around the one fountain the cups are almost comically unequal, clay and wood and gold, and all full: that is the shape of the gift, chosen by wisdom, defined at Lateran IV against the men who wanted two gods for two worlds. One principle. Both creations. Every nature good, including the one that fell. Which raises the lesson this module can no longer postpone: if every nature is good, what exactly is the hole in the cloth?`,
        distinction: {
          latin: `gradus entium`,
          english: `the grades of being`,
          gloss: `Body, life, sense, reason, spirit: unequal by wisdom, not by accident, so the whole can say what no single creature could.`,
          motif: `grades-ladder`,
        },
      },
      questions: [
        {
          id: `t5-l4-q1`,
          type: "mcq",
          stem: `The fern, the fox, the philosopher: the old ladder stands where you left it. Doctrine now asks a new question of it: why should the gift come in grades at all? One creature, perfectly made, seems tidier.`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "One creature could not say it: the many and unequal together represent what one alone cannot.",
                                    "feedback": "Respondeo: God brought things into being \"that His goodness might be communicated to creatures, and be represented by them; and because His goodness could not be adequately represented by one creature alone, He produced many and diverse creatures, that what was wanting to one in the representation of the divine goodness might be supplied by another\" (ST I q.47 a.1). One Source, and around the basin many cups: what the clay cup misses, the gold one catches, and the whole table says more of the fountain than any single cup could."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Matter resisted: God intended sameness, and the medium blurred the intention.",
                                    "feedback": "The oldest naturalists said nearly this, deriving the world's variety from matter's jostling; Thomas turns it around: matter exists for form, not form for matter, and even matter is created. A blurred intention is an insult the doctrine never permits: the variety is the intention, wanted crisp and wanted first."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Grades are scars of a fall: spirits sinned, and lower stations are their sentences.",
                                    "feedback": "Origen's celebrated guess: all spirits created equal, diversity arriving as punishment. Augustine's reply has kept its edge for sixteen centuries: what could be more foolish than to say the sun was made not to adorn the world but because one soul sinned, \"so that, if a hundred souls had sinned, there would be a hundred suns\"? Scripture's verdict stands against the whole picture: God saw all the things that He had made, and they were very good. The ladder is architecture, not a prison record."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "Grades are perspective: from God's side all creatures stand equal in worth.",
                                    "feedback": "Flattery of the fern at the expense of the facts. From God's side is exactly where the inequality is intended: the divine wisdom, not human snobbery, arranged being in degrees. Every creature is wholly good in its kind; the kinds are not interchangeable, and the next question asks why that is generosity rather than favoritism."
                        }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t5-l4-q2`,
          type: "mcq",
          stem: `Many, then. But why unequal? A world of peers offends no one. Aquinas answers with a strange arithmetic: "the universe would not be perfect if only one grade of goodness were found in things." What is he counting?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Uses: higher things need lower ones as their tools and their food.",
                                    "feedback": "Utility is real inside the order, but it cannot be the count: a universe of perfectly serviced masters would still be poorer than this one, by exactly the measure the correct answer names. The grades are not a supply chain first; they are a vocabulary first, each kind a word the whole needs."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Populations: more kinds means more creatures, and more is simply better.",
                                    "feedback": "A million ferns is a great deal of fern and no new kind of goodness at all. Thomas's own distinction cuts here: multiplying individuals within a species adds matter's kind of more; only new forms add new manners of being good. The count is formal, not demographic."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Kinds of goodness: a whole with mountains and valleys holds more than a plain.",
                                    "feedback": "Respondeo: formal distinction requires inequality, for \"the forms of things are like numbers, in which species vary by addition or subtraction of unity\" (ST I q.47 a.2): each rung is a different amount of act, and a world with every rung realized carries more manners of being good than a world leveled at any height, however high. The divine wisdom counted kinds, and built the full ladder. The tradition calls the result <em>ordo universi</em>, the order of the universe: not a heap of creatures but an arrangement, and the arrangement itself is a perfection no single creature has."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "Comparisons: goodness exists only where something can be better than something else.",
                                    "feedback": "That would make God's own goodness impossible, having no rival to outrank. Goodness is act and perfection, owned absolutely; comparison discovers grades, it does not manufacture them. The universe is not good because ranked; it is rankable because its kinds hold real and unequal measures of the good."
                        }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t5-l4-q3`,
          type: "classify",
          stem: `The tradition reads the whole creation, visible and invisible, as five great grades. A body without life holds being alone. A living thing without sense adds life. An animal adds sensation without reason. Man adds reason, wed to a body. A pure spirit holds intellect with no body at all. Seven creatures wait below: give each its rung.`,
          payload: {
            "instruction": "Tap a creature, then the grade it occupies.",
            "categories": [
                        {
                                    "id": "c1",
                                    "label": "corpus · body without life"
                        },
                        {
                                    "id": "c2",
                                    "label": "vivens · alive, without sense"
                        },
                        {
                                    "id": "c3",
                                    "label": "animal · sensing, without reason"
                        },
                        {
                                    "id": "c4",
                                    "label": "homo · embodied reason"
                        },
                        {
                                    "id": "c5",
                                    "label": "angelus · pure spirit"
                        }
            ],
            "items": [
                        {
                                    "id": "i1",
                                    "text": "the granite boulder",
                                    "correct_category_id": "c1"
                        },
                        {
                                    "id": "i2",
                                    "text": "the fern on the sill",
                                    "correct_category_id": "c2"
                        },
                        {
                                    "id": "i3",
                                    "text": "the olive tree, two centuries old",
                                    "correct_category_id": "c2"
                        },
                        {
                                    "id": "i4",
                                    "text": "the fox",
                                    "correct_category_id": "c3"
                        },
                        {
                                    "id": "i5",
                                    "text": "the honeybee, dancing the map to the nectar",
                                    "correct_category_id": "c3"
                        },
                        {
                                    "id": "i6",
                                    "text": "the philosopher, mid-argument",
                                    "correct_category_id": "c4"
                        },
                        {
                                    "id": "i7",
                                    "text": "the angel who guards him",
                                    "correct_category_id": "c5"
                        }
            ],
            "feedback": {
                        "all_correct": "The ladder, assembled: being, then life, then sense, then reason, then spirit, each rung keeping everything below it and adding its own manner of good. Two ferns' worth of green on one rung, two hunters on another: kinds repeat their members without adding kinds. What one creature lacks in representing the divine goodness, another supplies, and the whole together says what no rung alone could say (ST I q.47 a.1). The definition counted the same sweep in three words: spiritual, corporeal, and man between.",
                        "partial_correct": "Run each creature through what it can do, not what it looks like. Does it live? Does it sense? Does it reason? Does it need a body to be what it is? The rungs are powers, and every creature answers honestly when asked.",
                        "per_item_corrections": [
                                    {
                                                "item_id": "i3",
                                                "feedback": "The olive endures, drinks light, and heals its wounds: life in earnest, but it senses nothing. Two centuries of patience are still the fern's rung, magnificently occupied."
                                    },
                                    {
                                                "item_id": "i5",
                                                "feedback": "The bee's dance is choreography without a choreographer in the bee: sensation and instinct, wonderful and unfree. The cleverness on display belongs to the art in her nature, not to a reasoning she performs. Sense without reason: the fox's rung, with wings."
                                    },
                                    {
                                                "item_id": "i7",
                                                "feedback": "The guardian holds no body at all: intellect entire, matter none. What such a creature is, how it knows, how it serves: a whole module is owed, and it is next. File him at the top rung and hold the questions."
                                    }
                        ]
            }
          },
        },
        {
          id: `t5-l4-q4`,
          type: "mcq",
          stem: `Lateran IV counts the creations: "angelic, namely, and mundane, and then human, as it were, common, composed of spirit and body." Why does the definition give man that odd label, common?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Common as in ordinary: a dogmatic caution against the pride of place.",
                                    "feedback": "Humility is a virtue and this is not its verse. The definition is doing inventory, not moral formation: it has named two creations and needs a word for the creature who belongs to both. The label is a map reference, and the territory it marks is the most interesting on the map."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Common to both creations: the border country where spirit and matter make one creature.",
                                    "feedback": "Respondeo: man partakes of both, spirit and body in one substance, the frontier where the two creations meet and are a single citizen. The old hylomorphic lesson was always heading here: the rational soul, form of a body, places one creature on the seam of the visible and invisible worlds. The tradition likes to say man is a horizon, the line where two countries touch; the definition says it in plainer dress: common, composed of spirit and body."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Common descent: humans differ from the other animals in degree, not in kind.",
                                    "feedback": "A serious modern position, and the definition's word will not carry it. Whatever the body's history, the difference the rung names is in kind: reason's operation exceeds every organ, which is why the philosopher argues and the honeybee only dances. Degree explains a longer neck; it does not explain a syllogism."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "Common good: man exists for the whole's benefit, as the definition's politics.",
                                    "feedback": "A category slid sideways: the common good is a doctrine about societies, and this clause is a doctrine about composition. Man serves the whole, true, but the word here is anatomical: he is made of both creations' materials, spirit and body, one creature holding the two halves of the inventory together."
                        }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t5-l4-q5`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "A better universe would keep only the top rung: pure spirits, wall to wall."`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "True: higher is better, so all-highest is best; the lower rungs are economies.",
                                    "feedback": "Better parts, poorer whole: the arithmetic that forgets the whole is itself a good. A cathedral of nothing but spires would hold less, not more; the perfection at stake belongs to the arrangement, and an arrangement needs its differences. The ladder is not a budget compromise."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "True: matter is a concession; Scripture calls it good, but spirit is what was wanted.",
                                    "feedback": "The spiritualist's polite disdain, and the text will not have it: God saw ALL the things that He had made, and they were very good; and the definition names one principle of BOTH creations. Matter is not a concession; it is a rung, wanted as the rest are wanted. Contempt for it has a long pedigree and no imprimatur."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "False: pure spirits without bodies to govern would stand idle, and idleness is imperfection.",
                                    "feedback": "Right verdict, wrong ledger. The angels are not employed to save them from boredom, and their perfection does not lean on having furniture to move. The reason an all-spirit world is poorer is not that spirits would lack chores; it is that the whole would lack kinds."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "False: the whole is richer for every grade realized; an all-spirit world is a poorer universe.",
                                    "feedback": "Respondeo: \"the perfection of the universe requires that there should be inequality in things, so that every grade of goodness may be realized\" (ST I q.48 a.2). One grade of good is the kind that cannot fail; another is the kind that can: fragile, corruptible, mortal, and really good. A universe stripped of the tearable grades would be a plain at high altitude: elevated, and missing most of the map. Hold this answer carefully; its bill comes due in the next lesson, where the tearable grade tears."
                        }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t5-l4-q6`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>We firmly believe and openly confess that there is only one true God, eternal and immense, omnipotent, unchangeable, incomprehensible, and ineffable, Father, Son, and Holy Ghost; three Persons indeed but one essence, substance, or nature absolutely simple . . . the one principle of the universe, Creator of all things invisible and visible, spiritual and corporeal, who from the beginning of time and by His omnipotent power made from nothing creatures both spiritual and corporeal, angelic, namely, and mundane, and then human, as it were, common, composed of spirit and body. The devil and the other demons were indeed created by God good by nature but they became bad through themselves; man, however, sinned at the suggestion of the devil.</p><div class="cr-cite">Fourth Lateran Council, Firmiter (1215), DS 800 &middot; Schroeder translation</div></div>1215. The Church defines creation with a strange insistence: ONE principle, of BOTH creations, and even the devil created good. Who is being answered?`,
          latin_tag: `gradus entium`,
          doctrine_line: `The multitude and inequality of creatures are intended by divine wisdom: every grade of goodness realized, under one Creator of spirit and matter alike.`,
          lesson_complete: true,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "The Albigensians: two gods, one for spirits and one for matter, dividing the world between them.",
                                    "feedback": "Respondeo: the council met with the Cathar crisis burning through Languedoc: a good god of the invisible, an evil god of bodies, marriage suspect, matter a sentence to be served. Read the definition against that and every clause is a hammer: ONE principle; of things invisible AND visible; spiritual AND corporeal; and the devil himself created good by nature, bad by his own act. <span class=\"condemned\">Albigensian dualism &middot; condemned, Lateran IV, 1215</span>. The devil-clause is tomorrow's whole lesson folded into one sentence: evil is what a good creature does, never what a rival god makes."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The Arians: a created Word through whom the Father then made the world.",
                                    "feedback": "A real heresy with the wrong council: Arius was answered at Nicaea, nine centuries earlier, and the Word's full divinity was not the wound of 1215. This definition's fire is aimed at a splitting of the world, not a splitting of the Godhead; note which clauses carry the heat."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The Averroists: an eternal world with no beginning for faith to defend.",
                                    "feedback": "Close enough to touch: \"from the beginning of time\" does guard that door, and the philosophers' eternal world was a live opponent in the schools. But the definition's occasion and its strangest clauses, two creations under one principle and a devil created good, answer a different enemy. The beginning-clause is real; a later lesson collects it in full."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "The pagans: Olympus required one more formal eviction notice.",
                                    "feedback": "Olympus had been vacant a long while by 1215, and councils do not anathematize empty buildings. The gods this definition evicts are two, recent, and dressed as Christian: a lord of spirits and a lord of matter. One landlord, says the Church, of both floors."
                        }
            ],
            "correct_option_id": "a"
          },
        },
      ],
    },
    {
      id: `t5-l5`,
      num: `V`,
      title: `The Hole in the Cloth`,
      latin: `malum ut privatio`,
      tag: `malum ut privatio`,
      fin: {
        tag: `malum ut privatio`,
        heading: `The hole is real. The cloth is His.`,
        body: `Say both without flinching: the hole is real, and the hole is nothing. Rust, blindness, the tumor, the treason: real as wounds are real, made as holes are made, by loss and never by loom. Every thread in the fabric is God's and good; the missing is the evil, and the missing has no maker. Fault He never authors; penalty He orders only as justice; and the permission that lets the cloth tear is held inside a providence that tears nothing idly and wastes nothing it permits. Be honest about the residue: a man at a barbecue is not consoled by the metaphysics, and the metaphysics never claimed to console him. It clears God's name; the answer that holds the uncle is a Person, and He is several modules ahead, wounds and all. The course walks there.`,
        distinction: {
          latin: `malum culpae · malum poenae`,
          english: `evil of fault · evil of penalty`,
          gloss: `Evil is privation, not nature: God authors no fault ever, orders penalty only for justice, and permits only what serves a greater good.`,
          motif: `torn-cloth`,
        },
      },
      questions: [
        {
          id: `t5-l5-q1`,
          type: "mcq",
          stem: `Rust in the iron, blindness in the eye: the old cases return with a doctrine's weight on them. Real, both of them, and neither ever granted citizenship among the things that are. Say it exactly: what is evil?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "A nature opposed to good: the shadow-kingdom standing across from God's.",
                                    "feedback": "Mani's answer, and it has consoled many, because a war between kingdoms at least explains the casualties. But the price is two gods, and the Church paid it never: one principle of all things, defined at Lateran IV against exactly this comfort. <span class=\"condemned\">Manicheism &middot; condemned repeatedly from the third century; the two-principles doctrine anathematized at Lateran IV, 1215</span>. The shadow has no kingdom. It has only the light it interrupts."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "A privation: the absence of a good that ought to be there, real as a hole.",
                                    "feedback": "Respondeo: \"it cannot be that evil signifies being, or any form or nature. Therefore it must be that by the name of evil is signified the absence of good\" (ST I q.48 a.1). The hole in the cloth is exactly real: you can catch your foot in it, and it can ruin the garment; and it is exactly nothing: no threads of its own, no weaver. Evil is real the way holes are real, and made the way holes are made: by loss, never by loom."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "A perspective: zoom out far enough and every apparent evil dissolves into the pattern.",
                                    "feedback": "The view from the balcony, and the doctrine refuses the seat. Privation does not mean illusion: the ward and the camp are as bad as they look, and the tradition never blinks at them. Evil lacks BEING, not reality; the absence of sight in a man is really there and really terrible. Keep that distinction; an argument tomorrow morning depends on it."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "A word: evil reports our dislikes, and things themselves are beyond such labels.",
                                    "feedback": "Then the surgeon and the torturer differ only in reviews. The label tracks something in the thing: the missing due good, sight owed and absent, order owed and absent. Dislike follows the lack; it does not manufacture it. The doctrine is severe precisely because evil is objective: a real wound in a real good."
                        }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t5-l5-q2`,
          type: "spot_the_fallacy",
          stem: `The oldest argument against the faith, laid out as its defenders lay it out. Three steps are sound; one carries the flaw. Find the broken joint.`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Step:",
                                    "text": "Whatever exists, in any way at all, is from God.",
                                    "correct": false,
                                    "feedback": "Sound, and defined: one principle of all things visible and invisible (Lateran IV, DS 800). The doctrine will not be rescued by shrinking God's authorship, and no serious answer to this argument ever starts there. Keep walking."
                        },
                        {
                                    "id": "b",
                                    "label": "Step:",
                                    "text": "Evil is real: the tumor and the treason are exactly as bad as they look.",
                                    "correct": false,
                                    "feedback": "Sound, and the Church holds it against every balcony-view theodicy: privation never means less awful. A hole in a heart is only an absence, and it kills. The realness of evil is conceded in full; the flaw hides elsewhere."
                        },
                        {
                                    "id": "c",
                                    "label": "Step:",
                                    "text": "What is real is a thing, a being among beings: so evil too must have its maker.",
                                    "correct": true,
                                    "feedback": "Respondeo: found. Real does not mean thing. The hole in the cloth is perfectly real, and it is not a fabric: it is torn fabric's absence, borrowing all its reality from the cloth it wounds. Grant evil citizenship among beings and you must find it either a maker (and God stands accused) or a second, rival source (and Mani's two gods return, <span class=\"condemned\">condemned: one principle of the universe, Lateran IV, 1215, DS 800</span>). Thomas closes the door where it opened: evil signifies the absence of good, no nature and no being at all (ST I q.48 a.1); its subject is always a good; its cause is defect, never creation. The argument dies at this joint, and only at this joint."
                        },
                        {
                                    "id": "d",
                                    "label": "Step:",
                                    "text": "A good God cannot be the author of evil.",
                                    "correct": false,
                                    "feedback": "Sound, and the tradition keeps it to the letter: God is never the cause of the evil of fault, and what He orders by way of penalty He orders for justice, not for evil's sake (ST I q.49 a.2). This step is the fortress, not the breach; the collapse happened one step back, where evil got promoted to a thing."
                        }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t5-l5-q3`,
          type: "distinction_application",
          stem: `Two kinds of lack, and only one of them is evil. A negation: the absence of a good never owed to the thing. A privation: the absence of a good the thing's nature is owed. Four absences; which one is an evil?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "The man born unable to see.",
                                    "feedback": "Respondeo: sight is due to a man: his nature's own claim, unpaid. That is privation, and privation is evil's whole address (ST I q.48 a.3). Notice what the answer does not say: nothing about guilt, his or his parents'; the Lord Himself refused that arithmetic before the man born blind (John 9). Privation names the wound in the nature, and stops there."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The granite, unable to see.",
                                    "feedback": "Nothing owes the granite eyes, so nothing is missing from it: negation, not privation. A stone in the dark is a stone doing perfectly. Thomas's rule: absence of good taken negatively is no evil, \"otherwise everything would be evil, through not having the good belonging to something else.\""
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The man, unable to outrun a deer.",
                                    "feedback": "Aquinas's own case, nearly verbatim: a man is not evil for lacking \"the swiftness of the roe\" (ST I q.48 a.3). Speed like that was never on his nature's invoice. Negation again: the absence of an excellence never owed is just the shape of being this kind of thing rather than that."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "The fern, unable to laugh.",
                                    "feedback": "The fern owes nobody a sense of humor. Its rung asks life of it, and life it delivers in full; laughter belongs two rungs up. Negation. If unlaughing ferns were evils, the whole ladder would be a catastrophe, and it is a hierarchy of goods."
                        }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t5-l5-q4`,
          type: "mcq",
          stem: `Grant the hole is a hole. The harder question keeps its appointment: why weave a cloth that CAN tear? Untearable things were available; some were made.`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "He could not do otherwise: even omnipotence cannot make fragile things safe.",
                                    "feedback": "Omnipotence is not the constraint here; nothing forced fragile kinds into the inventory. God freely willed a world containing them, which is why the question has an answer about wisdom rather than an excuse about limits. Look for what the corruptible grade adds, not for what tied the Weaver's hands."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Nothing real is untearable: only mathematics holds objects that cannot fail.",
                                    "feedback": "False on the doctrine's own inventory: the angels are real and do not fray, and the previous lesson filed them without controversy. The corruptible grade is not reality's only stock; it is one grade among others, which is exactly why its inclusion needs, and has, a reason."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Fragility arrived with the Fall: before sin, no leaf ever browned.",
                                    "feedback": "Half a truth stretched over the whole cosmos. That death came to MAN by sin is the faith (Romans 5; Trent holds it, Session 5): man was preserved by gift from the wages of his nature. But corruptibility as such belongs to corruptible natures: Thomas holds that the animals in Eden were animals, not enchanted statues (ST I q.96 a.1 ad 2, by his own answer). The leaf browns because it is a leaf; Adam died because he sinned. Two facts, two registers."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "A world with fragile goods is a fuller world: the tearable grade is goodness, chosen for the whole.",
                                    "feedback": "Respondeo: the perfection of the universe requires \"not only beings incorruptible, but also corruptible beings,\" and what can fail sometimes does fail (ST I q.48 a.2). The autumn, the harvest, the lion fed and the ass eaten: a changing world's goods are goods of a kind an angel cannot be. And the fence stands: God does not need the failures; He permits them because He \"is so powerful that He can even make good out of evil\" (Augustine, quoted at q.48 a.2 ad 3). Permission inside providence, never appetite for the tear."
                        }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t5-l5-q5`,
          type: "mcq",
          stem: `The tradition splits evil in two before assigning any blame. <em>Malum culpae</em>, the evil of fault: disorder in a will's own act. <em>Malum poenae</em>, the evil of penalty: a good withdrawn, against the will, under justice. Of which can God be called the author?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Both: He is the first cause of everything without exception, or He is not first.",
                                    "feedback": "The sovereignty overbid. Fault is precisely the case with no positive being to cause: a will's defect, a hole in an act. God causes every being in the sinner and the sin's own entity as act; the disorder, the missing rectitude, has no maker but the defecting will. First causality covers all that IS; fault, at its core, is what is missing."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Neither: any evil ordered from His hand would stain it.",
                                    "feedback": "More delicate than the doctrine, and less just. Scripture will not permit the squeamishness: the Lord killeth and maketh alive. Penalty ordered for justice is a good order about a withdrawn good, and the Judge who orders it is clean; the alternative is a universe where justice itself would dirty God, which is to say no justice at all."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Penalty, never fault: He can order a loss for justice; He cannot be the defect in a will.",
                                    "feedback": "Respondeo: \"God is the author of the evil which is penalty, but not of the evil which is fault\" (ST I q.49 a.2). And the same article holds the two verses that seem to fight: God \"hath not made death\" (Wisdom 1:13), for He wills no destruction for its own sake; and \"the Lord killeth\" (1 Samuel 2:6), for the order of justice is His. One caution the doctrine itself teaches: penalty-in-general is a truth of theology, never a diagnosis of a particular sufferer. That arithmetic was refused at the man born blind, and stays refused."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "Fault, in the reprobate only: some vessels are shaped for wrath from the first firing.",
                                    "feedback": "The hard line of Geneva pressed past the fathers' meaning: a God who works evil in men so as to damn them justly. The Council of Trent anathematized the claim that God works the evil deeds as He works the good (Session 6, canon 6, by its own words in the standard record). Nothing God makes is shaped for fault; vessels crack themselves. The doctrine's whole geometry forbids the exception you propose."
                        }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t5-l5-q6`,
          type: "dialogue_branch",
          stem: `The backyard barbecue. Your uncle, second burger down, suddenly not joking: "I'll tell you why I stopped going. My sister got the tumor, and your God either built it or stood there watching. You can't have it both ways." Choose.`,
          latin_tag: `malum ut privatio`,
          doctrine_line: `Evil is no being but the privation of due good: God creates none of it, authors no fault ever, and permits nothing He will not turn to greater good.`,
          lesson_complete: true,
          payload: {
            "commentatorLine": "The Commentator has stood at this grill since Lisbon shook in 1755. The pious surrender, the balcony view, the citation brandished like a skewer: he has watched each one cool faster than the coals. The words that stay warm are the ones that tell the truth and stay at the table.",
            "branches": [
                        {
                                    "text": "\"Honestly? Nobody has an answer for that one. At some point you just close your eyes and have faith.\"",
                                    "feedback": "The surrender, dressed as humility. There is an answer's beginning, and he asked for it; the shrug tells him the faith goes silent at exactly the point where it speaks most carefully. He deserved the beginning, and the honesty about where it ends."
                        },
                        {
                                    "text": "\"Everything God made in her is good: the cells, the body, her. The tumor isn't a thing He built; it's order gone missing, and God doesn't build absences. Why He permits it, I don't fully know: only that He permits nothing He can't draw a greater good from. And He didn't watch from the bleachers. He came down and took the worst of it Himself.\"",
                                    "verdict": "correct",
                                    "feedback": "Respondeo: the whole lesson, warmed for the table. No nature evil, so nothing in her was built bad (q.48); no fault authored by God, no diagnosis of the sufferer offered or implied (q.49; John 9); permission tied to providence, with its limit honestly confessed; and the answer's center of gravity moved where the Church moves it: from a syllogism to a Person on a gallows. The metaphysics clears God's name; only the Cross answers the uncle whole, and the course is walking there."
                        },
                        {
                                    "text": "\"That's the Manichean position, actually. Two principles. Lateran IV condemned it in 1215; I can send you the paragraph.\"",
                                    "feedback": "Every word true, and the grill is not a lecture hall. The canon is not a skewer. Doctrine wielded as a conversation-ender wins the exchange and loses the man; the same truths, carried in the second branch's voice, feed somebody. Learn the difference in your bones."
                        },
                        {
                                    "text": "\"From eternity's side there is no tumor, really. Evil is how a limited view reads the whole pattern.\"",
                                    "feedback": "The balcony view, offered to a man at ground level, and it is false besides being cold: the doctrine says evil is no NATURE, never that it is no REALITY. Tell him his sister's tumor is a reading error and you have joined Job's comforters, of whom God said they had not spoken rightly. The hole is real. Start there or start nowhere."
                        }
            ]
          },
        },
      ],
    },
    {
      id: `t5-l6`,
      num: `VI`,
      title: `In the Beginning`,
      latin: `novitas mundi`,
      tag: `novitas mundi`,
      fin: {
        tag: `novitas mundi`,
        heading: `Held by faith, and calmly.`,
        body: `The world began: the faith defines it, twice. Reason cannot prove it: Thomas insists on it, against allies who wanted the proof and adversaries who wanted the world eternal. Between those two sentences lives the module's quietest lesson: certainty comes in kinds, and the man who knows which kind he holds cannot be embarrassed. The days may be one or seven; the Doctor of Grace read them one way and the greater number of Fathers another, and the Church left her doctors the room. What no Catholic holds loosely is the substance: all things, from nothing, in time, by the one God, for glory. Hold the fact like bedrock and your readings like a walking stick, and no telescope will ever cost you a night's sleep.`,
        distinction: {
          latin: `novitas mundi`,
          english: `the newness of the world`,
          gloss: `That the world began is de fide; that no demonstration proves it is Thomas's sobriety. Firm on the fact, free on the mode.`,
          motif: `first-morning`,
        },
      },
      questions: [
        {
          id: `t5-l6-q1`,
          type: "mcq",
          stem: `Two confident men at a cafe. One: "The Big Bang proved creation; faith wins." The other: "Physics will close that gap; faith loses." Seven centuries early, Aquinas disappoints them both. Can reason demonstrate that the world began?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "No: that the world began is held by faith alone; no demonstration reaches it either way.",
                                    "feedback": "Respondeo: \"By faith alone do we hold, and by no demonstration can it be proved, that the world did not always exist\" (ST I q.46 a.2). The tradition calls the point <em>novitas mundi</em>, the newness of the world. Nothing in a thing's species carries a date, and the free will of God is demonstrable to no one. Both cafe tables lose: the fact is certain, by a certainty that was never physics' to give or take."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Yes: an infinite past is impossible to cross, as the great Franciscan proved.",
                                    "feedback": "Bonaventure at full strength, and he deserves it: the arguments from the impossibility of traversing an infinite are serious, and a saint made them. Thomas weighs them and judges them non-cogent: an everlasting world is not a proven contradiction. Rome never ruled between the brothers; the house follows Thomas, and his pastoral reason for caution is the next question's whole subject."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Yes, now: cosmology has supplied the demonstration philosophy lacked.",
                                    "feedback": "The first cafe table, seated in the course. A model of the observable universe's early density is not a demonstration that being began: physics reads the book's opening pages, not whether the book was ever not there. Lean the dogma on the model and you rent your certainty from next decade's journals. The doctrine owns its ground; do not mortgage it."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "No, and the question is idle: motion and time are eternal, as the Philosopher held.",
                                    "feedback": "Aristotle's position, radicalized by his commentators into a closed doctrine: the world without beginning, necessarily. Against the necessity, Thomas: even Aristotle's own arguments are dialectical here, not demonstrative (q.46 a.1). Against the fact, the faith: from the beginning of time, defined at Lateran IV and again at Vatican I. The world did begin; what it did not do is prove it to us."
                        }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t5-l6-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>By faith alone do we hold, and by no demonstration can it be proved, that the world did not always exist . . . The reason of this is that the newness of the world cannot be demonstrated on the part of the world itself. For the principle of demonstration is the essence of a thing. Now everything according to its species is abstracted from "here" and "now" . . . Likewise neither can it be demonstrated on the part of the efficient cause, which acts by will. For the will of God cannot be investigated by reason, except as regards those things which God must will of necessity; and what He wills about creatures is not among these . . . But the divine will can be manifested by revelation, on which faith rests. Hence that the world began to exist is an object of faith, but not of demonstration or science. And it is useful to consider this, lest anyone, presuming to demonstrate what is of faith, should bring forward reasons that are not cogent, so as to give occasion to unbelievers to laugh, thinking that on such grounds we believe things that are of faith.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae I q.46 a.2 &middot; Dominican Fathers translation</div></div>Thomas ends with a warning where a triumph could have gone. What is he protecting, and from whom?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Philosophy from theology: reason's tools must not be lent across the border.",
                                    "feedback": "The border runs the other way in this text: Thomas is not rationing reason's tools but auditing their advertised results. He lends across the border constantly; the whole course is the loan. What he refuses is a receipt for goods reason never delivered."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The unbelievers from error: their laughter is a right he defends.",
                                    "feedback": "Their laughter is a symptom he fears, not a liberty he sponsors. The scandal cuts toward the faith: the mocker walks away certain that believers believe on bad arguments, which is false and now looks true. Thomas is protecting the truth's reputation from its clumsy friends."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "His own school from the Franciscan one: a guild rivalry in ecclesial dress.",
                                    "feedback": "The cynic's reading, and it shrinks a principle to a feud. Thomas states a rule that binds his own side first: claim demonstration only where demonstration exists. That the rule cut against arguments Bonaventure loved is incidental; it has cut against overeager Thomists since, and it was meant to."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "The faith from its over-eager defenders: weak proofs teach the world that faith stands on weakness.",
                                    "feedback": "Respondeo: the warning is the evergreen rule of apologetics: a bad argument for a true conclusion is a gift to the conclusion's enemies. Claim for demonstration only what demonstrates; hold the rest by the better title of faith, and say which is which out loud. The man who defends a real fortress with painted cannons teaches the enemy to doubt the walls."
                        }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t5-l6-q3`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "An everlasting world would be an uncreated world, so the eternalists and the creationists were never really arguing."`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "False: because an everlasting world is impossible anyway, the two positions never meet.",
                                    "feedback": "Right verdict, borrowed reason. The impossibility claim is exactly what Thomas declines to certify: no demonstration shows an everlasting world contradictory. The sentence fails for a deeper reason, one that touches what creation IS rather than how long things have been around."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "False: creation is dependence, not a starting date; even a beginningless world would be wholly from God.",
                                    "feedback": "Respondeo: the doctrine's deepest cut. Creation answers \"why is there anything\" and would answer it identically for a world of any age, including one with none: total dependence in being has no calendar (the disputed question walks it through, De Potentia q.3). The argument was therefore real: an eternal world could still be created, and the faith adds the fact besides: this one began, \"from the beginning of time\" (DS 800; DS 3002). Dependence is the essence; the beginning is the fact."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "True: what has no beginning has no cause, since every chain of causes starts somewhere.",
                                    "feedback": "The old confusion of the two chains. Causes arranged across time may run back without a first, for all reason proves; causes arranged in dependence need a first NOW, which is why the proofs of God never leaned on a starting date. You met this distinction with the staff and the hand; it is doing the same work here."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "True: eternity and createdness exclude each other by definition, as Scripture and the Philosopher agree.",
                                    "feedback": "A false peace treaty between parties who never signed it. Aristotle thought the world everlasting and uncreated; Scripture reveals it created and begun; and Thomas's precision is that the two properties are separable: everlasting-and-created is no contradiction. The exclusion you cite is the very thing the analysis dissolves."
                        }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `t5-l6-q4`,
          type: "mcq",
          stem: `The six days. Augustine read all seven as one day, sevenfold, an order of nature shown to the angels; most Fathers read a true succession of days. Thomas weighs both readings. What is his verdict?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Augustine's reading was condemned, and Thomas buries it with full honors.",
                                    "feedback": "Never condemned, and Thomas does the opposite of burying it: he rehearses it with evident relish and defends its orthodoxy at every turn. A Doctor of the Church read Genesis's days as one act displayed in sevenfold order, and died in full communion. That fact alone should recalibrate what you think is at stake in the tempo."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The week of succession is de fide: to doubt the tempo is to doubt the text.",
                                    "feedback": "The overreach the next question's rule exists to prevent. Even the Biblical Commission of 1909, no friend of loose readings, allowed that \"day\" may be taken as a true day or as a certain space of time (its own eighth response). The text's truth is fixed; the tempo has latitude the Church herself has measured out."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Both readings stand as Catholic. Fixed: all things from nothing, by God. Free: the mode.",
                                    "feedback": "Respondeo: \"On this question Augustine differs from other expositors\" (ST I q.74 a.2), and Thomas walks the aisle between them without locking either door: the two opinions are both defended, and what neither touches is the substance: all things, from nothing, by the one God, in time. That is the definition's floor. The tempo of the furnishing is a question the Church has left her doctors room to weigh, and Thomas uses the room."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "The days are a liturgical poem: beautiful, binding nobody, reporting nothing.",
                                    "feedback": "The Modernist solvent, and the Church has ruled on it: the Biblical Commission (1909) upheld the historical character of the opening chapters of Genesis against exactly the myth-reading you propose, while allowing latitude on the days. Between wooden literalism and poetry-that-reports-nothing runs the Catholic road: a true account, whose mode of expression the doctors may weigh."
                        }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t5-l6-q5`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>In discussing questions of this kind two rules are to [be] observed, as Augustine teaches. The first is, to hold the truth of Scripture without wavering. The second is that since Holy Scripture can be explained in a multiplicity of senses, one should adhere to a particular explanation, only in such measure as to be ready to abandon it, if it be proved with certainty to be false; lest Holy Scripture be exposed to the ridicule of unbelievers, and obstacles be placed to their believing.</p><div class="cr-cite">St. Thomas Aquinas, Summa Theologiae I q.68 a.1, citing Augustine, Gen. ad lit. i &middot; Dominican Fathers translation</div></div>Two rules, the second born from the first's danger. What do they jointly demand of a Catholic reading Genesis?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Total firmness about what Scripture teaches; holy looseness about which reading of it is mine.",
                                    "feedback": "Respondeo: rule one bolts the truth of the text; rule two unbolts my grip on my favorite exegesis of it. The man who chains the faith to his own reading has made his reading the measure of the faith, and when the reading falls, watchers assume the faith fell with it. Augustine wrote the rule four centuries into the Church's life; it would have spared the seventeenth century a famous embarrassment, and it will spare you several."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Silence on disputed passages until the Church has ruled on each.",
                                    "feedback": "Neither rule counsels silence; both assume the doctors will argue, and blesses the arguing. Augustine and Thomas discuss the days at length, holding their readings with exactly the loose firm grip rule two prescribes. The demand is humility in adherence, not abstinence from interpretation."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Deference to the sciences: where they speak with certainty, Scripture yields its claim.",
                                    "feedback": "Backwards at the hinge. Scripture never yields its truth; what yields is my identification of its truth with one dispensable reading. If a reading is proved false with certainty, the reading was mine, not Scripture's, and rule one stands untouched. The rules protect the text from my mistakes, not the text from the telescope."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "A single authorized interpretation, held against all comers.",
                                    "feedback": "Rule two exists to forbid precisely this, where the Church herself has not fixed the sense. Scripture \"can be explained in a multiplicity of senses,\" and clinging obstinately to one, says the rule, exposes the Book to ridicule when the one collapses. Firmness belongs to the truth; the stubbornness you describe is firmness misapplied to myself."
                        }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t5-l6-q6`,
          type: "mcq",
          stem: `Settle the ledger, then. About the world's origins: what must a Catholic hold, and what is he free to weigh?`,
          latin_tag: `novitas mundi`,
          doctrine_line: `That the world began in time is held by faith and defined by the Church, demonstrable by no argument: firmness on the fact, freedom on the mode, calm on principle.`,
          lesson_complete: true,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Must: the week's exact tempo. Free: whether creation was truly from nothing.",
                                    "feedback": "The ledger inverted, item by item. From-nothing is the defined core, guarded by anathema at two councils; the tempo is where the doctors have always had room. Hold the tempo loosely and the substance absolutely, and you are standing where Augustine and Thomas stood."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Must: nothing at all; origins belong to the sciences entirely.",
                                    "feedback": "Then Lateran IV and Vatican I defined nothing, and their anathemas guard empty rooms. The sciences own the measurements; the faith owns the facts of creation, beginning, and dependence, defined in council and held with certainty. A Catholic who cedes the whole territory has confused the map's two colors."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Must: whatever cosmology currently holds; free: the rest, until the journals update.",
                                    "feedback": "Faith pegged to a citation index. Cosmology is a noble discipline whose conclusions are revisable by construction; dogma is not. Bind the creed to the current model and every revision becomes a crisis of faith, which is precisely the misery Thomas's warning and Augustine's rule exist to prevent."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "Must: all from nothing, in time, by one God. Free: the mode and tempo, within the Church's readings.",
                                    "feedback": "Respondeo: the floor is defined twice: the whole substance of things produced from nothing, from the beginning of time (DS 800; DS 3002, with the canon's anathema at DS 3025). The latitude is the tradition's own practice: Augustine's one day, the Fathers' seven, the Commission's measured allowance. And mark what the settlement buys: a believer who meets every telescope unafraid, because no discovery can contradict the fact and no theory can supply it. Firm on the substance, free on the mode, calm on principle."
                        }
            ],
            "correct_option_id": "d"
          },
        },
      ],
    },
    {
      id: `t5-l7`,
      num: `VII`,
      title: `Recapitulatio`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `The going forth that loses nothing.`,
        body: `Count what you now hold. The lamps got their glass: the whole being of things, from nothing, nothing presupposed, no change undergone. The song is mid-breath: conservation is creation refusing to stop, and no hour of the world is unheld. The fountain was never thirsty: no need, no necessity, a gift from fullness, for a glory that is perfection shining rather than applause collected. The cups are unequal on purpose, clay to gold to spirit, and the whole says what no rung could. The holes in the cloth are real and woven by no one, fault authored never, penalty ordered only as justice, permission held inside providence. And the whole affair truly began, held by faith with a calm no telescope can disturb. The tradition's word for this outbound half of everything is <em>exitus</em>, the going forth; and Thomas put its secret into a hymn the Church still sings, the Verbum Supernum: the Word goes forth to His work, yet does not leave the Father's right hand. Procession without loss. Gift without diminishment. The fountain pours, and is not emptied. The going forth is now told as far as the visible ledger runs; the invisible creation waits next door, and far beyond it, the road home.`,
        distinction: {
          latin: `recapitulatio`,
          english: `recapitulation`,
          gloss: `Creation in one breath: from nothing, freely, in grades, held this instant, no evil made, truly begun: the exitus confessed whole.`,
          motif: `fountain-cups`,
        },
      },
      questions: [
        {
          id: `t5-l7-q1`,
          type: "match_pair",
          stem: `Six images carried the module. Give each its doctrine.`,
          payload: {
            "left_set": [
                        {
                                    "id": "L1",
                                    "text": "the lamps lit from one sun"
                        },
                        {
                                    "id": "L2",
                                    "text": "the song on the singer's breath"
                        },
                        {
                                    "id": "L3",
                                    "text": "the fountain that was never thirsty"
                        },
                        {
                                    "id": "L4",
                                    "text": "the fern, the fox, the philosopher, and the angel"
                        },
                        {
                                    "id": "L5",
                                    "text": "the hole in the torn cloth"
                        },
                        {
                                    "id": "L6",
                                    "text": "the first morning"
                        }
            ],
            "right_set": [
                        {
                                    "id": "R1",
                                    "text": "creatio ex nihilo: the whole being of things, given from nothing"
                        },
                        {
                                    "id": "R2",
                                    "text": "conservatio: creation continuing, or the world would end now"
                        },
                        {
                                    "id": "R3",
                                    "text": "liberrimo consilio: gift from fullness, free of all necessity"
                        },
                        {
                                    "id": "R4",
                                    "text": "gradus entium: unequal by wisdom, that the whole may say more"
                        },
                        {
                                    "id": "R5",
                                    "text": "malum ut privatio: absence of due good, authored by no one"
                        },
                        {
                                    "id": "R6",
                                    "text": "novitas mundi: a true beginning, held by faith alone"
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
                        "all_correct": "Six images, one doctrine: the going forth of all things from God. The lamps got their glass, the song is mid-breath, the fountain poured because it wanted to, the cups are unequal on purpose, the holes have no weaver, and the whole affair truly began. That is creation, confessed entire.",
                        "partial_correct": "Walk the module in order: the gift from nothing, the gift not stopping, the gift unforced, the gift in grades, the tear that is no thread, the true beginning. Each image was built to carry exactly one of these."
            }
          },
        },
        {
          id: `t5-l7-q2`,
          type: "mcq",
          stem: `One sentence to carry out of the module. Which holds the whole weight?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Long ago, God made everything from nothing, and made it very well.",
                                    "feedback": "True in every word and missing the doctrine's two live wires: the freedom of the giving and the presentness of the gift. \"Long ago\" files creation under history, and the second lesson spent all its effort unfiling it: the giving has not stopped."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "God and the world complete each other: He gives being, and it gives Him glory.",
                                    "feedback": "A mutual-aid society of unequal partners, and the Council closed its charter: no increase, no acquirement. Glory adds nothing to Him; the sun gains nothing back from the lamps. The world completes nothing; that is precisely what makes its existence a gift rather than a contract."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "From nothing, freely, in grades, held this instant: a gift still being given.",
                                    "feedback": "Respondeo: every clause pays a lesson: from nothing (the total gift), freely (the uncompelled fountain), in grades (the shaped whole), held this instant (the song mid-breath). The last clause is the one most people have never heard, and the one that changes the middle of the night: the world is not a thing that was made. It is a thing being given, now."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "Being flows eternally from Being, as light from light, world without beginning.",
                                    "feedback": "Lovely, and it is the module's rogues' gallery in one line: the flow is necessity (anathema, DS 3025), the eternity denies the defined beginning (DS 800), and \"light from light\" belongs to the Creed's inner processions, not to the making of the world. A sentence can be beautiful and cost the whole doctrine."
                        }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `t5-l7-q3`,
          type: "precision_check",
          stem: `A documentary narrator, gravely: judge the sentence with a jeweler's eye.`,
          payload: {
            "statement": "Creation happened at the first moment of time, roughly 13.8 billion years ago, and the universe has existed ever since.",
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "At \"roughly 13.8 billion years\": the Church's chronology is not the astronomers'.",
                                    "feedback": "The Church keeps no rival stopwatch. The age of the universe is measurement's business, and the faith has no stake in the figure: it defined that the world began, never when. Correct the narrator's metaphysics and leave his arithmetic alone."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "At \"happened at the first moment\": creation is not an event inside time; time arrived with the world.",
                                    "feedback": "Respondeo: creation did not occur AT the first moment, as though the moment were waiting; the moment came with the world, creatures and their clock in one gift. Augustine's old precision holds: the world was made with time, not in time, and Thomas keeps it (ST I q.46 a.3). Creation is not the first thing that happened. It is why there is happening at all."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "At \"has existed ever since\": existence is not continuous, being re-given at each instant.",
                                    "feedback": "The occasionalist flicker again, correcting a sound clause with an unsound doctrine. The universe HAS existed ever since: really enduring, really held, one continuous act of giving without motion or time. Conservation underwrites the narrator's clause; the flaw in his sentence sits earlier."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "Nothing to correct: the sentence is the doctrine with a date attached.",
                                    "feedback": "The date is harmless; the preposition is not. \"Happened at the first moment\" quietly makes creation an occurrence inside a timeline that somehow pre-exists it, and the whole first lesson was spent against that picture. The doctrine needs the stranger claim: the timeline itself is part of what was given."
                        }
            ],
            "correct_option_id": "b",
            "correction": "Say rather: the world was created WITH time, not IN time (ST I q.46 a.3; Augustine's precision, De Civitate Dei XI, by his own account). Creation is not the first event; it is the giving of everything, events, moments, and clock included. The age of the universe is science's to measure. The gift of the universe was never on the clock."
          },
        },
        {
          id: `t5-l7-q4`,
          type: "true_false_with_reason",
          stem: `Judge the sentence: "Nothing God made is evil, and nothing evil was ever made."`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "True: every nature is good, even the devil's; evil is privation and has no maker.",
                                    "feedback": "Respondeo: the definition says it with a straight face: \"The devil and the other demons were indeed created by God good by nature but they became bad through themselves\" (Lateran IV, DS 800). Even creation's worst citizen got his nature from God and his badness from nobody but himself. Evil, being privation, is not on any maker's books: holes are torn, never woven. The module's wall, restated as its capstone."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "True: because evil, being an illusion of perspective, needs no maker.",
                                    "feedback": "Right judgment, disastrous reason: it wins the argument by abolishing the wound. Evil needs no maker because it is privation, not because it is unreal: the hole in the cloth trips real feet. Guard the verdict with the doctrine's own reason or you will lose it in the first hospital corridor."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "False: the serpent, the tumor, and the tyrant are manufactured evils, and honesty says so.",
                                    "feedback": "Honesty says something more precise: the serpent is a creature (good) with a will gone bad (its own doing); the tumor is living tissue (good) minus due order (the hole); the tyrant is a man (good) minus justice (his theft). In every case the being is God's and good, and the evil is the missing. Manufacture requires positive being; evil has none to show."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "False: moral evil at least must be created, or God is not sovereign over history.",
                                    "feedback": "The barbecue argument's ghost, one lesson later. Sovereignty extends over all that IS; fault, at its core, is a defect, a missing rectitude with no being to govern. God permits it, orders history around it, and draws good from it, all without authoring it: that is more sovereignty, not less, as any king knows who has ruled well through a minister's betrayal."
                        }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `t5-l7-q5`,
          type: "mcq",
          stem: `Every doctrine has the two words it cannot lose. For creation, which pair, and why?`,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "Long ago, and very good: the past act, well executed.",
                                    "feedback": "Both phrases are defensible and neither is load-bearing: lose \"long ago\" and the doctrine survives intact (dependence has no calendar); lose \"very good\" and Genesis restores it in a verse. The pair that cannot be lost is the pair whose loss hands the doctrine to its two oldest rivals."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "Order, and beauty: what the doctrine exists to explain.",
                                    "feedback": "Order and beauty are the gift's visible wrapping, and a doctrine of the wrapping alone would suit a demiurge decorating someone else's materials. Creation's claim runs beneath the arrangement, to the very being of what is arranged. The unsurrenderable pair guards that depth."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "Mystery, and gift: the register in which the doctrine is prayed.",
                                    "feedback": "The right register and the wrong cargo: both words, alone, are fog that any theology can pour. The pair the doctrine cannot lose is made of hard edges, the two clauses Vatican I fitted with anathemas, and prayer is the better for the edges."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "From nothing, and freely: no rival stuff beneath the world, no necessity behind it.",
                                    "feedback": "Respondeo: lose \"from nothing\" and matter becomes God's colleague (the demiurge) or His enemy (the two-gods doctrine); lose \"freely\" and the world becomes a symptom, leaking from the divine substance on schedule. The two canons of Vatican I guard exactly these two words (DS 3024, 3025), which is the magisterium's way of telling you where the load-bearing walls are."
                        }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `t5-l7-q6`,
          type: "mcq",
          stem: `The Creed's inventory: all things visible AND invisible. This module walked the visible ledger to its top rung and filed one creature without opening the file: the angel who guards the philosopher. What waits in the next module?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `From nothing, freely, in ordered grades, held in being now, with no evil made and a true beginning: creation confessed whole, and the invisible half of the inventory opens next.`,
          lesson_complete: true,
          payload: {
            "options": [
                        {
                                    "id": "a",
                                    "label": "Respondeo:",
                                    "text": "A gentler subject after a hard one: consolations, devotions, and holy cards.",
                                    "feedback": "The angels have suffered centuries of exactly this demotion, from flame to greeting card. The tradition's angelology is armor-plated metaphysics: creatures of pure intellect, knowing without abstraction, choosing without retraction. Bring the course's tools; you will need every one."
                        },
                        {
                                    "id": "b",
                                    "label": "Respondeo:",
                                    "text": "The end of the course: creation complete, only review remains.",
                                    "feedback": "The map says otherwise: the going forth is barely half told, and the return has not begun. The invisible creation, the last end, grace, the God-man, His Body, His sacraments, the last things: the course is a long road with a homecoming, and this module was the road's first province."
                        },
                        {
                                    "id": "c",
                                    "label": "Respondeo:",
                                    "text": "The invisible creation: what a pure spirit is, how it knows, how God governs through His ministers.",
                                    "feedback": "Respondeo: three doors stand open. The old question about form without the bronze finally gets its subject: subsistent form, no matter at all. The ladder's top rung opens its file: how an angel knows, wills, and fell. And providence's plan, taught as plan, meets its execution: the government of the world through ministers who really minister. <em>De Angelis</em>: the invisible half of the inventory, next."
                        },
                        {
                                    "id": "d",
                                    "label": "Respondeo:",
                                    "text": "An optional appendix: angels being pious furniture, nothing structural rests on them.",
                                    "feedback": "Structural is precisely what they are: the definition names the angelic creation in the same breath as the mundane (DS 800), the economy of governance runs through them, and the hierarchy of being is headless without its top grade. An appendix does not get named in the Creed."
                        }
            ],
            "correct_option_id": "c"
          },
        },
      ],
    },
  ],
};
