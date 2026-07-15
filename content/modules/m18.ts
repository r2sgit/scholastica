import type { ModuleMeta } from '../types';

export const m18: ModuleMeta = {
  id: 18,
  title: `The Existential Thomism Debate`,
  short: `Existential Thomism`,
  label: `Module 18 · The Existential Thomism Debate`,
  latin: `De Esse et Essentia: Disputatio`,
  aim: `Esse is the act of all acts; essentia is the real positive potency that receives it. Fair fight, strict line wins: both halves of Aquinas's text, or neither.`,
  lessons: [
    {
      id: `m18-l1`,
      num: `I`,
      title: `What the Fight Is About`,
      latin: `disputatio`,
      tag: `disputatio`,
      fin: {
        tag: `disputatio`,
        heading: `Two camps, one master, one sentence in dispute.`,
        body: `Everything the course has taught converges on the real distinction, and in the twentieth century the family argued over what it means. The existential readers say essence is the limit <em>esse</em> gives itself. The strict line says essence is a real positive potency. You will hear both at full strength. Only one can be what Aquinas meant.`,
      },
      questions: [
        {
          id: `m18-l1-q1`,
          type: "mcq",
          stem: `The cup and the water. Essence receives and limits <span class="lat">esse</span> from within, as a real capacity, not an outside container: you made that correction yourself once. One question was left standing. Which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Whether esse is really the act of the essence.",
                "feedback": "Settled, and settled on both benches: every serious reader of Aquinas grants that <span class=\"lat\">esse</span> actualizes the essence. The open question sits one layer deeper, on the receiving side."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Whether the distinction between essence and esse is real or only logical.",
                "feedback": "That dispute exists, but it belongs to Suarez and his heirs, who deny the real distinction. The fight this module stages happens among those who all affirm it. Their question is stranger."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Whether the receiver is a real positive principle or only the limit esse gives itself.",
                "feedback": "Respondeo: that is the fault line. Everyone in the room says essence receives and limits <span class=\"lat\">esse</span>. The twentieth century split over what the receiver is: a real positive potency, or esse's own self-limitation wearing a noun."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Whether God too is composed of essence and esse.",
                "feedback": "No one in this disputation doubts the answer: in God they are identical, and both camps would die on that hill together. The quarrel is about creatures."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m18-l1-q2`,
          type: "mcq",
          stem: `Before the fight, the agreements. Which statement do <em>both</em> camps affirm?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Esse is the act of all acts, and in creatures it is really distinct from essence.",
                "feedback": "Respondeo: both benches sign this sentence. <span class=\"lat\">Actus omnium actuum</span>, 'the act of all acts': Aquinas's own description of <span class=\"lat\">esse</span>, and the shared ground of the whole dispute. The quarrel begins one word later, at what essence is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Essence is a real positive potency receiving esse.",
                "feedback": "That is precisely the strict line's claim and precisely what the existential reading declines. If both sides held it, this module would be one lesson long."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Essence is the self-limitation of esse.",
                "feedback": "That is the existential reading's claim, the one the strict line answers. Shared ground lies elsewhere: in esse's primacy, which nobody in the room disputes."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Esse and essence are two names for one principle.",
                "feedback": "Neither camp says this. Both affirm a real distinction; collapse it and you have left the disputation for a different room entirely."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m18-l1-q3`,
          type: "mcq",
          stem: `The iron glows with the fire's heat: creatures have <span class="lat">esse</span> by participation. Now suppose essence is not a real positive principle. What happens to that picture?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing changes; participation only needs esse itself.",
                "feedback": "Participation is a having, and a having needs a haver. Esse alone, with no real subject receiving it, is a loan with no borrower. Something in the picture has gone missing."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Participation grows stronger, since more reality goes to esse.",
                "feedback": "Generosity to <span class=\"lat\">esse</span> is not the issue; the strict line is as generous to it as anyone. The issue is whether anything real remains on the receiving end of the gift."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Participation becomes a relation between two complete things.",
                "feedback": "That is the opposite caricature: essence and esse as two blocks glued together. You learned to refuse it long ago. The present danger runs the other way, toward no receiver at all."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "No real receiver remains: nothing is left to do the participating.",
                "feedback": "Respondeo: the iron without the iron. Remove the real receiver and the borrowed glow has no borrower; the creature thins toward its source, and participation drifts toward emanation, where the tradition refuses to go. The stakes of this debate are that high."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m18-l1-q4`,
          type: "precision_check",
          stem: `A claim you might hear from a friendly reader: <em>"If essence is only esse limiting itself, nothing important is lost. The creature still exists either way."</em> What is wrong with it?`,
          payload: {
            "statement": "If essence is only esse limiting itself, nothing important is lost. The creature still exists either way.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing is wrong; the question is bookkeeping, not doctrine.",
                "feedback": "The bookkeeping in question is the metaphysics of creation. When the entries stop balancing, what fails is not a ledger but the account of how anything other than God can be at all."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "What is lost is the receiver, and with it participation and the real distinction itself.",
                "feedback": "Respondeo: the creature still exists, but the account of its existing changes floor to ceiling. No real potency, no real reception; no real reception, no participation; and a distinction between an act and its own limit is no longer a distinction between two real principles."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "What is lost is the creature's existence.",
                "feedback": "Too far: no one's existence is at stake, and the existential readers are not annihilating anything. What their reading risks is subtler, which is exactly why it took the school a century to argue it out."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "What is lost is God's simplicity.",
                "feedback": "God's simplicity stands untouched on every reading in the room; both camps affirm it with the same words. The casualty is on the creature's side of the ledger."
              }
            ],
            "correct_option_id": "b",
            "correction": "If essence is esse's own self-limitation, no real potency receives the act: the composition quietly dissolves, and with it the metaphysics of participation built upon it."
          },
        },
        {
          id: `m18-l1-q5`,
          type: "mcq",
          stem: `Two benches in the disputation. Which lineup is correct?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Strict line: Cajetan, John of St. Thomas, Garrigou-Lagrange. Existential reading: Gilson, Clarke, Phelan.",
                "feedback": "Respondeo: the commentatorial line on one bench, running from Cajetan through John of St. Thomas to Garrigou-Lagrange and Dominicans writing today; Gilson and the existential readers on the other. Giants on both, which is what makes the fight worth staging."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Strict line: Gilson and Clarke. Existential reading: Cajetan and the commentators.",
                "feedback": "Swapped. Gilson spent decades arguing that the commentators had muffled Aquinas's <span class=\"lat\">esse</span>; Cajetan is the very tradition he was arguing against. Put each bench back on its side."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Strict line: Aquinas alone. Existential reading: every commentator since.",
                "feedback": "Both camps claim Aquinas himself, which is what makes this a dispute about reading rather than a dispute about loyalty. Nobody gets to put the master on their bench by assertion."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Strict line: the Dominicans. Existential reading: the Jesuits, led by Suarez.",
                "feedback": "Suarez belongs to a different quarrel: he denies the real distinction outright, and on that point Gilson and Garrigou-Lagrange stand together against him. The existential readers are inside the real-distinction family."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m18-l1-q6`,
          type: "mcq",
          stem: `The scholastic disputation has a shape: the opposing case is stated at its strongest, <span class="lat">videtur quod</span> ('it seems that'), before it is answered, <span class="lat">respondeo</span> ('I answer'). What does that shape demand of you here?`,
          latin_tag: `disputatio`,
          doctrine_line: `The fight is not over whether esse is act. It is over what the receiver is.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Spot the existential reading's errors immediately, before it speaks.",
                "feedback": "A refutation that arrives before the argument is a prejudice with a bibliography. The form requires the objection to stand at full height first."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Treat both sides as equally right in the end.",
                "feedback": "The disputation is not a diplomatic exercise; it ends in a verdict. Fairness in the hearing, firmness in the judgment: the form holds both."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Argue the existential side honestly first, then watch the strict line answer it.",
                "feedback": "Respondeo: first you will make the opponents' case so well it tempts you. Then you will watch it met. Aquinas wrote the best objections to his own positions; this module does him the courtesy of imitation."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Suspend judgment permanently, since giants disagree.",
                "feedback": "Giants disagreeing is a reason to weigh carefully, not a license to stop weighing. The course adjudicates, and you will see the criteria when it does."
              }
            ],
            "correct_option_id": "c"
          },
        }
      ],
    },
    {
      id: `m18-l2`,
      num: `II`,
      title: `The Strict Line`,
      latin: `essentia ut potentia`,
      tag: `essentia ut potentia`,
      fin: {
        tag: `essentia ut potentia`,
        heading: `The mold is not nothing.`,
        body: `A real limit requires a real limiting principle. <em>Essentia ut potentia</em>: essence as the real, positive potency that receives <em>esse</em> and is not <em>esse</em>. Cajetan held it, John of St. Thomas systematized it, Garrigou-Lagrange defended it before the same modern audience Gilson wrote for, and the Church wrote it into the first of the 24 theses.`,
        distinction: {
          latin: `essentia ut potentia`,
          english: `essence as potency`,
          gloss: `The mold is not nothing: a real limit requires a real limiting principle, a positive potency that receives esse and is not esse.`,
          motif: `cup-water`,
        },
      },
      questions: [
        {
          id: `m18-l2-q1`,
          type: "mcq",
          stem: `The mold and the poured bronze. The strict line begins exactly here. What does the image insist on?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The mold shapes the bronze only in our description of it.",
                "feedback": "Then the statue's limits would live in us, not in the foundry, and any creature's finitude would be our manner of speaking. The bronze begs to differ; so does the dodo."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "What limits a real act must itself be something real, not an absence.",
                "feedback": "Respondeo: the mold does real work, and only something real can do work. Carry the sentence carefully; the entire strict case is folded inside it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The bronze limits itself as it cools; the mold merely watches.",
                "feedback": "There is the whole dispute in one sentence of foundry talk: the act limiting itself, the receiver demoted to scenery. Hold the thought; you will meet it again wearing Gilson's vocabulary."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The mold is a second statue hiding under the first.",
                "feedback": "The mold is not a rival statue, and essence is not a rival act. Make the receiver a second actuality and the old carpentry caricature returns. Potency is real precisely without being act."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m18-l2-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>An act, a perfection, which in its own order is of itself unlimited (for example, existence or wisdom or love) cannot in fact be limited except by something else not of its own order, something which is related to that perfection and gives the reason for that limitation. Now, nothing else can be assigned as limiting that act, that perfection, except the real potency, the capacity for receiving that act, that perfection.</p><p>Besides existence there is a real capacity which receives and limits existence. This capacity, this recipient, which limits existence, is not nothing, is not privation, is not imperfect existence; it is real objective potency, really distinct from existence.</p><div class="cr-cite">Garrigou-Lagrange, Reality: A Synthesis of Thomistic Thought, ch. 5, selections · trans. Cummins · verified against the EWTN library text</div></div><br>What is the engine of the argument?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Existence is intrinsically limited, so essence merely names that fact.",
                "feedback": "Reread the opening clause: the act is 'of itself unlimited.' If limitation were baked into <span class=\"lat\">esse</span>, no receiving principle would be needed and the whole argument would be idle. The limit has to come from somewhere."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Privation explains limitation well enough without a positive receiver.",
                "feedback": "The passage closes that door by name: 'not privation.' An absence cannot receive anything; only a real capacity can. You met the same move when prime matter refused to be mere negation."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Limits are illusions of finite minds.",
                "feedback": "The stone's existence is limited before any mind considers it; that is why there can be a plant beside it with a different measure of being. The argument is about reality, not about us."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "A real limitation on an unlimited act requires a real, positive, distinct receiving principle.",
                "feedback": "Respondeo: that is the engine. <span class=\"lat\">Esse</span> of itself is not this-much; something real must make it this-much, and only a real receptive potency can. <span class=\"lat\">Essentia ut potentia</span>, 'essence as potency': the strict line in three Latin words."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m18-l2-q3`,
          type: "mcq",
          stem: `The strict line has its formula: <span class="lat">essentia ut potentia</span>, 'essence as potency.' Said precisely, what does it claim?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Essence is the real receptive co-principle of esse: positive, not a shadow, not a boundary.",
                "feedback": "Respondeo: a real potency, standing to <span class=\"lat\">esse</span> as the marble stood to the figure: genuinely receiving, genuinely limiting, never a second act and never a mere edge. Two positive principles, one being."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Essence is potential until thinking makes it actual.",
                "feedback": "Minds discover the composition; they do not perform it. The potency in question is in the creature, doing its receiving long before any philosopher arrives to take notes."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Essence is an imperfect act awaiting completion.",
                "feedback": "That is the spring under tension: potency as a restrained force, a virtual act. Suarez and Leibniz walked that road, and the strict line marks it as the exact place the doctrine bends. Potency is really distinct from every act, even the least."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Essence is the weakest grade of esse.",
                "feedback": "Grades of <span class=\"lat\">esse</span> are still <span class=\"lat\">esse</span>; a faint act is an act. The receiver must stand in another order altogether, or nothing receives and the limit goes unexplained."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m18-l2-q4`,
          type: "distinction_application",
          stem: `A finite angel: no matter, no body, pure spirit, and still a creature. Four sentences about its finitude; the strict line accepts one. Which?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The angel's esse runs out at a boundary called its essence.",
                "feedback": "A boundary where something stops is not a principle that makes it stop. Name the edge all you like; the question is what real thing holds this <span class=\"lat\">esse</span> to this measure."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The angel is finite because nothing infinite was available.",
                "feedback": "Availability is not metaphysics. Finitude needs a principle inside the finite being, not a shortage in the warehouse."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The angel's essence is a real capacity that receives its esse and holds it to this nature.",
                "feedback": "Respondeo: with no matter anywhere in the being, the only composition left to account for its finitude is <span class=\"lat\">esse</span> received into a real <span class=\"lat\">essentia</span>. The angel is the strict line's cleanest exhibit, which is why the commentators kept calling it to the stand."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The angel's finitude is a divine decree with no principle inside the angel.",
                "feedback": "God decrees the angel, and the decreed angel has an inside: a real nature receiving a real act. Outsourcing the creature's structure to the divine will answers a different question than the one asked."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m18-l2-q5`,
          type: "mcq",
          stem: `The first of the 24 Thomistic theses, the Church's 1914 charter of strict Thomism, says that whatever exists 'is either pure act, or then is necessarily composed of potency and act, as of two primary and intrinsic principles.' What follows for essence?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The thesis speaks of matter and form only.",
                "feedback": "It speaks of potency and act as such, the wider pair. Matter and form is one instance; <span class=\"lat\">essentia</span> receiving <span class=\"lat\">esse</span> is the deeper one, the composition that runs through angels and stones alike."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "In every creature, essence is one of two real and intrinsic principles.",
                "feedback": "Respondeo: 'two primary and intrinsic principles' is the thesis's own phrase, and a self-limitation of <span class=\"lat\">esse</span> is not a second principle. When Rome weighed this dispute, the words it chose were the strict line's words."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The thesis makes the composition logical, between concepts.",
                "feedback": "Read it again: intrinsic principles of the existing thing, not entries in a notebook. A logical composition would need no thesis; nobody ever denied that we can think essence and existence separately."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The thesis applies to bodies, leaving angels simple.",
                "feedback": "The thesis says everything short of Pure Act is composed, and an angel is short of Pure Act. Only one being escapes the composition, and no angel is He."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m18-l2-q6`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>From Cajetan's commentaries to John of St. Thomas's course to Garrigou-Lagrange's classrooms to Dominicans writing today, Bonino among them, the strict bench is held together by loyalty to the commentators rather than by an argument.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `essentia ut potentia`,
          doctrine_line: `A real limit requires a real limiting principle.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Schools survive on loyalty; the arguments came later.",
                "feedback": "The mold argument is in Aristotle, the limit principle is in Aquinas, and the commentators inherited both before defending either. The loyalty is real, but it is loyalty to an argument."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The 1914 theses created the position they claimed to describe.",
                "feedback": "Cajetan wrote four centuries before 1914; the theses codified a standing position, they did not invent one. The decree is a receipt, not a birth certificate."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. The bench agrees because each man independently preferred Aristotle to Aquinas.",
                "feedback": "Right judgment, wrong genealogy: the strict line's central claim, <span class=\"lat\">esse</span> received and limited by real essence, is Aquinas beyond Aristotle, not Aristotle against him. The bench is Thomist to the bone."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. One argument holds it together: a real limit requires a real limiting principle.",
                "feedback": "Respondeo: five centuries, one engine. Essence as <span class=\"lat\">res</span>, a reality: a real, positive, receiving potency, because nothing less can do the limiting. Everything else on the bench is commentary on that sentence."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `m18-l3`,
      num: `III`,
      title: `The Existential Reading`,
      latin: `actus omnium actuum`,
      tag: `actus omnium actuum`,
      fin: {
        tag: `actus omnium actuum`,
        heading: `You were supposed to feel that.`,
        body: `<em>Esse</em>, the act of all acts. Essence, the formal delimitation of a possible being. The reading is beautiful, it is built from Aquinas's own sentences, and it was written by men who loved him. If it did not tempt you, read it again. The disputation needs you tempted.`,
        distinction: {
          latin: `actus omnium actuum`,
          english: `the act of all acts`,
          gloss: `Esse, the act of all acts, the perfection of all perfections: a reading built from Aquinas's own sentences, and you were supposed to feel its pull.`,
          motif: `sun-alone`,
        },
      },
      questions: [
        {
          id: `m18-l3-q1`,
          type: "mcq",
          stem: `Aquinas: <span class="lat">esse est actualitas omnium actuum, et propter hoc est perfectio omnium perfectionum</span>, 'esse is the actuality of all acts, and for this reason the perfection of all perfections' (De potentia q.7 a.2 ad 9). The existential readers begin here. What do they hear?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "If esse is the act even of forms, essence can keep nothing actual of its own.",
                "feedback": "Respondeo: that is the existential spring. Every drop of actuality belongs to <span class=\"lat\">esse</span>; so what is left for essence to be? Hold the question honestly. The whole debate lives inside it."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That esse is one act among many.",
                "feedback": "The text says nearly the opposite: the actuality of all acts, the one in which every other act is steeped. Whatever the existential readers heard, it was not modesty about <span class=\"lat\">esse</span>."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That perfection belongs to essence first, esse second.",
                "feedback": "Reversed: the perfection of all perfections is <span class=\"lat\">esse</span>'s title in this text. Essence-first is the old essentialism the existential readers spent their careers burning down."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That actuality is divided equally between two principles.",
                "feedback": "No one divides actuality in half; act belongs to act. The strict line agrees that all actuality is on esse's side. Where the camps part is over what the other principle is, not over splitting the act."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m18-l3-q2`,
          type: "close_reading",
          stem: `<div class="cr-passage"><p>But Thomas Aquinas could not posit existence (esse) as the act of a substance itself actualized by its form, without making a decision which, with respect to the metaphysics of Aristotle, was nothing less than a revolution. He had precisely to achieve the dissociation of the two notions of form and act. This is precisely what he has done and what probably remains, even today, the greatest contribution ever made by any single man to the science of being.</p><p>Supreme in their own order, substantial forms remain the prime acts of their substances, but, though there be no form of the form, there is an act of the form. In other words, the form is such an act as still remains in potency to another act, namely, existence.</p><div class="cr-cite">Étienne Gilson, Being and Some Philosophers, 2nd ed. (Toronto: PIMS, 1952), ch. V, pp. 174-175 · verified against the Internet Archive scan</div></div><br>What is Gilson claiming for Aquinas?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "That Aristotle already taught the real distinction.",
                "feedback": "The passage says the reverse: against Aristotle, a revolution. For Aristotle, form was the last word in act; Gilson's whole point is that Aquinas spoke a further word."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "That form needed a defender against Plato.",
                "feedback": "Plato is off stage here. The drama is between Aristotle's form-as-act and Aquinas's deeper act; read the second paragraph again and watch where the pressure lands."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "That Aquinas split act from form: form itself stands in potency to a further act, esse.",
                "feedback": "Respondeo: the dissociation of act and form, named by Gilson as the greatest single contribution to the science of being. And notice: so far the strict line nods along. An act of the form is its own doctrine too. The split between the camps comes one step later."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "That existence is a second form added to the first.",
                "feedback": "The passage rules that out in five words: there is no form of the form. <span class=\"lat\">Esse</span> is act without being form; that is exactly the novelty being celebrated."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m18-l3-q3`,
          type: "mcq",
          stem: `Gilson again: finite essences 'entail both limitation and determination, because each of them is the formal delimitation of a possible being' (Being and Some Philosophers, 2nd ed., pp. 183-184). On the existential reading, what is essence?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A fiction of grammar.",
                "feedback": "Too cheap for this bench. The existential readers are not nominalists; essence does real work in their world. The question is what kind of reality it has, and their answer is subtler than fiction."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The intrinsic measure esse gives itself: the limit-shape of an act, not a second positive thing.",
                "feedback": "Respondeo: essence as delimitation. Real the way a measure is real, with nothing of its own to contribute: the shape of the act rather than a co-principle beside it. Stated at full strength, it sounds like reverence for <span class=\"lat\">esse</span>. Whether it can keep the receiver is the next lesson's question."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A complete being waiting for existence to arrive.",
                "feedback": "That is the essentialism Gilson wrote the book against: the catalogue of ready-made essences stamped into existence. No one in this disputation defends it, least of all him."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "An idea in the divine mind only.",
                "feedback": "The divine ideas are real doctrine but a different doctrine. The question here is about the creature's own inside: what, in the existing thing, its essence is."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m18-l3-q4`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>On the existential reading, essence is nothing at all.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Since only esse is act, essence is sheer nothing.",
                "feedback": "That inference is exactly the caricature the existential readers refuse. Between act and sheer nothing they place the limit-mode, real as a measure is real. Miss that and you are fighting a ghost."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Gilson says essences are fictions of the schools.",
                "feedback": "He says nearly the opposite: essences are how possible beings are delimited, and his pages on essentialism attack their inflation, not their existence. No such sentence is in him."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Essence is real because it exists before esse arrives.",
                "feedback": "Right judgment, and a reason no one in the room would touch: essences do not preexist their act on any bench. Choose the reason the existential readers actually give."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Essence is real as the delimitation of esse; what is denied is a second positive co-principle.",
                "feedback": "Respondeo: state your opponent exactly. The existential reading does not annihilate essence; it demotes it from co-principle to limit-mode. Get that precise, or the disputation that follows is against a ghost, and ghosts prove nothing."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m18-l3-q5`,
          type: "mcq",
          stem: `Gilson aimed the reading at a real enemy: centuries of philosophy that treated being as a catalogue of definable essences, with existence as a stamp at the bottom of the page. 'God knows essences, but He says existences' (Being and Some Philosophers, 2nd ed., ch. V). What is the reading guarding?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The catalogue: essences deserve their primacy back.",
                "feedback": "That is the enemy, not the guard. The whole existential polemic burns against essence-first metaphysics; whatever Gilson protects, it is not the filing cabinet."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Nothing: the polemic was misdirected from the start.",
                "feedback": "The enemy was real. Rationalist metaphysics genuinely had frozen being into definitions, and a Thomism content to catalogue had partly followed it there. The existential readers saw something true; that is what makes them worth answering."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Against frozen essentialism: esse is met in judgment, in that things are, not in definitions.",
                "feedback": "Respondeo: the act of being is not one more item to define; it is affirmed when you judge that something is. The strict line shares this enemy completely. Garrigou-Lagrange himself calls <span class=\"lat\">esse</span> of itself unlimited and most perfect. The quarrel is not over esse's crown."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The senses: existence is felt, never known.",
                "feedback": "Sensation meets existents, but the existential readers insist <span class=\"lat\">esse</span> is grasped intellectually, in the judgment. Demoting it to feeling would hand the catalogue the only knowledge there is."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m18-l3-q6`,
          type: "mcq",
          stem: `Close the case for the objectors. Which sentence states the existential thesis exactly?`,
          latin_tag: `actus omnium actuum`,
          doctrine_line: `The strongest case against the strict line, stated in its own words.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Esse is the supreme act; essence is its self-limitation, not a second positive principle.",
                "feedback": "Respondeo: stated, and stated fairly. The act of all acts, limiting itself into natures, with the real distinction kept in words. It is the strongest case ever made against the strict line, and tomorrow it stands trial."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Esse and essence are identical in creatures.",
                "feedback": "No one on either bench says this of creatures; it is the divine case alone. The existential reading keeps a distinction; the dispute is over what stands on the second side of it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Essence receives esse as a real positive potency.",
                "feedback": "That is the strict line, the position under attack. If you chose it here, you have the two benches swapped, and the disputation will be very confusing to watch."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Esse is a relation between essence and God.",
                "feedback": "Esse is the creature's own act, not a thread strung between it and heaven. Both camps hold that the creature really is, in itself, by an act intrinsic to it."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `m18-l4`,
      num: `IV`,
      title: `The Disputation: Objections`,
      latin: `videtur quod`,
      tag: `videtur quod`,
      fin: {
        tag: `videtur quod`,
        heading: `You argued for the other side, and you did it honestly.`,
        body: `<em>Videtur quod</em>: it seems that essence is only the self-limitation of <em>esse</em>. Three objections now stand at full strength, built from Aquinas's own texts, defended by men who loved him. No straw was used. The <em>respondeo</em> owes them the same seriousness.`,
      },
      questions: [
        {
          id: `m18-l4-q1`,
          type: "mcq",
          stem: `<span class="lat">Videtur quod</span>, 'it seems that': a disputation opens with the case against the position to be defended, stated at its strongest. Why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Custom: medieval manners required politeness.",
                "feedback": "The manners were real, but the form is not etiquette. The objections do logical work: they mark exactly what the answer must carry. Courtesy is the byproduct."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Strategy: a weak opening flatters the answer.",
                "feedback": "Backwards: the form demands the strong opening precisely so the answer cannot flatter itself. A position that has only beaten weak objections has not been tested."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Fairness to readers who might disagree.",
                "feedback": "Fair, yes, but fairness is the fruit. The root is harder: without the best objections on the table, the <span class=\"lat\">respondeo</span> proves nothing even to friends."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Truth: a position is only proved against the best objections, not the convenient ones.",
                "feedback": "Respondeo: the strongest case against, or no case for. Aquinas built the form around that severity, and this lesson asks you to practice it on the course's own deepest doctrine."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m18-l4-q2`,
          type: "syllogism_builder",
          stem: `Build the first existential objection in proper form, as the objector would build it. Place each statement in its role: universal premise, particular premise, conclusion.`,
          payload: {
            "instruction": "Three statements; three roles. The universal states the objector's general principle. The particular applies it to essence. The conclusion draws what the existential reading needs.",
            "components": [
              {
                "id": "c1",
                "text": "Whatever is nothing apart from another cannot stand to it as a real receiving potency.",
                "role": "major"
              },
              {
                "id": "c2",
                "text": "Apart from its act of existing, an essence is nothing.",
                "role": "minor"
              },
              {
                "id": "c3",
                "text": "Therefore essence is not a real receiving potency, but a mode of esse itself.",
                "role": "conclusion"
              }
            ],
            "feedback": {
              "correct": "Built, and built honestly. The objection has real teeth: a potency that is nothing without its act looks like a shadow of the act, and calling the shadow a co-principle looks like double counting. Do not reach for your answer yet. A disputation lets the objections stand overnight.",
              "incorrect": "The objection has three joints. The universal gives the objector's principle about what can count as a real receiver. The particular states the existential camp's observation about essence apart from esse. The conclusion demotes essence from co-principle to mode."
            },
            "doctrineTag": "videtur quod"
          },
        },
        {
          id: `m18-l4-q3`,
          type: "dialogue_branch",
          stem: `The second objection must come from Aquinas's own pen. Give the Commentator the strong one.`,
          payload: {
            "commentatorLine": "The Commentator takes the objector's chair and folds his hands. 'Second objection. Build it from the master's own words, and make it strong. Weak ones go back.'",
            "branches": [
              {
                "text": "Aquinas calls esse the actuality of all acts. Then all actuality in the thing is esse's; call essence positive and you have smuggled in a second act.",
                "verdict": "correct",
                "feedback": "That is the strong one. If every drop of actuality belongs to <span class=\"lat\">esse</span>, a positive essence looks like a rival act, and two acts cannot compose one being. The objection stands on the master's own sentence, which is what makes it dangerous. It will take the whole <span class=\"lat\">respondeo</span> to meet it."
              },
              {
                "text": "Essence is just a word for our way of sorting things.",
                "feedback": "Nominalism, and the Commentator slides it back across the table. The existential readers hold essence real as esse's own measure; they are not sorting labels. Bring the objection they would sign."
              },
              {
                "text": "God is simple, so creatures must be simple too.",
                "feedback": "No existential Thomist argues this; it proves far too much and contradicts the master openly. Creatures composed is common ground in this room. Back it goes."
              },
              {
                "text": "The distinction is only in our concepts, as Suarez taught.",
                "feedback": "Wrong bench. Suarez denies the real distinction; Gilson affirms it and re-reads it. The honest objection must come from inside the existential camp, not from its neighbors."
              }
            ]
          },
        },
        {
          id: `m18-l4-q4`,
          type: "mcq",
          stem: `The third objection argues from images: 'The surface of a pond is perfectly real, yet it is not a second pond. Why must the limit of esse be a second principle?' What gives this objection its force?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Ponds are made of water, and creatures of esse.",
                "feedback": "The image is not a chemistry lesson. Its force is in where limits live: read the surface again and ask what work it does, and what work it does not do."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Limits in nature often are not extra things, so a positive receiver looks like double counting.",
                "feedback": "Respondeo: that is the sting. Edges, surfaces, boundaries: the world is full of real limits that are not additional things. The objector asks why metaphysics should differ, and the question deserves a real answer, not a shrug."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Surfaces are unreal, so limits are unreal.",
                "feedback": "If the surface were unreal the objection would die of it; you can skip stones off this one. Its force depends on the surface being real and yet not a second pond."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It quotes Aquinas directly.",
                "feedback": "No text of Aquinas speaks of ponds here; this one argues from the world, not from the page. Its strength is in the analogy, which is also where the answer will press."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m18-l4-q5`,
          type: "mcq",
          stem: `Three objections stand: nothing-apart, the act of all acts, the boundary. The disputation turns. What must the <span class="lat">respondeo</span> ('I answer') do to win?`,
          latin_tag: `videtur quod`,
          doctrine_line: `A disputation owes its opponents their strongest case.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Meet each objection by distinguishing: concede what is true in it, refuse what is false.",
                "feedback": "Respondeo: <span class=\"lat\">distinguo</span>, 'I distinguish', the scholastic move itself. Never flat denial, always precision: each objection contains a truth that must be kept and a step that must be refused. Tomorrow, the answers."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Declare the objections outside the wall and decline to answer.",
                "feedback": "The wall excludes voices from the room; it never excuses the room from arguing. Gilson is inside, at the other lectern, and he gets an answer. Positions that only banish their objections do not win disputations."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Replace argument with authority: Rome approved the theses.",
                "feedback": "The theses crown the argument; they do not stand in for it. The 1914 decree itself argues from Aquinas's texts, which is where the respondeo must also live."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Show the objectors loved Aquinas less than the commentators did.",
                "feedback": "They did not, and it would not matter if they had. Love is not evidence. The disputation weighs readings, not hearts."
              }
            ],
            "correct_option_id": "a"
          },
        }
      ],
    },
    {
      id: `m18-l5`,
      num: `V`,
      title: `The Disputation: Replies`,
      latin: `respondeo`,
      tag: `respondeo`,
      fin: {
        tag: `respondeo`,
        heading: `None dismissed. All met.`,
        body: `Aquinas's own sentence closed the strongest objection: <em>esse</em> is determined by essence 'as act by potency.' The nothing-apart argument fell to a distinction between nothing-in-act and nothing-in-potency. The boundary fell to the need for a real receiver. The strict line did not shout; it distinguished.`,
        distinction: {
          latin: `sicut actus per potentiam`,
          english: `as act by potency`,
          gloss: `The same reply that crowns esse also binds it: determined by essence as act by potency; the strict line reads the whole sentence, the other keeps half.`,
          motif: `ladder-of-ratios`,
        },
      },
      questions: [
        {
          id: `m18-l5-q1`,
          type: "mcq",
          stem: `Return to De potentia q.7 a.2 ad 9. The objectors quoted its first half. The same reply continues: <span class="lat">non sic determinatur esse per aliud sicut potentia per actum, sed magis sicut actus per potentiam</span>, 'esse is not determined by another as potency by act, but rather as act by potency.' What has happened?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Aquinas contradicts himself within one reply.",
                "feedback": "No contradiction: the same sentence that crowns <span class=\"lat\">esse</span> also names its receiver. Acts are determined by the potencies that receive them; that has been the grammar of the system since the marble."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Aquinas himself names essence a potency that determines esse: the strict line reads the whole text.",
                "feedback": "Respondeo: the act of all acts, received and determined by a real potency, in one and the same breath. The existential reading must quietly set the second half down; the strict line keeps the whole sentence. That is the shape of the entire verdict, visible in miniature."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The second half concerns God alone.",
                "feedback": "In God nothing determines <span class=\"lat\">esse</span> at all; the clause is about the determined cases, the creatures, where this nature holds this act to this measure. The reply is about the world."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The translation is disputed, so nothing follows.",
                "feedback": "The Latin is plain and the clause is famous: <span class=\"lat\">sicut actus per potentiam</span>, 'as act by potency.' Hard texts deserve hard work, but this one is only hard for one of the two benches."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m18-l5-q2`,
          type: "dialogue_branch",
          stem: `The first objection returns for its answer. Distinguish.`,
          payload: {
            "commentatorLine": "'Apart from its esse, essence is nothing,' the objector repeats, tapping the lectern. 'So your receiving potency is a shadow.' Answer him. Distinguish.",
            "branches": [
              {
                "text": "Nothing in act, I grant. Nothing in potency, I deny: a real potency is no actual thing, yet it is not nothing.",
                "verdict": "correct",
                "feedback": "<span class=\"lat\">Distinguo</span>, and the objection opens like a door. The wood's capacity for the statue was never a second statue, and never nothing. Potency-reality is the course's oldest lesson, standing exactly where the fight is hottest. The objector mistook 'not an act' for 'not real,' and that one confusion was his whole case."
              },
              {
                "text": "Essence exists first, then receives esse.",
                "feedback": "Overcorrected into essentialism: no Thomist holds pre-existing essences. The receiver never stands apart from what it receives; the two principles are co-created, composing one being from its first instant. Distinguish, do not retreat."
              },
              {
                "text": "The objection is word-play unworthy of answer.",
                "feedback": "Flat dismissal is the one move the <span class=\"lat\">respondeo</span> may never make. The objection is serious, built on a real feature of potency. Aquinas distinguishes; he does not shrug."
              },
              {
                "text": "Essence is nothing, but God's power bridges the gap.",
                "feedback": "That surrenders the creature's inside in order to repair it from outside. The question was what receives <span class=\"lat\">esse</span> within the thing; 'God acts' is true and answers a different question."
              }
            ]
          },
        },
        {
          id: `m18-l5-q3`,
          type: "precision_check",
          stem: `A summary you might hear from a sympathetic student: <em>"The strict line answers Gilson by showing that essences exist before they receive esse."</em> What is wrong with it?`,
          payload: {
            "statement": "The strict line answers Gilson by showing that essences exist before they receive esse.",
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing is wrong; the priority of essence is the whole point.",
                "feedback": "No bench in this room holds essences waiting in a vestibule for existence to arrive. That is the catalogue essentialism both camps reject; the strict line wins without it or not at all."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Wrong only because angels are exceptions.",
                "feedback": "Angels are no exception; their essences no more preexist than a stone's. The slip in the summary is not about which creatures, but about time and existence themselves."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Mostly right, but 'exist' should read 'subsist.'",
                "feedback": "Swapping verbs does not save it; a subsisting essence-before-esse is the same vestibule with better Latin. The correction needed is structural, not lexical."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Wrong centrally: no essence exists apart; it is co-created as the potency side of one being.",
                "feedback": "Respondeo: the strict claim is about co-principles, never about temporal priority. Really distinct, never apart: the essence is created with and under its <span class=\"lat\">esse</span>, composing one creature from its first instant. Defend the right doctrine, or the objectors win by your hand."
              }
            ],
            "correct_option_id": "d",
            "correction": "The strict line claims no priority of essence over esse: the two principles are really distinct and never apart, co-created as the potency and act of one being."
          },
        },
        {
          id: `m18-l5-q4`,
          type: "mcq",
          stem: `The pond surface returns: 'a limit need not be a thing.' The strict line answers with a question of its own: what makes <em>this</em> esse finite, and this-much rather than that-much? Why does the boundary picture fail?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "A boundary is an effect, not a principle: real limitation needs a real receiving cause within.",
                "feedback": "Respondeo: the surface marks where the water stops; it does not make the water stop. The basin does that. Limitation is an effect requiring a real cause, and without a real receiver the old argument of Parmenides against the many comes back unpaid: nothing could diversify or bound being at all."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Ponds are accidental beings, so the image is impious.",
                "feedback": "The image is fair play; the school argues from wax and water constantly. The failure is in what the picture leaves out, not in its humble materials."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Esse has no limits, so nothing needs explaining.",
                "feedback": "Creaturely <span class=\"lat\">esse</span> is limited or you are God; the stone's measure of being is not the angel's. Finitude is the datum. The question was never whether, but by what."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "The boundary is God's choice, requiring nothing in the creature.",
                "feedback": "God's choice makes the creature, and the made creature has an inside. A decree with no received structure in the thing explains the decree, not the thing. The receiver question stands."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m18-l5-q5`,
          type: "mcq",
          stem: `Gilson himself wrote that the act of existing 'is what enables essence to act as a formal cause, and to make actual being to be such a being' (Being and Some Philosophers, 2nd ed., pp. 173-174). The strict line underlines the sentence. Why?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "It shows Gilson abandoned the real distinction.",
                "feedback": "He never did; the distinction is his battle flag. The interest of the sentence is elsewhere: in what it concedes about the second principle while defending the first."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "It dates the book precisely.",
                "feedback": "The lectern is not a card catalogue. Read the sentence for its metaphysics: something in it does work the existential thesis cannot pay for."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "A formal cause that really causes is a real positive principle: a concession the reading cannot afford.",
                "feedback": "Respondeo: shadows cause nothing. The moment essence does formal-causal work, making this being such a being, it does what only a real principle can do. The strict line thanks the witness and rests."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "It proves essence is an act after all.",
                "feedback": "Formal causality does not make essence a second act of existing; it makes it a real co-principle in its own order. Keep the orders distinct or the second objection comes back to life."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m18-l5-q6`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>By calling essence a real positive potency, the strict line makes it a second act beside esse.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `respondeo`,
          doctrine_line: `Esse is determined by essence as act by potency: Aquinas's own settlement.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Two reals must be two acts.",
                "feedback": "That equation is the objector's confusion, not the strict line's doctrine. Potency is real without being act; the wood's capacity was never a second statue. Real and actual are not synonyms in this school."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. Reception is itself a minor act.",
                "feedback": "Call receiving an act and every potency becomes act, the distinction collapses, and Parmenides collects his winnings. Receiving is precisely what potency does without being act."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. Essence is not real at all, so the question dissolves.",
                "feedback": "Right judgment, purchased at the cost of the whole case: that is the existential thesis, not the strict defense. The strict line keeps essence real and refuses to make it act."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Essence is real as potency, and potency is the reality that is not act.",
                "feedback": "Respondeo: the answer to the strongest objection. Act composes with potency, never with another act; and potency is the one kind of reality whose whole being is to receive. The grid you built at the start of the course just carried the heaviest stone in it."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `m18-l6`,
      num: `VI`,
      title: `The Verdict and the Cost`,
      latin: `esse ut actus`,
      tag: `esse ut actus`,
      fin: {
        tag: `esse ut actus`,
        heading: `The strict line wins, and bows to the loser.`,
        body: `It wins because it keeps the whole of Aquinas's text where the existential reading keeps half, because participation needs a real receiver, and because the Church weighed this dispute and wrote the strict reading into her theses. It bows because Gilson recovered the primacy of <em>esse</em> for a century that had filed being away in catalogues. <em>Esse ut actus, essentia ut potentia</em>: both, or neither.`,
        distinction: {
          latin: `esse ut actus  ·  essentia ut potentia`,
          english: `esse as act  ·  essence as potency`,
          gloss: `The strict line wins because it keeps the whole sentence and the real receiver, and bows because Gilson gave esse back to a century: both, or neither.`,
          motif: `sun-silhouette`,
        },
      },
      questions: [
        {
          id: `m18-l6-q1`,
          type: "mcq",
          stem: `Verdicts need criteria. The course finds for the strict line. Which criterion does the heaviest work?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Seniority: the commentators came first.",
                "feedback": "Age confers nothing by itself; old misreadings exist. The commentators' centuries matter only because of what they spent them doing: arguing from the texts."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Authority alone: Rome said so in 1914.",
                "feedback": "The theses matter, and the Church's weighing is not nothing in this course. But the theses themselves argue from Aquinas; authority here crowns fidelity, it does not replace it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Numbers: more Thomists agree.",
                "feedback": "Counting heads settles elections. One text read whole outweighs a crowd reading half, and the verdict rests on exactly that."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Fidelity: the strict line keeps both halves of Aquinas's text; the existential reading drops one.",
                "feedback": "Respondeo: <span class=\"lat\">actualitas omnium actuum</span> and <span class=\"lat\">sicut actus per potentiam</span> live in the same reply. The strict line reads the whole sentence; the existential reading must quietly pocket the second clause. The reading that explains away fewer of the master's own words wins."
              }
            ],
            "correct_option_id": "d"
          },
        },
        {
          id: `m18-l6-q2`,
          type: "mcq",
          stem: `Name the casualty. If essence is only esse's self-limitation, which structure fails first?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Participation: with no real receiver, having collapses toward being, and the creature toward its source.",
                "feedback": "Respondeo: the iron must remain other than the fire, or nothing borrows. Participation is the architecture of the whole created order, and its load-bearing wall is a receiver that is really something. That is what the limit-mode cannot supply."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Logic: syllogisms stop working.",
                "feedback": "Logic survives any metaphysics; even Parmenides argued validly toward his one frozen being. The casualty is in the order of being, not of inference."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Ethics: virtue loses its measure.",
                "feedback": "Eventually everything leans on metaphysics, but ethics fails late, not first. Look for the structure that needs a real receiver the moment it is stated."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Physics: matter and form dissolve.",
                "feedback": "Matter and form stand on their own evidence; the bronze recast does not wait on this dispute. The deeper composition is where the receiver goes missing."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m18-l6-q3`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>The existential reading was an enemy of Thomism.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. It denied the real distinction.",
                "feedback": "It never did; it affirmed the distinction loudly and re-read what stands on one side of it. Convict a man of his own position or acquit him."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. It preferred Scotus to Aquinas.",
                "feedback": "Gilson wrote volumes putting Scotus second to Aquinas on exactly these questions. Whatever the existential reading is, it is not Scotism in a borrowed habit."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. A quarrel inside the family, over one deep point, among sons of the same master.",
                "feedback": "Respondeo: worthy opponents, not enemies. They read the same texts, loved the same master, defended the same distinction, and misplaced one principle at the bottom of the system. Admire the players; adjudicate the play."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Both readings are equally true.",
                "feedback": "Right judgment, fatal reason: contradictory readings of one master cannot both be what he meant. Charity toward persons, severity toward positions; the course never trades the second for the first."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m18-l6-q4`,
          type: "mcq",
          stem: `Worthy opponents leave gifts. What does the strict line keep from the existential reading?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Nothing: a won dispute keeps no spoils.",
                "feedback": "The school is not a battlefield that salts the earth. Every serious objection sharpens the doctrine it failed to topple; this one sharpened the most important doctrine there is."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "The recovered primacy of esse: act of all acts, met in judgment, never a mere definition.",
                "feedback": "Respondeo: and Garrigou-Lagrange would sign every word, for the strict line had said it all along: <span class=\"lat\">esse</span> of itself unlimited, the most perfect of realities. The quarrel was never over esse's crown. It was over whether the one who receives the crown's gift is real."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "The self-limitation of esse, adopted quietly.",
                "feedback": "Adopting that would be losing the dispute politely. The receiver stays real; that was the entire verdict, and it is not for trade."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Its doubts about the 24 theses.",
                "feedback": "The theses came through the fire confirmed, not doubted. What the fire burned away was any temptation to recite them without knowing what they cost."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m18-l6-q5`,
          type: "mcq",
          stem: `After the verdict, the formed Thomist holds a posture. Which sentence states it?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "The real distinction held strictly, essence understood through its whole ordering to the esse it receives.",
                "feedback": "Respondeo: immovable on the doctrine, instructed by the opponent. Essence is real potency, and potency is meaningless except toward its act: the strict Thomist after this debate never speaks of essence except in the light of the act it receives. That is winning without forgetting why the fight happened."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Essence first: existence is a footnote to definition.",
                "feedback": "The catalogue again. That posture lost to Gilson before this module ever reached its verdict, and the strict line will not resurrect it for him."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Esse only: essence survives as a manner of speaking.",
                "feedback": "The defeated reading, kept as a posture. The disputation was not staged so that its loser could win the epilogue."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Suspension: the texts underdetermine the question.",
                "feedback": "The texts determined it; you watched them do it. One bench kept the whole of De potentia and the other kept half. Suspension after evidence is not humility; it is refusal."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m18-l6-q6`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>Winning this disputation costs the strict line nothing.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          latin_tag: `esse ut actus`,
          doctrine_line: `Fair fight, strict line wins: both halves of the text, or neither.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. Truth is free to whoever holds it.",
                "feedback": "Truth is free; holding it well is not. A doctrine defended once must be held rightly forever after, and there is a specific way this one goes bad in careless hands."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The theses settle it forever; no upkeep needed.",
                "feedback": "A settled thesis still has to be understood every time it is taught, and misunderstood essence hardens fast. The decree ended the dispute, not the discipline."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. It costs a concession: essence is mostly esse after all.",
                "feedback": "No such concession was made; smuggling it in now would hand back the verdict. The cost is real but it is paid in vigilance, not in doctrine."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. It costs vigilance: essence must never harden back into a little thing glued to esse.",
                "feedback": "Respondeo: the two worst fates of the doctrine are still the same two: essence inflated into a block, essence thinned into a shadow. The existential reading remains the permanent reminder against the first, which is the strict line's own besetting temptation. Winners who stop watching become the next module's cautionary tale, except there is no next module. There is only the Summa."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    },
    {
      id: `m18-l7`,
      num: `VII`,
      title: `Recapitulatio Totius Cursus`,
      latin: `recapitulatio`,
      tag: `recapitulatio`,
      fin: {
        tag: `recapitulatio`,
        heading: `Tolle, lege. The course ends where the Summa begins.`,
        body: `Seven distinctions opened the course; the act of all acts closes it. You can now follow the tradition's own arguments about itself, which means you no longer need a game standing between you and the master. Go to the text. Begin at the first question of the Summa, where a Dominican who knew everything this course taught asks, patiently, whether anything beyond philosophy is needed at all. Read him with the <em>Incipiens</em> community, or alone at night, but read him. You are an <em>incipiens</em> now in the only sense that matters: one who has begun.`,
        distinction: {
          latin: `esse ut actus  ·  essentia ut potentia`,
          english: `esse as act  ·  essence as potency`,
          gloss: `The strict line wins because it keeps the whole sentence and the real receiver, and bows because Gilson gave esse back to a century: both, or neither.`,
          motif: `sun-silhouette`,
        },
      },
      questions: [
        {
          id: `m18-l7-q1`,
          type: "match_pair",
          stem: `Six images carried the course. Pair each with the principle it taught. <em>Tap an image, then tap its principle. Tap a paired item to release it.</em>`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the apple on the table"
              },
              {
                "id": "L2",
                "text": "the sculptor's marble"
              },
              {
                "id": "L3",
                "text": "Aquinas's phoenix"
              },
              {
                "id": "L4",
                "text": "the bronze horse, recast"
              },
              {
                "id": "L5",
                "text": "Socrates' summer tan"
              },
              {
                "id": "L6",
                "text": "the knocked-over coffee cup"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "what it is and that it is are two questions"
              },
              {
                "id": "R2",
                "text": "real potency, shaped into act by another"
              },
              {
                "id": "R3",
                "text": "an essence fully known, existence still open"
              },
              {
                "id": "R4",
                "text": "matter holding under a new substantial form"
              },
              {
                "id": "R5",
                "text": "the substance stays while accidents change"
              },
              {
                "id": "R6",
                "text": "the human act, owned, aimed, and judged"
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
              "all_correct": "Six images, six load-bearing walls. The apple opened the two questions, the marble taught receiving, the phoenix carried the real distinction, the bronze went under, the tan stayed on the surface, and the coffee cup put the whole system inside a human morning. A course is owned when its images carry its principles. These now carry you.",
              "partial_correct": "Walk them again, slowly; they have walked with you long enough to deserve it. What did the apple first split apart? What did the marble receive? What did knowing the phoenix's essence still leave open?"
            },
            "doctrineTag": "recapitulatio"
          },
        },
        {
          id: `m18-l7-q2`,
          type: "mcq",
          stem: `One sentence has carried more weight with every module. Which is it, stated whole?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Whatever moves is moved by another.",
                "feedback": "A great sentence and an early one: it opened the road to Pure Act. But the course's center of gravity sits deeper still, beneath motion, in being itself."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Outside God, what it is and that it is are really distinct; in God, identical.",
                "feedback": "Respondeo: the apple's two questions, become two principles, defended this module against the deepest objection ever raised inside the family. Now you also know what keeping that first clause honest costs: the receiver had to be real."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Being is said in many ways.",
                "feedback": "Aristotle's key, and the door to analogy. It serves the course's master sentence rather than replacing it: the many ways are ordered to the one act."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Grace perfects nature.",
                "feedback": "True, and the course's whole method leans on it. But it names the relation between this philosophy and what stands above it, not the philosophical center itself."
              }
            ],
            "correct_option_id": "b"
          },
        },
        {
          id: `m18-l7-q3`,
          type: "fill_blank",
          stem: `Complete the course's master key one last time. <em>Tap a term from the bank to fill each blank.</em><br><br><span style="font-family:'Fraunces',serif; font-size:18px; line-height:1.7; padding:14px 0; display:inline-block;"><em>Esse</em> is the act of all <span class="fb-blank" data-blank="b1">______</span>; the essence that receives it is real <span class="fb-blank" data-blank="b2">______</span>, not a shadow and not a boundary; and in <span class="fb-blank" data-blank="b3">______</span> alone essence and esse are identical.</span>`,
          payload: {
            "blanks": [
              {
                "id": "b1",
                "correct_answers": [
                  "acts",
                  "actus"
                ],
                "case_sensitive": false
              },
              {
                "id": "b2",
                "correct_answers": [
                  "potency",
                  "potentia"
                ],
                "case_sensitive": false
              },
              {
                "id": "b3",
                "correct_answers": [
                  "God",
                  "Deus"
                ],
                "case_sensitive": false
              }
            ],
            "word_bank": [
              "acts",
              "potency",
              "God",
              "forms",
              "matter",
              "boundary",
              "nothing",
              "accident",
              "angels"
            ],
            "feedback": {
              "all_correct": "The whole debate in one breath: <span class=\"lat\">actus omnium actuum</span>, <span class=\"lat\">essentia ut potentia</span>, and one case with no composition at all. Carry the sentence; it has carried the course.",
              "partial_correct": "Close. The first blank crowns esse, the second names what essence really is on the strict line, and the third is the one being whose what simply is its that.",
              "fully_wrong": "Reach for <em>acts</em>, <em>potency</em>, and <em>God</em>. The act of all acts; the real potency receiving it; the single identity-case the whole argument required."
            }
          },
        },
        {
          id: `m18-l7-q4`,
          type: "mcq",
          stem: `Why does the course end at a debate rather than at a new doctrine?`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Because the destination was the ability to follow the tradition's own arguments about itself.",
                "feedback": "Respondeo: information was never the point; formation was. A learner who can watch Cajetan and Gilson contend over esse, feel the force on both benches, and judge with reasons is no longer a spectator of the tradition. That was the destination all along."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "Because debates entertain more than doctrine.",
                "feedback": "If entertainment were the aim, drollery commissioning would have gone faster. The disputation is here because of what it proves about the one watching it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Because no doctrine remained to teach.",
                "feedback": "The Summa would laugh: whole continents remain. The course ends here for a reason about you, not a shortage in the tradition."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "Because the moderns demand a controversy.",
                "feedback": "The moderns demand many things the course declined to provide. This dispute is here because it is the deepest one inside the school, not because it is fashionable."
              }
            ],
            "correct_option_id": "a"
          },
        },
        {
          id: `m18-l7-q5`,
          type: "match_pair",
          stem: `The debate kept its own images. Pair each with what it stood for. <em>Tap an image, then tap its meaning. Tap a paired item to release it.</em>`,
          payload: {
            "left_set": [
              {
                "id": "L1",
                "text": "the cup and the water"
              },
              {
                "id": "L2",
                "text": "the mold that is not nothing"
              },
              {
                "id": "L3",
                "text": "the surface of the pond"
              },
              {
                "id": "L4",
                "text": "two friars at one lectern"
              }
            ],
            "right_set": [
              {
                "id": "R1",
                "text": "essence receives esse from within, as a real capacity"
              },
              {
                "id": "R2",
                "text": "a real limit requires a real limiting principle"
              },
              {
                "id": "R3",
                "text": "the boundary reading the strict line refuses"
              },
              {
                "id": "R4",
                "text": "the disputation: full strength met with full answer"
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
              "all_correct": "All four locked, and both friars smiling. That is how the school fights: the cup corrected, the mold defended, the pond surface answered, and the opponent honored at the same lectern. Inside the wall, a fair fight; at the end of it, a verdict.",
              "partial_correct": "Some pairs landed. The cup taught reception from within; the mold insisted the receiver is real; the pond surface was the objectors' best image; and the two friars are the disputation itself."
            },
            "doctrineTag": "recapitulatio"
          },
        },
        {
          id: `m18-l7-q6`,
          type: "true_false_with_reason",
          stem: `TRUE or FALSE: <em>Completing this course makes you a master of St. Thomas.</em><br><br>Pick the correct judgment <em>and</em> the best reason.`,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "TRUE. All modules complete, all theses earned: mastery by definition.",
                "feedback": "The Theses Board is a trophy case, not a throne. What you have earned is the right to read the master without a translator, which the masters themselves considered a beginning."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "TRUE. The rank at the top of the course says perfectus.",
                "feedback": "It does, and anyone who has actually finished the course knows better than to claim the name with a straight face. The rank is worn the way the friars smile: lightly."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "FALSE. It makes you a beginner who can finally read him, as the masters called themselves.",
                "feedback": "Respondeo: Aquinas looked at the Summa near the end and called it straw. The course gave you a beginning that fifty years of reading can spend, and that is the most honest thing a course can give. <em>Incipiens</em>: one who has begun."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "FALSE. Mastery requires Latin first.",
                "feedback": "Latin helps and the glossary gave you its keys, but the gap between you and mastery is not lexical. It is the gap between finishing a course and spending a life, and no language closes that one."
              }
            ],
            "correct_option_id": "c"
          },
        },
        {
          id: `m18-l7-q7`,
          type: "mcq",
          stem: `Last question of the course. Where do you go from here?`,
          latin_tag: `recapitulatio`,
          doctrine_line: `The game ends by becoming unnecessary. The Summa is open.`,
          lesson_complete: true,
          payload: {
            "options": [
              {
                "id": "a",
                "label": "Respondeo:",
                "text": "Back to Module 1, in an endless loop.",
                "feedback": "The doors you opened stay open; there is no need to live in the hallway. Recapitulation is for owning the road, not for walking it forever."
              },
              {
                "id": "b",
                "label": "Respondeo:",
                "text": "To commentaries about commentaries.",
                "feedback": "Some day, and gladly: Cajetan is waiting. But the order of learning says the master's own page comes before the margins around it."
              },
              {
                "id": "c",
                "label": "Respondeo:",
                "text": "Nowhere: completion is the point.",
                "feedback": "A course whose point is itself would be a catalogue with delusions. This one was always a porch. Porches are for going through."
              },
              {
                "id": "d",
                "label": "Respondeo:",
                "text": "To the Summa itself: first part, first question, first article.",
                "feedback": "Respondeo, for the last time: the game ends by becoming unnecessary. The door is Summa theologiae, Part I, question 1, article 1, where the master asks whether any teaching beyond philosophy is needed, and writes the objections better than his objectors could. You know how disputations open now. Go and watch him answer. <span class=\"lat\">Tolle, lege</span>: take up and read."
              }
            ],
            "correct_option_id": "d"
          },
        }
      ],
    }
  ],
};
